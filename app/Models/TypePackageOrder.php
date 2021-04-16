<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TypePackageOrder extends Model
{
    use HasFactory;

    use HasFactory;

    protected $table = 'type_package_orders';


    protected $fillable = [
         'order_id','capacity','price'
    ];




    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function order()
    {
        return $this->belongsTo(Order::class,'order_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function package()
    {
        return $this->belongsTo(Packing::class,'package_id');
    }
}
