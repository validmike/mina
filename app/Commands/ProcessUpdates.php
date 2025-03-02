<?php

namespace App\Commands;

use App\Services\Respond;
use App\Services\UpdateService;
use Illuminate\Support\Facades\Log;

class ProcessUpdates
{
    public function __invoke()
    {
        $updates = UpdateService::getUpdates();


        if (!empty($updates)) {
            Respond::handle($updates);
            // Log::warning('This is a update.');
           
        }
    }
}
