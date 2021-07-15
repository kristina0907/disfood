<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfferAdressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_adresses', function (Blueprint $table) {
            $table->id();
            $table->text('country_kladr_id')->nullable();
            $table->text('region_kladr_id')->nullable();
            $table->text('city_kladr_id')->nullable();
            $table->text('country_name')->nullable();
            $table->text('region_name')->nullable();
            $table->text('city_name')->nullable();
            $table->text('geo_lat')->nullable();
            $table->text('geo_lon')->nullable();
            $table->text('timezone')->nullable();
            $table->text('adress')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_adresses');
    }
}
