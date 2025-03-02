<?php

namespace App\Jobs;

use App\Services\Respond ;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessKickUser implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $channel_id;
    protected $user_id;

    /**
     * Create a new job instance.
     *
     * @param int $channel_id
     * @param int $user_id
     */
    public function __construct(int $channel_id, int $user_id)
    {
        $this->channel_id = $channel_id;
        $this->user_id = $user_id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Call the method to ban the user from the chat
        Respond::banChatMember($this->channel_id, $this->user_id);
    }
}
