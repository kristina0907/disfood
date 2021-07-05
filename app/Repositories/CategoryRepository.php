<?php


namespace App\Repositories;

use App\Contracts\CategoryContract;
use App\Models\Category;

class CategoryRepository implements CategoryContract
{
    /**
     * @var Category
     */

    protected $category;

    /**
     * CategoryRepository constructor.
     * @param Category $category
     */

    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->category->get();
    }

    /**
     * @return mixed
     */

    public function getNotEmpty()
    {
        return $this->category->whereHas('types')->get();
    }
    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->category
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $category = new $this->category;

        $category->name = $data['name'];

        if(!empty($data->parent_id))
        {
            $category->parent_id = $data->parent_id;
        }
        $category->save();

        return $category->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $category = $this->category->find($id);

        $category->name = $data->name;
        if(!empty($data->slug))
        {
            $category->slug = $data->slug;
        }
        if(!empty($data->parent_id))
        {
            $category->parent_id = $data->parent_id;
        }
        $category->update();

        return $category;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $category = $this->category->find($id);
        $category->delete();

        return $category;
    }



}
