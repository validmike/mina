<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::where('is_group', 0)->get();
        $products = ProductResource::collection($products)->resolve();
        
        // Get the value of the TELEGRAM_PREMIUM environment variable, defaulting to 0 if not found
        $telegramPremium = env('TELEGRAM_PREMIUM', 0);
    
        // Pass both products and the telegramPremium value to the Inertia view
        return inertia('Products', compact('products', 'telegramPremium'));
    }
    
    public function group()
    {
        $telegram_link = env("ORDER_GROUP_LINK");
        $groupProductId = Product::where('is_group', 1)
        ->where('price', 25)
        ->value('id');        
        return inertia('Group', compact('telegram_link','groupProductId'));
    }
    public function mom()
    {
        $telegram_link = env("ORDER_MOM_LINK");
        $groupProductId = Product::where('is_group', 1)
        ->where('price', 11.99)
        ->value('id');
        return inertia('MomPage', compact('telegram_link','groupProductId'));
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
