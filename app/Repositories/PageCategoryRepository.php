<?php


namespace App\Repositories;


use App\Contracts\PageCategoryContract;
use App\Models\PageCategory;


class PageCategoryRepository implements PageCategoryContract
{

   protected $pageCategory;


    public function __construct(PageCategory $pageCategory)
    {
        $this->pageCategory = $pageCategory;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->pageCategory->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->pageCategory
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $pageCategory = new $this->pageCategory;

        $pageCategory->name = $data['name'];
        $pageCategory->save();

        return $pageCategory->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $pageCategory = $this->pageCategory->find($id);
        $pageCategory->name = $data['name'];
        if(empty($data['active']))
        {
            $pageCategory->active = false;
        }
        else{
            $pageCategory->active = true;
        }
        $pageCategory->update();

        return $pageCategory;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $pageCategory = $this->pageCategory->find($id);
        $pageCategory->delete();

        return $pageCategory;
    }



}
