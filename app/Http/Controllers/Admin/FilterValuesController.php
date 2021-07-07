<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FilterService;
use App\Services\FilterValueService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class FilterValuesController extends Controller
{

    /**
     * @var FilterValueService
     */

    protected $filterValueService;

    /**
     * @var FilterService
     */

    protected $filterService;

    /**
     * FilterValuesController constructor.
     * @param FilterValueService $filterValueService
     */

    public function __construct(FilterValueService  $filterValueService,FilterService $filterService)
    {
        $this->filterValueService = $filterValueService;
        $this->filterService = $filterService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $values = $this->filterValueService->getAll();
            return view('Admin.pages.filtervalues.show',['values'=>$values]);
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
            $filters = $this->filterService->getAll();
            return view('Admin.pages.filtervalues.create',['filters'=>$filters]);
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
                $this->filterValueService->saveData($request);
                return redirect('/superadmin/filtervalues');
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

            $value = $this->filterValueService->getById($id);

            $filters = $this->filterService->getAll();
            return view('Admin.pages.filtervalues.edit',[
                'value'=>$value,
                'filters'=>$filters,
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
            $this->filterValueService->updateData($request,$request->id);
            return redirect('/superadmin/filtervalues');
        }
        abort(403,'Access Denied');
    }

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            if(!empty($id))
            {
                $this->filterValueService->deleteById($id);
                return redirect('/superadmin/filtervalues');

            }
        }
        abort(403,'Access Denied');
    }
}
