<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\ValidInviteCode;
use App\Services\InviteService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Torann\GeoIP\Facades\GeoIP;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        
        $request->validate([
            'name' => [
                'required',
                'string',
                'max:32',
                'unique:' . User::class,
                'regex:/^[a-zA-Z0-9_-]{3,}$/',
            ],
            'invite' => ['required', 'exists:users,invite_code'],
            'telegram_id' => ['required', 'unique:users,telegram_id'],
        ],[
            'name.regex' => 'The name can only contain letters, numbers, -, and _, with no spaces and at least 3 characters.',
            'telegram_id.unique' => 'This Telegram account is already registered. Please log in instead.',
        ]);
        $invite_code=InviteService::generateCode();
        $countryData = GeoIP::getLocation();
        $countryCode = $countryData->iso_code ?? null;
        $inviter_id= InviteService::getUserIdByInviteCode($request->invite);

        $user = User::create([
            'name' => $request->name,
            'ip' => $request->ip(),
            // 'email' => $request->email,
            // 'password' => Hash::make($request->password),
            'invite_code' => $invite_code,
            'country' => $countryCode,
            'inviter' => $inviter_id,
            "telegram_id" => $request->telegram_id,

        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('home', absolute: false));
    }
}
