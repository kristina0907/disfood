<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrganizationsController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $organizations = Organization::all();
            return view('Admin.pages.organizations.show',['organizations'=>$organizations]);
        }
       abort(403,'Access Denied');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {
            $clients = User::whereHas('roles',function ($q){
                $q->where('slug','client');
            })->get();

            return view('Admin.pages.organizations.create',['clients'=>$clients]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'string|required|max:255',
            'inn' => 'required|integer|unique:organizations',
            'kpp' => 'integer',
            'ogrn' => 'integer',
            'adress' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'bank_name' => 'required|string|max:255',
            'r_account' => 'required|integer',
            'kor_account' => 'required|integer',
            'fio_ceo' => 'required|string|max:255',
            'reason' => 'required|string|max:255',
            'number_power_of_attorney' => 'required|integer',
            'date_power_of_attorney' => 'required|date',
            'user_id' => 'required|integer',
        ]);

        if(Gate::allows('create',Auth::user()))
        {
            $organization = new Organization();
            $organization->name = $request->name;
            $organization->inn = $request->inn;

            if(!empty($request->kpp))
            {
                $organization->kpp = $request->kpp;
            }
            if(!empty($request->ogrn))
            {
                $organization->ogrn = $request->ogrn;
            }
            $organization->adress = $request->adress;
            $organization->phone = $request->phone;
            $organization->bank_name = $request->bank_name;
            $organization->r_account = $request->r_account;
            $organization->kor_account = $request->kor_account;
            $organization->fio_ceo  = $request->fio_ceo;

            if(!empty($request->reason) && (string)$request->reason == (string)'power_of_attorney')
            {
                if(!empty($request->number_power_of_attorney))
                {
                    $organization->number_power_of_attorney = $request->number_power_of_attorney;
                }
                if(!empty($request->date_power_of_attorney))
                {
                    $organization->date_power_of_attorney = $request->date_power_of_attorney;
                }
            }
            $organization->reason = $request->reason;
            $organization->user_id = $request->user_id;
            $organization->save();

            return redirect('/superadmin/organizations');
        }
        abort(403,'Access Denied');

    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function edit($id)
    {
        if(Gate::allows('update',Auth::user()))
        {
            $organization = Organization::find($id);
            $clients = User::whereHas('roles',function ($q){
                $q->where('slug','client');
            })->get();

            return view('Admin.pages.organizations.edit',['clients'=>$clients,'organization'=>$organization]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function update(Request $request)
    {
        if(Gate::allows('update',Auth::user()))
        {
            $validated = $request->validate([
                'name' => 'string|required|max:255',
                'inn' => 'required|integer|unique:organizations,inn, ' .$request->id,
                'kpp' => 'integer',
                'ogrn' => 'integer',
                'adress' => 'required|string|max:255',
                'phone' => 'required|string|max:255',
                'bank_name' => 'required|string|max:255',
                'r_account' => 'required|integer',
                'kor_account' => 'required|integer',
                'fio_ceo' => 'required|string|max:255',
                'reason' => 'required|string|max:255',
                'number_power_of_attorney' => 'required|integer',
                'date_power_of_attorney' => 'required|date',
                'user_id' => 'required|integer',
            ]);

            $organization = Organization::find($request->id);
            $organization->name = $request->name;
            $organization->inn = $request->inn;

            if(!empty($request->kpp))
            {
                $organization->kpp = $request->kpp;
            }
            if(!empty($request->ogrn))
            {
                $organization->ogrn = $request->ogrn;
            }
            $organization->adress = $request->adress;
            $organization->phone = $request->phone;
            $organization->bank_name = $request->bank_name;
            $organization->r_account = $request->r_account;
            $organization->kor_account = $request->kor_account;
            $organization->fio_ceo  = $request->fio_ceo;

            if(!empty($request->reason) && (string)$request->reason == (string)'power_of_attorney')
            {
                if(!empty($request->number_power_of_attorney))
                {
                    $organization->number_power_of_attorney = $request->number_power_of_attorney;
                }
                if(!empty($request->date_power_of_attorney))
                {
                    $organization->date_power_of_attorney = $request->date_power_of_attorney;
                }
            }
            $organization->reason = $request->reason;
            $organization->user_id = $request->user_id;
            $organization->save();

            return redirect('/superadmin/organizations');
        }

        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            if(!empty($id))
            {
                $cat = Organization::find($id);
                if(!empty($cat))
                {
                    $cat->delete();
                    return redirect('/superadmin/organizations');
                }
            }
        }
        abort(403,'Access Denied');
    }
}
