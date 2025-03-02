<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Services\InviteService;
use App\Models\User;

class ValidInviteCode implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $existsInUsers = User::where('invite_code', $value)->exists();
        $isValidByService = InviteService::isValidCode($value);

        if (!$existsInUsers && !$isValidByService) {
            $fail('Invalid invite code.');
        }
    }
}
