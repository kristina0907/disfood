<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FilterValue extends Model
{
    use HasFactory;

    /**
     * @var string
     */

    protected $table = 'filter_values';

    /**
     * @var string[]
     */

    protected $fillable = [
        'value',
        'active'
    ];

    /**
     * @var string[]
     */

    protected $casts = [
        'value'		        =>	'string',
        'active'            =>  'boolean'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function filter()
    {
        return $this->belongsTo(Filter::class,'filter_id');
    }
}
