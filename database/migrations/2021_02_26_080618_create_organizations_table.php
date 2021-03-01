<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('inn')->nullable();
            $table->text('kpp')->nullable();
            $table->text('ogrn')->nullable();
            $table->text('adress')->nullable();
            $table->text('phone')->nullable();
            $table->text('bank_name')->nullable();
            $table->text('r_account')->nullable();
            $table->text('kor_account')->nullable();
            $table->text('fio_ceo')->nullable();
            $table->text('reason')->nullable();
            $table->unsignedInteger('number_power_of_attorney')->nullable();
            $table->date('date_power_of_attorney')->nullable();
            $table->integer('user_id');
            $table->boolean('active')->default(true);
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
        Schema::dropIfExists('organizations');
    }
}
