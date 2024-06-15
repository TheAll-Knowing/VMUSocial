<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class ChatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(): Response
    {
        $users = User::whereNotIn('id', [auth()->user()->id])->get();
        return Inertia::render('Inbox/Inbox', ['users' => $users]);
    }

    public function show(User $user): Response
    {
        $users = User::whereNotIn('id', [auth()->user()->id])->get();
        $chats = Chat::where('user_id', [auth()->user()->id])->orWhere('receiver_id', [auth()->user()->id])->get();
        return Inertia::render('Inbox/Chat', ['users' => $users, 'user' => $user, 'chats' => $chats]);
    }

    public function store(Request $request)
    {
        Chat::create($request->validate([
            'user_id' => ['required'],
            'receiver_id' => ['required'],
            'message' => ['required'],
        ]));

        return back();
    }
}
