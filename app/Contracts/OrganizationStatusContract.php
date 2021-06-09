<?php

namespace App\Contracts;

interface OrganizationStatusContract
{
    /**
     * @return mixed
     */

    public function getAll();

    /**
     * @return mixed
     */

    public function save($data);


    /**
     * @return mixed
     */

    public function update($data,$id);

    /**
     * @return mixed
     */

    public function delete($id);

    /**
     * @return mixed
     */

    public function getById($id);
}
