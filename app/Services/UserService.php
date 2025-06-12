<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function getInviteCount(int $userId): int
    {
        return User::where('inviter', $userId)->count();
    }

    public function getUserLevel(int $userId): int
    {
        $count = $this->getInviteCount($userId);

        if ($count < 3) {
            return 0;
        } elseif ($count < 10) {
            return 1;
        } elseif ($count < 30) {
            return 2;
        } else {
            return 3;
        }
        
    }
    public function getUserInviteLink(int $userId)
    {
        $user = User::findOrFail($userId);
        return env('SHORT_LINK') .'?invite='. $user->invite_code;
    }
    
}
