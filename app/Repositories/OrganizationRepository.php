<?php


namespace App\Repositories;

use App\Contracts\OrganizationContract;
use App\Models\Organization;
use App\Models\OrganizationDocument;
use Illuminate\Support\Facades\Auth;

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
     * @return mixed
     */

    public function saveFromLk($data)
    {
        $organization = new $this->organization;
        $organization->name = $data->name;
        $organization->inn = $data->inn;
        $organization->bik = $data->bik;

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

        $organization->reason = 'ustav';
        if(Auth::user())
        {
            $organization->user_id = Auth::user()->id;
        }

        $organization->status_id = 1;
        if($data->hasFile('logo'))
        {
            $name = rand(0,10000).time();
            $extension = $data->logo->extension();
            $data->logo->storeAs('/public/images/logo/', $name.".".$extension);
            $organization->logo = '/storage/images/logo/'. $name.".".$extension;
        }


        $organization->save();


        if(!empty($data['files']))
        {
            $files = $this->createDocuments($data,$organization);
        }


        return $organization->fresh();
    }

    public function updateFromLk($data)
    {
        if(!empty($data->id))
        {
            $organization = $this->organization->find($data->id);
            $organization->name = $data->name;
            $organization->inn = $data->inn;
            $organization->bik = $data->bik;

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

            $organization->reason = 'ustav';
            if(Auth::user())
            {
                $organization->user_id = Auth::user()->id;
            }

            $organization->status_id = 1;
            if($data->hasFile('logo'))
            {
                $name = rand(0,10000).time();
                $extension = $data->logo->extension();
                $data->logo->storeAs('/public/images/logo/', $name.".".$extension);
                $organization->logo = '/storage/images/logo/'. $name.".".$extension;
            }


            $organization->save();


            if(!empty($data['files']))
            {
                $files = $this->createDocuments($data,$organization);
            }
            $organization->update();

            return $organization;
        }
    }

    /**
     * @param $data
     * @param $offer
     */

    private function createDocuments($data,$offer)
    {
        if(!empty($data['files']))
        {
            foreach ($data['files'] as $file)
            {
                $extension = $file->extension();
                $name = date('mdYHis') . uniqid();
                $path = '/storage/images/organizations/'. $offer->id .'/'. $name.'.' .$extension;
                $file->storeAs('/public/images/organizations/'. $offer->id .'/', $name.'.' .$extension);
                $this->attachDocument($offer,$path);
            }
        }
    }

    /**
     * @param $offer
     * @param $path
     */

    private function attachDocument($offer,$path)
    {
        if(!empty($offer) && !empty($path))
        {
            $doc = new OrganizationDocument();
            $doc->organization_id = $offer->id;
            $doc->path = $path;
            $doc->save();
        }
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
