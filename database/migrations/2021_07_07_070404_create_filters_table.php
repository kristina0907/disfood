<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiltersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filters', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('desc');
            $table->text('slug');
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
        Schema::create('filters_type_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('type_product_id');
            $table->unsignedBigInteger('filter_id');
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
        Schema::dropIfExists('filters');
        Schema::dropIfExists('filters_type_products');
    }
}
