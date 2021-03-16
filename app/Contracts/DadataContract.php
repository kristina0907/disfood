<?php

namespace App\Contracts;

interface DadataContract
{
    /**
     * @return mixed
     */

    public function getUserByName($data);

    /**
     * @return mixed
     */

    public function getCompanyByInn($data,$count);


    /**
     * @return mixed
     */

    public function getCityByName($data,$count = 20);

    /**
     * @return mixed
     */

    public function getPhoneByString($data);

    /**
     * @return mixed
     */

    public function getTypeUserByInn($data);
}
