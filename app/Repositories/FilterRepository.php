<?php


namespace App\Repositories;

use App\Contracts\FilterContract;
use App\Models\Filter;


class FilterRepository implements FilterContract
{

    /**
     * @var Filter
     */

    protected $filter;

    /**
     * FilterRepository constructor.
     * @param Filter $filter
     */

    public function __construct(Filter $filter)
    {
        $this->filter = $filter;
    }


    public function searchByText($req)
    {
        $searched = $this->filter->where('name','ILIKE','%'.$req.'%')->get();
        return $searched;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->filter->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->filter
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $filter = new $this->filter;

        //dd($data);
        $filter->name = $data['name'];
        $filter->desc = $data['desc'];
        $filter->active = true;
        $filter->save();
        $filter->types()->sync($data['type_id']);
        return $filter->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $filter = $this->filter->find($id);

        $filter->name = $data['name'];
        $filter->desc = $data['desc'];

        if(empty($data['active']))
        {
            $filter->active = false;
        }
        else
        {
            $filter->active = true;
        }
        $filter->types()->sync($data['type_id']);
        $filter->update();

        return $filter;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $filter = $this->filter->find($id);
        $filter->types()->sync([]);
        $filter->delete();

        return $filter;
    }



}
