<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageCategory extends Model
{
    use HasFactory;

    protected $table = 'page_categories';


    protected $fillable = [
        'name',
        'active'
    ];

    protected $casts = [
        'name'		    =>	'string',
        'active'        =>  'boolean'
    ];
}
