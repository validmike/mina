<?php
namespace App\Services;

use App\Models\Bitcoin;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use App\Models\Lightning;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class BitcoinService
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
                    'payment_methods' => ['onchain'],
                    "ttl"=> 3600 ,
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

            // Save the response to the database
            $new_bitcoin = Bitcoin::create([
                'bitcoin_id' => $body['id'],
                'order_id' => $orderId,
                'amount' => $body['amount'],
                'status' => $body['status'],
                'sat' => $body['target_amount'],
                'address' => $body['payment_method_options']['on_chain']['address'],
                'expires_at' => $body['expires_at']            
            ]);

            return $new_bitcoin;


        } catch (\Exception $e) {
            // dd($e->getMessage());
            Log::error('Error creating bitcoin invoice: ' . $e->getMessage());
            return ['success' => false, 'message' => 'Error creating lightning invoice.'];

        }
    }
    
    public function checkStatus($bitcoin_id)
    {
        try {
            $response = $this->client->request('GET', "{$this->apiUrl}/{$bitcoin_id}", [
                'auth' => [$this->apiKey, ''], // Basic auth with API key as username and no password
                'headers' => [
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                    'speed-version' => '2022-10-15',
                ],
            ]);

            $body = json_decode($response->getBody(), true);
            // checks if user paid the right amount
            if (!empty($body['target_amount_paid'])) {
                $paid = $body['target_amount_paid'];
                $target = $body['target_amount'];
            
                if ($paid < ($target * 0.9)) {
                    return 'partially paid';
                }
            }
            
            return $body['status'];
        } catch (\Exception $e) {
            Log::error('Error checking lightning invoice status: ' . $e->getMessage());
            return ['success' => false, 'message' => 'Error checking lightning invoice status.'];
        }
    }

    
    public function updateBitcoinStatus($bitcoinId)
    {
        try {
            DB::beginTransaction();
    
            // Get the latest status from the external API
            $status = $this->checkStatus($bitcoinId);
    
            // Find the bitcoin payment
            $bitcoinPayment = Bitcoin::where('bitcoin_id', $bitcoinId)->first();
    
            if (!$bitcoinPayment) {
                Log::warning("Lightning payment not found for ID: {$bitcoinId}");
                return ['success' => false, 'message' => 'Payment not found.'];
            }
    
            // Update the bitcoin payment status
            $bitcoinPayment->update(['status' => $status]);
            // Log::error("dsfdsf " . $lightningPayment->order->paid_at);

    
            // If this payment is "paid", update the related order's paid_at timestamp
            // Log::error($status);
            if ($status == 'paid' && !$bitcoinPayment->order->paid_at) {
                $bitcoinPayment->order->update(['paid_at' => now()]);
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