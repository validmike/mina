<?php

use App\Http\Controllers\CryptoController;
use App\Http\Controllers\DemoController;
use App\Http\Controllers\HelpController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LightningController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/dashboard', function () {
    return redirect()->route('home');
});


Route::middleware('auth')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');


    Route::get('/help', [HelpController::class, 'index'])->name('help.index');
    Route::get('/contact', [HelpController::class, 'contact'])->name('help.contact');
    Route::get('/trade', [HelpController::class, 'trade'])->name('trade');
    
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/products/group', [ProductController::class, 'group'])->name('products.group');


    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');
    Route::get('/orders/link/{order}', [OrderController::class, 'link'])->name('orders.link');
    Route::post('orders/create_link/', [OrderController::class, 'createLink'])->name('order.createLink');

    Route::get('/demos', [DemoController::class, 'index'])->name('demos.index');
    Route::get('/proofs', [DemoController::class, 'proofs'])->name('demos.proofs');
    Route::get('/demos/video', [DemoController::class, 'video'])->name('demos.video');
    Route::get('/demos/group', [DemoController::class, 'group'])->name('demos.group');



    Route::post('/lightning', [LightningController::class, 'store'])->name('lightnings.store');
    Route::get('/lightning/{lightning}', [LightningController::class, 'show'])->name('lightnings.show');

    Route::post('/cryptos', [CryptoController::class, 'store'])->name('cryptos.store');
    Route::get('/cryptos/{crypto}', [CryptoController::class, 'show'])->name('cryptos.show');

    Route::get('/guide', [HelpController::class, 'guide'])->name('help.guide');
    Route::get('/guide/cashapp', [HelpController::class, 'cashapp'])->name('help.cashapp');
    Route::get('/guide/azteco', [HelpController::class, 'azteco'])->name('help.azteco');
    Route::get('/guide/satoshi', [HelpController::class, 'satoshi'])->name('help.satoshi');






    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
