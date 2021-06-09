<?php

namespace App\Services;



use App\Repositories\OrganizationRepository;
use App\Repositories\OrganizationStatusRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrganizationStatusService
{
    /**
     * @var OrganizationStatusRepository
     */

    protected $statusRepository;


    /**
     * OrganizationStatusService constructor.
     * @param OrganizationStatusRepository $statusRepository
     */

    public function __construct(OrganizationStatusRepository $statusRepository)
    {
        $this->statusRepository = $statusRepository;
    }

    /**
     * @param $req
     * @return mixed
     */

    public function findByText($req)
    {
        return $this->statusRepository->findByText($req);
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->statusRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {

        $validated = $data->validate([
            'name' => 'string|required|max:255',
        ]);

        $result = $this->statusRepository->save($data);

        return $result;

    }


    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->statusRepository->update($data, $id);

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
        $cat = $this->statusRepository->getById($id);
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
                $category = $this->statusRepository->delete($id);

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
