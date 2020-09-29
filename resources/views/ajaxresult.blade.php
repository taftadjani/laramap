@foreach ($matchedCities as $city)
    <option value="{{ $city->city }}">{{ $city->city }}</option>
@endforeach
