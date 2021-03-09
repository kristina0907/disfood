<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class OrderStatus extends Model
{
    use HasFactory;

    protected $table = 'order_statuses';


    protected $fillable = [
        'name', 'slug'
    ];

    protected $casts = [
        'name'		    =>	'string',
        'slug'			=>	'string'
    ];

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

}
