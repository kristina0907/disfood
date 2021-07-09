<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TypeProduct extends Model
{
    use HasFactory;

    protected $table = 'type_products';


    protected $fillable = [
        'name', 'slug', 'category_id','image'
    ];

    protected $casts = [
        'category_id'	=>	'integer',
        'name'		    =>	'string',
        'slug'			=>	'string'
    ];

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function parent()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    public function filters()
    {
        return $this->belongsToMany(Filter::class,'filters_type_products','type_product_id','filter_id');
    }
}
