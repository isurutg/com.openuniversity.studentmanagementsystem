<?php

namespace App\Http\Controllers;

use App\Application;
use App\ProgramAcademicSchedule;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            if (!ProgramAcademicSchedule::where('id', $request->academic_schedule_id)->count()) {
                return response()->json($request);
            }
            $application = new Application;
            $application->academic_schedule_id = $request->academic_schedule_id;
            $application->data = $request->data;
            $application->save();
        } catch (\Illuminate\Database\QueryException $e) {
            // something went wrong with the transaction, rollback
        } catch (\Exception $e) {
            // something went wrong elsewhere, handle gracefully
        }
        return  response()->json($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Application::with(['programSchedule', 'programSchedule.program', 'programSchedule.academicSchedule'])->where('academic_schedule_id', $id)->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
