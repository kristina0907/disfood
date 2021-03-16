<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DadataService;
use Illuminate\Http\Request;
use MoveMoveIo\DaData\Facades\DaDataCompany;
use MoveMoveIo\DaData\Enums\BranchType;
use MoveMoveIo\DaData\Enums\CompanyType;
use MoveMoveIo\DaData\Facades\DaDataName;
use MoveMoveIo\DaData\Facades\DaDataPassport;
use MoveMoveIo\DaData\Facades\DaDataPhone;

class DadataController extends Controller
{
    /**
     * @var DadataService
     */

    protected $daDataService;

    /**
     * DadataController constructor.
     * @param DadataService $daDataService
     */

    public function __construct(DadataService $daDataService)
    {
        $this->daDataService = $daDataService;
    }

    /**
     * @param Request $request
     * @return array|mixed|\MoveMoveIo\DaData\DaDataName|\MoveMoveIo\DaData\DaDataPhone
     */

    public function getUserByName(Request $request)
    {
        $result = array();

        if(!empty($request->name))
        {
            $result = $this->daDataService->getUserByName($request->name);
        }

        return $result;
    }

    /**
     * @param Request $request
     * @return array|mixed|\MoveMoveIo\DaData\DaDataCompany
     */

    public function getCompanyByInn(Request $request)
    {
        $result = array();

        if(!empty($request->inn))
        {
            $result = $this->daDataService->getCompanyByInn($request->inn,$request->count);
        }

        return $result;
    }

    /**
     * @param Request $request
     * @return array|mixed|\MoveMoveIo\DaData\DaDataAddress
     */

    public function getCityByName(Request $request)
    {
        $result = array();

        if(!empty($request->name))
        {
            $result = $this->daDataService->getCityByName($request->name,$request->count);
        }

        return $result;
    }

    /**
     * @param Request $request
     * @return array|mixed|\MoveMoveIo\DaData\DaDataPhone
     */

    public function getPhoneByNumber(Request $request)
    {
        $result = array();

        if(!empty($request->phone))
        {
            $result = $this->daDataService->getPhoneByString($request->phone);
        }

        return $result;
    }

    /**
     * @param Request $request
     * @return array|mixed|string
     */

    public function getTypeUserByInn(Request $request)
    {
        $result = array();

        if(!empty($request->inn))
        {
            $result = $this->daDataService->getTypeUserByInn($request->inn);
        }

        return $result;
    }
}
