<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\OrderStatusService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrderStatusController extends Controller
{
    /**
     * @var OrderStatusService
     */

    protected $statusService;

    /**
     * OrderStatusController constructor.
     * @param OrderStatusService $statusService
     */

    public function __construct(OrderStatusService $statusService)
    {
        $this->statusService = $statusService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        $statuses = $this->statusService->getAll();
        if(Gate::allows('create',Auth::user()))
        {
            return view('Admin.pages.orderstatuses.create',[
                'statuses'=>$statuses,
            ]);
        }
        abort(403,'Access Denied');
    }


    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        if(!empty($request))
        {
            if(Gate::allows('create',Auth::user()))
            {
                $this->statusService->saveStatusData($request);
                return redirect('/superadmin/orderstatuses');
            }
            abort(403,'Access Denied');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $statuses = $this->statusService->getAll();
            return view('Admin.pages.orderstatuses.show',['statuses'=>$statuses]);
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
            $status = $this->statusService->getStatusById($id);
            return view('Admin.pages.orderstatuses.edit',['status'=>$status]);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function update(Request $request)
    {
        if(Gate::allows('update',Auth::user()))
        {
            $this->statusService->updateStatusData($request,$request->id);
            return redirect('/superadmin/orderstatuses');
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
                $this->statusService->deleteStatusById($id);
                return redirect('/superadmin/orderstatuses');

            }
        }
        abort(403,'Access Denied');
    }
}
