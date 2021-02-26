<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CategoryController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $cats = Category::all();
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
            $categories = Category::all();
            return view('Admin.pages.categories.create',['categories'=>$categories]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            //'slug' => 'required|max:255|unique:categories',
        ]);

        if(Gate::allows('create',Auth::user()))
        {
            $cat = new Category();
            $cat->name = $request->name;
            if(!empty($request->parent_id))
            {
                $cat->parent_id = $request->parent_id;
            }
            $cat->save();
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
                $cat = Category::find($id);
                $categories = Category::all();
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
        $validated = $request->validate([
            'name' => 'required|max:255',
            'slug' => 'required|max:255|unique:categories,slug,'.$request->id,
        ]);

        if(Gate::allows('update',Auth::user()))
        {
            if(!empty($request->id))
            {
                $cat = Category::find($request->id);
                $cat->name = $request->name;
                if(!empty($request->slug))
                {
                    $cat->slug = $request->slug;
                }
                if(!empty($request->parent_id))
                {
                    $cat->parent_id = $request->parent_id;
                }
                $cat->save();
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
            if(!empty($id))
            {
                $cat = Category::find($id);
                if(!empty($cat))
                {
                    $cat->delete();
                    return redirect('/superadmin/categories');
                }
            }
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
