<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Services\CountryService;
use Illuminate\Http\Request;

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
        $countries = Country::all();
        return view('Admin.pages.countries.show', ['countries' => $countries]);
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function edit($id)
    {
        if(!empty($id))
        {
            $country = Country::find($id);
            return view('Admin.pages.countries.edit',['country'=>$country]);
        }
    }

    public function update(Request $request)
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
}
