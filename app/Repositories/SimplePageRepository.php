<?php


namespace App\Repositories;

use App\Contracts\SimplePageContract;
use App\Models\SimplePage;

class SimplePageRepository implements SimplePageContract
{


    /**
     * @var SimplePage
     */

    protected $page;

    /**
     * SimplePageRepository constructor.
     * @param SimplePage $page
     */

    public function __construct(SimplePage $page)
    {
        $this->page = $page;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->page->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->page
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $page = new $this->page;
        $page->title = $data['title'];
        if (!empty($data['description']))
        {
            $page->description = $data['description'];
        }
        $page->body = $data['body'];
        if(!empty($data['image']))
        {
            $page->image = $data['image'];
        }
        $page->active = true;

        $page->save();

        return $page->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, int $id)
    {

        $page = $this->page->find($id);

        $page->name = $data['name'];
        $page->slug = $data['slug'];
        if (!empty($data['description']))
        {
            $page->description = $data['description'];
        }
        $page->body = $data['body'];
        if(!empty($data['image']))
        {
            $page->image = $data['image'];
        }
        if(empty($data['active']))
        {
            $page->active = false;
        }
        else{
            $page->active = true;
        }
        $page->update();

        return $page;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete(int $id)
    {

        $setting = $this->page->find($id);
        $setting->delete();

        return true;
    }



}
