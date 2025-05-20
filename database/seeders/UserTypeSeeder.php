<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['name' => 'Patient'],
            ['name' => 'Doctor'],
            ['name' => 'Staff'],
            ['name' => 'Admin'],
        ];

        foreach ($types as $type) {
            DB::table('user_types')->insert([
                'name' => $type['name'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
} 