<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\TypeDeliveryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class TypeDeliveryController extends Controller
{
    /**
     * @var TypeDeliveryService
     */

    protected $typeService;


    /**
     * TypeDeliveryController constructor.
     * @param TypeDeliveryService $typeService
     */

    public function __construct(TypeDeliveryService $typeService)
    {
        $this->typeService = $typeService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if (Gate::allows('view', Auth::user())) {
            $types = $this->typeService->getAll();
            return view('Admin.pages.typedelivery.show', ['types' => $types]);
        }
        abort(403, 'Access Denied');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        if (Gate::allows('create', Auth::user())) {
            return view('Admin.pages.typedelivery.create');
        }
        abort(403, 'Access Denied');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        if(Gate::allows('create',Auth::user()))
        {
            $this->typeService->saveTypeData($request);
            return redirect('/superadmin/typedelivery');
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
            if(!empty($id))
            {
                $cat = $this->typeService->getTypeById($id);
                return view('Admin.pages.typedelivery.edit',['type'=>$cat]);
            }
        }
        abort(403,'Access Denied');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function update(Request $request)
    {

        if(Gate::allows('create',Auth::user()))
        {
            if(!empty($request->id))
            {
                $this->typeService->updateTypeData($request,$request->id);

                return redirect('/superadmin/typedelivery');
            }
            abort(404,'Not found');
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     */

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            $this->typeService->deleteTypeById($id);
        }
        abort(403,'Access Denied');
    }
}
