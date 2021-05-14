<?php


namespace App\Repositories;

use App\Contracts\PartnerContract;
use App\Models\Partner;

class PartnerRepository implements PartnerContract
{

    /**
     * @var Partner
     */

    protected $partner;

    /**
     * PartnerRepository constructor.
     * @param Partner $partner
     */

    public function __construct(Partner $partner)
    {
        $this->partner = $partner;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->partner->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->partner
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $partner = new $this->partner;

        $partner->name = $data['name'];

        if (!empty($data['description'])) {
            $partner->description = $data['description'];
        }
        if($data->hasFile('image'))
        {
            $extension = $data->image->extension();
            $name = '/images/partners/'. date('mdYHis') . uniqid().".".$extension;
            $data->image->storeAs('/public', $name);
            $partner->image = $name;
        }
        $partner->save();

        return $partner->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $partner = $this->partner->find($id);

        $partner->name = $data['name'];
        if (!empty($data['description'])) {
            $partner->description = $data['description'];
        }
        if($data->hasFile('image'))
        {
            $extension = $data->image->extension();
            $name = '/images/partners/'. date('mdYHis') . uniqid().".".$extension;
            $data->image->storeAs('/public', $name);
            $partner->image = $name;
        }
        if(empty($data['active']))
        {
            $partner->active = false;
        }
        else{
            $partner->active = true;
        }
        $partner->update();

        return $partner;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $partner = $this->partner->find($id);
        $partner->delete();

        return $partner;
    }



}
