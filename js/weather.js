$(document).ready(function(){
	var apiKey = 'b04dbf475994a98f5849aa6856a4596d';
	var curl = 'https://api.forecast.io/forecast/';
	var lati = 53.3029589;
	var longi = -6.3644888;
	var data;
	$.ajax({
		type: "GET",
		url: curl + apiKey +"/"+ lati +","+ longi +"?callback=?",
		dataType: "json",
		success: function(data){
			//var json = $.parseJSON(data);
			console.log(data);
			console.log("APP " + JSON.stringify(JSON.parse(data.currently.apparentTemperature)));
			// Convert Fahrenheit to Celcius for the application
			data.currently.apparentTemperature = calculateFahrenheitToCelcius(data.currently.apparentTemperature);
			$("#currentTemperature").append(Math.floor(data.currently.apparentTemperature));
			$("#currentTime").append(Date(data.currently.time));
				if(data.currently.icon == 'clear-day') { $("#currentIcon").addClass("wi-day-sunny") };
				if(data.currently.icon == 'clear-night') { $("#currentIcon").addClass("wi-night-clear") };
				if(data.currently.icon == 'rain') { $("#currentIcon").addClass("wi-rain") };
				if(data.currently.icon == 'snow') { $("#currentIcon").addClass("wi-snow") };
				if(data.currently.icon == 'sleet') { $("#currentIcon").addClass("wi-day-sleet") };
				if(data.currently.icon == 'wind') { $("#currentIcon").addClass("wi-day-windy") };
				if(data.currently.icon == 'fog') { $("#currentIcon").addClass("wi-fog") };
				if(data.currently.icon == 'cloudy') { $("#currentIcon").addClass("wi-cloudy") };
				if(data.currently.icon == 'partly-cloudy-day') { $("#currentIcon").addClass("wi-day-cloudy") };
				if(data.currently.icon == 'partly-cloudy-night') { $("#currentIcon").addClass("wi-night-cloudy") };
				if(data.currently.icon == 'hail') { $("#currentIcon").addClass("wi-hail") };
				if(data.currently.icon == 'thunderstorm') { $("#currentIcon").addClass("wi-thunderstorm") };
				if(data.currently.icon == 'tornado') { $("#currentIcon").addClass("wi-meteor") };
			$("#humidity").append(data.currently.humidity);
			$("#currentWind").append(data.currently.windSpeed);
			$("#hourlySummary").append(data.hourly.summary);
			$("#currentSummary").append(data.currently.summary);
			$("#daily_summary").append(data.daily.summary);
			$("weekly").append(data.daily.data[0].apparentTemperatureMax);
		},
		error: function() {
			alert("An error occurred");
		}
	});
});

// Function used to convert Fahrenheit to Celcius for the application
function calculateFahrenheitToCelcius(fahrenheit){
	var celcius = ((fahrenheit - 32) * 5) / 9;
	
	return celcius;
}