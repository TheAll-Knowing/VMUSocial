<?php

namespace App\Models;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\BroadcastableModelEventOccurred;
class Chat extends Model
{
    use BroadcastsEvents, HasFactory;
    protected $fillable = [
        'user_id',
        'receiver_id',
        'message',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    private function getChannelName($senderId, $receiverId)
    {
        $senderId = (int) $senderId;
        $receiverId = (int) $receiverId;
        return $senderId < $receiverId ? $senderId . '-' . $receiverId : $receiverId . '-' . $senderId;
    }
    public function broadcastOn(string $event): array
    {
        $senderId = $this->user_id;
        $receiverId = $this->receiver_id;
        $channelName = $this->getChannelName($senderId, $receiverId);
        return [
            new PrivateChannel('chat.'.$channelName)
        ];
    }
    protected function newBroadcastableEvent(string $event): BroadcastableModelEventOccurred
    {
        return (new BroadcastableModelEventOccurred(
            $this, $event
        ))->dontBroadcastToCurrentUser();
    }
}
