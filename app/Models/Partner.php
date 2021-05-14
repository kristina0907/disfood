<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Partner extends Model
{
    use HasFactory;

    protected $table = 'partners';


    protected $fillable = [
        'name',
        'slug',
        'image',
        'description',
    ];

    protected $casts = [
        'name'		    =>	'string',
        'slug'			=>	'string',
        'image'         =>  'string',
        'description'   =>  'string',
    ];

    /**
     * @param $value
     */

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
}
