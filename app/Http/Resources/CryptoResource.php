<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CryptoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'amount'=> $this->amount,
            'crypto_amount'=> $this->crypto_amount ,
            'status' => $this->status,
            'address' => $this->address,
            'expires_at' => $this->expires_time,
            'id'=> $this->id,
            'order_number'=> $this->order->order_number,
            'order_id'=> $this->order->id,
            'coin' => $this->coin

        ]; 
    }
}
