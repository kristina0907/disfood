<?php


namespace App\Repositories;

use App\Contracts\BikContract;
use App\Models\Bik;

class BikRepository implements BikContract
{

    /**
     * @var Bik
     */

    protected $bik;

    /**
     * BikRepository constructor.
     * @param Bik $bik
     */

    public function __construct(Bik  $bik)
    {
        $this->bik = $bik;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->bik->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->bik
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getByBik($id)
    {
        return $this->bik
            ->where('bik', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $bik = new $this->bik;
        if(!empty($data['bik']))
        {
            $bik->bik = $data['bik'];
        }
        if(!empty($data['ks']))
        {
            $bik->ks = $data['ks'];
        }
        if(!empty($data['name']))
        {
            $bik->name = $data['name'];
        }
        if(!empty($data['namemini']))
        {
            $bik->namemini = $data['namemini'];
        }
        if(!empty($data['index']))
        {
            $bik->index = $data['index'];
        }
        if(!empty($data['city']))
        {
            $bik->city = $data['city'];
        }
        if(!empty($data['adress']))
        {
            $bik->adress = $data['adress'];
        }
        if(!empty($data['phone']))
        {
            $bik->phone = $data['phone'];
        }
        if(!empty($data['okato']))
        {
            $bik->okato = $data['okato'];
        }
        if(!empty($data['okpo']))
        {
            $bik->okpo = $data['okpo'];
        }
        if(!empty($data['regnum']))
        {
            $bik->regnum = $data['regnum'];
        }
        if(!empty($data['srok']))
        {
            $bik->srok = $data['srok'];
        }
        if(!empty($data['dateadd']))
        {
            $bik->dateadd = $data['dateadd'];
        }
        if(!empty($data['datechange']))
        {
            $bik->dateadd = $data['datechange'];
        }

        $bik->save();

        return $bik->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $bik = $this->bik->find($id);

        $bik->bik = $data['bik'];
        $bik->ks = $data['ks'];
        $bik->name = $data['name'];
        $bik->namemini = $data['namemini'];
        $bik->index = $data['index'];
        $bik->city = $data['city'];
        $bik->adress = $data['adress'];
        $bik->phone = $data['phone'];
        $bik->okato = $data['okato'];
        $bik->okpo = $data['okpo'];
        $bik->regnum = $data['regnum'];
        $bik->srok = $data['srok'];
        $bik->dateadd = $data['dateadd'];
        $bik->datechange = $data['datechange'];

        $bik->update();

        return $bik;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $bik = $this->bik->find($id);
        $bik->delete();

        return $bik;
    }



}
