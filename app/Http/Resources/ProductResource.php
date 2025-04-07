<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id ,
            'title' => $this->title ,
            'description' => $this->description ,
            'image' => $this->image ,
            'price' => $this->price,
            'delivery' => $this->delivery,
            'size'=>$this->size,
            'is_group'=>$this->is_group

        ];
    }
}
