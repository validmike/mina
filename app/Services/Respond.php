<?php

namespace App\Services;

use App\Jobs\BanUserJob;
use App\Jobs\DeleteMessageJob;
use App\Jobs\ProcessKickUser;
use App\Models\Order;
use App\Models\Update;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;





class Respond
{

    public static function handle(array $results)
    {
        foreach ($results as $result) {
            $text = null;
            $chat_id = null;
            $message_id=$result['message']['message_id'] ?? null;
            $text = $result['message']['text'] ?? null;
            $text = strtolower($text);
            $chat_id = $result['message']['from']['id'] ?? null;
            $group_id = $result['message']['chat']['id'] ?? null;
            



            Update::create(['number' => $result['update_id']]);
            DeleteMessageJob::dispatch($group_id, $message_id);

            if (!empty($result['chat_join_request'])) {
                self::handleChatRequest(
                    $result['chat_join_request']['user_chat_id'],
                    $result['chat_join_request']['chat']['id'],
                    $result['chat_join_request']['invite_link']['invite_link']
                );
            }
            

            $ban_code = self::extractBanNumber($text);
            if ($ban_code !== null) {
                BanUserJob::dispatch($ban_code);
            }


    

        }
    }
    

    public static function  extractBananaNumber($text)
    {
        // Check if $text exists and starts with "banana:"
        if ($text && strpos($text, 'banana:') === 0) {
            // Extract the number after "banana:"
            $number = substr($text, 7); // Length of "banana:" is 7
            // Check if the extracted part is a 5-digit number
            if (preg_match('/^\d{5}$/', $number)) {
                // Number is valid, return it
                return $number;
                }
            }
        // If $text doesn't match the criteria, return null
        return null;
        
    }
    public static function extractBanNumber($text)
    {
                // Check if $text exists and starts with "ban:"
                if ($text && strpos($text, 'ban:') === 0) {
                    // Extract the number after "banana:"
                    $number = substr($text, 4); // Length of "ban:" is 4
                    return $number;

                }
                // If $text doesn't match the criteria, return null
                return null;
        
    }


    
    public static function create_invite_link($channel_id)
    {
        $botToken = env('VERIFY_BOT_TOKEN');
    
        // Current Unix time + 30 minutes (1800 seconds)
        $expireTimestamp = time() + 1800;
    
        $url = "https://api.telegram.org/bot$botToken/createChatInviteLink?chat_id=$channel_id&creates_join_request=true&expire_date=$expireTimestamp";
    
        $response = Http::get($url);
    
        // Log the full response
        Log::info('Telegram API Response:', ['response' => $response->json()]);
    
        if ($response->successful()) {
            $responseData = $response->json();
    
            if (isset($responseData['result']['invite_link'])) {
                return $responseData['result']['invite_link'];
            }
        }
    
        return null; // Handle failure case if no invite link is returned
    }



    public static function handleChatRequest($user_id, $channel_id, $link)
    {
        // Get the order along with the user relationship based on the provided link
        $order = Order::with('user')->where('link', $link)->first();
    
        // Check if order exists and the user's telegram_id matches the provided user_id
        if (!$order || $order->user->telegram_id != $user_id) {
            // Order not found or telegram_id mismatch, exit
            return;
        }
    
        // Everything is verified; proceed to accept the invite
        self::acceptInvite($channel_id, $user_id,$link);
    }
    
    public static function acceptInvite ($channel_id,$user_id,$link)
    {
        $botToken = env('VERIFY_BOT_TOKEN'); 
        try {
            $url = "https://api.telegram.org/bot$botToken/approveChatJoinRequest?chat_id=$channel_id&user_id=$user_id";
        
            Http::get($url);
            self::revokeLink($channel_id,$link);
            ProcessKickUser::dispatch($channel_id, $user_id)->delay(Carbon::now()->addMinutes(10));



        } catch (\Throwable $th) {
            //throw $th;
        }
        
    }
    public static function revokeLink($channel_id,$link)
    {
        $botToken = env('VERIFY_BOT_TOKEN'); 
        try {
            $url = "https://api.telegram.org/bot$botToken/revokeChatInviteLink?chat_id=$channel_id&invite_link=$link";
        
            Http::get($url);
        } catch (\Throwable $th) {
            //throw $th;
        }
        
    }

    public static function hasLeft($telegram_id, $channel_id)
    {
        $botToken = env('VERIFY_BOT_TOKEN');
        
        try {
            $url = "https://api.telegram.org/bot$botToken/getChatMember?chat_id=$channel_id&user_id=$telegram_id";
            $response = Http::get($url);
    
                $result = $response->json();
                

    
                // Check if API response is valid
                if (isset($result['ok']) && $result['ok'] && isset($result['result']['status'])) {
                    $status = $result['result']['status'];
                    
                    // Determine return value based on status
                    if ($status === 'member') {
                        return false;
                    } elseif (in_array($status, ['left', 'kicked'])) {
                        return true;
                    }
                }
           
    
            // Return false if response was unexpected or status not matched
            return false;
            
        } catch (\Throwable $th) {
            // Log the error if needed or handle it accordingly
            
            return null;
        }
    }

    public static function banChatMember($channel_id,$telegram_id)
    {
        $botToken = env('VERIFY_BOT_TOKEN');

        try {
            $url = "https://api.telegram.org/bot$botToken/banChatMember?chat_id=$channel_id&user_id=$telegram_id";
             Http::get($url);
        } catch (\Throwable $th) {
            //throw $th;
        }
        
    }
    
    
    
    
}

