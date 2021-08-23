<?php


namespace App\Repositories;

use App\Contracts\TypeProductContract;
use App\Models\TypeProduct;

class TypeProductRepository implements TypeProductContract
{


    /**
     * @var TypeProduct
     */

    protected $type;


    /**
     * TypeProductRepository constructor.
     * @param TypeProduct $type
     */

    public function __construct(TypeProduct  $type)
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->type->with('filters.values')->get();
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
     * @param $id
     * @return mixed
     */

    public function getByCatId($cat_id)
    {
        return $this->type
            ->where('category_id',$cat_id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $type = new $this->type;

        $type->name = $data->name;
        if(!empty($data->category_id))
        {
            $type->category_id = $data->category_id;
        }
        if($data->hasFile('image'))
        {
            $name = rand(0,10000).time();
            $extension = $data->image->extension();
            $data->image->storeAs('/public/images/types/', $name.".".$extension);
            $type->image = '/storage/images/types/'. $name.".".$extension;

           /* $extension = $data->image->extension();
            $data->image->storeAs('/public/images/types', $data['name'].".".$extension);
            $type->image = '/public/images/types'. $data['name'].".".$extension;*/
        }
        $type->save();

        return $type->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $type = $this->type->find($id);

        $type->name = $data->name;
        if(!empty($data->category_id))
        {
            $type->category_id = $data->category_id;
        }
        if($data->hasFile('image'))
        {
            $extension = $data->image->extension();
            $data->image->storeAs('/storage/images/types/', $data['name'].".".$extension);
            $type->image = '/storage/images/types/'. $data['name'].".".$extension;
        }
        $type->update();

        return $type;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {
        $type = $this->type->find($id);
        $type->delete();

        return $type;
    }



}
