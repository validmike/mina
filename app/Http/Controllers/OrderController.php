<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use App\Models\Order;
use App\Services\OrderService;
use App\Services\Respond;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller     
{

    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = OrderResource::collection(
            Auth::user()->load('orders')->orders
        )->resolve();
    
        return inertia('Orders', compact('orders'));
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
    public function store(Request $request, OrderService $orderService)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);
    
        $order = $orderService->getOrCreateOrder($request->product_id);
    
        return redirect()->route('orders.show', $order->id);
    }
    
    
    

    /**
     * Display the specified resource.
     */
    public function show(string $id , OrderService $orderService)
    {
        $order = Order::findOrFail($id); // Retrieve first
        $payments = $orderService->getOrderPayments($order);
        $this->authorize('view', $order); // Then authorize
    
        return inertia('Order/Show', [
            'order' => new OrderResource($order),
            'payments'=>$payments
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
    public function link(string $id)
    {
        $order = Order::findOrFail($id);
        $user = Auth::user();
        $telegram_id = $user->telegram_id;
        $channel_id= $order->product->channel->channel_id;
        $this->authorize('view', $order); // Then authorize

        return inertia('Order/LinkPage', [
            'order' => new OrderResource($order),
            'telegram_id' =>$telegram_id,
            'channel_id' => $channel_id
        ]);
 
    }
    public function createLink(Request $request ,  OrderService $orderService)
    {
        $order = Order::findOrFail($request->id); // Retrieve first

        $orderService->createLink($order);
        return redirect()->route('orders.link', ['order' => $order->id]);
    }
    
}
