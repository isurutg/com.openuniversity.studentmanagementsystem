<?php

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

Route::get('program/get_all', 'ProgramController@getAll');
Route::get('academic_schedule/get_all', 'AcademicScheduleController@getAll');
Route::get('application_filed/get_all', 'FieldController@getAll');
Route::resources([
    'program' => 'ProgramController',
    'academic_schedule' => 'AcademicScheduleController',
    'master_application' => 'MasterApplicationController'
]);
