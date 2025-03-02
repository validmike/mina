<?php

namespace App\Http\Controllers;

use App\Http\Resources\LightningResource;
use App\Models\Lightning;
use App\Models\Order;
use Illuminate\Http\Request;

class LightningController extends Controller
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
        $order = Order::findOrFail($request->order_id);
    
        // Get the user ID and order ID

        $userId = $order->user_id;    
        $amount = $order->product->price;

    
        // Create an instance of LightningService
        $lightningService = new \App\Services\LightningService();
    
        // Create the lightning invoice and get the result
        $result = $lightningService->createInvoice($amount, $userId, $request->order_id);
        
    
        // Check if result is successful and redirect accordingly
        if ($result) {
            return redirect()->route('lightnings.show',$result->id);
        } else {
            return redirect()->back()->with('error', $result['message']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $lightning = Lightning::with('order')->findOrFail($id);
    
        return inertia('Lightning/Show', [
            'lightning' => new LightningResource($lightning)
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
