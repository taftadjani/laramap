    const dist = document.querySelector('#district');
    const city = document.querySelector('#city');
    dist.onchange = _ => {
        // console.log(dist.value);

        let xhr = new XMLHttpRequest();
        let url = 'http://localhost/laramap/public/api/searchCity';
        let params = 'district=' + dist.value;
        xhr.open('POST', url, true);

        //Send the proper header information along with the request
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            city.innerHTML = this.responseText;
        }
        xhr.send(params);
    }