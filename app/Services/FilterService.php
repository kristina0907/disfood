<?php

namespace App\Services;



use App\Repositories\FilterRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FilterService
{

    /**
     * @var FilterRepository
     */

    protected $filterRepository;

    /**
     * FilterService constructor.
     * @param FilterRepository $filterRepository
     */

    public function __construct(FilterRepository $filterRepository)
    {
        $this->filterRepository = $filterRepository;
    }

    public function searchByText($req)
    {
        return $this->filterRepository->searchByText($req);
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->filterRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'name' => 'required|string|max:255',
            'desc' => 'required|string'
        ]);

        $result = $this->filterRepository->save($data);

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
            'name' => 'required|string|max:255',
            'desc' => 'required|string'
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->filterRepository->update($data, $id);

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
        $cat = $this->filterRepository->getById($id);
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
                $category = $this->filterRepository->delete($id);

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
