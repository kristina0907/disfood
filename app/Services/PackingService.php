<?php

namespace App\Services;



use App\Repositories\PackingRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PackingService
{

    /**
     * @var PackingRepository
     */

    protected $packingRepository;


    /**
     * PackingService constructor.
     * @param PackingRepository $packingRepository
     */

    public function __construct(PackingRepository  $packingRepository)
    {
        $this->packingRepository = $packingRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->packingRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function savePackingData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'image' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:2000',
            'category' => 'required',
            'description'  =>  'string'
        ]);

        $result = $this->packingRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updatePackingData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'image' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:2000',
            'category' => 'required',
            'description'  =>  'string'
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->packingRepository->update($data, $id);

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

    public function getPackingById($id)
    {
        $cat = $this->packingRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deletePackingById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->packingRepository->delete($id);

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
