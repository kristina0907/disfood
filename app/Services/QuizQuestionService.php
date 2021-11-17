<?php

namespace App\Services;




use App\Repositories\QuizQuestionsRepository;
use App\Repositories\QuizRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuizQuestionService
{


    /**
     * @var QuizQuestionsRepository
     */

    protected $questionRepository;


    /**
     * @param QuizQuestionsRepository $questionRepository
     */

    public function __construct(QuizQuestionsRepository  $questionRepository)
    {
        $this->questionRepository = $questionRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->questionRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $validated = $data->validate([
            'type'           => 'required',
            'question_title' => 'required',
            'question_body'  => 'required',
        ]);

        $result = $this->questionRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data,$id)
    {
        $validated = $data->validate([
            'type'           => 'required',
            'question_title' => 'required',
            'question_body'  => 'required',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->questionRepository->update($data, $id);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        $cat = $this->questionRepository->getById($id);
        return $cat;
    }


    /**
     * @param $id
     * @return mixed
     */

    public function deleteById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->questionRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $category;
        }

    }



}
