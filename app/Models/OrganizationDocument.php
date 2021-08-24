<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class OrganizationDocument extends Model
{
    use HasFactory;


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function organizations()
    {
        return $this->belongsTo(Organization::class,'organization_id');
    }
}
