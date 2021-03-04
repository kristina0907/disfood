<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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

    public function findByText(Request $request)
    {
        if(!empty($request->data))
        {
            return response()->json($this->countryService->searchByText($request->data),'200');
        }
        abort(404,'Not Found');
    }
}
