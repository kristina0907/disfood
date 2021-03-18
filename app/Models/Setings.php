<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setings extends Model
{
    use HasFactory;



    /**
     * @var string[]
     */

    protected $fillable = [
        'name',
        'slug',
        'value',
        'active'
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'name'=>'string',
        'slug'=> 'string',
        'value'=>'string',
        'active'=>'boolean'
    ];

}
