<?php


namespace App\Repositories;

use App\Contracts\CategoryContract;
use App\Contracts\OrderStatusContract;
use App\Models\Category;
use App\Models\OrderStatus;

class OrderStatusRepository implements OrderStatusContract
{

    /**
     * @var OrderStatus
     */

    protected $status;

    /**
     * OrderStatusRepository constructor.
     * @param OrderStatus $status
     */

    public function __construct(OrderStatus $status)
    {
        $this->status = $status;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->status->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->status
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $status= new $this->status;
        $status->name = $data['name'];
        $status->save();

        return $status->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $status = $this->status->find($id);

        $status->name = $data->name;
        if(!empty($data->slug))
        {
            $status->slug = $data->slug;
        }

        $status->update();

        return $status;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $status = $this->status->find($id);
        $status->delete();

        return $status;
    }



}
