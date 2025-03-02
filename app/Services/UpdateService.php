<?php

namespace App\Services;

use App\Models\Update as ModelsUpdate;
use Illuminate\Support\Facades\Http;


class UpdateService
{
    public static function getUpdates()
    {
        $latestUpdate = ModelsUpdate::orderBy('id', 'desc')->value('number');

        $botToken =env('VERIFY_BOT_TOKEN');

        $offset = $latestUpdate ? $latestUpdate + 1 : null; // Increment the latest update ID if available
    
        $updates = Http::get("https://api.telegram.org/bot$botToken/getUpdates?offset=$offset")->json();

       
        if (isset($updates['result'])) {
            return $updates['result'];
        }
        
        return [ ]; // Return an empty array if there are no updates
    }
}
