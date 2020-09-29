<?php

use App\Location;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create("ne_NP");
        for ($i=0; $i < 100; $i++) {
            Location::create([
                'district'=>$faker->district,
                'city'=>$faker->cityName,
                'lat'=>$faker->unique()->latitude(27,28),
                'lng'=>$faker->unique()->latitude(81,88),
                'created_at'=>now(),
                'updated_at'=>now(),
            ]);
        }
    }
}
