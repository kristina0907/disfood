<?php


namespace App\Repositories;

use App\Contracts\ProductContract;
use App\Models\Product;

class ProductRepository implements ProductContract
{
    /**
     * @var Product
     */

    protected $product;

    /**
     * CategoryRepository constructor.
     * @param Product $product
     */

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->product->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->product
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $product = new $this->product;

        $product->name = $data['name'];
        $product->description = $data['description'];
        if(!empty($data['category_id']))
        {
            $product->category_id = $data['category_id'];
        }
        if(!empty($data['type_id']))
        {
            $product->type_id = $data['type_id'];
        }
        $product->public = true;

        if($data->hasFile('image'))
        {
            $name = rand(0,10000).time();
            $extension = $data->image->extension();
            $data->image->storeAs('/public/images/products/', $name.".".$extension);
            $product->image = '/storage/images/products/'. $name.".".$extension;
        }

        $product->save();

        return $product->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $product = $this->product->find($id);

        $product->name = $data['name'];
        $product->description = $data['description'];

        if(!empty($data['category_id']))
        {
            $product->category_id = $data['category_id'];
        }

        if(!empty($data['type_id']))
        {
            $product->type_id = $data['type_id'];
        }

        //TODO вынести в отдельный класс или трейт логику работы с изображениями
        if($data->hasFile('image'))
        {
            $name = rand(0,10000).time();
            $extension = $data->image->extension();
            $data->image->storeAs('/public/images/products/', $name.".".$extension);
            $product->image = '/storage/images/products/'. $name.".".$extension;
        }

        $product->update();

        return $product;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $product = $this->product->find($id);
        $product->delete();

        return $product;
    }

    /**
     * @param $cat
     * @param $type
     * @return mixed
     */

    public function getProductsCatType($cat,$type=null)
    {
        return $this->product->where('category_id',$cat)->when((integer) $type,function ($query) use ($type){
            $query->where('type_id',$type);
        })->get();
    }


}
