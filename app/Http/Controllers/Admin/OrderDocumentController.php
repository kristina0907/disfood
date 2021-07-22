<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\OrderDocumentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrderDocumentController extends Controller
{

    /**
     * @var OrderDocumentService
     */

    protected $orderDocumentService;

    /**
     * OrderDocumentController constructor.
     * @param OrderDocumentService $orderDocumentService
     */

    public function __construct(OrderDocumentService $orderDocumentService)
    {
        $this->orderDocumentService = $orderDocumentService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $documents = $this->orderDocumentService->getAll();
            return view('Admin.pages.orderdocuments.show',['documents'=>$documents]);
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
            return view('Admin.pages.orderdocuments.create');
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
                $this->orderDocumentService->saveOrderData($request);
                return redirect('/superadmin/orderdocuments');
            }
            abort(403,'Access Denied');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function edit($id)
    {
        if(Gate::allows('update',Auth::user()))
        {
            $document = $this->orderDocumentService->getOrderById($id);
            return view('Admin.pages.orderdocuments.edit',[
                'document'=>$document,
            ]);
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
            $this->orderDocumentService->updateOrderData($request,$request->id);
            return redirect('/superadmin/orderdocuments');
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
                $this->orderDocumentService->deleteOrderById($id);
                return redirect('/superadmin/orderdocuments');
            }
        }
        abort(403,'Access Denied');
    }
}
