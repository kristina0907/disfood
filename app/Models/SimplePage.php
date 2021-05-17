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

    public function setTitleAttribute($value){
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function category()
    {
        return $this->belongsTo(PageCategory::class,'category_id');
    }

}
