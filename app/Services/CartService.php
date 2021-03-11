<?php

namespace App\Services;


use App\Repositories\CartRepository;
use App\Repositories\CategoryRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CartService
{


    protected $cartRepository;



    public function __construct(CartRepository $cartRepository)
    {
        $this->cartRepository = $cartRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->cartRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveCartData($data)
    {
        $validated = $data->validate([
            'user_id' => 'required|integer',
        ]);

        $result = $this->cartRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateCartData($data,$id)
    {
        $validated = $data->validate([
            'user_id' => 'required|integer',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->cartRepository->update($data, $id);

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

    public function getCartById($id)
    {
        $cat = $this->cartRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteCartById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->cartRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $category;
        }

    }


}
