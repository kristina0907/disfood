<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use App\Services\ChatRoomService;
use App\Services\DadataService;
use App\Services\MessageService;
use App\Services\OfferService;
use App\Services\OrderService;
use App\Services\OrganizationService;
use App\Services\PackingService;
use App\Services\ProductService;
use App\Services\TypeProductService;
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

    /**
     * @var OfferService
     */

    protected $categoryService;

    /**
     * @var OfferService
     */

    protected $offerService;

    /**
     * @var TypeProductService
     */

    protected $typeService;

    /**
     * @var PackingService
     */

    protected $packingService;

    /**
     * @var OrderService
     */

    protected $orderService;

    /**
     * @var ChatRoomService
     */

    protected $chatRoomService;

    protected $messageService;

    /**
     * ApiController constructor.
     * @param DadataService $daDataService
     */

    public function __construct(DadataService $daDataService,
                                OrganizationService $organizationService,
                                UserService $userService,
                                ProductService $productService,
                                OfferService $offerService,
                                CategoryService $categoryService,
                                TypeProductService $typeService,
                                PackingService $packingService,
                                OrderService $orderService,
                                ChatRoomService $chatRoomService,
                                MessageService $messageService
    )
    {
        $this->daDataService = $daDataService;
        $this->organizationService = $organizationService;
        $this->userService = $userService;
        $this->productService = $productService;
        $this->offerService = $offerService;
        $this->categoryService = $categoryService;
        $this->typeService = $typeService;
        $this->packingService = $packingService;
        $this->orderService = $orderService;
        $this->chatRoomService = $chatRoomService;
        $this->messageService = $messageService;
    }

    /**
     * @param Request $request
     * @return mixed|\MoveMoveIo\DaData\DaDataCompany
     */

    public function getInnFromApi(Request $request)
    {
        return $this->daDataService->getCompanyByInn($request->inn, 10);
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
        if (!empty($request)) {
            $exist_user = $this->userService->findByEmail($request->userEmail);
            if ($exist_user == null || !$exist_user->id)
            {
                $user = $this->userService->saveData($request);
            }
            else
            {
                return response('User already exist', 401);
            }
            $exist_organization = $this->daDataService->getCompanyByInn($request->inn, 10);
            if (!empty($exist_organization['suggestions']))
            {
                $exist_organization_in_db = $this->organizationService->findByInn($request->inn);
                if (!empty($exist_organization_in_db))
                {
                    return response()->json('Organization already exist in database', 401);
                }
                elseif (!empty($user))
                {
                    $organization = $this->organizationService->saveOrganizationFromApi($exist_organization['suggestions'], $user);
                }
            }
            return response()->json('User and organization successfully created', 200);
        }
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getMyProducts($id)
    {
        if (!empty($id)) {
            return $this->offerService->getOffersByUserId($id);
        }
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function getNewProductData()
    {
        $categories = $this->categoryService->getAll();
        $types = $this->typeService->getAll();
        $products = $this->productService->getAll();
        $packings = $this->packingService->getAll();

        return response()->json(['categories' => $categories, 'types' => $types, 'products' => $products, 'packings' => $packings], 200);
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getMyOffers($id)
    {
        if (!empty($id)) {
            return $this->orderService->getOrdersByUserId($id);
        }
        else
        {
            return response()->json('Error, id is not valid',401);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse|mixed
     */

    public function getMyOrder($id)
    {
        if (!empty($id)) {
            return $this->orderService->getOrderById($id);
        }
        else
        {
            return response()->json('Error, id is not valid',401);
        }
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function getCategories()
    {
        $categories = $this->categoryService->getAll();
        return response()->json(['cats'=>$categories],200);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function getTypes()
    {
        $types = $this->typeService->getAll();
        return response()->json(['types'=>$types],200);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function getPackages()
    {
        $packages = $this->packingService->getAll();
        return response()->json(['packages'=>$packages],200);
    }

    /**
     * @param Request $request
     * @return mixed
     */

    public function getFilterCatalogData(Request $request)
    {
        if(!empty($request->category))
        {
            return $this->productService->getProductsByCatsAndTypes($request->category,$request->type);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */

    public function getCatalogPageData($id)
    {
        if(!empty($id))
        {
            $product = $this->productService->getProductById($id);
            return response()->json($product,200);
        }
        return response()->json('Error id is invalid',401);
    }

    /**
     * @param Request $request
     * @return mixed
     */

    public function getFilterOfferData(Request $request)
    {
        return $this->offerService->getOffersByCategory($request);
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getOfferMessages($id)
    {
        if(!empty($id))
        {
           return $this->messageService->getByOfferId($id);
        }
    }

    /**
     * @param Request $request
     * @return mixed
     */

    public function setOfferMessages(Request $request)
    {
        if(!empty($request->author) && !empty($request->room) && !empty($request->message))
        {
            return $this->messageService->saveData($request);
        }
    }

    public function getLastMessageFromChat($id)
    {
        if(!empty($id))
        {
            return $this->messageService->getLastByOfferId($id);
        }
    }
}
