<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(Post $post): Response
    {
        if (auth()->user()){
            $post->loadMissing('user','comments.user','likes');
            return Inertia::render('Post/Index',['post'=>$post]);
        }
        else{
            $post->loadMissing('user','comments.user','likes');
            return Inertia::render('Post/GuestIndex',['post'=>$post]);
        }
    }
}
