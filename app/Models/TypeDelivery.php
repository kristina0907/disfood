<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TypeDelivery extends Model
{
    use HasFactory;

    protected $table = 'type_deliveries';

    /**
     * @var string[]
     */

    protected $fillable = [
        'name',
        'slug',
        'active'
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'name'=>'string',
        'slug'=> 'string',
        'active'=>'boolean'
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

    public function order()
    {
        return $this->belongsToMany(Order::class,'type_delivery_orders','type_delivery_id','order_id');
    }
}
