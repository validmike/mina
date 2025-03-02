<?php

use App\Http\Controllers\Api\V1\CryptoController;
use App\Http\Controllers\Api\V1\LightningController;
use App\Http\Controllers\Api\V1\TelegramController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/random-number', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' => 'Random number generated successfully.',
        'data' => [
            'random_number' => rand(1, 100)
        ]
    ], 200);
});

Route::prefix('v1')->group(function () {
    Route::post('/lightning/status', [LightningController::class, 'checkStatus'])->name('lightning.status');
    Route::get('/crypto/coins', [CryptoController::class, 'getCoins'])->name('crypto.coins');
    Route::post('/crypto/status', [CryptoController::class, 'checkStatus'])->name('crypto.status');

    Route::post('/hasleft', [TelegramController::class, 'checkUserStatus'])->name('hasleft');


});