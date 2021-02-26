<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class RolesController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        $roles = Role::all();

        if(Gate::allows('viewAny',Auth::user()))
        {
            if (!empty($roles)) {
                return view('Admin.pages.roles.show', ['roles' => $roles]);
            }
        }

    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {
            return view('Admin.pages.roles.create');
        }

    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'slug' => 'required|max:255|unique:roles',
        ]);

        if(Gate::allows('create',Auth::user()))
        {
            if (!empty($request)) {
                $role = new Role();
                $role->name = $request->name;
                $role->slug = $request->slug;
                if ((string)$request->active === (string)"on") {
                    $role->active = true;
                } else {
                    $role->active = false;
                }
                $role->save();
            }
        }

        return redirect('/superadmin/roles');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'slug' => 'required|max:255',
        ]);

        if(Gate::allows('update',Auth::user()))
        {
            if (!empty($request)) {
                $role = Role::find($request->id);
                if(!empty($role))
                {
                    $role->name = $request->name;
                    $role->slug = $request->slug;
                    if ((string)$request->active === (string)"on") {
                        $role->active = true;
                    } else {
                        $role->active = false;
                    }
                    $role->save();
                }
            }
        }


        return redirect('/superadmin/roles');
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            if (!empty($id)) {
                $role = Role::find($id);
                if (!empty($role->id)) {
                    $role->delete();
                }
                return redirect()->back();
            }
        }

        abort(404, 'Not found role');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function edit($id)
    {
        if(Gate::allows('update',Auth::user()))
        {
            if (!empty($id)) {
                $role = Role::find($id);
                if (!empty($role->id)) {
                    return view('Admin.pages.roles.edit',['role'=>$role]);
                }
            }
        }

        abort(404, 'Not found role');
    }
}
