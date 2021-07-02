<?php

namespace App\Services;

use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use InvalidArgumentException;

class ProductService
{


    /**
     * @var ProductRepository
     */

    protected $productRepository;


    /**
     * ProductService constructor.
     * @param ProductRepository $productRepository
     */

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->productRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveProductData($data)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
            'image' => 'mimes:jpeg,png|max:1024|required',
            'description' => 'string',
            'category_id' => 'integer',
            'type_id' => 'required|string|max:255',
        ]);

        $result = $this->productRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateProductData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
            'image' => 'mimes:jpeg,png|max:1024',
            'description' => 'string',
            'category_id' => 'integer',
            'type_id' => 'required|string|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->productRepository->update($data, $id);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $cat;


    }

    /**
     * @param $id
     * @return mixed
     */

    public function getProductById($id)
    {
        $product = $this->productRepository->getById($id);
        return $product;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteProductFromId($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $product = $this->productRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $product;
        }
    }

    /**
     * @param $cat
     * @param null $type
     * @return mixed
     */

    public function getProductsByCatsAndTypes($cat,$type=null)
    {
        return  $this->productRepository->getProductsCatType($cat, $type);
    }

    /**
     * @param $req
     * @return mixed
     */

    public function searchByText($req)
    {
        return $this->productRepository->searchByText($req);
    }


}
