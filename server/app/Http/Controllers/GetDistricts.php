<?php

namespace App\Http\Controllers;

use App\District;
use Illuminate\Http\Request;

class GetDistricts extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return response()->json(District::all());
    }
}
