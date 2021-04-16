<?php

namespace App\Contracts;


interface TypeDeloveryContract
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

    public function update($data,int $id);

    /**
     * @return mixed
     */

    public function delete(int $id);

    /**
     * @return mixed
     */

    public function getById(int $id);

}
