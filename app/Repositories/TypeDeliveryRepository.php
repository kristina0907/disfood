<?php


namespace App\Repositories;



use App\Contracts\TypeDeloveryContract;
use App\Models\TypeDelivery;


class TypeDeliveryRepository implements TypeDeloveryContract
{


    /**
     * @var TypeDelivery
     */

    protected $type;


    /**
     * TypeDeliveryRepository constructor.
     * @param TypeDelivery $type
     */

    public function __construct(TypeDelivery $type)
    {
        $this->type = $type;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->type->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->type
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $type= new $this->type;
        $type->name = $data['name'];
        $type->active = true;

        $type->save();

        return $type->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, int $id)
    {

        $type= $this->type->find($id);

        $type->name = $data['name'];
        $type->slug = $data['slug'];

        if(empty($data['active']))
        {
            $type->active = false;
        }
        else{
            $type->active = true;
        }
        $type->update();

        return $type;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete(int $id)
    {

        $type = $this->type->find($id);
        $type->delete();

        return true;
    }



}
