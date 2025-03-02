<?php

namespace App\Jobs;

use App\Services\SetKeyboard;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DeleteMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $chat_id;
    protected $message_id;

    /**
     * Create a new job instance.
     */
    public function __construct($chat_id, $message_id)
    {
        $this->chat_id = $chat_id;
        $this->message_id = $message_id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $botToken = env('VERIFY_BOT_TOKEN');
        
        if (!$botToken) {
            Log::error('Telegram bot token is not set.');
            return;
        }

        if ($this->chat_id && $this->message_id) {
            try {
                $url = "https://api.telegram.org/bot$botToken/deleteMessage?chat_id=$this->chat_id&message_id=$this->message_id";
                Http::get($url);
            } catch (\Throwable $th) {
                Log::error("Failed to delete Telegram message: " . $th->getMessage(), [
                    'chat_id' => $this->chat_id,
                    'message_id' => $this->message_id,
                ]);
            }
        }
    }
}
