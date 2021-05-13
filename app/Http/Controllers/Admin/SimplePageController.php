<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
     * SimplePageController constructor.
     * @param SimplePageService $simplePageService
     */

    public function __construct(SimplePageService $simplePageService)
    {
        $this->simplePageService = $simplePageService;
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

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {
            return view('Admin.pages.simplepage.create');
        }
        abort(403,'Access denied');
    }

}
