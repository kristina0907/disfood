<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    protected $table = 'organizations';

    protected $fillable = [
        'name',
        'inn',
        'kpp',
        'ogrn',
        'adress',
        'phone',
        'bank_name',
        'r_account',
        'kor_account',
        'fio_ceo',
        'reason',
        'number_power_of_attorney',
        'date_power_of_attorney',
        'user_id'
    ];

    protected $casts = [
        'user_id'		=>	'integer',
        'name'		    =>	'string',
        'inn'			=>	'string',
        'kpp'			=>	'string',
        'ogrn'			=>	'string',
        'adress'		=>	'string',
        'phone'		    =>	'string',
        'bank_name'		=>	'string',
        'r_account'		=>	'integer',
        'kor_account'	=>	'integer',
        'fio_ceo'       =>  'string',
        'reason'        =>  'string',
        'number_power_of_attorney'  =>  'integer',

    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
