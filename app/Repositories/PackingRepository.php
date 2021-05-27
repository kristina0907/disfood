<?php


namespace App\Repositories;

use App\Contracts\PackingContract;
use App\Models\Packing;

class PackingRepository implements PackingContract
{

    /**
     * @var Packing
     */

    protected $packing;

    /**
     * PackingRepository constructor.
     * @param Packing $packing
     */

    public function __construct(Packing $packing)
    {
        $this->packing = $packing;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->packing->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->packing
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $packing = new $this->packing;

        $packing->name = $data['name'];
        if (!empty($data['description'])) {
            $packing->description = $data['description'];
        }
        if($data->hasFile('image'))
        {
            $extension = $data->image->extension();
            $name = '/images/packing/'. date('mdYHis') . uniqid().".".$extension;
            $data->image->storeAs('/public', $name);
            $packing->image = $name;
        }
        $packing->save();
        if(!empty($data['category']))
        {
            $packing->categories()->sync($data['category']);
        }
        return $packing->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $packing = $this->packing->find($id);

        $packing->name = $data['name'];

        if (!empty($data['description'])) {
            $packing->description = $data['description'];
        }
        if($data->hasFile('image'))
        {
            $extension = $data->image->extension();
            $name = '/images/packing/'. date('mdYHis') . uniqid().".".$extension;
            $data->image->storeAs('/public', $name);
            $packing->image = $name;
        }
        if(empty($data['active']))
        {
            $packing->active = false;
        }
        else{
            $packing->active = true;
        }
        $packing->update();
        if(!empty($data['category']))
        {
            $packing->categories()->sync($data['category']);
        }
        return $packing;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $packing = $this->packing->find($id);
        $packing->delete();

        return $packing;
    }



}
