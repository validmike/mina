<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'number'=> $this->order_number ,
            'title' => $this->product->title ,
            'price' => $this->product->price ,
            'paid_at' => $this->paid_at ,
            'status'=> $this->status,
            'link'=> $this->link
        ];
    }
}
