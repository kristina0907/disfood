<?php

namespace App\Services;



use App\Repositories\CityRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CityService
{

    /**
     * @var CityRepository
     */

    protected $cityRepository;

    /**
     * CityService constructor.
     * @param CityRepository $cityRepository
     */

    public function __construct(CityRepository $cityRepository)
    {
        $this->cityRepository = $cityRepository;
    }

    public function searchByText($req)
    {
        return $this->cityRepository->searchByText($req);
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->cityRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveCityData($data)
    {
        $validated = $data->validate([
            'title_ru' => 'required|string|max:255',
        ]);

        $result = $this->cityRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateCityData($data,$id)
    {
        $validated = $data->validate([
            'title_ru' => 'required|string|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->cityRepository->update($data, $id);

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

    public function getCityById($id)
    {
        $cat = $this->cityRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteCityById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $city = $this->cityRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $city;
        }

    }



}
