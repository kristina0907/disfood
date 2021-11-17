<?php


namespace App\Repositories;


use App\Contracts\MessageContract;
use App\Models\Message;


class MessageRepository implements MessageContract
{

    /**
     * @var Message
     */

    protected $message;

    /**
     * MessageRepository constructor.
     * @param Message $message
     */

    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->message->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->message
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getByUserId($id)
    {
        return $this->message->where('user_id',$id)->get()->groupBy('chat_room_id');
    }


    /**
     * @param $id
     * @return mixed
     */

    public function getByIdWithRelations($id)
    {
        return $this->message
            ->where('id', $id)
            ->with(['author.roles'])
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $message = new $this->message;

        $message->message = $data['message'];

        if(!empty($data['author']))
        {
            $message->user_id = $data['author'];
        }
        if(!empty($data['room']))
        {
            $message->chat_room_id = $data['room'];
        }
        $message->save();

        return $message->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $message= $this->message->find($id);

        $message->message = $data['message'];

        if(!empty($data['author']))
        {
            $message->user_id = $data['author'];
        }

        if(!empty($data['room']))
        {
            $message->chat_room_id = $data['room'];
        }

        $message->update();

        return $message;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $chatroom= $this->message->find($id);
        $chatroom->delete();

        return $chatroom;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getByOfferId($id)
    {
        return $this->message->where('chat_room_id',$id)->with(['author.roles','room'])->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getLastByOfferId($id)
    {
        return $this->message->where('chat_room_id',$id)->with(['author.roles','room'])->latest()->first();
    }

}
