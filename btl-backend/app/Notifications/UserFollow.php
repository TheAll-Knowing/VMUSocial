<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserFollow extends Notification
{
    use Queueable;

    protected $user;

    /**
     * Create a new notification instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
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
        ];
    }

    public function toBroadcast(object $notifiable): BroadcastMessage
    {
        $notification = [
            'user_id' => $this->user->id,
            'user_username' => $this->user->username,
            'user_image' => $this->user->image,
        ];
        return new BroadcastMessage([
            'data' => $notification,
        ]);
    }

    public function databaseType(object $notifiable): string
    {
        return 'userFollow-notification';
    }

    public function broadcastType(): string
    {
        return 'userFollow-notification';
    }
}
