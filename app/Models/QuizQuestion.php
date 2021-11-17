<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizQuestion extends Model
{
    use HasFactory;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function quiz()
    {
        return $this->belongsTo(AccreditationQuiz::class,'accreditation_quiz_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function values()
    {
        return $this->hasMany(QuizQuestionValue::class,'question_id');
    }
}
