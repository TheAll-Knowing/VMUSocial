<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Notifications\SendMessage;
use Illuminate\Database\Eloquent\Builder;
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
        $chats = Chat::where('user_id', [auth()->user()->id])->where('receiver_id',$user->id)
            ->orWhere(function (Builder $query) use ($user) {
                $query->where('receiver_id', [auth()->user()->id])
                    ->where('user_id', [$user->id]);
            })
            ->get();
        return Inertia::render('Inbox/Chat', ['users' => $users, 'user' => $user, 'chats' => $chats]);
    }

    public function store(Request $request)
    {
        $chat = Chat::create($request->validate([
            'user_id' => ['required'],
            'receiver_id' => ['required'],
            'message' => ['required'],
        ]));
        $user = User::where('id', $request->receiver_id)->first();
        $user->notify((new SendMessage($chat, $request->user_id))->afterCommit());
        return response()->json($chat);
    }
}
