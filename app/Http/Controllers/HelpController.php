<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
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
    public function guarantee()
    {
        return inertia('Guarantee');
      
    }

    
    public function stat()
    {
        $totalUsers = User::count();
        $usersLastHour = User::where('created_at', '>=', Carbon::now()->subHour())->count();
    
        $lastUser = User::latest('created_at')->first();
        $lastRegisteredAt = $lastUser ? $lastUser->created_at : null;
        $minutesAgo = $lastRegisteredAt ? $lastRegisteredAt->diffInMinutes(Carbon::now()) : null;
    
        $lastRegisteredText = match (true) {
            $minutesAgo === null => 'No users found',
            $minutesAgo < 1 => 'Less than a minute ago',
            default => "$minutesAgo minutes ago"
        };
    
        $today = Carbon::today();
        $yesterday = Carbon::yesterday();
        $dayBeforeYesterday = Carbon::today()->subDays(2);
    
        $usersToday = User::whereDate('created_at', $today)->count();
        $usersYesterday = User::whereDate('created_at', $yesterday)->count();
        $usersDayBeforeYesterday = User::whereDate('created_at', $dayBeforeYesterday)->count();
    
        return inertia('Stat', compact(
            'totalUsers',
            'usersLastHour',
            'lastRegisteredText',
            'usersToday',
            'usersYesterday',
            'usersDayBeforeYesterday'
        ));
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
