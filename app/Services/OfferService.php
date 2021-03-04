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
     * @param $data
     * @return mixed
     */

    public function saveOfferData($data)
    {
        $validated = $data->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'product_id'    =>'required|integer',
            'organization_inn'=>'required|integer',
            'country_id'=>'required|integer',
            'city_id'=>'required|integer',
            'adress'=>'required|string',
            'price'=>'required|integer',
            'capacity'=>'required|integer'


        ]);

        if (!empty($data['organization_inn']))
        {
            $organization = Organization::where('inn',$data['organization_inn'])->first();
            if(!empty($organization->id));
            {
                $data['organization_id'] = $organization->id;
            }
        }

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
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'product_id'    =>'required|integer',
            'organization_inn'=>'required|integer',
            'country_id'=>'required|integer',
            'city_id'=>'required|integer',
            'adress'=>'required|string',
            'price'=>'required|integer',
            'capacity'=>'required|integer'

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



}