@extends('master')
@section('style')
    <style>
        body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        #map{
            margin: auto auto;
            width: 80vw;
            height: 80vh;
        }
    </style>
@endsection

@section('content')
    <div id="map">
    </div>
    <br>
    <form action="#" id="form">
        <label for="district">District</label>
        <select name="district" id="district">
            @foreach ($locations as $location)
                <option value="{{ $location->district }}">{{ $location->district }}</option>
            @endforeach
        </select>
        <select id="city"></select>
        <input type="submit" value="Find">
    </form>
@endsection
