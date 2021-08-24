<?php

namespace App\Http\Controllers;

use App\Services\BikService;
use App\Services\CategoryService;
use App\Services\ChatRoomService;
use App\Services\CityService;
use App\Services\DadataService;
use App\Services\FilterService;
use App\Services\MessageService;
use App\Services\OfferService;
use App\Services\OrderDocumentService;
use App\Services\OrderService;
use App\Services\OrganizationService;
use App\Services\PackingService;
use App\Services\PartnerService;
use App\Services\ProductService;
use App\Services\SimplePageService;
use App\Services\TypeProductService;
use App\Services\UserService;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use MoveMoveIo\DaData\Facades\DaDataAddress;
use MoveMoveIo\DaData\Enums\Language;



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

    /**
     * @var MessageService
     */

    protected $messageService;

    /**
     * @var PartnerService
     */

    protected $partnerService;

    /**
     * @var SimplePageService
     */

    protected $simplePageService;

    /**
     * @var FilterService
     */

    protected $filterService;

    /**
     * @var CityService
     */

    protected $cityService;

    /**
     * @var OrderDocumentService
     */

    protected $orderDocumentsService;

    /**
     * @var BikService
     */

    protected $bikService;

    /**
     * ApiController constructor.
     * @param DadataService $daDataService
     * @param OrganizationService $organizationService
     * @param UserService $userService
     * @param ProductService $productService
     * @param OfferService $offerService
     * @param CategoryService $categoryService
     * @param TypeProductService $typeService
     * @param PackingService $packingService
     * @param OrderService $orderService
     * @param ChatRoomService $chatRoomService
     * @param MessageService $messageService
     * @param PartnerService $partnerService
     * @param SimplePageService $simplePageService
     * @param CityService $cityService
     * @param FilterService $filterService
     * @param OrderDocumentService $orderDocumentsService
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
                                MessageService $messageService,
                                PartnerService $partnerService,
                                SimplePageService  $simplePageService,
                                CityService $cityService,
                                FilterService $filterService,
                                OrderDocumentService $orderDocumentsService,
                                BikService $bikService

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
        $this->partnerService = $partnerService;
        $this->simplePageService = $simplePageService;
        $this->cityService = $cityService;
        $this->filterService = $filterService;
        $this->orderDocumentsService = $orderDocumentsService;
        $this->bikService = $bikService;
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
     * @return mixed|void
     */

    public function getBankFromApi(Request $request)
    {
        if(!empty($request->bik))
        {
            $bik = $this->bikService->getByBik($request->bik);
            return $bik;
        }
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

    public function getMyProducts()
    {
        $user = Auth::user();
        if (!empty($user) && !empty($user->id))
        {
            return $this->offerService->getOffersByUserId($user->id);
        }
        else
        {
            return response()->json('Error, id is not valid',401);
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

    public function getMyOrders()
    {
        $user = Auth::user();
        if (!empty($user) && !empty($user->id))
        {
            return $this->orderService->getOrdersByUserId($user->id);
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
        $categories = $this->categoryService->getNotEmpty();
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

    public function getPartners()
    {
        $types = $this->partnerService->getAll();
        return response()->json(['partners'=>$types],200);
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
            return $this->offerService->getOffersByCategory($request->category,$request->type);
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
            $product = $this->offerService->getOfferById($id);
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

    /**
     * @param $id
     * @return mixed
     */

    public function getLastMessageFromChat($id)
    {
        if(!empty($id))
        {
            return $this->messageService->getLastByOfferId($id);
        }
    }

    /**
     * @return mixed
     */

    public function getNews()
    {
        return $this->simplePageService->getNews();
    }

    /**
     * @param Request $request
     */

    public function setNewOrder(Request $request)
    {
        if(!empty($request))
        {
            $this->orderService->saveOrderData($request);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function getLocation(Request $request)
    {
        $ip = $request->ip();
        if($ip !== '127.0.0.1')
        {
            $dadata = DaDataAddress::iplocate($ip, 2);
            if(!empty($dadata))
            {
                return response()->json($dadata,200);
            }
            return response()->json('error',402);
        }
        return response()->json(['location'=>['value'=>'office']
        ],200);
    }

    /**
     * @param $text
     * @return \MoveMoveIo\DaData\DaDataAddress|string
     */

    public function getLocationFromText($text)
    {
        $result = '';
        if(!empty($text))
        {
            $search = $this->cleanInputData($text);
            /*$result = $this->cityService->searchByText($search);*/
            $result = DaDataAddress::prompt($search, 20, Language::RU);

        }
        return $result;
    }

    /**
     * @param $string
     * @return string
     */

    private function cleanInputData($string)
    {
        $input_text = str_replace("'",'',$string);
        $input_text = str_replace('"','',$input_text);
        $input_text = strip_tags($input_text);
        $input_text = htmlspecialchars($input_text);
        $input_text = stripslashes($input_text);
        $input_text = pg_escape_string($input_text);

        return $input_text;
    }

    /**
     * @param Request $request
     * @return array
     */

    public function searchByText(Request $request)
    {
        $output = array();
        if(!empty($request) && !empty($request->search))
        {
            $req = $this->cleanInputData($request->search);
            $output['products'] = $this->productService->searchByText($req);
        }
        return $output;
    }

    public function searchCatType(Request $request)
    {

        $output = array();
        if(!empty($request->category_id) && (int)$request->category_id && !empty($request->type_id) && (int) $request->type_id)
        {
            $output['cat'] = $this->categoryService->getCategoryById($request->category_id);
            $output['type'] = $this->typeService->getCategoryById($request->type_id);
        }
        return $output;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

     public function getCurrentUser()
     {
        $user = Auth::check();
        if($user) {
            $us = Auth::user();
            $user = $this->userService->getById($us->id);
            $output['user'] = $user;


            //dd($output);
            return response()->json($output,200);
        }
        else
        {
            return response()->json($user,201);
        }

     }

    /**
     * @param $id
     */

     public function changeCurrentOrganizationId($id)
     {
         if(!empty($id))
         {
             //TODO сделать проверку естьь ли у пользователя айди этой организации в организациях
             $user = $this->userService->updateCurrentOrganization($id);
             return response()->json(['user'=>$user],200);
         }
     }

    /**
     * @param Request $request
     */

     public function setNewOffer(Request $request)
     {

         if(!empty($request))
         {
             $this->offerService->saveOfferData($request);
         }
     }

    /**
     * @param Request $request
     */

     public function setNewOrganization(Request $request)
     {
        if(!empty($request))
        {
            $this->organizationService->saveOrganizationFromLK($request);
        }
     }

    /**
     * @param Request $request
     */

     public function setUpdateOrganization(Request $request)
     {
         if(!empty($request))
         {
             $this->organizationService->updateOrganizationFromLK($request);
         }
     }


    /**
     * @param $id
     * @return mixed
     */

     public function getFiltersFromId($id)
     {
         if(!empty($id))
         {
             return $this->filterService->getByType_id($id);
         }
     }

    /**
     * @return mixed
     */

     public function getNewsAll()
     {
         return $this->simplePageService->getNewsAll();

     }

    /**
     * @param $id
     * @return mixed
     */

     public function getNewsPage($id)
     {
         return $this->simplePageService->getById($id);
     }

    /**
     * @return mixed
     */

     public function getOrderDocuments()
     {
         return $this->orderDocumentsService->getAll();
     }

    /**
     * @return mixed
     */

     public function getCurrentCourseUsd()
     {
         static $rates;

         if ($rates === null) {
             $rates = json_decode(file_get_contents('https://www.cbr-xml-daily.ru/daily_json.js'));
         }
         if (!empty($rates)) {
             return response()->json($rates->Valute->USD,200);
         }
         else
         {
             return 1;
         }

     }
}
