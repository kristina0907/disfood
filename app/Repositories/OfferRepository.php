<?php


namespace App\Repositories;


use App\Contracts\OfferContract;
use App\Models\Offer;
use App\Models\User;


class OfferRepository implements OfferContract
{

    /**
     * @var Offer
     */

    protected $offer;

    /**
     * @var User
     */

    protected $user;

    /**
     * OfferRepository constructor.
     * @param Offer $offer
     */

    public function __construct(Offer $offer,User $user)
    {
        $this->offer = $offer;
        $this->user = $user;
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
            ->with(['product','organization','country','city','category','type'])
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
        $offer->category_id = $data['category_id'];
        $offer->type_id = $data['type_id'];
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
        $offer->category_id = $data['category_id'];
        $offer->type_id = $data['type_id'];
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

    /**
     * @param $id
     * @return mixed
     */

    public function getByUserId($id)
    {
        $orgs = $this->getUserOrganizationId($id);
        return $this->offer->whereIn('organization_id',$orgs)->with(['product','product.type','product.category'])->get();
    }

    /**
     * @param $id
     * @return array
     */

    private function getUserOrganizationId($id)
    {
        $user = $this->user->find($id);
        $orgs = array();
        if(!empty($user->organizations))
        {
            foreach ($user->organizations as $organization)
            {
                $orgs[] = $organization->id;
            }
        }
        return $orgs;
    }

    public function getOffersByCategory($category,$type = null,$product = null)
    {


        return $this->offer->where('category_id',$category)->when((integer) $type,function ($query) use ($type){
            $query->where('type_id',$type);
        })->with(['organization','product','category','type','country','city'])->get();

    }
}
