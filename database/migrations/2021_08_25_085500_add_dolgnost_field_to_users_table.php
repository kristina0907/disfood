<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDolgnostFieldToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text('dolgnost')->nullable();
            $table->boolean('new_order_sms')->default(false);
            $table->boolean('new_order_post')->default(true);
            $table->boolean('part_order_sms')->default(false);
            $table->boolean('part_order_post')->default(true);
            $table->boolean('message_sms')->default(false);
            $table->boolean('message_post')->default(true);
            $table->boolean('subscribe_sms')->default(false);
            $table->boolean('subscribe_post')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text('dolgnost')->nullable();
            $table->boolean('new_order_sms')->default(false);
            $table->boolean('new_order_post')->default(true);
            $table->boolean('part_order_sms')->default(false);
            $table->boolean('part_order_post')->default(true);
            $table->boolean('message_sms')->default(false);
            $table->boolean('message_post')->default(true);
            $table->boolean('subscribe_sms')->default(false);
            $table->boolean('subscribe_post')->default(true);
        });
    }
}
