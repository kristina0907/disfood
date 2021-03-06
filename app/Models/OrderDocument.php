<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDocument extends Model
{
    use HasFactory;

    /**
     * @var string
     */

    protected $table = 'order_documents';

    /**
     * @var string[]
     */

    protected $fillable = [
        'name',
        'price',
        'active',
        'belongs_to_preset',
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'name'    => 'string',
        'price'   => 'float',
        'active'  => 'boolean',
        'belongs_to_preset' => 'string',
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */

    public function orders()
    {
        return $this->belongsToMany(OrderDocument::class, 'orders_documents_attached','order_document_id','order_id');
    }
}
