<?php

namespace App\Services;



use App\Repositories\OrderHistoryRepository;
use App\Repositories\OrderRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderHistoryService
{

    /**
     * @var OrderHistoryRepository
     */

    protected $orderRepository;

    /**
     * OrderHistoryService constructor.
     * @param OrderHistoryRepository $orderRepository
     */

    public function __construct(OrderHistoryRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->orderRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveOrderData($data)
    {
        $validated = $data->validate([
            'order_id'   => 'required|integer',
            'status_id'  => 'required|integer',
        ]);

        $result = $this->orderRepository->save($data);

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
            'order_id'   => 'required|integer',
            'status_id'  => 'required|integer',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->orderRepository->update($data, $id);

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
        $cat = $this->orderRepository->getById($id);
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
                $category = $this->orderRepository->delete($id);

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
