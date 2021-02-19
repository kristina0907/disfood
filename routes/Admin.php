<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RolesController;

/**
 *  Admin routes
 */


Route::middleware(['auth'])->prefix('superadmin')->group(function () {

    /**
     * Roles routes
     */

    Route::get('/roles', [RolesController::class,'show'] );
    Route::get('/role/create',[RolesController::class,'create']);
    Route::post('/role/create',[RolesController::class,'store']);
});
