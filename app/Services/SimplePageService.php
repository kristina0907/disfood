<?php

namespace App\Services;


use App\Repositories\SettingsRepository;
use App\Repositories\SimplePageRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use InvalidArgumentException;

class SimplePageService
{


    /**
     * @var SimplePageRepository
     */

    protected $simplePageRepository;


    /**
     * SimplePageService constructor.
     * @param SimplePageRepository $simplePageRepository
     */

    public function __construct(SimplePageRepository $simplePageRepository)
    {
        $this->simplePageRepository = $simplePageRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->simplePageRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
            'body' => 'string|required',
        ]);

        $result = $this->simplePageRepository->save($data);

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
            'name' => 'string|required|max:255',
            'body' => 'string|required|max:255',
        ]);

        DB::beginTransaction();

        try {
            $result = $this->simplePageRepository->update($data, $id);

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
        $result = $this->simplePageRepository->getById($id);
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
                $result = $this->simplePageRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $result;
        }
    }

}
