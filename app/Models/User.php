<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_roles', 'user_id', 'role_id');
    }

    /**
     * @param $query
     * @return mixed
     */

    public function scopeClients($query)
    {
        return $query->whereHas('roles', function ($q) {
            $q->where('slug', 'client');
        });
    }

    /**
     * @param $query
     * @return mixed
     */

    public function scopeTraders($query)
    {
        return $query->whereHas('roles', function ($q) {
            $q->where('slug', 'supplier');
        });
    }

    /**
     * @param $query
     * @return mixed
     */

    public function scopeTradersOrClients($query)
    {
        return $query->whereHas('roles', function ($q) {
            $q->where('slug', 'supplier');
            $q->orWhere('slug','client');
        });
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function organizations()
    {
        return $this->hasMany(Organization::class,'user_id');
    }
}
