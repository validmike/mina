<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Crypto extends Model
{
    protected $fillable = [
        'payment_id',
        'order_id',
        'amount',
        'status',
        'coin',
        'crypto_amount',
        'address',
        'expires_at'

    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
