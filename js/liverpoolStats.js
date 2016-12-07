// Here I am connecting to http://api.football-data.org/v1/teams/64/fixtures
// and processing the data that my GET request returns and inserting my
// processed data into my web view

$(document).ready(function(){

	var liverpoolFixtures ="https://api.football-data.org/v1/teams/64/fixtures";
	
	$.ajax({
		headers: { 'X-Auth-Token': 'bb162f8d16b9415a901f6394e5da790e' },
		url: liverpoolFixtures,
		  dataType: 'json',
		  type: 'GET',
		}).done(function(data) {
			var count = data.fixtures.length;
			var firstMatchToComeForLiverpool = 0;
			for(i = 0; i < count; i++){
			
				if(data.fixtures[i].status != "FINISHED" && firstMatchToComeForLiverpool == 0){
					var intoHTML = data.fixtures[i].homeTeamName + " VS "+ data.fixtures[i].awayTeamName;
					$("#team").append(intoHTML);
					$("#matchDate").append(formatDate(data.fixtures[i].date));
					$("#matchTime").append(formatTime(data.fixtures[i].date));
					firstMatchToComeForLiverpool++;
				}
			}
		}); 
});

function formatDate(data){
	var result = "";
	
	var day = data[8] + data[9];
	var month = data[5] + data[6];
	var year = data[0] + data[1] + data[2] + data[3];
	
	result = day + "-" + month + "-" + year;
	
	return result;
}

function formatTime(data){
	var time = data[11] + data[12] + data[13] + data[14] + data[15];
	return time;
}
