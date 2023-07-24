<?php

namespace App\Http\Controllers;

use App\Models\PostLike;
use App\Models\UserFollower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowUserController extends Controller
{
    public function store(Request $request)
    {
        $userId = Auth::user()->getAuthIdentifier();
        $userFollowers = UserFollower::where('user_id', $request->id)->where('follower_id', $userId)->get();
        //Ignore if followed already
        if ($userFollowers->isEmpty()) {
            return UserFollower::create([
                'user_id' => $request->id,
                'follower_id' => $userId,
            ]);
        }
        else {
            return 'already followed';
        }
    }
}
