var output = document.getElementById("out");
var output2 = document.getElementById("out2");
function geoFindMe(){

if (!navigator.geolocation){

    output.innerHTML = "<p>Tu navegador no soport Geolocalizacion<p/>";
    return;
}

navigator.geolocation.getCurrentPosition(success);
}


function success(position) {

var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

output.innerHTML = "Latitud;" + coords.latitude + "<br>"+"Longitud;" +coords.longitude;
output2.href=""
}