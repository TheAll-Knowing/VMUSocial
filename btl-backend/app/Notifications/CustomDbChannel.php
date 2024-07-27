<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class CustomDbChannel
{

    public function send($notifiable, Notification $notification)
    {
        $data = $notification->toDatabase($notifiable);
        $type = $notification->databaseType($notifiable);
        return $notifiable->routeNotificationFor('database')->create([
            'id' => $notification->id,
            'sender_id' => $notification->sender_id,
            'type' => $type,
            'data' => $data,
            'read_at' => null,
        ]);
    }

}
