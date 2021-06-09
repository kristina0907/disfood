<?php


namespace App\Repositories;

use App\Contracts\OrganizationContract;
use App\Models\Organization;

class OrganizationRepository implements OrganizationContract
{

    /**
     * @var Organization
     */

    protected $organization;

    /**
     * OrganizationRepository constructor.
     * @param Organization $organization
     */

    public function __construct(Organization $organization)
    {
        $this->organization = $organization;
    }

    /**
     * @param $req
     * @return mixed
     */

    public function findByText($req)
    {
        $searched = $this->organization->where('name','ILIKE','%'.$req.'%')->get()->toArray();
        return $searched;
    }

    /**
     * @param $inn
     * @return mixed
     */

    public function findByInn($inn)
    {
        $searched = $this->organization->where('inn',$inn)->first();
        return $searched;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->organization->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->organization
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $organization = new $this->organization;

        $organization->name = $data->name;
        $organization->inn = $data->inn;

        if (!empty($data->kpp)) {
            $organization->kpp = $data->kpp;
        }
        if (!empty($data->ogrn)) {
            $organization->ogrn = $data->ogrn;
        }
        $organization->adress = $data->adress;
        $organization->phone = $data->phone;
        $organization->bank_name = $data->bank_name;
        $organization->r_account = $data->r_account;
        $organization->kor_account = $data->kor_account;
        $organization->fio_ceo = $data->fio_ceo;

        if (!empty($data->reason) && (string)$data->reason == (string)'power_of_attorney') {
            if (!empty($data->number_power_of_attorney)) {
                $organization->number_power_of_attorney = $data->number_power_of_attorney;
            }
            if (!empty($data->date_power_of_attorney)) {
                $organization->date_power_of_attorney = $data->date_power_of_attorney;
            }
        }
        $organization->reason = $data->reason;
        $organization->user_id = $data->user_id;
        if (!empty($data->status_id))
        {
            $organization->status_id = $data->status_id;
        }
        $organization->save();

        return $organization->fresh();
    }

    /**
     * @param $data
     * @param $user
     * @return mixed
     */

    public function saveFromApi($data,$user)
    {
        $organization = new $this->organization;
        //dd($data['data']);
        $organization->name = $data['data']['name']['full_with_opf'];
        $organization->inn = $data['data']['inn'];

        if(!empty($data['data']['kpp']))
        {
            $organization->kpp = $data['data']['kpp'];
        }
        if(!empty($data['data']['ogrn']))
        {
            $organization->ogrn = $data['data']['ogrn'];
        }
        $organization->adress = $data['data']['address']['unrestricted_value'];
        if(!empty($data['data']['phones']))
        {
            $organization->phone = $data['data']['phones'];
        }
        if(!empty($data['data']['management']['name']))
        {
            $organization->fio_ceo  = $data['data']['management']['name'];
        }


        $organization->user_id = $user->id;
        $organization->save();

        return $organization->fresh();
    }


    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $organization = $this->organization->find($id);

        $organization->name = $data->name;
        $organization->inn = $data->inn;

        if(!empty($data->kpp))
        {
            $organization->kpp = $data->kpp;
        }
        if(!empty($data->ogrn))
        {
            $organization->ogrn = $data->ogrn;
        }
        $organization->adress = $data->adress;
        $organization->phone = $data->phone;
        $organization->bank_name = $data->bank_name;
        $organization->r_account = $data->r_account;
        $organization->kor_account = $data->kor_account;
        $organization->fio_ceo  = $data->fio_ceo;

        if(!empty($data->reason) && (string)$data->reason == (string)'power_of_attorney')
        {
            if(!empty($data->number_power_of_attorney))
            {
                $organization->number_power_of_attorney = $data->number_power_of_attorney;
            }
            if(!empty($data->date_power_of_attorney))
            {
                $organization->date_power_of_attorney = $data->date_power_of_attorney;
            }
        }
        $organization->reason = $data->reason;
        $organization->user_id = $data->user_id;
        if (!empty($data->status_id))
        {
            $organization->status_id = $data->status_id;
        }
        $organization->update();

        return $organization;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $organization = $this->organization->find($id);
        $organization->delete();

        return $organization;
    }



}
