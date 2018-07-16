var API_KEY = "b8d4bc852eb8610bc15fc8bdc2d05386";

$(function() {	

	var loc

	var currentTemp

	// var units = if (true) {};

	$.getJSON('http://ipinfo.io', function(d){
	  console.log("assigning the data: ");
	  loc = d.loc.split(",");
	  console.log(loc);

	  // call to the weather API
	  $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=metric&lat='
	  	+ loc[0] + '&lon=' + loc[1] + "&APPID=" + API_KEY, 

	  	function(wd){
	  	console.log("got the data ,", wd);
	  	var currentLocation = wd.name;
	  	var basicCurrentWeather = wd.weather[0].main;
	  	var currentWeather = wd.weather[0].description;
	  	currentTemp = Math.round(wd.main.temp);
	  	var high = Math.round(wd.main.temp_max);
	  	var low = Math.round(wd.main.temp_min);
	  	var description = wd.weather[0].main;

	  	$("#location").html(currentLocation);
	  	$("#description").html(basicCurrentWeather);
	  	$("#main-temperature").html(currentTemp + "&deg;" + "C");
	  	$("#max-temperature").html("Max: " + high + "&deg;" + "C");
	  	$("#min-temperature").html("Min: " + low + "&deg;" + "C");

	  	$('#toggleUnit').on('click', function(){
			$('#main-temperature').toggleClass('celsius');
			$('#main-temperature').toggleClass('fahrenheit');

			if ($('#main-temperature').hasClass('celsius')) {
				$('#main-temperature').text(setFahrenheit());
				$('#max-temperature').html("Max: " + Math.round((high * 9/5) + 32) + "°F");
				$('#min-temperature').html("Min: " + Math.round((low * 9/5) + 32 ) + "°F");
				return;
			} 

			$('#main-temperature').text(setCelsius());
		});

		function setFahrenheit(){
		var cel = Math.round((currentTemp * 9/5 ) + 32);

		return cel + "°F";
		};

		function setCelsius(){

		if ($('#main-temperature').hasClass('celsius')) {
			$('#max-temperature').html("Max: " + high + "°C");
			$('#min-temperature').html("Min: " + low + "°C");
		} else {
			$('#max-temperature').html("Max: " + Math.round((high * 9/5) + 32) + "°F");
			$('#min-temperature').html("Min: " + Math.round((low * 9/5) + 32 ) + "°F");
		}
		return (currentTemp + "°C");

		};

	  	switch (description) {

	  		case "Thunderstorm":
	  			$("#icon").html(
    			"<div class=\"icon thunder-storm\">"+
      				"<div class=\"cloud\"></div>"+
      				"<div class=\"lightning\">"+
        			"<div class=\"bolt\"></div>"+
        			"<div class=\"bolt\"></div>"+
      				"</div>"+
    			"</div>"
    			);
				break;

	  		case "Rain":
	  		case "Drizzle":
	  			$("#icon").html(
	  			"<div class=\"icon rainy\">"+
      				"<div class=\"cloud\"></div>"+
      				"<div class=\"rain\"></div>"+
    			"</div>"
    			);
    			break;

	  		case "Atmosphere":
	  		case "Snow":
	  			$("#icon").html(
	  			"<div class=\"icon flurries\">"+
      				"<div class=\"cloud\"></div>"+
      				"<div class=\"snow\">"+
        			"<div class=\"flake\"></div>"+
        			"<div class=\"flake\"></div>"+
      			"</div>"
      			);
      			break;

      		case "Clear":
      			$("#icon").html(
      			"<div class=\"icon sunny\">"+
      				"<div class=\"sun\">"+
        			"<div class=\"rays\"></div>"+
      				"</div>"+
    			"</div>"
    			);
    			break;

    		case "Clouds":
    			$("#icon").html(
    			"<div class=\"icon cloudy\">"+
      				"<div class=\"cloud\"></div>"+
      				"<div class=\"cloud\"></div>"+
    			"</div>"
    			);
    			break;
	  	}
	  })
	})
})