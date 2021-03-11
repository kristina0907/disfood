<?php

namespace App\Services;



use App\Repositories\TypeProductRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TypeProductService
{


    protected $typeRepository;



    public function __construct(TypeProductRepository $typeRepository)
    {
        $this->typeRepository = $typeRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->typeRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveTypeData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            'image' => 'mimes:jpeg,png|max:1024|required',
        ]);

        $result = $this->typeRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateCategoryData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->typeRepository->update($data, $id);

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

    public function getCategoryById($id)
    {
        $cat = $this->typeRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteCategoryById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->typeRepository->delete($id);

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
