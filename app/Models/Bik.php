<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bik extends Model
{
    use HasFactory;


    /**
     * @var string
     */

    protected  $table = 'biks';

    /**
     * @var string[]
     */

    protected $fillable = [
        'bik',
        'ks',
        'name',
        'namemini',
        'index',
        'city',
        'adress',
        'phone',
        'okato',
        'okpo',
        'regnum',
        'srok',
        'dateadd',
        'datechange'
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'bik'		=>	'integer',
        'ks'		=>	'integer',
        'name'		=>	'string',
        'namemini'	=>	'string',
        'index'	    =>	'integer',
        'city'	    =>	'string',
        'adress'	=>	'string',
        'phone'	    =>	'string',
        'okato'	    =>	'integer',
        'okpo'	    =>	'integer',
        'regnum'	=>	'integer',
        'srok'	    =>	'integer',
    ];


}
