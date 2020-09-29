<?php

namespace App\Http\Controllers;

use App\Girl;
use App\Location;
use Illuminate\Http\Request;

class SearchGirlController extends Controller
{
    function searchGirls(Request $request)
    {
        $lat = $request->lat;
        $lng = $request->lng;

        $girls =Girl::whereBetween('lat', [$lat-10, $lat+10])->whereBetween('lng', [$lng-10, $lng+10])->get();
        return $girls;
    }

    function searchCity(Request $request)
    {
        // return $request->district;
        $distValue = $request->district;
        $matchedCities = Location::where('district',$distValue)->get();
        return view('ajaxresult', compact('matchedCities'));
    }
    function getLocationCoords(Request $request)
    {
        $cityVal = $request->cityVal;
        $distVal = $request->distVal;
        $location = Location::where('district', $distVal)->where('city',$cityVal)->first();

        $lat= $location->lat;
        $lng= $location->lng;
        return ['lat'=>$lat,'lng'=>$lng];
    }
}
