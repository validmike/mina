<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Lightning;
use App\Services\LightningService;
use Illuminate\Http\Request;

class LightningController extends Controller
{
    protected $lightningService;

    public function __construct(LightningService $lightningService)
    {
        $this->lightningService = $lightningService;
    }
    public function checkStatus(Request $request)
    {
        // $request->validate([
        //     'lightning_id' => 'required|string|exists:lightnings,id',
        // ]);

        $payment = Lightning::find($request->lightning_id);

        if (!$payment) {
            return response()->json(['success' => false, 'message' => 'Payment not found.'], 404);
        }

        $this->lightningService->updateLightningStatus($payment->lightning_id);

        return response()->json([
            'lightning_id' => $payment->id,
            'status' => $payment->status, // This might be outdated since it's retrieved before updating
            'is_paid' => $payment->status === 'paid',
        ]);
    }
}
