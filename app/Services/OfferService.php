<?php

namespace App\Services;


use App\Models\Organization;
use App\Repositories\OfferRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OfferService
{

    /**
     * @var OfferRepository
     */

    protected $offerRepository;


    /**
     * OfferService constructor.
     * @param OfferRepository $offerRepository
     */

    public function __construct(OfferRepository $offerRepository)
    {
        $this->offerRepository = $offerRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->offerRepository->getAll();
    }

    /**
     * @param $search
     * @return mixed
     */

    public function searchByText($search)
    {
        return $this->offerRepository->searchByText($search);
    }

    /**
     * @param $data
     * @return mixed
     */


    public function saveOfferData($data)
    {
        $validated = $data->validate([
            'organization_id'    =>'required|integer',
            'price'              =>'required',
            'price_with_nds'     =>'required',
            'capacity'           =>'required|integer',
            'category_id'        =>'required',
            'type_id'            => 'required'

        ]);

        $result = $this->offerRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateOfferData($data,$id)
    {
        $validated = $data->validate([
            'organization_id'    =>'required|integer',
            'price'              =>'required',
            'price_with_nds'     =>'required',
            'capacity'           =>'required|integer',
            'category_id'        =>'required',
            'type_id'            => 'required'

        ]);

        DB::beginTransaction();

        try {
            $cat = $this->offerRepository->update($data, $id);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $cat;
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateOfferDataFromLk($data,$id)
    {

        DB::beginTransaction();

        try {
            $cat = $this->offerRepository->update($data, $id);

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

    public function getOfferById($id)
    {
        $cat = $this->offerRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteOfferById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->offerRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $category;
        }

    }

    /**
     * @param $id
     * @return mixed
     */

    public function getOffersByUserId($id)
    {

        return $this->offerRepository->getByUserId($id);
    }

    /**
     * @param $category
     * @param null $type
     * @return mixed
     */

    public function getOffersByCategory($category,$type=null)
    {
        if(!empty($category))
        {
            return $this->offerRepository->getOffersByCategory($category,$type);
        }
    }

}
