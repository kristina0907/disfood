<?php

namespace App\Services;



use App\Repositories\AccreditationRepository;
use App\Repositories\BikRepository;
use App\Repositories\QuizRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuizService
{


    /**
     * @var QuizRepository
     */

    protected $quizRepository;

    /**
     * @param QuizRepository $quizRepository
     */

    public function __construct(QuizRepository  $quizRepository)
    {
        $this->quizRepository = $quizRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->quizRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $validated = $data->validate([
            'name'               => 'required',
        ]);

        $result = $this->quizRepository->save($data);

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
            'name'               => 'required',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->quizRepository->update($data, $id);

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
        $cat = $this->quizRepository->getById($id);
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
                $category = $this->quizRepository->delete($id);

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
