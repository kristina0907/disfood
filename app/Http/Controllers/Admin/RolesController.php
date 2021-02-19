<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        $roles = Role::all();

        if(!empty($roles))
        {
            return view('Admin.pages.roles.show',['roles'=>$roles]);
        }
    }

    public function create()
    {
        return view('Admin.pages.roles.create');
    }

    public function store(Request $request)
    {
        if(!empty($request))
        {
            $role = new Role();
            $role->name = $request->name;
            $role->slug = $request->slug;
            if((string)$request->active === (string)"on")
            {
                $role->active = true;
            }else{
                $role->active = false;
            }
            $role->save();
        }

        return redirect('/superadmin/roles');
    }
}
