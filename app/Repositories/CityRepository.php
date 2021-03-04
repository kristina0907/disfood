<?php


namespace App\Repositories;


use App\Contracts\CountryContract;
use App\Models\City;
use App\Models\Country;


class CityRepository implements CountryContract
{


    /**
     * @var City
     */

    protected $city;


    /**
     * CityRepository constructor.
     * @param City $city
     */

    public function __construct(City $city)
    {
        $this->city = $city;
    }


    public function searchByText($req)
    {
        $searched = $this->city->where('title_ru','ILIKE','%'.$req.'%')->get();
        return $searched;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->city->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->city
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $city = new $this->city;

        $city->title_ru = $data['title_ru'];

        $city->save();

        return $city->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $city = $this->city->find($id);

        $city->title_ru = $data['title_ru'];

        $city->update();

        return $city;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $city = $this->city->find($id);
        $city->delete();

        return $city;
    }



}
