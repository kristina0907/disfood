<?php


namespace App\Repositories;



use App\Contracts\OrderHistoryContract;

use App\Models\Order;
use App\Models\OrderHistory;


class OrderHistoryRepository implements OrderHistoryContract
{


    /**
     * @var OrderHistory
     */

    protected $history;


    /**
     * OrderHistoryRepository constructor.
     * @param OrderHistory $history
     */

    public function __construct(OrderHistory $history)
    {
        $this->history = $history;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->history->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->history
            ->where('id', $id)->with([
               'order','status'
            ])
            ->first();
    }


    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        //dd($data);
        $order = new $this->history;
        $order->order_id = $data['order_id'];
        $order->status_id = $data['status_id'];
        $order->save();

        return $order->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $order = $this->history->find($id);
        $order->order_id = $data['order_id'];
        $order->status_id = $data['status_id'];
        $order->update();

        return $order;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $order = $this->history->find($id);
        $order->delete();

        return $order;
    }



}
