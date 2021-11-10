<?php

namespace App\Services;


use App\Repositories\CountryRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CountryService
{


    /**
     * @var CountryRepository
     */

    protected $countryRepository;


    /**
     * CountryService constructor.
     * @param CountryRepository $countryRepository
     */

    public function __construct(CountryRepository $countryRepository)
    {
        $this->countryRepository = $countryRepository;
    }

    /**
     * @param $req
     * @return mixed
     */

    public function searchByText($req)
    {
        return $this->countryRepository->searchByText($req);
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->countryRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveCountryData($data)
    {
        $validated = $data->validate([
            'title_ru' => 'required|string|max:255',
        ]);

        $result = $this->countryRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateCountryData($data,$id)
    {
        $validated = $data->validate([
            'title_ru' => 'required|string|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->countryRepository->update($data, $id);

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

    public function getCountryById($id)
    {
        $cat = $this->countryRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteCountryById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->countryRepository->delete($id);

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
