<?php

namespace App\Services;



use App\Repositories\ChatRoomRepository;
use App\Repositories\MessageRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MessageService
{


    /**
     * @var MessageRepository
     */

    protected $messageRepository;


    /**
     * MessageService constructor.
     * @param MessageRepository $messageRepository
     */

    public function __construct(MessageRepository $messageRepository)
    {
        $this->messageRepository = $messageRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->messageRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'message' => 'required|max:255',
        ]);

        $result = $this->messageRepository->save($data);
        $message = $this->messageRepository->getByIdWithRelations($result->id);
        return $message;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateData($data,$id)
    {
        $validated = $data->validate([
            'message' => 'required|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->messageRepository->update($data, $id);

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

    public function getById($id)
    {
        $cat = $this->messageRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->messageRepository->delete($id);

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

    public function getByOfferId($id)
    {
        return $this->messageRepository->getByOfferId($id);
    }


    public function getLastByOfferId($id)
    {
        return $this->messageRepository->getLastByOfferId($id);
    }

}
