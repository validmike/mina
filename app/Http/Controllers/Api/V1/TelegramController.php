<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Respond as ServicesRespond;
use Illuminate\Http\JsonResponse;

class TelegramController extends Controller
{
    /**
     * Check if a user has left a Telegram channel.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function checkUserStatus(Request $request): JsonResponse
    {
        // dd('sds');
        // Validate the request parameters
        // $request->validate([
        //     'telegram_id' => 'required|integer',
        //     'channel_id' => 'required|string',
        // ]);

        // Extract parameters from the request
        $telegramId = $request->input('telegram_id');
        $channelId = $request->input('channel_id');

        // Use the Respond::hasLeft() method to check user status
        $hasLeft = ServicesRespond::hasLeft($telegramId, $channelId);

        // Handle the response based on the result
        if ($hasLeft === null) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while checking the user status.',
            ], 500);
        }

        return response()->json([
            'success' => true,
            'has_left' => $hasLeft,
            'message' => $hasLeft ? 'You left the channel.' : 'You have not left (or joined) the channel yet.',
        ], 200);
    }
}