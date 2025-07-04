<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'link',
        'status',
        'paid_at',
        'order_number'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
        
    }

    public function group()
    {
        return $this->hasOne(Group::class, 'order_id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
        
    }
    public function lightnings()
    {
        return $this->hasMany(Lightning::class);
    }
    public function bitcoins()
    {
        return $this->hasMany(Bitcoin::class);
    }
    public function cryptos()
    {
        return $this->hasMany(Crypto::class);
    }
}
