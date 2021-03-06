<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\PageCategoryService;
use App\Services\SimplePageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class SimplePageController extends Controller
{

    /**
     * @var SimplePageService
     */

    protected $simplePageService;

    /**
     * @var PageCategoryService
     */

    protected $pageCategoryService;

    /**
     * SimplePageController constructor.
     * @param SimplePageService $simplePageService
     */

    public function __construct(SimplePageService $simplePageService,PageCategoryService $pageCategoryService)
    {
        $this->simplePageService = $simplePageService;
        $this->pageCategoryService = $pageCategoryService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $pages = $this->simplePageService->getAll();
            return view('Admin.pages.simplepage.show',['pages'=>$pages]);
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
            $cats = $this->pageCategoryService->getAll();
            return view('Admin.pages.simplepage.create',[
                'cats'=>$cats
            ]);
        }
        abort(403,'Access denied');
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
                //dd($request);
                $this->simplePageService->saveData($request);
                return redirect('/superadmin/simplepages');
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
            if(!empty($id))
            {
                $cat = $this->simplePageService->getById($id);
                $categories = $this->pageCategoryService->getAll();
                return view('Admin.pages.simplepage.edit',['page'=>$cat,'categories'=>$categories]);
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

        if(Gate::allows('update',Auth::user()))
        {
            if(!empty($request->id))
            {
                $this->simplePageService->updateData($request,$request->id);

                return redirect('/superadmin/simplepages');
            }
            abort(404,'Not found');
        }
        abort(403,'Access Denied');
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function delete(int $id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            $this->simplePageService->deleteFromId($id);
            return redirect('/superadmin/simplepages');
        }
        abort(403,'Access Denied');
    }

}
