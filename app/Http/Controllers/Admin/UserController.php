<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        $users = User::paginate(20);
        return view('Admin.pages.users.show',['users'=>$users]);
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        $roles = Role::all();
        return view('Admin.pages.users.create',['roles'=>$roles]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);

        if(!empty($request))
        {
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            if(!empty($request->roles))
            {
               $user->roles()->sync($request->roles);
            }
        }
        return redirect('/superadmin/users');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
        ]);

        if(!empty($request) && !empty($request->id)) {
            $user = User::find($request->id);
            if (!empty($user))
            {
                $user->name = $request->name;
                $user->email = $request->email;
                if(!empty($request->password))
                {
                    $user->password = Hash::make($request->password);
                }

                $user->save();
                if(!empty($request->roles))
                {
                    $user->roles()->sync($request->roles);
                }
            }

        }
        return redirect('/superadmin/users');
    }

    public function edit($id)
    {
        if (!empty($id))
        {
            $user = User::find($id);
            $roles = Role::all();
            return view('Admin.pages.users.edit',['roles'=>$roles,'user'=>$user]);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function delete($id)
    {
        if(!empty($id))
        {
            $user = User::find($id);
            if(!empty($user))
            {
                $user->roles()->sync([]);
                $user->delete();
            }
        }
        return redirect('/superadmin/users');
    }
}
