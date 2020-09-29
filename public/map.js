let map;
let myLatLng;
window.onload = _ => {

    const geoLocationInit = _ => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, fail);
        } else {
            alert('Browser not supported');
        }
    }

    const success = position => {
        const latValue = position.coords.latitude;
        const lngValue = position.coords.longitude;
        // console.log(position);
        myLatLng = new google.maps.LatLng(latValue, lngValue);
        createMap(myLatLng);
        // nearbySearch(myLatLng, ['school', 'store']);
        searchGirls(latValue, lngValue);
    }
    const fail = _ => {
        alert("It's fail");
    }


    // CreateMap
    const createMap = (myLatLng) => {
        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 8
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
        });
    }

    // Marker
    const createMarker = (latLng, icon, name) => {
        var marker = new google.maps.Marker({
            position: latLng,
            icon: icon,
            map: map,
            title: name
        });

    }

    // Near by search

    const nearbySearch = (myLatLng, type) => {

        var request = {
            location: myLatLng,
            radius: '2500',
            scrollwheel: true,
            type: type
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {

            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    let place = results[i];
                    console.log(place);

                    let latLng = place.geometry.location;
                    let icon = place.icon;
                    const name = place.name;

                    createMarker(latLng, icon, name);
                }
            }
        }
    }

    const searchGirls = (lat, lng) => {
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost/laramap/public/api/searchGirls';
        let params = 'lat=' + lat + '&lng=' + lng;
        xhr.open('POST', url, true);

        //Send the proper header information along with the request
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            //Call a function when the state changes.
            if (xhr.readyState == 4 && xhr.status == 200) {
                JSON.parse(xhr.responseText).forEach(girl => {
                    const glatValue = girl.lat;
                    const glngValue = girl.lng;
                    const gname = girl.name;
                    const gmyLatLng = new google.maps.LatLng(glatValue, glngValue);
                    const gicon = {
                        url: "https://www.shareicon.net/data/512x512/2015/10/03/650603_point_512x512.png",
                        scaledSize: new google.maps.Size(30, 30), // size
                    };
                    createMarker(gmyLatLng, gicon, gname)
                });
            }
        }
        xhr.send(params);
    }

    document.querySelector('#form').onsubmit = e => {
        // console.log(JSON.parse("[27.05, 81.17]"));
        e.preventDefault();
        let distValue = document.querySelector('#district').value;
        let cityValue = document.querySelector('#city').value;


        let xhr = new XMLHttpRequest();
        let url = 'http://localhost/laramap/public/api/getLocationCoords';
        let params = 'distVal=' + distValue + '&cityVal=' + cityValue;
        xhr.open('POST', url, true);

        //Send the proper header information along with the request
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const latLng = JSON.parse(this.responseText);
                createMap(myLatLng = new google.maps.LatLng(latLng.lat, latLng.lng));
                searchGirls(latLng.lat, latLng.lng);
            }
        }
        xhr.send(params);
    }
    geoLocationInit();
}