<?php

use Illuminate\Database\Seeder;

class DistrictsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('districts')->insert([
            ['id' => 783231, 'country_code' => 'LK', 'name' => 'Amparai', 'active' => 1, 'slug' => 'amparai'],
            ['id' => 783232, 'country_code' => 'LK', 'name' => 'Anuradhapura', 'active' => 1, 'slug' => 'anuradhapura'],
            ['id' => 783233, 'country_code' => 'LK', 'name' => 'Badulla', 'active' => 1, 'slug' => 'badulla'],
            ['id' => 783234, 'country_code' => 'LK', 'name' => 'Batticalao', 'active' => 1, 'slug' => 'batticalao'],
            ['id' => 783235, 'country_code' => 'LK', 'name' => 'Colombo', 'active' => 1, 'slug' => 'colombo'],
            ['id' => 783236, 'country_code' => 'LK', 'name' => 'Galle', 'active' => 1, 'slug' => 'galle'],
            ['id' => 783237, 'country_code' => 'LK', 'name' => 'Gampaha', 'active' => 1, 'slug' => 'gampaha'],
            ['id' => 783238, 'country_code' => 'LK', 'name' => 'Hambantota', 'active' => 1, 'slug' => 'hambantota'],
            ['id' => 783239, 'country_code' => 'LK', 'name' => 'Jaffna', 'active' => 1, 'slug' => 'jaffna'],
            ['id' => 783240, 'country_code' => 'LK', 'name' => 'Kalutara', 'active' => 1, 'slug' => 'kalutara'],
            ['id' => 783241, 'country_code' => 'LK', 'name' => 'Kandy', 'active' => 1, 'slug' => 'kandy'],
            ['id' => 783242, 'country_code' => 'LK', 'name' => 'Kegalla', 'active' => 1, 'slug' => 'kegalla'],
            ['id' => 783243, 'country_code' => 'LK', 'name' => 'Kurunegala', 'active' => 1, 'slug' => 'kurunegala'],
            ['id' => 783244, 'country_code' => 'LK', 'name' => 'Mannar', 'active' => 1, 'slug' => 'mannar'],
            ['id' => 783245, 'country_code' => 'LK', 'name' => 'Matara', 'active' => 1, 'slug' => 'matara'],
            ['id' => 783246, 'country_code' => 'LK', 'name' => 'Moneragala', 'active' => 1, 'slug' => 'moneragala'],
            ['id' => 783247, 'country_code' => 'LK', 'name' => 'Mullaittivu', 'active' => 1, 'slug' => 'mullaittivu'],
            ['id' => 783248, 'country_code' => 'LK', 'name' => 'Polonnaruwa', 'active' => 1, 'slug' => 'polonnaruwa'],
            ['id' => 783249, 'country_code' => 'LK', 'name' => 'Puttalam', 'active' => 1, 'slug' => 'puttalam'],
            ['id' => 783250, 'country_code' => 'LK', 'name' => 'Ratnapura', 'active' => 1, 'slug' => 'ratnapura'],
            ['id' => 783251, 'country_code' => 'LK', 'name' => 'Trincomalee', 'active' => 1, 'slug' => 'trincomalee'],
            ['id' => 783252, 'country_code' => 'LK', 'name' => 'Vavuniya', 'active' => 1, 'slug' => 'vavuniya'],
            ['id' => 783253, 'country_code' => 'LK', 'name' => 'Matale', 'active' => 1, 'slug' => 'matale']
        ]);
    }
}
