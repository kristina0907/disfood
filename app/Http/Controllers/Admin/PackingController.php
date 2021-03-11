<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use App\Services\PackingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class PackingController extends Controller
{

    /**
     * @var PackingService
     */

    protected $packingService;


    /**
     * PackingController constructor.
     * @param PackingService $packingService
     */

    public function __construct(PackingService $packingService,CategoryService $categoryService)
    {
        $this->packingService = $packingService;
        $this->categoryService = $categoryService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $packing = $this->packingService->getAll();
            return view('Admin.pages.packing.show',['packing'=>$packing]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        $categories = $this->categoryService->getAll();
        if(Gate::allows('create',Auth::user()))
        {
            return view('Admin.pages.packing.create',[
                'categories'=>$categories,
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
                $this->packingService->savePackingData($request);
                return redirect('/superadmin/packing');
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
            $packing = $this->packingService->getPackingById($id);
            $cats = $this->categoryService->getAll();
            return view('Admin.pages.packing.edit',[
                'packing'=>$packing,
                'categories'=>$cats
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
            $this->packingService->updatePackingData($request,$request->id);
            return redirect('/superadmin/packing');
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
                $this->packingService->deletePackingById($id);
                return redirect('/superadmin/packing');
            }
        }
        abort(403,'Access Denied');
    }

}
