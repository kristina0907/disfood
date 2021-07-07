<?php

namespace App\Services;


use App\Repositories\FilterValueRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FilterValueService
{

    /**
     * @var FilterValueRepository
     */

    protected $filterValueRepository;

    /**
     * FilterValueService constructor.
     * @param FilterValueRepository $filterValueRepository
     */

    public function __construct(FilterValueRepository $filterValueRepository)
    {
        $this->filterValueRepository = $filterValueRepository;
    }

    public function searchByText($req)
    {
        return $this->filterValueRepository->searchByText($req);
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->filterValueRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'value' => 'required|string|max:255',
            'filter_id' => 'required'
        ]);

        $result = $this->filterValueRepository->save($data);

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
            'value' => 'required|string|max:255',
            //'filter_id' => 'required'
        ]);

        DB::beginTransaction();

        try {

            $cat = $this->filterValueRepository->update($data, $id);

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
        $cat = $this->filterValueRepository->getById($id);
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
                $category = $this->filterValueRepository->delete($id);

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
