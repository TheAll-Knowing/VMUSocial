<?php

namespace App\Http\Controllers;

use App\Models\PostLike;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UnLikePostController extends Controller
{
    public function store(Request $request)
    {
        $userId = Auth::user()->getAuthIdentifier();
        $postLike = PostLike::where([
            'user_id' => $userId,
            'post_id' => $request->id
        ])->first();

        if ($postLike) {
            $postLike->delete();
            return 'deleted';
        }

        return 'not deleted';
    }
}
