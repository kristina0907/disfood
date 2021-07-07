<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Services\FilterService;
use App\Services\TypeProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class FilterController extends Controller
{
    /**
     * @var FilterService
     */

    protected $filterService;

    /**
     * @var TypeProductService
     */

    protected $typeProductService;

    /**
     * FilterController constructor.
     * @param FilterService $filterService
     * @param TypeProductService $typeProductService
     */

    public function __construct(FilterService  $filterService,TypeProductService $typeProductService)
    {
        $this->filterService = $filterService;
        $this->typeProductService = $typeProductService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $filters = $this->filterService->getAll();
            return view('Admin.pages.filters.show',['filters'=>$filters]);
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
            $types = $this->typeProductService->getAll();
            return view('Admin.pages.filters.create',['categories'=>$types]);
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
                $this->filterService->saveData($request);
                return redirect('/superadmin/filters');
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

            $filter = $this->filterService->getById($id);

            $types = $this->typeProductService->getAll();
            return view('Admin.pages.filters.edit',[
                'filter'=>$filter,
                'types'=>$types,
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
            $this->filterService->updateData($request,$request->id);
            return redirect('/superadmin/filters');
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
                $this->filterService->deleteById($id);
                return redirect('/superadmin/filters');

            }
        }
        abort(403,'Access Denied');
    }
}
