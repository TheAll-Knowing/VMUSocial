<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'caption',
        'image',
        'created_at',
        'updated_at'
    ];
    private mixed $created_at;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function comments(): hasMany
    {
        return $this->hasMany(PostComment::class);
    }
    public function likes(): hasMany
    {
        return $this->hasMany(PostLike::class);
    }
}
