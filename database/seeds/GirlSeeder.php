<?php

use App\Girl;
use Illuminate\Database\Seeder;

class GirlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create("ne_NP");
        for ($i=0; $i < 500; $i++) {
            Girl::create([
                'name'=>$faker->name,
                'lat'=>$faker->unique()->latitude(27,28),
                'lng'=>$faker->unique()->latitude(81,88),
                'created_at'=>now(),
                'updated_at'=>now(),
            ]);
        }
    }
}
