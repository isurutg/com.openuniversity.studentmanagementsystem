<?php

use Illuminate\Database\Seeder;

class AcademicScheduleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('academic_schedules')->insert(
            [
                [
                    'academic_schedule_name' => '2019/2020',
                    'year' => '2020',
                    'status' => 2,
                ]
            ]
        );
    }
}
