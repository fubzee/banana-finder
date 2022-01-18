var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector('#search-input');
var buttonEl = document.querySelector('button');
var searchResultContainerEl = document.querySelector('#search-container');
var lyricSearch = "";
var buildString ="";

$(document).ready(function(){

	$(buttonEl).click(function(){

		lyricSearch = document.getElementById("Lyrics").value;
		console.log(lyricSearch);
        var spacesReplaced = lyricSearch.replaceAll(' ', '%20');
		console.log ("new seacrh", lyricSearch);
		
		if (lyricSearch)
		{
			
				var apiURL = "https://www.stands4.com/services/v2/lyrics.php?uid=9860&tokenid=gfCFrxlNnTRayIdf&term="+spacesReplaced+"&format=json";
				console.log("url", apiURL);

				fetch(apiURL)
				.then(function (response) 
					{
						  return response.json()
					   })
		   
				.then(data => {
						console.log(data);
						for (var i=0; i < fromAPI.length; i++)
						{
							var songName = data [result][song];
							var artistName = data [result][artist];
							var resultListEl = document.createElement('a');
							resultListEl.classList = 'list-item flex-row justify-space-between align-center';
							resultListEl.setAttribute('href','./second HTML page to show more upcoming events');
							var titleEl = document.createElement('span');
							titleEl.textContent = songName + artistName;
							resultListEl.appendChild(titleEl);
							searchResultContainerEl.appendChild(resultListEl);
						}
				})
				.catch(function(error){
				console.log("Invalid API call");
				}) 


			
        } 
		else
		{ 
            console.log("input error");
        }
	

				// API yet to confirm. term 'fromAPI' is unknown.it can be something lie 'song' or 'artist'
			//    var apiUrl = "https://api.genius.com/oauth/authorize?";
			//    var client_id = "8dsidI5W2kJB-cDX_7SDC02LTYIAj3P6KzJKobRXPRvRs2JxQa4NvnNJ8aVM7VIw&";
			//   var redirect_uri= "https://fubzee.github.io/banana-finder/&";
			//   var scope="me&";
			//   var state="banana-finder&";
			//   var response_type= "token";

			//   var fetchapiUrl = "apiUrl" + "client_id" + "redirect_url" + "scope" + "state" + "response_type";
				//var getLyrics = function (fromAPI){
				//  var apiUrl = 'https://......'
	});
});
