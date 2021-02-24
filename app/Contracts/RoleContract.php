<?php

namespace App\Contracts;


interface RoleContract
{
    /**
     * @return mixed
     */

    public function show();

    /**
     * @return mixed
     */

    public function create();

    /**
     * @return mixed
     */

    public function store();

    /**
     * @return mixed
     */

    public function update();

    /**
     * @return mixed
     */

    public function delete();

    /**
     * @return mixed
     */

    public function findById($id);

}
