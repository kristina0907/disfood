<?php

namespace App\Http\Controllers;

use App\Services\DadataService;
use App\Services\OrganizationService;
use App\Services\UserService;
use Illuminate\Http\Request;


class ApiController extends Controller
{

    /**
     * @var DadataService
     */

    protected $daDataService;

    /**
     * @var OrganizationService
     */

    protected $organizationService;

    /**
     * @var UserService
     */

    protected $userService;

    /**
     * ApiController constructor.
     * @param DadataService $daDataService
     */

    public function __construct(DadataService $daDataService,OrganizationService $organizationService,UserService $userService)
    {
        $this->daDataService = $daDataService;
        $this->organizationService = $organizationService;
        $this->userService = $userService;
    }

    /**
     * @param Request $request
     * @return mixed|\MoveMoveIo\DaData\DaDataCompany
     */

    public function getInnFromApi(Request $request)
    {
        return $this->daDataService->getCompanyByInn($request->inn,10);
    }

    /**
     * @param Request $request
     * @return \MoveMoveIo\DaData\DaDataCompany
     */

    public function getNameFromApi(Request $request)
    {
        return $this->daDataService->getOrganizationByName($request->name);
    }

    public function setCompanyAndRegister(Request $request)
    {
        if(!empty($request))
        {
            $exist_user = $this->userService->findByEmail($request->userEmail);
            if(!$exist_user->id)
            {
                $user = $this->userService->saveData($request);
            }
            $exist_organization = $this->daDataService->getCompanyByInn($request->inn,10);
            if(!empty($exist_organization['suggestions']))
            {
                return $exist_organization['suggestions'];
            }
            $organization = $this->organizationService->saveOrganizationData($request);
            return $organization;
        }
    }

}
