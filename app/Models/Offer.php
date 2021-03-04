<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Offer extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'offers';

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'description',
        'product_id',
        'organization_id',
        'country_id',
        'city_id',
        'adress',
        'price',
        'capacity',
        'active'
    ];

    protected $casts = [
        'name'		        =>	'string',
        'description'	    =>	'string',
        'organization_id'   =>  'integer',
        'product_id'	    =>	'integer',
        'country_id'        =>  'integer',
        'city_id'           =>  'integer',
        'adress'            =>  'string',
        'price'             =>  'float',
        'capacity'          =>  'integer',
        'active'            =>  'boolean'
    ];

    /**
     * @param $value
     */
    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function organization()
    {
        return $this->belongsTo(Organization::class,'organization_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function country()
    {
        return $this->belongsTo(Country::class,'country_id','country_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function city()
    {
        return $this->belongsTo(City::class,'city_id','city_id');
    }
}
