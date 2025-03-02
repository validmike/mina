<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $userService = new UserService();
        $user = Auth::user();
    
        return inertia('Home', [
            'invites' => $userService->getInviteCount($user->id),
            'level'   => $userService->getUserLevel($user->id),
            'link'    => $userService->getUserInviteLink($user->id),
        ]);
    }
    
}
