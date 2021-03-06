<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * @var string
     */

    protected $table = 'orders';

    /**
     * @var string[]
     */

    protected $fillable = [
        'organization_id',
        'user_id',
        'from_id',
        'to_id',
        'offer_id',
        'status_id'
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'organization_id' => 'integer',
        'user_id' => 'integer',
        'from_id' => 'integer',
        'to_id' => 'integer',
        'offer_id' => 'integer',
        'status_id' => 'integer',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function organization()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function from()
    {
        return $this->belongsTo(City::class, 'from_id','city_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function delivery()
    {
        return $this->belongsTo(City::class, 'to_id','city_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function offer()
    {
        return $this->belongsTo(Offer::class, 'offer_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function status()
    {
        return $this->belongsTo(OrderStatus::class,'status_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function packages()
    {
        return $this->hasMany(TypePackageOrder::class,'order_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function typeDelivery()
    {
        return $this->belongsToMany(TypeDelivery::class,'type_delivery_orders','order_id','type_delivery_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function history()
    {
        return $this->hasMany(OrderHistory::class,'order_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function documents()
    {
        return $this->belongsToMany(OrderDocument::class, 'orders_documents_attached','order_id','order_document_id');
    }
}
