<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostLike;
use App\Models\User;
use App\Notifications\LikePost;
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
            if($userId !== $request->postUserId){
                $user = User::where('id', $request->postUserId)->first();
                $post = Post::where('id', $request->postId)->first();
                $user->notify(new LikePost(auth()->user(), $post));
            }
            PostLike::create([
                'user_id' => $userId,
                'post_id' => $request->postId,
            ]);
        }
    }
}
