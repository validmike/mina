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
        Schema::create('bitcoins', function (Blueprint $table) {
            $table->id();
            $table->string("bitcoin_id");
            $table->foreignId('order_id')->nullable()->constrained()->nullOnDelete();
            $table->string('amount', 8, 2);
            $table->string('status')->default('unpaid');
            $table->string('sat');
            $table->string('expires_at')->nullable();
            $table->text('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bitcoins');
    }
};
