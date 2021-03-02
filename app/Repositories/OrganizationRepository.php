<?php


namespace App\Repositories;

use App\Contracts\OrganizationContract;
use App\Models\Organization;

class OrganizationRepository implements OrganizationContract
{


    protected $organization;


    public function __construct(Organization $organization)
    {
        $this->organization = $organization;
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
