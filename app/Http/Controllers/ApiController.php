<?php

namespace App\Http\Controllers;

use App\Services\DadataService;
use App\Services\OfferService;
use App\Services\OrganizationService;
use App\Services\ProductService;
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
     * @var ProductService
     */

    protected $productService;


    protected $offerService;
    /**
     * ApiController constructor.
     * @param DadataService $daDataService
     */

    public function __construct(DadataService $daDataService,
                                OrganizationService $organizationService,
                                UserService $userService,
                                ProductService $productService,
                                OfferService $offerService)
    {
        $this->daDataService = $daDataService;
        $this->organizationService = $organizationService;
        $this->userService = $userService;
        $this->productService = $productService;
        $this->offerService = $offerService;
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

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */

    public function setCompanyAndRegister(Request $request)
    {
        if(!empty($request))
        {
            $exist_user = $this->userService->findByEmail($request->userEmail);
            //dd($exist_user);
            if($exist_user == null || !$exist_user->id)
            {
                $user = $this->userService->saveData($request);
            }
            else
            {
                return response('User already exist',401);
            }
            $exist_organization = $this->daDataService->getCompanyByInn($request->inn,10);
            if(!empty($exist_organization['suggestions']))
            {
                $exist_organization_in_db = $this->organizationService->findByInn($request->inn);
                if(!empty($exist_organization_in_db))
                {
                    return response()->json('Organization already exist in database',401);
                }
                elseif(!empty($user))
                {
                    $organization = $this->organizationService->saveOrganizationFromApi($exist_organization['suggestions'],$user);
                }

            }
            return response()->json('User and organization successfully created',200);
        }
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getMyProducts($id)
    {
        if(!empty($id))
        {
            return $this->offerService->getOffersByUserId($id);
        }
    }

}
