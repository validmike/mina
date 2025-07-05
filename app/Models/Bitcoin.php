<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bitcoin extends Model
{
    protected $fillable =[
        'order_id',
        'status',
        'bitcoin_id',
        'expires_at',
        'amount',
        'sat',
        'address'
    ];
    

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
