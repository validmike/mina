<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    //
    public function faqs()
    {
        return $this->hasMany(Faq::class);
    }
}
