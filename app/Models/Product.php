<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';


    protected $fillable = [
        'name',
        'slug',
        'category_id',
        'image',
        'type_id',
        'description',
    ];

    protected $casts = [
        'category_id'	=>	'integer',
        'type_id'       =>  'integer',
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function type()
    {
        return $this->belongsTo(TypeProduct::class,'type_id');
    }
}
