<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBiksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('biks', function (Blueprint $table) {
            $table->id();
            $table->text('bik');
            $table->text('ks')->nullable();
            $table->text('name')->nullable();
            $table->text('namemini')->nullable();
            $table->text('index')->nullable();
            $table->text('city')->nullable();
            $table->text('adress')->nullable();
            $table->text('phone')->nullable();
            $table->text('okato')->nullable();
            $table->text('okpo')->nullable();
            $table->text('regnum')->nullable();
            $table->text('srok')->nullable();
            $table->dateTime('dateadd')->nullable();
            $table->dateTime('datechange')->nullable();
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
        Schema::dropIfExists('biks');
    }
}
