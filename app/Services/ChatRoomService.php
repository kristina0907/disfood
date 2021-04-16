<?php

namespace App\Services;



use App\Repositories\ChatRoomRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ChatRoomService
{

    /**
     * @var ChatRoomRepository
     */

    protected $chatRoomRepository;


    /**
     * ChatRoomService constructor.
     * @param ChatRoomRepository $chatRoomRepository
     */

    public function __construct(ChatRoomRepository $chatRoomRepository)
    {
        $this->chatRoomRepository = $chatRoomRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->chatRoomRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveChatRoomData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            //'slug' => 'required|max:255|unique:categories',
        ]);

        $result = $this->chatRoomRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateChatRoomData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->chatRoomRepository->update($data, $id);

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

    public function getChatRoomById($id)
    {
        $cat = $this->chatRoomRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteChatRoomById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->chatRoomRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $category;
        }

    }

    /**
     * @param $id
     * @return mixed
     */

    public function getChatRoomByOfferId($id)
    {
        return $this->chatRoomRepository->getByOfferId($id);
    }


}
