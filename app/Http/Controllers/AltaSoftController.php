<?php

namespace App\Http\Controllers;

use App\Services\AltaSoftApiService;
use http\Env\Response;
use Illuminate\Http\Request;

class AltaSoftController extends Controller
{
    /**
     * @var AltaSoftApiService
     */

    protected $altasoftService;

    /**
     * AltaSoftController constructor.
     * @param AltaSoftApiService $altaSoftApiService
     */

    public function __construct(AltaSoftApiService $altaSoftApiService)
    {
        $this->altasoftService = $altaSoftApiService;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function getRailwayStation(Request $request)
    {

        if(!empty($request->type) && !empty($request->index))
        {
            $search = $this->altasoftService->getRailwayStation($request->type,$request->index);
            return response()->json(['error'=>'false','search'=>$search],200);
        }

        return response()->json(['error'=>'true','search'=>array()],404);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function getProductCode(Request $request)
    {
        if(!empty($request->type) && !empty($request->index))
        {
            $search = $this->altasoftService->getProductCode($request->type,$request->index);
            return response()->json(['error'=>'false','search'=>$search],200);
        }
        return response()->json(['error'=>'true','search'=>array()],404);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function getCalcDelivery(Request $request)
    {
        dd($request);
        if(!empty($request->type) && !empty($request->fst))
        {
            $search = $this->altasoftService->getDeliveryCalc($request->type,$request->fst,$request->tst,$request->fre,$request->frg,$request->weight);
            return response()->json(['error'=>'false','search'=>$search],200);
        }
        return response()->json(['error'=>'true','search'=>array()],404);
    }
}
