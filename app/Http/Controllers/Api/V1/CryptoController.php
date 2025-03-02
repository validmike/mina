<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Crypto;
use App\Services\CryptoService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CryptoController extends Controller
{
    protected $cryptoService;

    public function __construct(CryptoService $cryptoService)
    {
        $this->cryptoService = $cryptoService;
    }

    public function getCoins()
    {
        $coins = $this->cryptoService->getCoins();
    
        return response()->json($coins, 200);
    }
    public function checkStatus(Request $request)
    {
        $payment = Crypto::find($request->crypto_id);

        if (!$payment) {
            return response()->json(['success' => false, 'message' => 'Payment not found.'], 404);
        }

         $this->cryptoService->updateLightningStatus($payment->payment_id);

         return response()->json([
            'lightning_id' => $payment->id,
            'status' => $payment->status,
            'is_paid' => in_array($payment->status, ['sending', 'finished', 'confirming', 'confirmed']),
        ]);
        
    }
    
    
    
    
}

