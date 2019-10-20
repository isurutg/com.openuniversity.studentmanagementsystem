<?php

use App\Http\Controllers\GetCountries;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resources([
    'program' => 'ProgramController',
    'academic_schedule' => 'AcademicScheduleController',
    'application_field' => 'FieldController',
    'master_application' => 'MasterApplicationController',
    'application' => 'ApplicationController'
]);

Route::get('countries', 'GetCountries');
Route::get('districts', 'GetDistricts');
