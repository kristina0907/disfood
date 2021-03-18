<?php

namespace App\Services;


use App\Repositories\SettingsRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use InvalidArgumentException;

class SettingsService
{


    /**
     * @var SettingsRepository
     */

    protected $settingsRepository;

    /**
     * SettingsService constructor.
     * @param SettingsRepository $settingsRepository
     */


    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->settingsRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
            'slug' => 'string|required|max:255',
            'value' => 'string|required',
        ]);

        $result = $this->settingsRepository->save($data);

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
            'slug' => 'string|required|max:255',
            'value' => 'string|required',
        ]);

        DB::beginTransaction();

        try {
            $result = $this->settingsRepository->update($data, $id);

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
        $result = $this->settingsRepository->getById($id);
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
                $result = $this->settingsRepository->delete($id);

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
