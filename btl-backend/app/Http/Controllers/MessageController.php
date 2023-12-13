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
    public function index(User $user): Response
    {
        return Inertia::render('Inbox/Index', ['user'=>$user]);
    }
}
