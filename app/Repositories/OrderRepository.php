<?php


namespace App\Repositories;


use App\Contracts\OrderContract;
use App\Models\Offer;
use App\Models\Order;


class OrderRepository implements OrderContract
{

    /**
     * @var Order
     */

    protected $order;

    /**
     * OrderRepository constructor.
     * @param Order $order
     */

    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->order->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->order
            ->where('id', $id)->with([
                'offer.product','status','organization','from','delivery','packages.package','typeDelivery','history.status',
            ])
            ->first();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getByUserId($id)
    {
        return $this->order
            ->where('user_id', $id)->with(['offer','offer.product','organization','delivery','status'])
            ->get();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        //dd($data);
        $order = new $this->order;
        $order->organization_id = $data['organization_id'];
        $order->user_id = $data['user_id'];
        $order->from_id = $data['from_id'];
        $order->to_id = $data['to_id'];
        $order->offer_id = $data['offer_id'];
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

        $order = $this->order->find($id);
        $order->organization_id = $data['organization_id'];
        $order->user_id = $data['user_id'];
        $order->from_id = $data['from_id'];
        $order->to_id = $data['to_id'];
        $order->offer_id = $data['offer_id'];
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

        $order = $this->order->find($id);
        $order->delete();

        return $order;
    }



}
