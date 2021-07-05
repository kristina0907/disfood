<?php

namespace App\Services;


use App\Repositories\CategoryRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CategoryService
{
    /**
     * @var CategoryRepository
     */

    protected $categoryRepository;

    /**
     * CategoryService constructor.
     * @param CategoryRepository $categoryRepository
     */

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->categoryRepository->getAll();
    }

    /**
     * @return mixed
     */

    public function getNotEmpty()
    {
        return $this->categoryRepository->getNotEmpty();
    }
    /**
     * @param $data
     * @return mixed
     */

    public function saveCategoryData($data)
    {
        $validated = $data->validate([
            'name' => 'required|max:255',
            //'slug' => 'required|max:255|unique:categories',
        ]);

        $result = $this->categoryRepository->save($data);

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
            'slug' => 'required|max:255|unique:categories,slug,'. $data->id,
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->categoryRepository->update($data, $id);

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
        $cat = $this->categoryRepository->getById($id);
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
                $category = $this->categoryRepository->delete($id);

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
     * @return array
     */

    public function getTreeCats()
    {
        $cats = $this->categoryRepository->getAll()->toArray();
        $tree = $this->buildTree($cats);

        return $tree;
    }

    /**
     * @param array $elements
     * @param int $parentId
     * @return array
     */

    private function buildTree(array $elements, $parentId = 0) {
        $branch = array();

        foreach ($elements as $element) {
            if ($element['parent_id'] == $parentId) {
                $children = $this->buildTree($elements, $element['id']);
                if ($children) {
                    $element['children'] = $children;
                }
                $branch[] = $element;
            }
        }

        return $branch;
    }
}
