<?php

namespace App\Notifications;

use App\Models\Chat;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Notifications\CustomDbChannel;

class SendMessage extends Notification
{
    use Queueable;

    public int $sender_id;
    protected Chat $chat;
    /**
     * Create a new notification instance.
     */
    public function __construct(Chat $chat, $sender_id)
    {
        $this->sender_id = $sender_id;
        $this->chat = $chat;
    }

    public function via(object $notifiable): array
    {
        return [CustomDbChannel::class, 'broadcast'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'message' => $this->chat->message,
        ];
    }

    public function toDatabase(object $notifiable): array
    {
        return [
            'message' => $this->chat->message,
        ];
    }
    public function toBroadcast(object $notifiable): BroadcastMessage
    {
        return new BroadcastMessage([
            'data' => [
                'message' => $this->chat->message,
            ],
            'sender_id' => $this->sender_id,
            'created_at' => Carbon::now(),
        ]);
    }
    public function databaseType(object $notifiable): string
    {
        return 'sendMessage-notification';
    }

    public function broadcastType(): string
    {
        return 'sendMessage-notification';
    }
}
