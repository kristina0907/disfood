<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Services\CountryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use phpDocumentor\Reflection\Types\This;

class CountryController extends Controller
{
    /**
     * @var CountryService
     */

    protected $countryService;

    /**
     * CountryController constructor.
     * @param CountryService $countryService
     */

    public function __construct(CountryService $countryService)
    {
        $this->countryService = $countryService;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */

    public function findByText(Request $request)
    {
        if (!empty($request->data)) {
            return response()->json($this->countryService->searchByText($request->data), '200');
        }
        abort(404, 'Not Found');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function getCountries()
    {
        if(Gate::allows('create',Auth::user()))
        {
            $countries = $this->countryService->getAll();
            return view('Admin.pages.countries.show', ['countries' => $countries]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function edit($id)
    {
        if(Gate::allows('create',Auth::user()))
        {
            if(!empty($id))
            {
                $country = $this->countryService->getCountryById($id);
                return view('Admin.pages.countries.edit',['country'=>$country]);
            }
        }
        abort(403,'Access Denied');

    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function update(Request $request)
    {
        if(Gate::allows('create',Auth::user()))
        {
            if(!empty($request->id))
            {
                $country = Country::find($request->id);
                if($country)
                {
                    $country->title_ru = $request->name;
                    $country->code = $request->code;
                    $country->save();
                }
                return redirect('/superadmin/countries');
            }
        }
        abort(403,'Access Denied');

    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            $this->countryService->deleteCountryById($id);
            return redirect('/superadmin/countries');
        }
        abort(403,'Access Denied');
    }
}
