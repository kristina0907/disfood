<?php


namespace App\Repositories;


use App\Contracts\QuizQuestionsContract;

use App\Models\QuizQuestion;


class QuizQuestionsRepository implements QuizQuestionsContract
{


    /**
     * @var QuizQuestion
     */

    protected $question;

    /**
     * @param QuizQuestion $question
     */

    public function __construct(QuizQuestion  $question)
    {
        $this->question = $question;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->question->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->question
            ->where('id', $id)
            ->first();
    }



    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $question = new $this->question;

        if (!empty($data['type'])) {
            $question->type = $data['type'];
        }

        if (!empty($data['question_title']))
        {
            $question->question_title = $data['question_title'];
        }
        if (!empty($data['question_body']))
        {
            $question->question_body = $data['question_body'];
        }
        if (!empty($data['status']))
        {
            $question->status = $data['status'];
        }
        if (!empty($data['accreditation_quiz_id']))
        {
            $question->accreditation_quiz_id = $data['accreditation_quiz_id'];
        }
        $question->save();

        return $question->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        if(!empty($id))
        {
            $question = $this->question->find($id);

            if (!empty($data['type'])) {
                $question->type = $data['type'];
            }

            if (!empty($data['question_title']))
            {
                $question->question_title = $data['question_title'];
            }
            if (!empty($data['question_body']))
            {
                $question->question_body = $data['question_body'];
            }
            if (!empty($data['status']))
            {
                $question->status = true;
            }
            else
            {
                $question->status = false;
            }
            if (!empty($data['accreditation_quiz_id']))
            {
                $question->accreditation_quiz_id = $data['accreditation_quiz_id'];
            }

            $question->update();
        }

        return $question;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $quiz = $this->question->find($id);
        $quiz->delete();
        return $quiz;
    }



}
