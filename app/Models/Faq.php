<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    
    public function Topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
