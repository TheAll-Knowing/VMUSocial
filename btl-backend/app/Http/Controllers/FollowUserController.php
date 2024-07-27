<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserFollower;
use App\Notifications\UserFollow;
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
            $user = User::where('id', $request->id)->first();
            $user->notify(new UserFollow(auth()->user()));
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
