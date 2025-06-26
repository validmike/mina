<?php

namespace App\Http\Controllers;

use App\Http\Resources\DemoResource;
use App\Models\Demo;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DemoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Get authenticated user's level
        $userService = app(UserService::class);
        $userLevel = $userService->getUserLevel(auth()->id());
        $watermark = $userService->getUserInviteLink(auth()->id());
    
        // Start with a base query
        $query = Demo::query();
    
        // Check if 'product_id' query parameter is present
        if ($request->has('product_id')) {
            $query->where('product_id', $request->input('product_id'));
        } else {
            $query->whereNull('product_id');
        }
    
        // Order by level condition: show demos with level <= userLevel first
        $demos = $query
            ->orderByRaw("CASE WHEN level <= ? THEN 0 ELSE 1 END", [$userLevel])
            ->inRandomOrder()
            ->get();
    
        // Transform the demos using the DemoResource
        $demos = DemoResource::collection($demos)->resolve();
    
        // Pass the filtered demos and user level to the Inertia view
        return inertia('Demo', compact('demos', 'userLevel', 'watermark'));
    }
    
    
    public function video()
    {
        $userService = app(UserService::class);
        $user = auth()->user();
    
        return inertia('Video', [
            'level' => $userService->getUserLevel($user->id),
        ]);
    }
    
    public function proofs()
    {
        $watermark = env('SHORT_LINK');
        $country = auth()->user()->country ?? null; // Get user's country or null if not authenticated
    
        return inertia("Proofs", compact('watermark', 'country'));
    }
    
    public function group()
    {
        $watermark = env('SHORT_LINK');
        return inertia("GroupDemo",compact('watermark'));
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
