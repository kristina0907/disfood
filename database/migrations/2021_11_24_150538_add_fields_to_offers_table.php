<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->text('delivery_auto_adress')->nullable();
            $table->text('delivery_samovivoz_adress')->nullable();
            $table->text('delivery_country_id')->nullable();
            $table->text('delivery_city')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->text('delivery_auto_adress')->nullable();
            $table->text('delivery_samovivoz_adress')->nullable();
            $table->text('delivery_country_id')->nullable();
            $table->text('delivery_city')->nullable();
        });
    }
}
