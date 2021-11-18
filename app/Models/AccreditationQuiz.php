<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccreditationQuiz extends Model
{
    use HasFactory;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function questions()
    {
        return $this->hasMany(QuizQuestion::class,'accreditation_quiz_id');
    }
}
