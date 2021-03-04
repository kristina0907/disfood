<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regions', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('region_id');
            $table->unsignedInteger('country_id');
            $table->text('title_ru')->nullable();
            $table->text('title_ua')->nullable();
            $table->text('title_be')->nullable();
            $table->text('title_en')->nullable();
            $table->text('title_es')->nullable();
            $table->text('title_pt')->nullable();
            $table->text('title_de')->nullable();
            $table->text('title_fr')->nullable();
            $table->text('title_it')->nullable();
            $table->text('title_pl')->nullable();
            $table->text('title_ja')->nullable();
            $table->text('title_lt')->nullable();
            $table->text('title_lv')->nullable();
            $table->text('title_cz')->nullable();
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
        Schema::dropIfExists('regions');
    }
}
