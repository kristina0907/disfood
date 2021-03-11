<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Cart extends Model
{
    use HasFactory;

    /**
     * @var string
     */

    protected  $table = 'carts';

    /**
     * @var string[]
     */

    protected $fillable = [
        'user_id',
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'user_id'		=>	'integer',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function orders()
    {
        return $this->hasMany(Order::class,'cart_id','order_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
