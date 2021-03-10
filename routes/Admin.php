<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OrganizationsController;
use App\Http\Controllers\Admin\TypeProductController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\OfferController;
use App\Http\Controllers\Admin\CountryController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\OrderStatusController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PackingController;
/**
 *  Admin routes
 */


Route::middleware(['auth','IsAdmin'])->prefix('superadmin')->group(function () {

    Route::get('/',[DashboardController::class,'show']);

    /**
     * Roles routes
     */

    Route::get('/roles', [RolesController::class,'show'] )->name('roles.show');
    Route::get('/role/create',[RolesController::class,'create'])->name('roles.create');
    Route::post('/role/create',[RolesController::class,'store'])->name('roles.store');
    Route::get('/role/edit/{id}',[RolesController::class,'edit'])->name('roles.edit');
    Route::get('/role/delete/{id}',[RolesController::class,'delete'])->name('roles.delete');
    Route::post('/role/update',[RolesController::class,'update'])->name('roles.update');


    /**
     * Users routes
     */

    Route::get('/users', [UserController::class,'show'] )->name('users.show');
    Route::get('/user/create',[UserController::class,'create'])->name('user.create');
    Route::post('/user/create',[UserController::class,'store'])->name('user.store');
    Route::get('/user/edit/{id}',[UserController::class,'edit'])->name('user.edit');
    Route::get('/user/delete/{id}',[UserController::class,'delete'])->name('user.delete');
    Route::post('/user/update',[UserController::class,'update'])->name('user.update');

    /**
     *  Categories routes
     */

    Route::get('/categories', [CategoryController::class,'show'] )->name('category.show');
    Route::get('/categories/create',[CategoryController::class,'create'])->name('categories.create');
    Route::post('/categories/create',[CategoryController::class,'store'])->name('categories.store');
    Route::get('/categories/edit/{id}',[CategoryController::class,'edit'])->name('categories.edit');
    Route::get('/categories/delete/{id}',[CategoryController::class,'delete'])->name('categories.delete');
    Route::post('/categories/update',[CategoryController::class,'update'])->name('categories.update');
    Route::post('/categories/changetree',[CategoryController::class,'changeTree'])->name('categories.changeTree');

    /**
     *  Types routes
     */

    Route::get('/types', [TypeProductController::class,'show'] )->name('types.show');
    Route::get('/types/create',[TypeProductController::class,'create'])->name('types.create');
    Route::post('/types/create',[TypeProductController::class,'store'])->name('types.store');
    Route::get('/types/edit/{id}',[TypeProductController::class,'edit'])->name('types.edit');
    Route::get('/types/delete/{id}',[TypeProductController::class,'delete'])->name('types.delete');
    Route::post('/types/update',[TypeProductController::class,'update'])->name('types.update');


    /**
     *  Organizations routes
     */

    Route::get('/organizations', [OrganizationsController::class,'show'] )->name('organizations.show');
    Route::get('/organizations/create',[OrganizationsController::class,'create'])->name('organizations.create');
    Route::post('/organizations/create',[OrganizationsController::class,'store'])->name('organizations.store');
    Route::get('/organizations/edit/{id}',[OrganizationsController::class,'edit'])->name('organizations.edit');
    Route::get('/organizations/delete/{id}',[OrganizationsController::class,'delete'])->name('organizations.delete');
    Route::post('/organizations/update',[OrganizationsController::class,'update'])->name('organizations.update');
    Route::post('/organizations/findsearch',[OrganizationsController::class,'findByText'])->name('organizations.findByText');

    /**
     *  Products routes
     */

    Route::get('/products', [ProductController::class,'show'] )->name('products.show');
    Route::get('/products/create',[ProductController::class,'create'])->name('products.create');
    Route::post('/products/create',[ProductController::class,'store'])->name('products.store');
    Route::get('/products/edit/{id}',[ProductController::class,'edit'])->name('products.edit');
    Route::get('/products/delete/{id}',[ProductController::class,'delete'])->name('products.delete');
    Route::post('/products/update',[ProductController::class,'update'])->name('products.update');


    /**
     *  Offers routes
     */

    Route::get('/offers', [OfferController::class,'show'] )->name('offers.show');
    Route::get('/offers/create',[OfferController::class,'create'])->name('offers.create');
    Route::post('/offers/create',[OfferController::class,'store'])->name('offers.store');
    Route::get('/offers/edit/{id}',[OfferController::class,'edit'])->name('offers.edit');
    Route::get('/offers/delete/{id}',[OfferController::class,'delete'])->name('offers.delete');
    Route::post('/offers/update',[OfferController::class,'update'])->name('offers.update');

    /**
     *  Countries routes
     */

    Route::post('/countries/findsearch',[CountryController::class,'findByText']);

    /**
     * Cities routes
     */

    Route::post('/cities/findsearch',[CityController::class,'findByText']);

    /**
     * Order Statuses routes
     */

    Route::get('/orderstatuses', [OrderStatusController::class,'show'] )->name('orderstatuses.show');
    Route::get('/orderstatuses/create',[OrderStatusController::class,'create'])->name('orderstatuses.create');
    Route::post('/orderstatuses/create',[OrderStatusController::class,'store'])->name('orderstatuses.store');
    Route::get('/orderstatuses/edit/{id}',[OrderStatusController::class,'edit'])->name('orderstatuses.edit');
    Route::get('/orderstatuses/delete/{id}',[OrderStatusController::class,'delete'])->name('orderstatuses.delete');
    Route::post('/orderstatuses/update',[OrderStatusController::class,'update'])->name('orderstatuses.update');

    /**
     * Order routes
     */

    Route::get('/orders', [OrderController::class,'show'] )->name('order.show');
    Route::get('/orders/create',[OrderController::class,'create'])->name('order.create');
    Route::post('/orders/create',[OrderController::class,'store'])->name('order.store');
    Route::get('/orders/edit/{id}',[OrderController::class,'edit'])->name('order.edit');
    Route::get('/orders/delete/{id}',[OrderController::class,'delete'])->name('order.delete');
    Route::post('/orders/update',[OrderController::class,'update'])->name('order.update');

    /**
     * Packing routes
     */

    Route::get('/packing', [PackingController::class,'show'] )->name('packing.show');
    Route::get('/packing/create',[PackingController::class,'create'])->name('packing.create');
    Route::post('/packing/create',[PackingController::class,'store'])->name('packing.store');
    Route::get('/packing/edit/{id}',[PackingController::class,'edit'])->name('packing.edit');
    Route::get('/packing/delete/{id}',[PackingController::class,'delete'])->name('packing.delete');
    Route::post('/packing/update',[PackingController::class,'update'])->name('packing.update');

});
