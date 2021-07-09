<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Filter extends Model
{
    use HasFactory;

    /**
     * @var string
     */

    protected $table = 'filters';

    /**
     * @var string[]
     */

    protected $fillable = [
        'name',
        'desc',
        'slug',
        'active'
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'name'		        =>	'string',
        'desc'	            =>	'string',
        'slug'              =>  'string',
        'active'            =>  'boolean'
    ];

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function types()
    {
        return $this->belongsToMany(TypeProduct::class,'filters_type_products','filter_id','type_product_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function values()
    {
        return $this->hasMany(FilterValue::class,'filter_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function offers()
    {
        return $this->belongsToMany(Offer::class,'filter_offers','filter_id','offer_id');
    }
}
