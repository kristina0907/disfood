<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    use HasFactory;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function user()
    {
        return $this->belongsToMany(User::class,'chat_rooms_users','user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function manager()
    {
        return $this->belongsToMany(User::class,'chat_rooms_users','manager_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function offer()
    {
        return $this->belongsToMany(Offer::class,'chat_rooms_users','offer_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function messages()
    {
        return $this->hasMany(Message::class,'chat_room_id');
    }
}
