<?php

namespace App\Services;

use App\Helpers\Helper;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class OrderService
{
    /**
     * Create a new order.
     *
     * @param int $productId
     * @return Order
     */
    public function createOrder(int $productId): Order
    {
        return Order::create([
            'user_id' => Auth::id(),
            'product_id' => $productId,
            'order_number' => $this->generateOrderNumber($productId),
            'status' => 'pending',
        ]);
    }
    public function getOrCreateOrder(int $productId): Order
    {
        return Order::firstOrCreate(
            ['user_id' => Auth::id(), 'product_id' => $productId],
            ['order_number' => $this->generateOrderNumber($productId), 'status' => 'pending']
        );
    }


    /**
     * Check if the user already has an order for the product.
     *
     * @param int $productId
     * @return bool
     */
    public function hasOrder(int $productId): bool
    {
        return Order::where('user_id', Auth::id())
                    ->where('product_id', $productId)
                    ->exists();
    }

    /**
     * Generate an 8-digit order number with product ID as the first digit.
     *
     * @param int $productId
     * @return string
     */
    private function generateOrderNumber(int $productId): string
    {
        $randomDigits = str_pad(rand(0, 9999999), 7, '0', STR_PAD_LEFT);
        return $productId . $randomDigits;
    }

    public function getOrderPayments(Order $order): array
    {
        $lightnings = $order->lightnings()->get(['id', 'status', 'created_at','address'])
            ->map(fn($lightning) => [
                'coin' => 'lightning btc',
                'status' => $lightning->status,
                'id' => $lightning->id,
                'address' =>$lightning->address ,
                'created_at' =>$lightning->created_at->diffForHumans() ,
            ]);
    
        $cryptos = $order->cryptos()->get(['id', 'status', 'coin', 'created_at','address'])
            ->map(fn($crypto) => [
                'coin' => $crypto->coin,
                'status' => $crypto->status,
                'id' => $crypto->id,
                'address' =>$crypto->address ,
                'created_at' =>$crypto->created_at->diffForHumans() ,
            ]);
        $bitcoins = $order->bitcoins()->get(['id', 'status', 'created_at','address'])
            ->map(fn($bitcoin) => [
                'coin' => 'BTC onchain',
                'status' => $bitcoin->status,
                'id' => $bitcoin->id,
                'address' =>$bitcoin->address ,
                'created_at' =>$bitcoin->created_at->diffForHumans() ,
            ]);
    
        // Ensure both are collections, then merge and sort
        $mergedPayments = collect($lightnings)
        ->merge($cryptos)
        ->merge($bitcoins)
        ->sortBy('created_at');
        
        return $mergedPayments->values()->toArray(); // Ensure it's a clean indexed array
    }
    public function createLink(Order $order)
    {

        if (!is_null($order->link)) {
            return; // Do nothing if the link already exists
        }
        $channelId = $order->product?->channel?->channel_id;
        $link = Respond::create_invite_link($channelId);
        if ($link) {
            $order->update(['link' => $link]);
        }

    
    }
    
    
    

}
