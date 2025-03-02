<?php

namespace App\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class BanUserJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $telegram_id;

    /**
     * Create a new job instance.
     */
    public function __construct($telegram_id)
    {
        $this->telegram_id = $telegram_id;

    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        User::ban_user_with_telegram_id($this->telegram_id);
    }
}
