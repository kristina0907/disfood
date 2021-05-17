<?php

namespace App\Services;



use App\Repositories\PackingRepository;
use App\Repositories\PageCategoryRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PageCategoryService
{

    /**
     * @var PageCategoryRepository
     */

    protected $pageCategoryRepository;

    /**
     * PageCategoryService constructor.
     * @param PageCategoryRepository $pageCategoryRepository
     */

    public function __construct(PageCategoryRepository  $pageCategoryRepository)
    {
        $this->pageCategoryRepository = $pageCategoryRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->pageCategoryRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
        ]);

        $result = $this->pageCategoryRepository->save($data);

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
            'name' => 'required|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->pageCategoryRepository->update($data, $id);

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
        $cat = $this->pageCategoryRepository->getById($id);
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
                $category = $this->pageCategoryRepository->delete($id);

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
