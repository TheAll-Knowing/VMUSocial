<?php

namespace App\Notifications;

use App\Models\Post;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CommentPost extends Notification
{
    use Queueable;

    protected User $user;
    protected Post $post;

    /**
     * Create a new notification instance.
     */
    public function __construct(User $user, Post $post)
    {
        $this->user = $user;
        $this->post = $post;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database', 'broadcast'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'user_id' => $this->user->id,
            'user_username' => $this->user->username,
            'user_image' => $this->user->image,
            'post_id' => $this->post->id,
            'post_image' => $this->post->image,
        ];
    }

    public function toBroadcast(object $notifiable): BroadcastMessage
    {
        $notification = [
            'user_id' => $this->user->id,
            'user_username' => $this->user->username,
            'user_image' => $this->user->image,
            'post_id' => $this->post->id,
            'post_image' => $this->post->image,
        ];
        return new BroadcastMessage([
            'data' => $notification,
        ]);
    }

    public function databaseType(object $notifiable): string
    {
        return 'commentPost-notification';
    }

    public function broadcastType(): string
    {
        return 'commentPost-notification';
    }
}
