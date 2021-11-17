<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\AccreditationService;
use App\Services\OrganizationService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class AccreditationController extends Controller
{

    /**
     * @var AccreditationService
     */

    protected $accreditationService;

    /**
     * @var UserService
     */

    protected $userService;

    /**
     * @var OrganizationService
     */

    protected $organizationService;

    /**
     * @param AccreditationService $accreditationService
     * @param UserService $userService
     * @param OrganizationService $organizationService
     */


    public function __construct(AccreditationService $accreditationService, UserService $userService,OrganizationService $organizationService)
    {
        $this->accreditationService = $accreditationService;
        $this->userService = $userService;
        $this->organizationService = $organizationService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function getAccreditations()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $accreditations = $this->accreditationService->getAll();
            return view('Admin.pages.accreditations.show',['accreditations'=>$accreditations]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {
            $organizations = $this->organizationService->getAll();
            $users = User::clients()->get();
            return view('Admin.pages.accreditations.create',[
                'organizations'=>$organizations,
                'users'=>$users
            ]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function store(Request $request)
    {
        if(Gate::allows('create',Auth::user()))
        {
            $this->accreditationService->save($request);
            return redirect('/superadmin/accreditations');
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function edit($id)
    {
        if(Gate::allows('create',Auth::user()))
        {
            if(!empty($id))
            {
                $accreditation = $this->accreditationService->getById($id);
                $organizations = $this->organizationService->getAll();
                $users = User::clients()->get();

                if(!empty($accreditation))
                {
                    return view('Admin.pages.accreditations.edit',[
                        'accreditation' => $accreditation,
                        'organizations'=> $organizations,
                        'users' => $users
                    ]);
                }
            }
        }
        abort(403,'Access Denied');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function update(Request $request)
    {
        if(Gate::allows('update',Auth::user()))
        {
            if(!empty($request->id))
            {
                $this->accreditationService->update($request, $request->id);

                return redirect('/superadmin/accreditations');
            }
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            $this->accreditationService->deleteById($id);
            return redirect('/superadmin/accreditations');
        }
        abort(403,'Access Denied');
    }
}
