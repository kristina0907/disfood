<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('city_id')->nullable();
            $table->unsignedInteger('country_id')->nullable();
            $table->boolean('important')->nullable();
            $table->unsignedInteger('region_id')->nullable();

            $table->text('title_ru')->nullable();
            $table->text('area_ru')->nullable();
            $table->text('region_ru')->nullable();

            $table->text('title_ua')->nullable();
            $table->text('area_ua')->nullable();
            $table->text('region_ua')->nullable();

            $table->text('title_be')->nullable();
            $table->text('area_be')->nullable();
            $table->text('region_be')->nullable();

            $table->text('title_en')->nullable();
            $table->text('area_en')->nullable();
            $table->text('region_en')->nullable();

            $table->text('title_es')->nullable();
            $table->text('area_es')->nullable();
            $table->text('region_es')->nullable();

            $table->text('title_pt')->nullable();
            $table->text('area_pt')->nullable();
            $table->text('region_pt')->nullable();

            $table->text('title_de')->nullable();
            $table->text('area_de')->nullable();
            $table->text('region_de')->nullable();

            $table->text('title_fr')->nullable();
            $table->text('area_fr')->nullable();
            $table->text('region_fr')->nullable();

            $table->text('title_it')->nullable();
            $table->text('area_it')->nullable();
            $table->text('region_it')->nullable();

            $table->text('title_pl')->nullable();
            $table->text('area_pl')->nullable();
            $table->text('region_pl')->nullable();

            $table->text('title_ja')->nullable();
            $table->text('area_ja')->nullable();
            $table->text('region_ja')->nullable();

            $table->text('title_lt')->nullable();
            $table->text('area_lt')->nullable();
            $table->text('region_lt')->nullable();

            $table->text('title_lv')->nullable();
            $table->text('area_lv')->nullable();
            $table->text('region_lv')->nullable();

            $table->text('title_cz')->nullable();
            $table->text('area_cz')->nullable();
            $table->text('region_cz')->nullable();

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
        Schema::dropIfExists('cities');
    }
}
