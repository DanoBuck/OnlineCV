// Here I am connecting to http://api.football-data.org/v1/teams/64/fixtures
// and processing the data that my GET request returns and inserting my
// processed data into my web view

$(document).ready(function(){

	const liverpoolFixtures ="https://api.football-data.org/v1/teams/64/fixtures";
	
	$.ajax({
		headers: { 'X-Auth-Token': 'bb162f8d16b9415a901f6394e5da790e' },
		url: liverpoolFixtures,
		  dataType: 'json',
		  type: 'GET',
		}).done(function(data) {
			const count = data.fixtures.length;
			let firstMatchToComeForLiverpool = 0;
			for(i = 0; i < count; i++){
			
				if(data.fixtures[i].status != "FINISHED" && firstMatchToComeForLiverpool == 0){
					const intoHTML = data.fixtures[i].homeTeamName + " VS "+ data.fixtures[i].awayTeamName;
					$("#team").append(intoHTML);
					$("#matchDate").append(formatDate(data.fixtures[i].date));
					$("#matchTime").append(formatTime(data.fixtures[i].date));
					firstMatchToComeForLiverpool++;
					getCrest(data.fixtures[i]._links.homeTeam, "home");
					getCrest(data.fixtures[i]._links.awayTeam, "away");
					break;
				}
			}
		}); 
});

function getCrest(data, crest){
	$.ajax({
		headers: { 'X-Auth-Token': 'bb162f8d16b9415a901f6394e5da790e' },
		url: data.href,
		dataType: 'json',
		type: 'GET',
		success: function(homeData){
			const crestUrl = homeData.crestUrl;
			let crestDiv = document.getElementById(crest);
			let crestPicture = document.createElement("img");
			crestPicture.setAttribute("src", crestUrl);
			crestPicture.setAttribute("alt", crest + "Crest");
			crestPicture.setAttribute("style", "height: 250px;max-width: 100%;");
			crestDiv.append(crestPicture);
		}
	});
}

function formatDate(data){
	const date = new Date(data);
	
	let month = date.getMonth() + 1;
	
	// Alternative if statement
	month = month < 10 ? "0" + month : month;
	
	result = date.getDate() + "-" + month + "-" + date.getFullYear();
	
	return result;
}

function formatTime(data){
	const time = new Date(data);
	return time.getHours() + ":" + time.getMinutes();
}