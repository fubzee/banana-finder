


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

        for (var i = 0; i < 3; i++) {
        if (searchResults[i].childNodes.length) {
            var artist = searchResults[i].getElementsByTagName("Artist")[0].childNodes[0].nodeValue;
            var song = searchResults[i].getElementsByTagName("Song")[0].childNodes[0].nodeValue;
            var rank = searchResults[i].getElementsByTagName("SongRank")[0].childNodes[0].nodeValue;
            var web = searchResults[i].getElementsByTagName("SongUrl")[0].childNodes[0].nodeValue;

            results.push({
                artist,
                song,
                rank,
                web
            });
        }
        }

        console.log(results);


        var secondApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=" + results[0].artist + "&song=" + results[0].song);
        fetch(secondApiUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);              
        var xmlDocSec = new DOMParser().parseFromString(data.contents, "text/xml");
        console.log(xmlDocSec);
        var searchPhoto = xmlDocSec.getElementsByTagName("GetLyricResult");
        var photo = searchPhoto[0].getElementsByTagName("LyricCovertArtUrl")[0].childNodes[0].nodeValue;
        document.getElementById("artist1").innerHTML="Artist: " + results[0].artist;
        document.getElementById("song1").innerHTML="Song: " + results[0].song;
        document.getElementById("freshness1").innerHTML="Freshness: " + results[0].rank; "bananas";
        document.getElementById("searchedLyric").innerHTML= '"' + searchTerm + '"';
        document.getElementById("albumArt1").setAttribute("src", photo);
        })
        
        
        var thirdApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=" + results[1].artist + "&song=" + results[1].song);
        fetch(thirdApiUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);              
        var xmlDocTrd = new DOMParser().parseFromString(data.contents, "text/xml");
        console.log(xmlDocTrd);
        var searchPhotoSec = xmlDocTrd.getElementsByTagName("GetLyricResult");
        var photoSec = searchPhotoSec[0].getElementsByTagName("LyricCovertArtUrl")[0].childNodes[0].nodeValue;
        document.getElementById("artist2").innerHTML="Artist: " + results[1].artist;
        document.getElementById("song2").innerHTML="Song: " + results[1].song;
        document.getElementById("freshness2").innerHTML="Freshness: " + results[1].rank; "bananas";
        document.getElementById("albumArt2").setAttribute("src", photoSec);
        })


        var forthApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=" + results[2].artist + "&song=" + results[2].song);
        fetch(forthApiUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);              
        var xmlDocFrt = new DOMParser().parseFromString(data.contents, "text/xml");
        console.log(xmlDocFrt);
        var searchPhotoTrd = xmlDocFrt.getElementsByTagName("GetLyricResult");
        var photoTrd = searchPhotoTrd[0].getElementsByTagName("LyricCovertArtUrl")[0].childNodes[0].nodeValue;
        document.getElementById("artist3").innerHTML="Artist: " + results[2].artist;
        document.getElementById("song3").innerHTML="Song: " + results[2].song;
        document.getElementById("freshness3").innerHTML="Freshness: " + results[2].rank; "bananas";
        document.getElementById("albumArt3").setAttribute("src", photoTrd);
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}






