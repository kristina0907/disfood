<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AltaSoftController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
include_once('Admin.php');

Route::get('/', function () {
    return view('welcome');
});



Auth::routes();
Route::post('/auth/loginajax', [ApiController::class,'loginAjax']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');//->middleware(['auth','IsAdmin']);


Route::get('/get/accreditation/quiz',[ApiController::class,'getAccreditationQuiz']);
Route::post('/set/accreditation/quiz',[ApiController::class,'setAccreditationQuiz']);

Route::get('/get/countries',[ApiController::class,'getCountries']);
Route::post('/get/inn/from/api',[ApiController::class,'getInnFromApi']);
Route::post('/get/bank/from/bik',[ApiController::class,'getBankFromApi']);
Route::post('/get/companyname/from/api',[ApiController::class,'getNameFromApi']);
Route::post('/set/company/and/register',[ApiController::class,'setCompanyAndRegister']);

Route::get('/get/my-products',[ApiController::class,'getMyProducts']);
Route::get('/get/newproduct/data',[ApiController::class,'getNewProductData']);
Route::get('/get/productfromid/{id}',[ApiController::class,'getProductFromId']);


Route::get('/get/news/all',[ApiController::class,'getNewsAll']);
Route::get('/get/news/page/{id}',[ApiController::class,'getNewsPage']);

Route::get('/change/currentOrganization/{id}',[ApiController::class,'changeCurrentOrganizationId']);

Route::get('/get/orderdocuments',[ApiController::class,'getOrderDocuments']);

Route::get('/get/my-companies',[ApiController::class,'getUserCompanies']);

Route::get('/get/location',[ApiController::class,'getLocation']);
Route::get('/get/location/from/text/{text}',[ApiController::class,'getLocationFromText']);

Route::get('/get/my-orders',[ApiController::class,'getMyOrders']);
Route::get('/get/my-orders/by-cats',[ApiController::class,'getMyOrdersByCats']);
Route::post('/set/order/new',[ApiController::class,'setNewOrder']);

Route::post('/set/updateprices',[ApiController::class,'updatePrices']);
Route::post('/set/updateprice/product',[ApiController::class,'updatePriceProduct']);

Route::get('/get/order/{id}',[ApiController::class,'getMyOrder']);
Route::get('/get/currentuser',[ApiController::class,'getCurrentUser']);

Route::get('/get/categories',[ApiController::class,'getCategories']);
Route::get('/get/types',[ApiController::class,'getTypes']);
Route::get('/get/filters/{id}',[ApiController::class,'getFiltersFromId']);

Route::get('/get/partners',[ApiController::class,'getPartners']);
Route::get('/get/packages',[ApiController::class,'getPackages']);
Route::get('/get/news',[ApiController::class,'getNews']);

Route::get('/get/catalog',[ApiController::class,'getFilterCatalogData']);
Route::get('/get/catalog/page/{id}',[ApiController::class,'getCatalogPageData']);

Route::get('/get/offer',[ApiController::class,'getFilterOfferData']);

Route::get('/get/messages/{id}',[ApiController::class,'getOfferMessages']);
Route::get('/get/last/message/{id}',[ApiController::class,'getLastMessageFromChat']);
Route::post('/send/messages',[ApiController::class,'setOfferMessages']);
Route::get('/get/my/messages/all',[ApiController::class,'getMyMessagesAll']);

Route::post('/set/new/offer',[ApiController::class,'setNewOffer']);
Route::post('/set/update/offer',[ApiController::class,'setUpdateOffer']);

Route::post('/set/new/organization',[ApiController::class,'setNewOrganization']);
Route::post('/set/update/organization',[ApiController::class,'setUpdateOrganization']);
Route::post('/set/update/profile',[ApiController::class,'setUpdateProfile']);

Route::get('/get/search/all',[ApiController::class,'searchByText']);
Route::post('/get/cat/type',[ApiController::class,'searchCatType']);


Route::get('/get/current/courseusd',[ApiController::class,'getCurrentCourseUsd']);


Route::get('/get/railway/station',[AltaSoftController::class,'getRailwayStation']);
Route::get('/get/railway/station/distance',[AltaSoftController::class,'getCalcDelivery']);

Route::get('/get/autodelivery/distance',[AltaSoftController::class,'getAutoDelivery']);

Route::get('/{any?}',function (){
   return view('welcome');
})->where('any', '.*');


