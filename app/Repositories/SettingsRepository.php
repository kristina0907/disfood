<?php


namespace App\Repositories;


use App\Contracts\SettingsContract;
use App\Models\Setings;

class SettingsRepository implements SettingsContract
{


    /**
     * @var Setings
     */

    protected $setting;


    /**
     * SettingsRepository constructor.
     * @param Setings $setting
     */

    public function __construct(Setings $setting)
    {
        $this->setting = $setting;
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->setting->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->setting
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $setting = new $this->setting;
        $setting->name = $data['name'];
        $setting->slug = $data['slug'];
        $setting->value = $data['value'];
        $setting->active = true;

        $setting->save();

        return $setting->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, int $id)
    {

        $setting = $this->setting->find($id);

        $setting->name = $data['name'];
        $setting->slug = $data['slug'];
        $setting->value = $data['value'];

        if(empty($data['active']))
        {
            $setting->active = false;
        }
        else{
            $setting->active = true;
        }
        $setting->update();

        return $setting;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete(int $id)
    {

        $setting = $this->setting->find($id);
        $setting->delete();

        return true;
    }



}
