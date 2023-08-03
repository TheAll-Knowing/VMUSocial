<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\UserFollower;
use Illuminate\Http\Request;
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
            )->with('user')->withCount('likes')->with('comments.user')->with('likes')->latest()->get();

            $suggestions = User::whereNotIn(
                'id',
                UserFollower::select(['user_id'])
                    ->where('follower_id', auth()->user()->id)
            )->whereNotIn('id', User::select(['id'])->where('id', auth()->user()->id))->get()->take(5);

            $stories = User::whereIn(
                'id',
                UserFollower::select(['user_id'])
                    ->where('follower_id', auth()->user()->id)
            )->get()->take(15);
            return Inertia::render('Welcome', ['posts'=>$posts,'suggestions'=>$suggestions,'stories'=>$stories]);
        }
        else
        {
            return Inertia::render('Welcome');
        }
    }
}
