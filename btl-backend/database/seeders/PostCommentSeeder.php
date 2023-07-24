<?php

namespace Database\Seeders;

use App\Models\PostComment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostCommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PostComment::factory(200)->create();
    }
}
