<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class GetCountries extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return response()->json(Country::all());
    }
}
