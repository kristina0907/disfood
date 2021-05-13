<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class SimplePage extends Model
{
    use HasFactory;

    protected $table = 'simple_pages';


    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'body',
    ];

    protected $casts = [
        'name'	        =>	'string',
        'slug'          =>  'string',
        'description'   =>	'string',
        'image'         =>  'string',
        'body'          =>  'string',
    ];

    /**
     * @param $value
     */

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

}
