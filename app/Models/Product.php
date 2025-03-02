<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    public function channel()
    {
        return $this->hasOne(Channel::class);
    }
    public function demo()
    {
        return $this->hasOne(Demo::class);
    }
}
