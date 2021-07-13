<?php

namespace App\Services;



use App\Repositories\OfferAdressesRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OfferAdressesService
{

    /**
     * @var OfferAdressesRepository
     */

    protected $offerAdressesRepository;

    /**
     * OfferAdressesService constructor.
     * @param OfferAdressesRepository $offerAdressesRepository
     */

    public function __construct(OfferAdressesRepository $offerAdressesRepository)
    {
        $this->offerAdressesRepository = $offerAdressesRepository;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->offerAdressesRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {

        $result = $this->offerAdressesRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateData($data,$id)
    {

        DB::beginTransaction();

        try {
            $cat = $this->offerAdressesRepository->update($data, $id);

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
        $cat = $this->offerAdressesRepository->getById($id);
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
                $category = $this->offerAdressesRepository->delete($id);

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
