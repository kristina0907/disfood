<?php


namespace App\Repositories;

use App\Contracts\QuizContract;
use App\Models\AccreditationQuiz;


class QuizRepository implements QuizContract
{

    /**
     * @var AccreditationQuiz
     */

    protected $quiz;

    /**
     * @param AccreditationQuiz $quiz
     */

    public function __construct(AccreditationQuiz  $quiz)
    {
        $this->quiz = $quiz;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->quiz->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->quiz
            ->where('id', $id)
            ->first();
    }

    public function getByIdWithRelations($id)
    {
        return $this->quiz
            ->where('id', $id)
            ->with('questions.values')
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $quiz = new $this->quiz;

        if (!empty($data['name'])) {
            $quiz->name = $data['name'];
        }

        if (!empty($data['status']))
        {
            $quiz->status = $data['status'];
        }

        $quiz->save();

        return $quiz->fresh();
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
            $quiz = $this->quiz->find($id);
            if (!empty($data['name'])) {
                $quiz->name = $data['name'];
            }

            if (!empty($data['status']))
            {
                $quiz->status = true;
            }
            else
            {
                $quiz->status = false;
            }


            $quiz->update();
        }

        return $quiz;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $quiz = $this->quiz->find($id);
        $quiz->delete();
        return $quiz;
    }



}
