<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use App\Services\PackingService;
use App\Services\PageCategoryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class PageCategoryController extends Controller
{

    /**
     * @var PageCategoryService
     */

    protected $pageCategoryService;

    /**
     * PageCategoryController constructor.
     * @param PageCategoryService $pageCategoryService
     */

    public function __construct(PageCategoryService $pageCategoryService)
    {
        $this->pageCategoryService = $pageCategoryService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $packing = $this->pageCategoryService->getAll();
            return view('Admin.pages.pagecategories.show',['categories'=>$packing]);
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
            return view('Admin.pages.pagecategories.create');
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
                $this->pageCategoryService->saveData($request);
                return redirect('/superadmin/pagecategories');
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
            $packing = $this->pageCategoryService->getById($id);
            return view('Admin.pages.pagecategories.edit',[
                'categories'=>$packing
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
            $this->pageCategoryService->updateData($request,$request->id);
            return redirect('/superadmin/pagecategories');
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
                $this->pageCategoryService->deleteById($id);
                return redirect('/superadmin/pagecategories');
            }
        }
        abort(403,'Access Denied');
    }
}
