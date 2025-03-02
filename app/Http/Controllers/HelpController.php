<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Help');
    }
    public function contact()
    {
        $telegram_id = env('TELEGRAM_ID');
        return inertia('Contact',compact('telegram_id'));
    }
    public function guide()
    {
        return inertia('PaymentGuide');

    }
    public function cashapp()
    {
        return inertia('Cashapp');
        
    }
    public function azteco()
    {
        return inertia('Azteco');

    }
    public function satoshi()
    {
        return inertia('Satoshi');

    }
    public function trade()
    {
        $trading= env("TRADING");
        $trader_id = env("TRADER_ID");
        return inertia('Trade',compact('trading','trader_id'));

        
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
