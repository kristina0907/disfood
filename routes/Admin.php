<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CategoryController;
/**
 *  Admin routes
 */


Route::middleware(['auth','IsAdmin'])->prefix('superadmin')->group(function () {

    Route::get('/',[DashboardController::class,'show']);

    /**
     * Roles routes
     */

    Route::get('/roles', [RolesController::class,'show'] )->name('roles.show');
    Route::get('/role/create',[RolesController::class,'create']);
    Route::post('/role/create',[RolesController::class,'store']);
    Route::get('/role/edit/{id}',[RolesController::class,'edit']);
    Route::get('/role/delete/{id}',[RolesController::class,'delete']);
    Route::post('/role/update',[RolesController::class,'update']);


    /**
     * Users routes
     */

    Route::get('/users', [UserController::class,'show'] )->name('users.show');
    Route::get('/user/create',[UserController::class,'create']);
    Route::post('/user/create',[UserController::class,'store']);
    Route::get('/user/edit/{id}',[UserController::class,'edit']);
    Route::get('/user/delete/{id}',[UserController::class,'delete']);
    Route::post('/user/update',[UserController::class,'update']);

    /**
     *  Categories routes
     */

    Route::get('/categories', [CategoryController::class,'show'] )->name('category.show');
    Route::get('/categories/create',[CategoryController::class,'create']);
    Route::post('/categories/create',[CategoryController::class,'store']);
    Route::get('/categories/edit/{id}',[CategoryController::class,'edit']);
    Route::get('/categories/delete/{id}',[CategoryController::class,'delete']);
    Route::post('/categories/update',[CategoryController::class,'update']);
    Route::post('/categories/changetree',[CategoryController::class,'changeTree']);

});
