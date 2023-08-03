<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostLike;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Psy\Readline\Hoa\Console;
use function PHPUnit\Framework\isEmpty;

class LikePostController extends Controller
{
    public function store(Request $request)
    {
        $userId = Auth::user()->getAuthIdentifier();
        $postLikes = PostLike::where('user_id', $userId)->where('post_id', $request->postId)->get();
        //Ignore if liked already
        if ($postLikes->isEmpty()) {
             PostLike::create([
                'user_id' => $userId,
                'post_id' => $request->postId,
            ]);
            }
    }
}
