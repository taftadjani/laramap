<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laramap</title>
    @yield('style')
</head>
<body>
    @yield('content')
    <script>

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCVUW3OYxzfwg_zB7NyDuHAqtnCSlfxEo&libraries=places" async defer></script>
    <script src="{{ asset('map.js') }}"></script>
    <script src="{{ asset('ajaxsearch.js') }}"></script>
</body>
</html>
