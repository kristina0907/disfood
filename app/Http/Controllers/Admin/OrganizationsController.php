<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\User;
use App\Services\OrganizationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrganizationsController extends Controller
{

    /**
     * @var OrganizationService
     */

    protected $organizationService;


    /**
     * OrganizationsController constructor.
     * @param OrganizationService $organizationService
     */

    public function __construct(OrganizationService $organizationService)
    {
        $this->organizationService = $organizationService;
    }



    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $organizations = $this->organizationService->getAll();
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
           $clients = User::clients()->get();

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

        if(Gate::allows('create',Auth::user()))
        {
            $this->organizationService->saveOrganizationData($request);
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
            $organization = $this->organizationService->getOrganizationById($id);
            $clients = User::clients()->get();

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
            $this->organizationService->updateOrganizationData($request,$request->id);
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
                $this->organizationService->deleteOrganizationById($id);
                return redirect('/superadmin/organizations');

            }
        }
        abort(403,'Access Denied');
    }


    public function findByText(Request $request)
    {
        if(!empty($request->data))
        {
            return response()->json($this->organizationService->findByText($request->data),'200');
        }
        abort(404,'Not Found');
    }
}
