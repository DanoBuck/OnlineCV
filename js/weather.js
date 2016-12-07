$(document).ready(function(){
	var apiKey = '6c729b8c6a8cbe5ed57872f10dd58e6e';
	var curl = 'https://api.forecast.io/forecast/';
	var lati = 53.3029589;
	var longi = -6.3644888;
	var data;
	$.ajax({
		type: "GET",
		url: curl + apiKey +"/"+ lati +","+ longi +"?callback=?",
		dataType: "json",
		success: function(data){
			// Convert Fahrenheit to Celcius for the application
			data.currently.apparentTemperature = calculateFahrenheitToCelcius(data.currently.apparentTemperature);
			
			$("#currentTemperature").append(Math.floor(data.currently.apparentTemperature));
			$("#currentDay").append(getTheDay());
			$("#currentDate").append(getFullDate());
			$("#currentWind").append(data.currently.windSpeed);
			$("#hourlySummary").append(data.hourly.summary);
			$("#currentSummary").append(data.currently.summary);
		},
		error: function() {
			console.log("An error occurred");
		}
	});
});

// Function used to convert Fahrenheit to Celcius for the application
function calculateFahrenheitToCelcius(fahrenheit){
	var celcius = ((fahrenheit - 32) * 5) / 9;
	
	return celcius;
}

// Returns day of the week
function getTheDay() {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[date.getDay()];
    return n;
}

// Returns date as dd/MM/yyyy
function getFullDate(){
	var date = new Date();
	var dateToReturnAsString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    return dateToReturnAsString;
}

// Starts a real time clock
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('realTimeInDublin').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i}; 
	return i;
}