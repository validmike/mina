<?php

namespace App\Http\Controllers;

use App\Models\Bitcoin;
use App\Http\Requests\StoreBitcoinRequest;
use App\Http\Requests\UpdateBitcoinRequest;
use App\Http\Resources\BitcoinResource;
use App\Models\Order;

class BitcoinController extends Controller
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
    public function store(StoreBitcoinRequest $request)
    {
        
        // Retrieve the order by its number
        $order = Order::findOrFail($request->order_id);
    
        // Get the user ID and order ID

        $userId = $order->user->telegram_id;
        $amount = $order->product->price;

    
        // Create an instance of BitcoinService
        $BitcoinService = new \App\Services\BitcoinService();
    
        // Create the lightning invoice and get the result
        $result = $BitcoinService->createInvoice($amount, $userId, $request->order_id);
        
    
        // Check if result is successful and redirect accordingly
        if ($result) {
            return redirect()->route('bitcoins.show',$result->id);
        } else {
            return redirect()->back()->with('error', $result['message']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Bitcoin $bitcoin)
    {
        
        return inertia('Bitcoin/Show', [
            'bitcoin' => new BitcoinResource($bitcoin)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bitcoin $bitcoin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBitcoinRequest $request, Bitcoin $bitcoin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bitcoin $bitcoin)
    {
        //
    }
}
