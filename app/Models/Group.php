<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable =[
        'link'
    ];
    

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    

}
