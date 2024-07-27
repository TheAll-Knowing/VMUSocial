<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Notifications\CommentPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\PostComment;
class AddPostCommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'string',
        ]);
        $userId = Auth::user()->getAuthIdentifier();
        if($userId !== $request->postUserId){
            $user = User::where('id', $request->postUserId)->first();
            $post = Post::where('id', $request->postId)->first();
            $user->notify(new CommentPost(auth()->user(), $post));
        }
        PostComment::create([
            'post_id' => $request->postId,
            'user_id' => $userId,
            'comment' => $request->comment,
        ]);
    }
}
