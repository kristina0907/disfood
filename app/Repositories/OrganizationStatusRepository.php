<?php


namespace App\Repositories;

use App\Contracts\OrganizationContract;
use App\Contracts\OrganizationStatusContract;
use App\Models\Organization;
use App\Models\OrganizationStatus;

class OrganizationStatusRepository implements OrganizationStatusContract
{

    /**
     * @var OrganizationStatus
     */

    protected $status;

    /**
     * OrganizationStatusRepository constructor.
     * @param OrganizationStatus $status
     */

    public function __construct(OrganizationStatus $status)
    {
        $this->status = $status;
    }

    /**
     * @param $req
     * @return mixed
     */

    public function findByText($req)
    {
        $searched = $this->status->where('name','ILIKE','%'.$req.'%')->get()->toArray();
        return $searched;
    }



    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->status->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->status
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $status = new $this->status;

        $status->name = $data->name;

        if(!empty($data->active))
        {
            $status->active = $data->active;
        }

        $status->save();

        return $status->fresh();
    }


    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $status = $this->status->find($id);

        $status->name = $data->name;

        if(!empty($data->active))
        {
            $status->active = $data->active;
        }

        $status->update();

        return $status;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $organization = $this->status->find($id);
        $organization->delete();

        return $organization;
    }



}
