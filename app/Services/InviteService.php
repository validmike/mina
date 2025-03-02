<?php

namespace App\Services;

use App\Models\User;

class InviteService
{
    // Characters allowed (A-Z, 0-9)
    private static $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    // Allowed last characters (must be 0, 1, 3, 5, 7, or 9)
    private static $lastDigitOptions = [0, 1, 3, 5, 7, 9];

    public static function generateCode(): string
    {
        do {
            // Generate the first 4 random characters
            $code = '';
            for ($i = 0; $i < 4; $i++) {
                $code .= self::$chars[random_int(0, strlen(self::$chars) - 1)];
            }
    
            // Pick a valid last digit (if applicable)
            $lastDigit = self::$lastDigitOptions[array_rand(self::$lastDigitOptions)];
            $code .= $lastDigit;
    
        // Ensure the code is unique in the database
        } while (self::codeExistsInDatabase($code));
    
        return $code;
    }
    
    // Check if a code already exists in the database
    private static function codeExistsInDatabase(string $code): bool
    {
        return User::where('invite_code', $code)->exists();
    }
    
    
    public static function getUserIdByInviteCode(string $invite_code)
    {
        return User::where('invite_code', $invite_code)->value('id');
    }
}
