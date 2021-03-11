<?php

namespace App\Services;




use App\Repositories\OrderStatusRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderStatusService
{


    protected $statusRepository;



    public function __construct(OrderStatusRepository $statusRepository)
    {
        $this->statusRepository = $statusRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->statusRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveStatusData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'slug'=>  'unique:order_statuses,slug,',
        ]);

        $result = $this->statusRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateStatusData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'slug'=>  'unique:order_statuses,slug,'.$id,
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->statusRepository->update($data, $id);

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

    public function getStatusById($id)
    {
        $cat = $this->statusRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteStatusById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->statusRepository->delete($id);

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
