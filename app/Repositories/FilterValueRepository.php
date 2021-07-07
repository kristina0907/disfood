<?php


namespace App\Repositories;


use App\Contracts\FilterValueContract;
use App\Models\FilterValue;


class FilterValueRepository implements FilterValueContract
{


    /**
     * @var FilterValue
     */

    protected $filtervalue;

    /**
     * FilterValueRepository constructor.
     * @param FilterValue $filtervalue
     */

    public function __construct(FilterValue $filtervalue)
    {
        $this->filtervalue = $filtervalue;
    }

    /**
     * @param $req
     * @return mixed
     */

    public function searchByText($req)
    {
        $searched = $this->filtervalue->where('value','ILIKE','%'.$req.'%')->get();
        return $searched;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->filtervalue->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->filtervalue
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $filter = new $this->filtervalue;

        $filter->value = $data['value'];
        $filter->active = true;
        $filter->filter_id = $data['filter_id'];
        $filter->save();

        return $filter->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $filter = $this->filtervalue->find($id);

        $filter->value = $data['value'];
        $filter->filter_id = $data['filter_id'];

        if(empty($data['active']))
        {
            $filter->active = false;
        }
        else
        {
            $filter->active = true;
        }

        $filter->update();

        return $filter;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $country = $this->filtervalue->find($id);
        $country->delete();

        return $country;
    }



}
