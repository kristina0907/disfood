<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPriceColumnToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedFloat('price')->default(0.00);
            $table->unsignedFloat('price_with_nds')->default(0.00);
            $table->boolean('with_nds')->default(false);
            $table->text('currency')->default('RUB');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedFloat('price')->default(0.00);
            $table->unsignedFloat('price_with_nds')->default(0.00);
            $table->boolean('with_nds')->default(false);
            $table->text('currency')->default('RUB');
        });

    }
}
