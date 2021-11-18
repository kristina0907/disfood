<?php

namespace App\Services;




use App\Repositories\QuizQuestionsValuesRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuizQuestionsValuesService
{


    /**
     * @var QuizQuestionsValuesRepository
     */

    protected $valueRepository;

    /**
     * @param QuizQuestionsValuesRepository $valueRepository
     */

    public function __construct(QuizQuestionsValuesRepository  $valueRepository)
    {
        $this->valueRepository = $valueRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->valueRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $validated = $data->validate([
            'value_name'               => 'required',
            'question_id'               => 'required',
        ]);

        $result = $this->valueRepository->save($data);

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
            'value_name'         => 'required',
            'question_id'        => 'required',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->valueRepository->update($data, $id);

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
        $cat = $this->valueRepository->getById($id);
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
                $category = $this->valueRepository->delete($id);

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
