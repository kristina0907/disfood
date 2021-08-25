<?php

namespace App\Services;


use App\Repositories\SettingsRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use InvalidArgumentException;

class UserService
{


    /**
     * @var UserRepository
     */

    protected $userRepository;


    /**
     * UserService constructor.
     * @param UserRepository $userRepository
     */

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->userRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'userName' => 'string|required|max:255',
            'userSurname' => 'string|required|max:255',
            'userEmail' => 'string|required',
            'userPassword'=>'string|required',
            'userPhone'=>'string|required',
            'type'=>'string|required'
        ]);

        $result = $this->userRepository->save($data);

        return $result;

    }

    public function updateCurrentOrganization($data)
    {
        DB::beginTransaction();

        try {
            $result = $this->userRepository->updateCurrentOrganization($data);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $result;
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateData($data,int $id)
    {
        $validated = $data->validate([
            'userName' => 'string|required|max:255',
            'userSurname' => 'string|required|max:255',
            'userEmail' => 'string|required',
            'userPhone'=>'string|required',
            'type'=>'string|required'
        ]);

        DB::beginTransaction();

        try {
            $result = $this->userRepository->update($data, $id);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $result;

    }

    /**
     * @param $data
     */

    public function updateProfile($data)
    {


        DB::beginTransaction();

        try {
            $result = $this->userRepository->updateProfile($data);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $result;



    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById(int $id)
    {
        $result = $this->userRepository->getById($id);
        return $result;
    }

    /**
     * @param $id
     * @return bool|mixed
     */

    public function deleteFromId($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $result = $this->userRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $result;
        }
    }

    public function findByEmail($data)
    {
        return $this->userRepository->findByEmail($data);
    }

}
