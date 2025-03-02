<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cryptos', function (Blueprint $table) {
            $table->id();
            $table->string("payment_id");
            $table->foreignId('order_id')->nullable()->constrained()->nullOnDelete();
            $table->string('amount', 8, 2);
            $table->string('status');
            $table->string('coin');
            $table->string('crypto_amount');
            $table->text('address');
            $table->string('expires_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cryptos');
    }
};
