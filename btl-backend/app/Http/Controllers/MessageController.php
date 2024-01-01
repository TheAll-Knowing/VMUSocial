<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(): Response
    {
        $users = User::whereNotIn('id', [ auth()->user()->id ])->get();
        return Inertia::render('Inbox/Inbox', ['users'=>$users]);
    }

    public function show(User $user): Response
    {
        $users = User::whereNotIn('id', [ auth()->user()->id ])->get();
        return Inertia::render('Inbox/Chat', ['users'=>$users]);
    }
}
