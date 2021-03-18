<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\SettingsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class SettingsConroller extends Controller
{

    /**
     * @var SettingsService
     */

    protected $settingsService;

    /**
     * SettingsConroller constructor.
     * @param SettingsService $settingsService
     */

    public function __construct(SettingsService $settingsService)
    {
        $this->settingsService = $settingsService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {
            return view('Admin.pages.settings.create');
        }
        abort(403,'Access denied');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirecto
     *
     */

    public function store(Request $request)
    {
        if(Gate::allows('create',Auth::user()))
        {
            $this->settingsService->saveData($request);
            return redirect('/superadmin/settings');
        }
        abort(403,'Access denied');
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $settings = $this->settingsService->getAll();
            return view('Admin.pages.settings.show',['settings'=>$settings]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function edit(int $id)
    {
        if(Gate::allows('update',Auth::user()))
        {
            $settings = $this->settingsService->getById($id);

            return view('Admin.pages.settings.edit',['settings'=>$settings]);
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
            if(!empty($request->id))
            {
                $this->settingsService->updateData($request,$request->id);

                return redirect('/superadmin/settings');
            }
            abort(404,'Not found');
        }
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */

    public function delete(int $id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            $this->settingsService->deleteFromId($id);
            return redirect('/superadmin/settings');
        }
        abort(403,'Access Denied');
    }
}
