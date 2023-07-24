<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostLike;
use App\Models\UserFollower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        if (auth()->user())
        {
            $posts = Post::whereIn(
                'user_id',
                UserFollower::select(['user_id'])
                    ->where('follower_id', auth()->user()->id)
            )->with('user')->withCount('likes')->with('comments.user')->with('likes')->get();
            return Inertia::render('Welcome', ['posts'=>$posts]);
        }
        else
        {
            return Inertia::render('Welcome');
        }
    }
}
