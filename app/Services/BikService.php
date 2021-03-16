<?php

namespace App\Services;



use App\Repositories\BikRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class BikService
{

    /**
     * @var BikRepository
     */

    protected $bikRepository;

    /**
     * BikService constructor.
     * @param BikRepository $bikRepository
     */

    public function __construct(BikRepository  $bikRepository)
    {
        $this->bikRepository = $bikRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->bikRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveBikData($data)
    {
        $validated = $data->validate([
            'bik'       => 'integer',
            'ks'        => 'integer',
            'name'      => 'string',
            'namemini'  => 'string',
            'index'     => 'integer',
            'city'      => 'string',
            'adress'    => 'string',
            'phone'     => 'string',
            'okato'     => 'integer',
            'okpo'      => 'integer',
            'regnum'    => 'integer',
            'srok'      => 'integer',

        ]);

        $result = $this->bikRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateBikData($data,$id)
    {
        $validated = $data->validate([
            'bik'       => 'integer',
            'ks'        => 'integer',
            'name'      => 'string',
            'namemini'  => 'string',
            'index'     => 'integer',
            'city'      => 'string',
            'adress'    => 'string',
            'phone'     => 'string',
            'okato'     => 'integer',
            'okpo'      => 'integer',
            'regnum'    => 'integer',
            'srok'      => 'integer',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->bikRepository->update($data, $id);

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

    public function getBikById($id)
    {
        $cat = $this->bikRepository->getById($id);
        return $cat;
    }

    public function getByBik($id)
    {
        return $this->bikRepository->getByBik($id);
    }


    /**
     * @param $id
     * @return mixed
     */

    public function deleteBikById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->bikRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $category;
        }

    }



}
