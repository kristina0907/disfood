<?php

namespace App\Services;



use App\Repositories\AccreditationRepository;
use App\Repositories\BikRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AccreditationService
{

    /**
     * @var AccreditationRepository
     */

    protected $accreditationRepository;


    /**
     * @param AccreditationRepository $accreditationRepository
     */

    public function __construct(AccreditationRepository  $accreditationRepository)
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
        $validated = $data->validate([
            'name'               => 'required',
            'organization_id'    => 'required',
            'user_id'            => 'required',
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
            'name'               => 'required',
            'organization_id'    => 'required',
            'user_id'            => 'required',
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
