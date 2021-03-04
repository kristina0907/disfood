<?php


namespace App\Repositories;


use App\Contracts\OfferContract;
use App\Models\Offer;


class OfferRepository implements OfferContract
{

    /**
     * @var Offer
     */

    protected $offer;

    /**
     * OfferRepository constructor.
     * @param Offer $offer
     */

    public function __construct(Offer $offer)
    {
        $this->offer = $offer;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->offer->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->offer
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        //dd($data['product_id']);
        $offer = new $this->offer;

        $offer->name = $data['name'];
        $offer->description = $data['description'];
        $offer->country_id = $data['country_id'];
        $offer->city_id = $data['city_id'];
        $offer->adress = $data['adress'];
        $offer->price = $data['price'];
        $offer->capacity = $data['capacity'];
        $offer->product_id = $data['product_id'];

        if (!empty($data['organization_id']))
        {
            $offer->organization_id = $data['organization_id'];
        }
        //dd($offer, $data);
        $offer->save();

        return $offer->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $offer = $this->offer->find($id);

        $offer->name = $data['name'];
        $offer->description = $data['description'];
        $offer->country_id = $data['country_id'];
        $offer->city_id = $data['city_id'];
        $offer->adress = $data['adress'];
        $offer->price = $data['price'];
        $offer->capacity = $data['capacity'];
        $offer->product_id = $data['product_id'];

        if (!empty($data['organization_id']))
        {
            $offer->organization_id = $data['organization_id'];
        }
        $offer->update();

        return $offer;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $offer = $this->offer->find($id);
        $offer->delete();

        return $offer;
    }



}
