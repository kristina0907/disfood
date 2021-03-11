<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';


    protected $fillable = [
        'name', 'slug', 'parent_id','image'
    ];

    protected $casts = [
        'parent_id'		=>	'integer',
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
        return $this->belongsTo(Category::class,'parent_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function children(){
        return $this->hasMany(Category::class, 'parent_id');
    }



}
