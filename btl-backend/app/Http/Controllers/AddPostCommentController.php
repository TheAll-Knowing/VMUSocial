<?php

namespace App\Http\Controllers;

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
        PostComment::create([
            'post_id' => $request->postId,
            'user_id' => $userId,
            'comment' => $request->comment,
        ]);
    }
}
