<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');//->middleware(['auth','IsAdmin']);

Route::post('/get/inn/from/api',[ApiController::class,'getInnFromApi']);
Route::post('/get/companyname/from/api',[ApiController::class,'getNameFromApi']);
Route::post('/set/company/and/register',[ApiController::class,'setCompanyAndRegister']);

Route::get('/get/my-products/{id}',[ApiController::class,'getMyProducts']);
Route::get('/get/newproduct/data',[ApiController::class,'getNewProductData']);
Route::get('/change/currentOrganization/{id}',[ApiController::class,'changeCurrentOrganizationId']);

Route::get('/get/location',[ApiController::class,'getLocation']);
Route::get('/get/my-offers/{id}',[ApiController::class,'getMyOffers']);
Route::post('/set/order/new',[ApiController::class,'setNewOrder']);
Route::get('/get/order/{id}',[ApiController::class,'getMyOrder']);
Route::get('/get/currentuser',[ApiController::class,'getCurrentUser']);

Route::get('/get/categories',[ApiController::class,'getCategories']);
Route::get('/get/types',[ApiController::class,'getTypes']);
Route::get('/get/partners',[ApiController::class,'getPartners']);
Route::get('/get/packages',[ApiController::class,'getPackages']);
Route::get('/get/news',[ApiController::class,'getNews']);

Route::get('/get/catalog',[ApiController::class,'getFilterCatalogData']);
Route::get('/get/catalog/page/{id}',[ApiController::class,'getCatalogPageData']);
Route::get('/get/offer',[ApiController::class,'getFilterOfferData']);
Route::get('/get/messages/{id}',[ApiController::class,'getOfferMessages']);
Route::get('/get/last/message/{id}',[ApiController::class,'getLastMessageFromChat']);
Route::post('/send/messages',[ApiController::class,'setOfferMessages']);

Route::post('/set/new/offer',[ApiController::class,'setNewOffer']);




Route::get('/{any?}',function (){
   return view('welcome');
})->where('any', '.*');


