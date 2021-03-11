<?php


namespace App\Repositories;

use App\Contracts\CartContract;
use App\Models\Cart;
use App\Models\Category;

class CartRepository implements CartContract
{

    /**
     * @var Cart
     */

    protected $cart;


    /**
     * CartRepository constructor.
     * @param Cart $cart
     */

    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->cart->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->cart
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $cart = new $this->cart;

        $cart->user_id = $data['user_id'];

        $cart->save();

        return $cart->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $cart = $this->cart->find($id);

        $cart->user_id = $data['user_id'];

        $cart->update();

        return $cart;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $cart = $this->cart->find($id);
        $cart->delete();

        return $cart;
    }



}
