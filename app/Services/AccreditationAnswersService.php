<?php

namespace App\Services;



use App\Repositories\AccreditationAnswerRepository;
use App\Repositories\AccreditationRepository;

use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AccreditationAnswersService
{

    /**
     * @var AccreditationAnswerRepository
     */

    protected $accreditationRepository;

    /**
     * @param AccreditationAnswerRepository $accreditationRepository
     */


    public function __construct(AccreditationAnswerRepository  $accreditationRepository)
    {
        $this->accreditationRepository = $accreditationRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->accreditationRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        //dd($data);
        $validated = $data->validate([
            'question_id'        => 'required',
            'organization_id'    => 'required',
            'user_id'            => 'required',
            'value_id'            => 'required',
        ]);

        $result = $this->accreditationRepository->save($data);

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
            'question_id'        => 'required',
            'organization_id'    => 'required',
            'user_id'            => 'required',
            'value_id'            => 'required',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->accreditationRepository->update($data, $id);

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
        $cat = $this->accreditationRepository->getById($id);
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
                $category = $this->accreditationRepository->delete($id);

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
