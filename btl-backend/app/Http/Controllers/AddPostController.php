<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;


class AddPostController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'caption' => ['required','max:2200'],
            'file' => ['required', 'image'],
        ]);
        $userId = Auth::user()->getAuthIdentifier();
        $file = $request->file;
        $fileUpload = $file->store('uploads', 'public');
        $image = Image::make(public_path("storage/{$fileUpload}"))->fit(1200,1200);
        $image->save();
        return Post::create([
            'user_id' => $userId,
            'caption' => $request->caption,
            'image' => $fileUpload,
        ]);
    }
}
