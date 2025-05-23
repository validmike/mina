<?php
namespace App\Services;

use App\Models\Group;
use App\Models\Order;

class GroupService
{
    public static function attach($order_id, $user_id)
    {
        $order = Order::where('id', $order_id)
            ->where('user_id', $user_id)
            ->whereNotNull('paid_at')
            ->first();
    
        if (!$order) {
            return false;
        }
        $product_id = $order->product_id;

        $group = Group::where('is_sold', 0)
            ->where('product_id', $product_id)
            ->first();
        
    
        if (!$group) {
            return false;
        }
    
        $group->order_id = $order_id;
        $group->is_sold = 1; // mark it as sold
        $group->save();
    
        return $group;
    }
    
    
}