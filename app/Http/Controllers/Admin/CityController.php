<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CityService;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * @var CityService
     */

    protected $cityService;

    /**
     * CityController constructor.
     * @param CityService $cityService
     */

    public function __construct(CityService  $cityService)
    {
        $this->cityService = $cityService;
    }

    public function findByText(Request  $request)
    {
        if(!empty($request->data))
        {
            return response()->json($this->cityService->searchByText($request->data),'200');
        }
        abort(404,'Not Found');
    }
}
