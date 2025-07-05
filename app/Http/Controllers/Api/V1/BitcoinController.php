<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Bitcoin;
use App\Models\Lightning;
use App\Services\BitcoinService;
use App\Services\LightningService;
use Illuminate\Http\Request;

class BitcoinController extends Controller
{
    protected $bitcoinService;

    public function __construct(BitcoinService $bitcoinService)
    {
        $this->bitcoinService = $bitcoinService;
    }
    public function checkStatus(Request $request)
    {
        // dd($request->all());
        // $request->validate([
        //     'lightning_id' => 'required|string|exists:lightnings,id',
        // ]);

        $payment = Bitcoin::find($request->bitcoin_id);

        if (!$payment) {
            return response()->json(['success' => false, 'message' => 'Payment not found.'], 404);
        }

        $this->bitcoinService->updateBitcoinStatus($payment->bitcoin_id);

        return response()->json([
            'bitcoin_id' => $payment->id,
            'status' => $payment->status, // This might be outdated since it's retrieved before updating
            'is_paid' => $payment->status === 'paid',
        ]);
    }
}
