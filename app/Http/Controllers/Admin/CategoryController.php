<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CategoryController extends Controller
{

    /**
     * @var CategoryService
     */

    protected $categoryService;

    /**
     * CategoryController constructor.
     * @param CategoryService $categoryService
     */

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $cats = $this->categoryService->getAll();
            return view('Admin.pages.categories.show',['categories'=>$cats]);
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
            $categories = $this->categoryService->getAll();
            return view('Admin.pages.categories.create',['categories'=>$categories]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {

        if(Gate::allows('create',Auth::user()))
        {
            $this->categoryService->saveCategoryData($request);
            return redirect('/superadmin/categories');
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
                $cat = $this->categoryService->getCategoryById($id);
                $categories = $this->categoryService->getAll();
                return view('Admin.pages.categories.edit',['category'=>$cat,'categories'=>$categories]);
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
                $this->categoryService->updateCategoryData($request, $request->id);

                return redirect('/superadmin/categories');
            }
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
            $this->categoryService->deleteCategoryById($id);
            return redirect('/superadmin/categories');
        }
        abort(403,'Access Denied');
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function changeTree(Request $request)
    {
        //TODO Добить метод
        return response()->json($request->data,200);
            foreach ($request->ids as $cat)
            {
                $currentId = $cat['id'];

                if(!empty($cat['children']) && count($cat['children'])>0) {
                    foreach ($cat['children'] as $child)
                    {
                        $model = Category::find($child['id']);
                        if(!empty($model))
                        {
                            $model->parent_id = $currentId;
                            $model->save();
                        }

                        if(!empty($child['children']) && count($child['children']) > 0)
                        {
                            dd($child['children']);
                            $this->changeTree($child['children']);
                        }
                    }
                }
            }

        return response()->json(Category::all(),200);
    }
}
