$(document).ready(function () {
    // Example: https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/San_Francisco.json

    // Mock: https://www.dropbox.com/s/1t21mnbkudc7mzh/Weather-mock-2.png?dl=0

    var base_path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/";

    $.getJSON(SF)

    var SF = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/SanFrancisco.json"

    console.log(fun);

    var cities = [
        "San_Francisco",
        "Miami",
        "New_Orleans",
        "Chicago",
        "New_York_City"
    ];

    // Convert from Meters Per Second to Miles Per Hour
    function fromMPStoMPH(mps) {
        return (Math.round(10 * mps * 2.2369362920544) / 10);
    }

    // Convert from Kelvins to Fahrenheit
    function convertKtoF(kelvin) {
        return Math.round((kelvin * 1.8) - 459.67);
    }

    // Weather icon
    function getIconURL(icon) {
        return "http://openweathermap.org/img/w/" + icon + ".png";
    }



    //base_path + cities.json

}); 