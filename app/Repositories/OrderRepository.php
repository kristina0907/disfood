<?php


namespace App\Repositories;


use App\Contracts\OrderContract;
use App\Models\Offer;
use App\Models\Order;
use App\Models\TypePackageOrder;


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
                'offer.type','status','organization','from','delivery','packages.package','typeDelivery','history.status',
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
            ->where('user_id', $id)->with(['offer','offer.type','organization','delivery','status','packages'])
            ->get();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
       // dd($data);
        $order = new $this->order;
        $order->organization_id = $data['organization_id'];
        $order->user_id = $data['user_id'];
        if (!empty($data['from_id']) && !empty($data['to_id'])) {
            $order->from_id = $data['from_id'];
            $order->to_id = $data['to_id'];
        }
        $order->summ = $data['summ'];
        $order->capacity = $data['volume'];
        $order->price = $data['price'];
        $order->with_nds = $data['price_with_nds'];
        if (is_array($data['to_id']))
        {
            $order->to_id = $data['to_id']['value'];
        }

        $order->offer_id = $data['offer_id'];
        $order->status_id = $data['status_id'];
        $order->save();

        if(!empty($data['packings']) && count($data['packings']) > 0)
        {
            foreach ($data['packings'] as $packing)
            {
                $pack = new TypePackageOrder();
                $pack->order_id = $order->id;
                $pack->offer_id = $order->offer_id;
                $pack->package_id = $packing['package']['id'];
                $pack->capacity = $packing['value'];
                $pack->price = $order->price;
                $pack->save();
            }
        }

        if(!empty($data['documents']) && count($data['documents']) > 0)
        {
            $ids = array();
            foreach ($data['documents'] as $doc)
            {
               // dd($doc);
                $ids[] = $doc['id'];
            }
            $order->documents()->sync($ids);
        }

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
        if(!empty($data['from_id']) && !empty($data['to_id']))
        {
            $order->from_id = $data['from_id'];
            $order->to_id = $data['to_id'];
        }

        $order->summ = $data['summ'];
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
