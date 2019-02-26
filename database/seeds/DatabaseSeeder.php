<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $faker = Faker::create();

        foreach(range(1,10) as $index) {
        	DB::table('users')->insert([
        		'name' => $faker->name,
        		'email' => $faker->email,
        		'password' => bcrypt('password'),
        	]);

        	DB::table('posts')->insert([
        		'category_id' => $faker->numberBetween($min = 1, $max = 6),
        		'title' => $faker->unique()->sentence($nbWords = 6),
        		'content' => $faker->paragraph($nbSentences = 3),
        		'user_id' => $faker->numberBetween($min = 1, $max = 10),
        	]);
        }
    }
}
