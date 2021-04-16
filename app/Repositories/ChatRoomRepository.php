<?php


namespace App\Repositories;

use App\Contracts\CategoryContract;

use App\Models\ChatRoom;

class ChatRoomRepository implements CategoryContract
{

    /**
     * @var ChatRoom
     */

    protected $chatroom;

    /**
     * ChatRoomRepository constructor.
     * @param ChatRoom $chatroom
     */

    public function __construct(ChatRoom $chatroom)
    {
        $this->chatroom = $chatroom;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->chatroom->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->chatroom
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $chatroom = new $this->chatroom;

        $chatroom->name = $data['name'];

        if(!empty($data['user_id']))
        {
            $chatroom->user_id = $data['user_id'];
        }
        if(!empty($data['manager_id']))
        {
            $chatroom->manager_id = $data['manager_id'];
        }
        if(!empty($data['offer_id']))
        {
            $chatroom->offer_id = $data['offer_id'];
        }
        $chatroom->save();

        return $chatroom->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $chatroom= $this->chatroom->find($id);

        $chatroom->name = $data['name'];

        if(!empty($data['user_id']))
        {
            $chatroom->user_id = $data['user_id'];
        }
        if(!empty($data['manager_id']))
        {
            $chatroom->manager_id = $data['manager_id'];
        }
        if(!empty($data['offer_id']))
        {
            $chatroom->offer_id = $data['offer_id'];
        }

        $chatroom->update();

        return $chatroom;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $chatroom= $this->chatroom->find($id);
        $chatroom->delete();

        return $chatroom;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getByOfferId($id)
    {
        return $this->chatroom->where('offer_id',$id)->get();
    }

}
