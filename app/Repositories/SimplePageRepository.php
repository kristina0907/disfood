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
     * @return mixed
     */

    public function getNewsAll()
    {
        return $this->page->where('category_id',1)->where('public',1)->get();
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
        if(!empty($data->category_id))
        {
            $page->category_id = $data->category_id;
        }

        $page->body = $data['body'];
        if($data->hasFile('image'))
        {

            $extension = $data->image->extension();
            $name = '/images/simplepages/'. date('mdYHis') . uniqid().".".$extension;
            $data->image->storeAs('/public', $name);
            $page->image =  $name;
        }

        if(empty($data['active']))
        {
            $page->public = false;
        }
        else{
            $page->public = true;
        }

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

        $page->title = $data['title'];
        if (!empty($data['description']))
        {
            $page->description = $data['description'];
        }
        if(!empty($data->category_id))
        {
            $page->category_id = $data->category_id;
        }

        $page->body = $data['body'];
        if($data->hasFile('image'))
        {

            $extension = $data->image->extension();
            $name = '/images/simplepages/'. date('mdYHis') . uniqid().".".$extension;
            $data->image->storeAs('/public', $name);
            $page->image =  $name;
        }

        if(empty($data['active']))
        {
            $page->public = false;
        }
        else{
            $page->public = true;
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

    /**
     * @return mixed
     */

    public function getNews()
    {
        return $this->page->where('category_id',3)->get();
    }


}
