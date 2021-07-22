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
use App\Http\Controllers\Admin\CartController;
use App\Http\Controllers\Admin\BikController;
use App\Http\Controllers\Admin\DadataController;
use App\Http\Controllers\Admin\SettingsConroller;
use App\Http\Controllers\AltaSoftController;
use App\Http\Controllers\Admin\TypeDeliveryController;
use App\Http\Controllers\Admin\SimplePageController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\PageCategoryController;
use App\Http\Controllers\OrganizationStatusController;
use App\Http\Controllers\Admin\FilterController;
use App\Http\Controllers\Admin\FilterValuesController;
use App\Http\Controllers\Admin\OrderDocumentController;


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
     *  Organization statuses routes
     */

    Route::get('/organizationstatuses', [OrganizationStatusController::class,'show'] )->name('organizationstatuses.show');
    Route::get('/organizationstatuses/create',[OrganizationStatusController::class,'create'])->name('organizationstatuses.create');
    Route::post('/organizationstatuses/create',[OrganizationStatusController::class,'store'])->name('organizationstatuses.store');
    Route::get('/organizationstatuses/edit/{id}',[OrganizationStatusController::class,'edit'])->name('organizationstatuses.edit');
    Route::get('/organizationstatuses/delete/{id}',[OrganizationStatusController::class,'delete'])->name('organizationstatuses.delete');
    Route::post('/organizationstatuses/update',[OrganizationStatusController::class,'update'])->name('organizationstatuses.update');

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

    /**
     * Partners routes
     */

    Route::get('/partners', [PartnerController::class,'show'] )->name('partners.show');
    Route::get('/partners/create',[PartnerController::class,'create'])->name('partners.create');
    Route::post('/partners/create',[PartnerController::class,'store'])->name('partners.store');
    Route::get('/partners/edit/{id}',[PartnerController::class,'edit'])->name('partners.edit');
    Route::get('/partners/delete/{id}',[PartnerController::class,'delete'])->name('partners.delete');
    Route::post('/partners/update',[PartnerController::class,'update'])->name('partners.update');

    /**
     * Page Categories routes
     */

    Route::get('/pagecategories', [PageCategoryController::class,'show'] )->name('pagecategories.show');
    Route::get('/pagecategories/create',[PageCategoryController::class,'create'])->name('pagecategories.create');
    Route::post('/pagecategories/create',[PageCategoryController::class,'store'])->name('pagecategories.store');
    Route::get('/pagecategories/edit/{id}',[PageCategoryController::class,'edit'])->name('pagecategories.edit');
    Route::get('/pagecategories/delete/{id}',[PageCategoryController::class,'delete'])->name('pagecategories.delete');
    Route::post('/pagecategories/update',[PageCategoryController::class,'update'])->name('pagecategories.update');

    /**
     * Cart routes
     */

    Route::get('/cart', [CartController::class,'show'] )->name('cart.show');
    Route::get('/cart/create',[CartController::class,'create'])->name('cart.create');
    Route::post('/cart/create',[CartController::class,'store'])->name('cart.store');
    Route::get('/cart/edit/{id}',[CartController::class,'edit'])->name('cart.edit');
    Route::get('/cart/delete/{id}',[CartController::class,'delete'])->name('cart.delete');
    Route::post('/cart/update',[CartController::class,'update'])->name('cart.update');



    /**
     * Bik routes
     */

    Route::get('/bik', [BikController::class,'show'] )->name('bik.show');
    Route::get('/bik/create',[BikController::class,'create'])->name('bik.create');
    Route::post('/bik/create',[BikController::class,'store'])->name('bik.store');
    Route::get('/bik/edit/{id}',[BikController::class,'edit'])->name('bik.edit');
    Route::get('/bik/delete/{id}',[BikController::class,'delete'])->name('bik.delete');
    Route::post('/bik/update',[BikController::class,'update'])->name('bik.update');


    /**
     * Bik Parser routes
     */

    Route::get('/bik/parse', [BikController::class,'parse'] )->name('bik.parse');
    Route::get('/bik/findbynumber',[BikController::class,'findBik'])->name('bik.find');

    /**
     * AltaSoft  routes
     */

    Route::get('/altasoft/get-railway-station', [AltaSoftController::class,'getRailwayStation'] )->name('altasoft.get.railway.station');
    Route::get('/altasoft/get-product-code', [AltaSoftController::class,'getProductCode'] )->name('altasoft.get.product.code');
    Route::get('/altasoft/get-delivery-calc', [AltaSoftController::class,'getCalcDelivery'] )->name('altasoft.get.delivery.calc');


    /**
     * DADATA API routes
     */

    Route::get('/dadata/api/get-user-by-name',[DadataController::class,'getUserByName']);
    Route::get('/dadata/api/get-company-by-inn',[DadataController::class,'getCompanyByInn']);
    Route::get('/dadata/api/get-city-by-name',[DadataController::class,'getCityByName']);
    Route::get('/dadata/api/get-phone-by-number',[DadataController::class,'getPhoneByNumber']);
    Route::get('/dadata/api/get-type-user-by-inn',[DadataController::class,'getTypeUserByInn']);


    /**
     * Settings routes
     */

    Route::get('/settings', [SettingsConroller::class,'show'] )->name('settings.show');
    Route::get('/settings/create',[SettingsConroller::class,'create'])->name('settings.create');
    Route::post('/settings/store',[SettingsConroller::class,'store'])->name('settings.store');
    Route::get('/settings/edit/{id}',[SettingsConroller::class,'edit'])->name('settings.edit');
    Route::get('/settings/delete/{id}',[SettingsConroller::class,'delete'])->name('settings.delete');
    Route::post('/settings/update',[SettingsConroller::class,'update'])->name('settings.update');


    /**
     * Type Delivery routes
     */

    Route::get('/typedelivery', [TypeDeliveryController::class,'show'] )->name('typedelivery.show');
    Route::get('/typedelivery/create',[TypeDeliveryController::class,'create'])->name('typedelivery.create');
    Route::post('/typedelivery/create',[TypeDeliveryController::class,'store'])->name('typedelivery.store');
    Route::get('/typedelivery/edit/{id}',[TypeDeliveryController::class,'edit'])->name('typedelivery.edit');
    Route::get('/typedelivery/delete/{id}',[TypeDeliveryController::class,'delete'])->name('typedelivery.delete');
    Route::post('/typedelivery/update',[TypeDeliveryController::class,'update'])->name('typedelivery.update');

    /**
     * Simple Pages routes
     */

    Route::get('/simplepages', [SimplePageController::class,'show'] )->name('simplepages.show');
    Route::get('/simplepages/create',[SimplePageController::class,'create'])->name('simplepages.create');
    Route::post('/simplepages/create',[SimplePageController::class,'store'])->name('simplepages.store');
    Route::get('/simplepages/edit/{id}',[SimplePageController::class,'edit'])->name('simplepages.edit');
    Route::get('/simplepages/delete/{id}',[SimplePageController::class,'delete'])->name('simplepages.delete');
    Route::post('/simplepages/update',[SimplePageController::class,'update'])->name('simplepages.update');


    /**
     * Filters routes
     */

    Route::get('/filters', [FilterController::class,'show'] )->name('filters.show');
    Route::get('/filters/create',[FilterController::class,'create'])->name('filters.create');
    Route::post('/filters/create',[FilterController::class,'store'])->name('filters.store');
    Route::get('/filters/edit/{id}',[FilterController::class,'edit'])->name('filters.edit');
    Route::get('/filters/delete/{id}',[FilterController::class,'delete'])->name('filters.delete');
    Route::post('/filters/update',[FilterController::class,'update'])->name('filters.update');


    /**
     * FiltersValue routes
     */

    Route::get('/filtervalues', [FilterValuesController::class,'show'] )->name('filtervalues.show');
    Route::get('/filtervalues/create',[FilterValuesController::class,'create'])->name('filtervalues.create');
    Route::post('/filtervalues/create',[FilterValuesController::class,'store'])->name('filtervalues.store');
    Route::get('/filtervalues/edit/{id}',[FilterValuesController::class,'edit'])->name('filtervalues.edit');
    Route::get('/filtervalues/delete/{id}',[FilterValuesController::class,'delete'])->name('filtervalues.delete');
    Route::post('/filtervalues/update',[FilterValuesController::class,'update'])->name('filtervalues.update');


    /**
     *  OrderDocuments routes
     */

    Route::get('/orderdocuments', [OrderDocumentController::class,'show'] )->name('orderdocuments.show');
    Route::get('/orderdocuments/create',[OrderDocumentController::class,'create'])->name('orderdocuments.create');
    Route::post('/orderdocuments/create',[OrderDocumentController::class,'store'])->name('orderdocuments.store');
    Route::get('/orderdocuments/edit/{id}',[OrderDocumentController::class,'edit'])->name('orderdocuments.edit');
    Route::get('/orderdocuments/delete/{id}',[OrderDocumentController::class,'delete'])->name('orderdocuments.delete');
    Route::post('/orderdocuments/update',[OrderDocumentController::class,'update'])->name('orderdocuments.update');

});
