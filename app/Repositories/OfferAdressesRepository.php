<?php


namespace App\Repositories;



use App\Contracts\OfferAdresessContract;
use App\Models\OfferAdress;


class OfferAdressesRepository implements OfferAdresessContract
{

    /**
     * @var OfferAdress
     */

    protected $adress;

    /**
     * OfferAdressesRepository constructor.
     * @param OfferAdress $adress
     */

    public function __construct(OfferAdress $adress)
    {
        $this->adress = $adress;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->adress->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->adress
            ->where('id', $id)
            ->first();
    }

    public function getByIdWithRelations($id)
    {
        return $this->adress
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $adress = new $this->adress;

        $adress->country_id = $data['country_id'];
        $adress->city_id = $data['city_id'];
        if(!empty($data['adress']))
        {
            $adress->adress = $data['adress'];
        }
        $adress->save();

        return $adress->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $adress= $this->adress->find($id);


        $adress->country_id = $data['country_id'];
        $adress->city_id = $data['city_id'];

        if(!empty($data['adress']))
        {
            $adress->adress = $data['adress'];
        }

        $adress->update();

        return $adress;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $chatroom= $this->adress->find($id);
        $chatroom->delete();

        return $chatroom;
    }


}
