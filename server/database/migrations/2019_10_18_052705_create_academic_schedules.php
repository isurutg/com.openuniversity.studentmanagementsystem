<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcademicSchedules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('academic_schedules', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('academic_schedule_name');
            $table->string('year');
            $table->integer('status')->comment('1-on-going, 2-application-enabled, 3-closed, 4-not-active');
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
        Schema::dropIfExists('academic_schedules');
    }
}
