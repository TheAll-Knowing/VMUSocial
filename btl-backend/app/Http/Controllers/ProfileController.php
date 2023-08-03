<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Post;
use App\Models\User;
use App\Models\UserFollower;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\Facades\Image;
use function PHPUnit\Framework\isNull;

class ProfileController extends Controller
{
    public function index(User $user): Response
    {
        $posts = Post::whereIn('user_id', User::select(['id'])->where('id', $user->id))->with('user')->withCount('likes')->with('comments.user')->with('likes')->get();
        $followers = User::whereIn(
            'id',
            UserFollower::select(['follower_id'])->where('user_id', $user->id)
        )->get();
        $following = User::whereIn(
            'id',
            UserFollower::select(['user_id'])->where('follower_id', $user->id)
        )->get();
        return Inertia::render('Profile/Index', ['user'=>$user,'posts'=>$posts,'followers'=>$followers,'following'=>$following]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/SettingsEdit');
//        return Inertia::render('Profile/Edit', [
//            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
//            'status' => session('status'),
//        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['string', 'max:255'],
            'username' => ['string', 'max:255', Rule::unique(User::class)->ignore($request->user()->id)],
            'website' => ['url', 'nullable', 'max:255'],
            'bio' => ['max:255'],
        ]);
        if ($request->image)
        {
            $file = $request->image;
            $fileUpload = $file->store('profiles', 'public');
            $image = Image::make(public_path("storage/{$fileUpload}"))->fit(1000,1000);
            $image->save();
            $data['image'] = $fileUpload;
        }
        $request->user()->update($data);
        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function search(): JsonResponse
    {
        $users = User::all();
        return response()->json(['results'=> $users],200);
    }
}
