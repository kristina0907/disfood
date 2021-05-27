<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use App\Models\OrderStatus;
use App\Models\Organization;
use App\Models\User;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrderController extends Controller
{

    /**
     * @var OrderService
     */

    protected $orderService;


    /**
     * OrderController constructor.
     * @param OrderService $orderService
     */

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }


    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {

            $organizations = Organization::all();
            $users = User::clients()->get();
            $offers = Offer::all();
            $statuses = OrderStatus::all();

            return view('Admin.pages.orders.create',[
                'organizations'=>$organizations,
                'users'=>$users,
                'offers'=>$offers,
                'statuses'=>$statuses
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
                $this->orderService->saveOrderData($request);
                return redirect('/superadmin/orders');
            }
            abort(403,'Access Denied');
        }
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $orders = $this->orderService->getAll();
            return view('Admin.pages.orders.show',['orders'=>$orders]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function edit($id)
    {
        if(Gate::allows('update',Auth::user()))
        {

            $organizations = Organization::all();
            $users = User::clients()->get();
            $offers = Offer::all();
            $statuses = OrderStatus::all();

            $order = $this->orderService->getOrderById($id);
            return view('Admin.pages.orders.edit',[
                'order'=>$order,
                'organizations'=>$organizations,
                'users'=>$users,
                'offers'=>$offers,
                'statuses'=>$statuses
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
            $this->orderService->updateOrderData($request,$request->id);
            return redirect('/superadmin/orders');
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
                $this->orderService->deleteOrderById($id);
                return redirect('/superadmin/orders');
            }
        }
        abort(403,'Access Denied');
    }
}
