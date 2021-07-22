<?php

namespace App\Services;



use App\Repositories\OrderDocumentRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderDocumentService
{

    /**
     * @var OrderDocumentRepository
     */

    protected $orderDocumentRepository;

    /**
     * OrderDocumentService constructor.
     * @param OrderDocumentRepository $orderDocumentRepository
     */

    public function __construct(OrderDocumentRepository $orderDocumentRepository)
    {
        $this->orderDocumentRepository = $orderDocumentRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->orderDocumentRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveOrderData($data)
    {
        $validated = $data->validate([
            'name'            => 'required|string',
            'price'           => 'required',
        ]);

        $result = $this->orderDocumentRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateOrderData($data,$id)
    {
        $validated = $data->validate([
            'name'            => 'required|string',
            'price'           => 'required',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->orderDocumentRepository->update($data, $id);

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

    public function getOrderById($id)
    {
        $cat = $this->orderDocumentRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteOrderById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->orderDocumentRepository->delete($id);

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
