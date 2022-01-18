


function clickSearch(){
    var searchTerm = lyricsBox.value;
    var apiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=" + searchTerm );

    fetch(apiUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
        var xmlDoc = new DOMParser().parseFromString(data.contents, "text/xml");
        
        console.log(xmlDoc);

        var searchResults = xmlDoc.getElementsByTagName("SearchLyricResult");
        var results = [];

        for (var i = 0; i < searchResults.length; i++) {
        if (searchResults[i].childNodes.length) {
            var artist = searchResults[i].getElementsByTagName("Artist")[0].childNodes[0].nodeValue;
            var song = searchResults[i].getElementsByTagName("Song")[0].childNodes[0].nodeValue;
            var rank = searchResults[i].getElementsByTagName("SongRank")[0].childNodes[0].nodeValue;

            results.push({
                artist,
                song,
                rank
            });
        }
        }

        console.log(results);
        
        document.getElementById("artist1").innerHTML="Artist: " + results[0].artist;
        document.getElementById("song1").innerHTML="Song: " + results[0].song;
        document.getElementById("freshness1").innerHTML="Freshness: " + results[0].rank; "bananas";
        document.getElementById("searchedLyric").innerHTML= '"' + searchTerm + '"';

        document.getElementById("artist2").innerHTML="Artist: " + results[1].artist;
        document.getElementById("song2").innerHTML="Song: " + results[1].song;
        document.getElementById("freshness2").innerHTML="Freshness: " + results[1].rank; "bananas";

        document.getElementById("artist3").innerHTML="Artist: " + results[2].artist;
        document.getElementById("song3").innerHTML="Song: " + results[2].song;
        document.getElementById("freshness3").innerHTML="Freshness: " + results[2].rank; "bananas";
        
    })
    .catch(function (error) {
        console.log(error);
    });
}