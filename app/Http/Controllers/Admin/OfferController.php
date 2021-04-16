<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use App\Services\CityService;
use App\Services\CountryService;
use App\Services\OfferService;
use App\Services\ProductService;
use App\Services\TypeProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OfferController extends Controller
{

    /**
     * @var OfferService
     */

    protected $offerService,
              $countryService,
              $productService,
              $cityService,
              $categoryService,
              $typeService;

    /**
     * OfferController constructor.
     * @param OfferService $offerService
     */

    public function __construct(OfferService $offerService,
                                CountryService $countryService,
                                ProductService $productService,
                                CityService $cityService,
                                CategoryService $categoryService,
                                TypeProductService $typeService
    )
    {
        $this->offerService = $offerService;
        $this->countryService = $countryService;
        $this->productService = $productService;
        $this->cityService = $cityService;
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
            $offers = $this->offerService->getAll();
            return view('Admin.pages.offers.show',['offers'=>$offers]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        $products = $this->productService->getAll();
        $cats = $this->categoryService->getAll();
        $types = $this->typeService->getAll();
        if(Gate::allows('create',Auth::user()))
        {
            return view('Admin.pages.offers.create',[
                'products'=>$products,
                'categories'=>$cats,
                'types'=>$types
            ]);
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
               $this->offerService->saveOfferData($request);
                return redirect('/superadmin/offers');
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
            $products = $this->productService->getAll();
            $offer = $this->offerService->getOfferById($id);
            $cats = $this->categoryService->getAll();
            $types = $this->typeService->getAll();
            return view('Admin.pages.offers.edit',[
                'offer'=>$offer,
                'products'=>$products,
                'categories'=>$cats,
                'types'=>$types
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
            $this->offerService->updateOfferData($request,$request->id);
            return redirect('/superadmin/offers');
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
                $this->offerService->deleteOfferById($id);
                return redirect('/superadmin/offers');

            }
        }
        abort(403,'Access Denied');
    }
}
