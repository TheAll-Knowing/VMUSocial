<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikePostController;
use App\Http\Controllers\UnLikePostController;
use App\Http\Controllers\AddPostCommentController;
use App\Http\Controllers\AddPostController;
use App\Http\Controllers\FollowUserController;
use App\Http\Controllers\UnFollowUserController;
use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('/');
Route::get('/profile/{user:username}', [ProfileController::class, 'index'])->name('profile.show');
Route::get('/post/{post}', [PostController::class, 'index'])->name('post.show');


Route::middleware('auth')->group(function () {
    Route::get('/accounts/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/accounts/edit', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/accounts/edit', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/accounts/password', function (Request $request): Response {
        return Inertia::render('Profile/SettingsPassword');
    })->name('profile.password');
    Route::post('p/like', [LikePostController::class, 'store'])->name('post.like');
    Route::post('p/unlike', [UnLikePostController::class, 'store'])->name('post.unlike');
    Route::post('p/comment', [AddPostCommentController::class, 'store'])->name('post.comment');
    Route::post('p/add', [AddPostController::class, 'store'])->name('post.add');
    Route::post('profile/follow', [FollowUserController::class, 'store'])->name('user.follow');
    Route::post('profile/unfollow', [UnFollowUserController::class, 'store'])->name('user.unfollow');
    Route::get('/inbox', [MessageController::class, 'index'])->name('inbox.show');
});
require __DIR__.'/auth.php';
