<?php


namespace App\Repositories;


use App\Contracts\UserContract;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserRepository implements UserContract
{


    /**
     * @var User
     */

    protected $user;


    /**
     * UserRepository constructor.
     * @param User $user
     */

    public function __construct(User  $user)
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->user->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->user
            ->where('id', $id)
            ->first();
    }

    /**
     * @param $email
     * @return mixed
     */

    public function findByEmail($email)
    {
        return $this->user
            ->where('email', $email)
            ->first();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $user = new $this->user;

        $user->name = $data->userName;
        $user->email = $data->userEmail;
        $user->surname = $data->userSurname;
        $user->phone = $data->userPhone;
        $user->password = Hash::make($data->userPassword);
        $user->save();

        if(!empty($data->type))
        {
            if((string) $data->type === "company")
            {
                $user->roles()->sync([3]);
            }
            elseif ((string) $data->type === "ip")
            {
                $user->roles()->sync([11]);
            }
        }

        return $user->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $user = $this->user->find($id);

        $user->name = $data->userName;
        $user->email = $data->userEmail;
        $user->surname = $data->userSurname;
        $user->phone = $data->userPhone;
        $user->password = Hash::make($data->userPassword);

        if(!empty($data->type))
        {
            if((string) $data->type === "company")
            {
                $user->roles()->sync([3]);
            }
            elseif ((string) $data->type === "ip")
            {
                $user->roles()->sync([11]);
            }
        }

        $user->update();

        return $user;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {
        $user = $this->user->find($id);
        $user->delete();

        return $user;
    }



}
