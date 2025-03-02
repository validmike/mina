<?php

namespace App\Http\Controllers;

use App\Http\Resources\CryptoResource;
use App\Models\Crypto;
use App\Models\Order;
use Illuminate\Http\Request;

class CryptoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        
        
                // Retrieve the order by its number
                $order = Order::where('id', $request->input('order_id'))->firstOrFail();
    
                // Get  order ID
                $orderId = $order->id;
            
                // Get the amount from the order's product price
                $amount = $order->product->price;
            
                // Create an instance of LightningService
                $cryptoService = new \App\Services\CryptoService();
            
                // Create the  invoice and get the result
                $result = $cryptoService->createInvoice($amount,  $orderId , $request->crypto);
                
            
                // Check if result is successful and redirect accordingly
                if ($result && isset($result->id)) {
                    return redirect()->route('cryptos.show', $result->id);
                } else {
                    $errorMessage = $result['message'] ?? 'The price is currently below the minimum allowed. Please try using a different cryptocurrency or consider purchasing a more expensive product.';
                    return redirect()->back()->with('message', $errorMessage);
                }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $crypto = Crypto::with('order')->findOrFail($id);
    
        return inertia('Crypto/Show', [
            'crypto' => new CryptoResource($crypto)
        ]);
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
