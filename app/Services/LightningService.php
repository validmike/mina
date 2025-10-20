<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use App\Models\Lightning;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class LightningService
{
    protected $client;
    protected $apiUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->client = new Client();
        $this->apiUrl = 'https://api.tryspeed.com/payments';
        $this->apiKey = env('Lightning_api');
    }

    public function createInvoice($amount, $userId, $orderId)
    {
        try {
            $response = $this->client->request('POST', $this->apiUrl, [
                'auth' => [$this->apiKey, ''], // Basic auth with API key as username and no password
                'json' => [
                    'currency' => 'USD',
                    'amount' => $amount,
                    'target_currency' => 'SATS',
                    'payment_methods' => ['lightning'],
                    'metadata' => [
                        'user' => $userId,
                        'order' => $orderId
                    ]
                ],
                'headers' => [
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                    'speed-version' => '2022-10-15',
                ],
            ]);

            $body = json_decode($response->getBody(), true);
            // dd($body);

            // Save the response to the database
            $new_lightning = Lightning::create([
                'lightning_id' => $body['id'],
                'order_id' => $orderId,
                'amount' => $body['amount'],
                'status' => $body['status'],
                'sat' => $body['target_amount'],
                'address' => $body['payment_method_options']['lightning']['payment_request'],
                'expires_at' => $body['expires_at']            
            ]);

            return $new_lightning;


        } catch (\Exception $e) {
            // dd($e->getMessage());
            Log::error('Error creating lightning invoice: ' . $e->getMessage());
            return ['success' => false, 'message' => 'Error creating lightning invoice.'];

        }
    }
    
    public function checkStatus($lightningId)
    {
        try {
            $response = $this->client->request('GET', "{$this->apiUrl}/{$lightningId}", [
                'auth' => [$this->apiKey, ''], // Basic auth with API key as username and no password
                'headers' => [
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                    'speed-version' => '2022-10-15',
                ],
            ]);

            $body = json_decode($response->getBody(), true);
            return $body['status'];
        } catch (\Exception $e) {
            Log::error('Error checking lightning invoice status: ' . $e->getMessage());
            return ['success' => false, 'message' => 'Error checking lightning invoice status.'];
        }
    }

    
    public function updateLightningStatus($lightningId)
    {
        try {
            DB::beginTransaction();
    
            // Get the latest status from the external API
            $status = $this->checkStatus($lightningId);
    
            // Find the Lightning payment
            $lightningPayment = Lightning::where('lightning_id', $lightningId)->first();
    
            if (!$lightningPayment) {
                Log::warning("Lightning payment not found for ID: {$lightningId}");
                return ['success' => false, 'message' => 'Payment not found.'];
            }
    
            // Update the lightning payment status
            $lightningPayment->update(['status' => $status]);
            // Log::error("dsfdsf " . $lightningPayment->order->paid_at);

    
            // If this payment is "paid", update the related order's paid_at timestamp
            if ($status == 'paid' && !$lightningPayment->order->paid_at) {
                $lightningPayment->order->update(['paid_at' => now()]);
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
