<?php

namespace App\Http\Controllers;

use App\Models\PostLike;
use App\Models\UserFollower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UnFollowUserController extends Controller
{
    public function store(Request $request)
    {
        $userId = Auth::user()->getAuthIdentifier();
        $userFollower = UserFollower::where([
            'user_id' => $request->id,
            'follower_id' => $userId,
        ])->first();

        if ($userFollower) {
            $userFollower->delete();
            return 'followed';
        }

        return 'not followed';
    }
}
