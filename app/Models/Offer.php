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
        'organization_id',
        'price',
        'capacity',
        'active'
    ];

    protected $casts = [
        'organization_id'   =>  'integer',
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

    public function organization()
    {
        return $this->belongsTo(Organization::class,'organization_id');
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function filters()
    {
        return $this->belongsToMany(Filter::class,'filter_offers','offer_id','filter_id','','value_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function values()
    {
        return $this->belongsToMany(FilterValue::class,'filter_offers','offer_id','value_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function adresses()
    {
        return $this->belongsToMany(OfferAdress::class,'offers_offer_adreses','offer_id','offer_adreses_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function packings()
    {
        return $this->belongsToMany(Packing::class,'offers_packings','offer_id','packing_id');
    }
}
