<?php


namespace App\Repositories;


use App\Contracts\OfferContract;
use App\Models\Offer;
use App\Models\OfferAdress;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Lang;
use MoveMoveIo\DaData\Enums\Language;
use MoveMoveIo\DaData\Facades\DaDataAddress;


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
            ->with(['organization','packings','type','adresses'])
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {

        $offer = new $this->offer;

        $offer->organization_id = $data['organization_id'];
        $offer->price = $data['price'];
        $offer->price_with_nds = $data['price_with_nds'];
        $offer->capacity = $data['capacity'];
        $offer->category_id = $data['category_id']['id'];
        $offer->type_id = $data['type_id']['id'];

        $offer->save();
        $adresses = $this->createAdresses($data);

        if(!empty($adresses))
        {
            $offer->adresses()->sync($adresses);
        }

        $filters = $this->createFilters($data,$offer);

        $packings = $this->createPackings($data,$offer);

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

        $offer->organization_id = $data['organization_id'];
        $offer->price = $data['price'];
        $offer->price_with_nds = $data['price_with_nds'];
        $offer->capacity = $data['capacity'];
        $offer->category_id = $data['category_id']['id'];
        $offer->type_id = $data['type_id']['id'];

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

        return $this->offer->whereIn('organization_id',$orgs)
            ->with(['organization','category','type','adresses'])->get();
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

    /**
     * @param $category
     * @param null $type
     * @param null $product
     * @return mixed
     */

    public function getOffersByCategory($category,$type = null,$product = null)
    {

        return $this->offer->where('category_id',$category)->when((integer) $type,function ($query) use ($type){
            $query->where('type_id',$type);
        })->with(['organization','category','type','adresses','packings','values.filter'])->get();

    }

    /**
     * @param $data
     * @param $offer
     */

    public function createPackings($data,$offer)
    {
        if(!empty($data['packings']))
        {
            foreach($data['packings'] as $pack)
            {
                $offer->packings()->attach($pack['id']);
            }
        }
    }

    /**
     * @param $data
     * @param $offer
     * @return bool
     */

    public function createFilters($data,$offer)
    {

        if(!empty($data['filters']))
        {
            foreach ($data['filters'] as $filter)
            {
                $rel = ['filter_id'=>$filter['filter'],'value_id'=>$filter['value']];
                $offer->filters()->attach($offer->id,$rel);
            }
        }
        return true;
    }

    /**
     * @param $data
     * @return array
     */

    private function createAdresses($data)
    {
        $output = array();
        if(!empty($data['adress']))
        {
            foreach ($data['adress'] as $adress)
            {

                $result = DaDataAddress::standardization($adress['adress'],1,Language::RU);
                if(!empty($result))
                {
                    foreach ($result as $adr)
                    {
                        $newAdr = new OfferAdress();
                        $newAdr->country_kladr_id = $adr['region_kladr_id'];
                        $newAdr->region_kladr_id = $adr['region_kladr_id'];
                        $newAdr->city_kladr_id = $adr['city_kladr_id'];
                        $newAdr->country_name = $adr['country'];
                        $newAdr->region_name = $adr['region_with_type'];
                        $newAdr->city_name = $adr['city'];
                        $newAdr->geo_lat = $adr['geo_lat'];
                        $newAdr->geo_lon = $adr['geo_lon'];
                        $newAdr->timezone = $adr['timezone'];
                        $newAdr->adress = $adr['source'];
                        $newAdr->save();
                        $output[] = $newAdr->id;
                    }
                }
            }
        }
        return $output;
    }
}
