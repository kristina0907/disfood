<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\OrganizationStatusService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrganizationStatusController extends Controller
{

    /**
     * @var OrganizationStatusService
     */

    protected $statusService;

    /**
     * OrganizationStatusController constructor.
     * @param OrganizationStatusService $statusService
     */

    public function __construct(OrganizationStatusService $statusService)
    {
        $this->statusService = $statusService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $organizations = $this->statusService->getAll();
            return view('Admin.pages.organizationstatuses.show',['statuses'=>$organizations]);
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
            return view('Admin.pages.organizationstatuses.create');
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
            $this->statusService->saveData($request);
            return redirect('/superadmin/organizationstatuses');
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
            $organization = $this->statusService->getById($id);
            return view('Admin.pages.organizationstatuses.edit',['status'=>$organization]);
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
            $this->statusService->updateData($request,$request->id);
            return redirect('/superadmin/organizationstatuses');
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
                $this->statusService->deleteById($id);
                return redirect('/superadmin/organizationstatuses');

            }
        }
        abort(403,'Access Denied');
    }
}
