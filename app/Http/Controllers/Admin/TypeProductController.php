<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\TypeProduct;
use App\Services\CategoryService;
use App\Services\TypeProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class TypeProductController extends Controller
{


    /**
     * @var TypeProductService
     */

    protected $typeService,$categoryService;

    /**
     * TypeProductController constructor.
     * @param TypeProductService $typeService
     */

    public function __construct(TypeProductService $typeService,CategoryService $categoryService)
    {
        $this->typeService = $typeService;
        $this->categoryService = $categoryService;
    }


    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $types = $this->typeService->getAll();
            return view('Admin.pages.typeproduct.show',['types'=>$types]);
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
            $cats = $this->categoryService->getAll();
            return view('Admin.pages.typeproduct.create',['categories'=>$cats]);
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
            $this->typeService->saveTypeData($request);
            return redirect('/superadmin/types');
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
                $cat = $this->typeService->getCategoryById($id);
                $categories = $this->categoryService->getAll();
                return view('Admin.pages.typeproduct.edit',['category'=>$cat,'categories'=>$categories]);
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
               $this->typeService->updateCategoryData($request,$request->id);

                return redirect('/superadmin/types');
            }
          abort(404,'Not found');
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
           $this->typeService->deleteCategoryById($id);
        }
        abort(403,'Access Denied');
    }
}
