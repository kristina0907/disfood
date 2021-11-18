<?php


namespace App\Repositories;


use App\Contracts\QuizQuestionValueContract;
use App\Models\QuizQuestionValue;


class QuizQuestionsValuesRepository implements QuizQuestionValueContract
{

    /**
     * @var QuizQuestionValue
     */

    protected $value;

    /**
     * @param QuizQuestionValue $value
     */

    public function __construct(QuizQuestionValue  $value)
    {
        $this->value = $value;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->value->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->value
            ->where('id', $id)
            ->first();
    }



    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $value = new $this->value;

        if (!empty($data['value_name']))
        {
            $value->value_name = $data['value_name'];
        }

        if (!empty($data['active']))
        {
            $value->active = true;
        }
        else
        {
            $value->active = false;
        }
        if (!empty($data['question_id']))
        {
            $value->question_id = $data['question_id'];
        }
        $value->save();

        return $value->fresh();
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
            $value = $this->value->find($id);
            if (!empty($data['value_name']))
            {
                $value->value_name = $data['value_name'];
            }

            if (!empty($data['active']))
            {
                $value->active = true;
            }
            else
            {
                $value->active = false;
            }
            if (!empty($data['question_id']))
            {
                $value->question_id = $data['question_id'];
            }

            $value->update();
        }

        return $value;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $quiz = $this->value->find($id);
        $quiz->delete();
        return $quiz;
    }



}
