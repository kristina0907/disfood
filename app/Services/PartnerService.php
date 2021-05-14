<?php

namespace App\Services;



use App\Repositories\BikRepository;
use App\Repositories\PartnerRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PartnerService
{


    /**
     * @var PartnerRepository
     */

    protected $partnerRepository;


    /**
     * PartnerService constructor.
     * @param PartnerRepository $partnerRepository
     */

    public function __construct(PartnerRepository  $partnerRepository)
    {
        $this->partnerRepository = $partnerRepository;

    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->partnerRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function savePartnerData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'image' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:2000',
            'description'  =>  'string'
        ]);

        $result = $this->partnerRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updatePartnerData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'image' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:2000',
            'description'  =>  'string'
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->partnerRepository->update($data, $id);

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

    public function getPartnerById($id)
    {
        $cat = $this->partnerRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deletePartnerById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->partnerRepository->delete($id);

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
