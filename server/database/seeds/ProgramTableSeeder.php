<?php

use Illuminate\Database\Seeder;

class ProgramTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('programs')->insert(
            [
                [
                    'program_name' => 'Bachelor of Technology - Computer Engineering',
                    'active' => true
                ],
                [
                    'program_name' => 'Bachelor of Technology Honours in Engineering',
                    'active' => true
                ],
                [
                    'program_name' => 'Certificate in Computer Aided Drafting and Modeling (AutoCAD)',
                    'active' => true
                ],
                [
                    'program_name' => 'Certificate in Desktop Publishing and Graphic Designing',
                    'active' => true
                ]
            ]
        );
    }
}
