<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\TypeProduct;
use App\Services\CategoryService;
use App\Services\ProductService;
use App\Services\TypeProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{

    protected $categoryService,$typeService,$productService;



    public function __construct(CategoryService $categoryService,TypeProductService $typeService,ProductService $productService)
    {
        $this->categoryService = $categoryService;
        $this->typeService = $typeService;
        $this->productService = $productService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $products = $this->productService->getAll();
            return view('Admin.pages.products.show',['products'=>$products]);
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
            $types = $this->typeService->getAll();

            return view('Admin.pages.products.create',['categories'=>$cats,'types'=>$types]);
        }
       abort(403,'Access denied');

    }


    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function store(Request $request)
    {
        if(Gate::allows('create',Auth::user()))
        {
            $this->productService->saveProductData($request);
            return redirect('/superadmin/products');
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
            $product = $this->productService->getProductById($id);
            $cats = $this->categoryService->getAll();
            $types = $this->typeService->getAll();

            return view('Admin.pages.products.edit',['product'=>$product,'categories'=>$cats,'types'=>$types]);
        }
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
                $this->productService->updateProductData($request,$request->id);

                return redirect('/superadmin/products');
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
            $this->productService->deleteProductFromId($id);
            return redirect('/superadmin/products');
        }
        abort(403,'Access Denied');
    }

}
