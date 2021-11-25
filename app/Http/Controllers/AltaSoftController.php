<?php

namespace App\Http\Controllers;

use App\Services\AltaSoftApiService;
use App\Services\GeoLocationAutoDeliveryService;
use http\Env\Response;
use Illuminate\Http\Request;

class AltaSoftController extends Controller
{
    /**
     * @var AltaSoftApiService
     */

    protected $altasoftService;

    /**
     * @var GeoLocationAutoDeliveryService
     */

    protected $geoLocationAutoDeliveryService;

    /**
     * @param AltaSoftApiService $altaSoftApiService
     * @param GeoLocationAutoDeliveryService $geoLocationAutoDeliveryService
     */

    public function __construct(AltaSoftApiService $altaSoftApiService,GeoLocationAutoDeliveryService $geoLocationAutoDeliveryService)
    {
        $this->altasoftService = $altaSoftApiService;
        $this->geoLocationAutoDeliveryService = $geoLocationAutoDeliveryService;
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
        //dd($request);
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
        //dd($request);
        if(!empty($request->type) && !empty($request->fst))
        {
            $search = $this->altasoftService->getDeliveryCalc($request->type,$request->fst,$request->tst,$request->fre);
            return response()->json(['error'=>'false','search'=>$search],200);
        }
        return response()->json(['error'=>'true','search'=>array()],404);
    }

    /**
     * @param Request $request
     * @return array|void
     */

    public function getAutoDelivery(Request $request)
    {
       if(!empty($request->latitude_from) && !empty($request->latitude_to) && !empty($request->longitude_from) && !empty($request->longitude_to))
       {
           $dist = $this->geoLocationAutoDeliveryService->haversineGreatCircleDistance($request->latitude_from,$request->longitude_from,$request->latitude_to,$request->longitude_to);
           $summ = (float)$dist * (float)50;
           $time = (float)$dist / (float) 800;
           $output = [];
           $output['summ'] = round($summ);
           if($time > 1)
           {
                $output['time'] = round($time) + 1;
           }
           else
           {
               $output['time'] = 1;
           }
           return $output;
       }
    }
}
