<?php


namespace App\Repositories;

use App\Contracts\AccreditationContract;
use App\Models\Accreditation;


class AccreditationRepository implements AccreditationContract
{


    /**
     * @var Accreditation
     */

    protected $accreditation;


    /**
     * @param Accreditation $accreditation
     */

    public function __construct(Accreditation  $accreditation)
    {
        $this->accreditation = $accreditation;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->accreditation->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->accreditation
            ->where('id', $id)
            ->first();
    }



    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $accreditation = new $this->accreditation;

        if (!empty($data['name'])) {
            $accreditation->name = $data['name'];
        } else {
            $accreditation->name = 'Аккредитация организации ID ' . $data['organization_id'];
        }

        $accreditation->organization_id = $data['organization_id'];
        $accreditation->user_id = $data['user_id'];
        if (!empty($data['complete_client']))
        {
            $accreditation->complete_client = $data['complete_client'];
        }
        if(!empty($data['complete_prodavec']))
        {
            $accreditation->complete_prodavec = $data['complete_prodavec'];
        }

        $accreditation->save();

        return $accreditation->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        if(!empty($id))
        {
            $accreditation = $this->accreditation->find($id);
            if (!empty($data['name'])) {
                $accreditation->name = $data['name'];
            } else {
                $accreditation->name = 'Аккредитация организации ID ' . $data['organization_id'];
            }

            $accreditation->organization_id = $data['organization_id'];
            $accreditation->user_id = $data['user_id'];
            if (!empty($data['complete_client']))
            {
                $accreditation->complete_client = $data['complete_client'];
            }
            else
            {
                $accreditation->complete_client = false;
            }
            if(!empty($data['complete_prodavec']))
            {
                $accreditation->complete_prodavec = $data['complete_prodavec'];
            }
            else
            {
                $accreditation->complete_prodavec = false;
            }

            $accreditation->update();
        }

        return $accreditation;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $accreditation = $this->accreditation->find($id);
        $accreditation->delete();
        return $accreditation;
    }



}
