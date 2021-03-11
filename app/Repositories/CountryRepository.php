<?php


namespace App\Repositories;


use App\Contracts\CountryContract;
use App\Models\Country;


class CountryRepository implements CountryContract
{


    /**
     * @var Country
     */

    protected $country;

    /**
     * CountryRepository constructor.
     * @param Country $country
     */

    public function __construct(Country $country)
    {
        $this->country = $country;
    }


    public function searchByText($req)
    {
        $searched = $this->country->where('title_ru','ILIKE','%'.$req.'%')->get();
        return $searched;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->country->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->country
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $country = new $this->country;

        $country->title_ru = $data['title_ru'];

        $country->save();

        return $country->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $country = $this->country->find($id);

        $country->title_ru = $data['title_ru'];

        $country->update();

        return $country;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $country = $this->country->find($id);
        $country->delete();

        return $country;
    }



}
