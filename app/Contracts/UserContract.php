<?php

namespace App\Contracts;


interface UserContract
{
    /**
     * @return mixed
     */

    public function getAll();

    /**
     * @return mixed
     */

    public function getById($id);

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



}
