<?php

namespace App\Jobs;

use App\Services\LightningService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class UpdateLightningStatusJob implements ShouldQueue
{
    use Queueable;

    protected $lightningId;


    /**
     * Create a new job instance.
     */
    public function __construct($lightningId)
    {
        $this->lightningId = $lightningId;
    }

    /**
     * Execute the job.
     */
    public function handle(LightningService $lightningService)
    {
        $lightningService->updateLightningStatus($this->lightningId);
    }
}
