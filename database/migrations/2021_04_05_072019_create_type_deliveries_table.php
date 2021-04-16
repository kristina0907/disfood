<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeDeliveriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_deliveries', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('slug');
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Schema::create('type_delivery_orders',function (Blueprint $table){
            $table->id();
            $table->bigInteger('type_delivery_id');
            $table->bigInteger('order_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_deliveries');
    }
}
