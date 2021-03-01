<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OrganizationsController;

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
     *  Organizations routes
     */

    Route::get('/organizations', [OrganizationsController::class,'show'] )->name('organizations.show');
    Route::get('/organizations/create',[OrganizationsController::class,'create'])->name('organizations.create');
    Route::post('/organizations/create',[OrganizationsController::class,'store'])->name('organizations.store');
    Route::get('/organizations/edit/{id}',[OrganizationsController::class,'edit'])->name('organizations.edit');
    Route::get('/organizations/delete/{id}',[OrganizationsController::class,'delete'])->name('organizations.delete');
    Route::post('/organizations/update',[OrganizationsController::class,'update'])->name('organizations.update');

});
