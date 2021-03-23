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



Route::get('/{any?}',function (){
   return view('welcome');
});


