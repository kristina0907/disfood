<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Packing extends Model
{
    use HasFactory;

    protected $table = 'packings';


    protected $fillable = [
        'name',
        'slug',
        'category_id',
        'image',
        'description',
        'active'
    ];

    protected $casts = [
        'category_id'	=>	'integer',
        'name'		    =>	'string',
        'slug'			=>	'string',
        'image'         =>  'string',
        'description'   =>  'string',
        'active'        =>  'boolean'
    ];

    /**
     * @param $value
     */

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function categories()
    {
        return $this->belongsToMany(Category::class,'packages_categories','package_id','category_id');
    }
}
