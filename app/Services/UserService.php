<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function getInviteCount(int $userId): int
    {
        return User::where('inviter', $userId)->count();
    }


    // Updated getUserLevel method
    public function getUserLevel(int $userId): int
    {
        if ($this->userHasPaidOrder($userId)) {
            return 3;
        }

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

    // Separate function to check if user has at least one paid order
    public function userHasPaidOrder(int $userId): bool
    {
        return \App\Models\Order::where('user_id', $userId)
            ->whereNotNull('paid_at')
            ->exists();
    }

    public function getUserInviteLink(int $userId)
    {
        $user = User::findOrFail($userId);
        return env('SHORT_LINK') . '?invite=' . $user->invite_code;
    }
}
