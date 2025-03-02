<?php
namespace App\Services;

use App\Models\Crypto;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class  CryptoService
{
    protected $client;
    protected $apiKey;

    public function __construct()
    {
        $this->client = new Client();
        $this->apiKey = env('NOW_PAYMENT_API');
    }

    public function getCoins()
    {
        try {
            $response = $this->client->request('GET', 'https://api.nowpayments.io/v1/merchant/coins', [
                'headers' => [
                    'x-api-key' => $this->apiKey,
                ],
            ]);

            $data = json_decode($response->getBody(), true);
            return $data;
        } catch (\Exception $e) {
            Log::error('Error fetching coins: ' . $e->getMessage());
            return null;
        }
    }
    public function createInvoice($amount, $orderId, $payCurrency)
    {
        try {
            $response = $this->client->request('POST', 'https://api.nowpayments.io/v1/payment', [
                'headers' => [
                    'x-api-key' => $this->apiKey,
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'price_amount' => $amount,
                    'price_currency' => 'usd',
                    'pay_currency' => $payCurrency,
                    'order_id' => $orderId,
                ],
            ]);

            $data = json_decode($response->getBody(), true);

            // Save payment to the database
            $payment = new Crypto();
            $payment->payment_id = $data['payment_id'];
            $payment->order_id = $orderId;
            $payment->amount = $data['price_amount'];
            $payment->status = $data['payment_status'];
            $payment->coin = $data['pay_currency'];
            $payment->crypto_amount = $data['pay_amount'];
            $payment->address = $data['pay_address'];
            $payment->expires_at = $data['expiration_estimate_date'] ?? null;
            $payment->expires_time = now()->addMinutes(90)->timestamp * 1000;
            $payment->save();

            return $payment;
        } catch (\Exception $e) {
            Log::error('Error creating invoice: ' . $e->getMessage());
            return null;
        }
    }
    public function checkStatus($paymentId)
    {
        try {
            $response = $this->client->request('GET', "https://api.nowpayments.io/v1/payment/$paymentId", [
                'headers' => [
                    'x-api-key' => $this->apiKey,
                ]
            ]);
            $data = json_decode($response->getBody(), true);

            return($data["payment_status"]);
        } catch (\Throwable $th) {
            Log::error('Error checking lightning invoice status: ' . $th->getMessage());
            return ['success' => false, 'message' => 'Error checking crypto invoice status.'];
        }

    }
    public function updateLightningStatus($paymentId)
    {
        try {
            DB::beginTransaction();
    
            // Get the latest status from the external API
            $status = $this->checkStatus($paymentId);
    
            // Find the crypto payment
            $cryptoPayment = Crypto::where('payment_id', $paymentId)->first();
    
            if (!$cryptoPayment) {
                Log::warning("crypto payment not found for ID: {$paymentId}");
                return ['success' => false, 'message' => 'Payment not found.'];
            }
    
            // Update the lightning payment status
            $cryptoPayment->update(['status' => $status]);
    
            // If this payment is "paid", update the related order's paid_at timestamp
            if (in_array($status, ['sending', 'finished', 'confirming', 'confirmed']) && !$cryptoPayment->order->paid_at) {
                $cryptoPayment->order->update(['paid_at' => now()]);
            }
            

    
            DB::commit();
    
            return ['success' => true, 'status' => $status];
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error("Error updating lightning payment status: " . $e->getMessage());
            return ['success' => false, 'message' => 'Error updating payment status.'];
        }
    }

}