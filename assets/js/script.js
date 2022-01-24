

document.getElementById("visibility").setAttribute("class" , "hidden");
function clickSearch(){
    document.getElementById("visibility").setAttribute("class" , "visible");
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
                    
        var xmlDocSec = new DOMParser().parseFromString(data.contents, "text/xml");
        var searchPhoto = xmlDocSec.getElementsByTagName("GetLyricResult");
        var photo = searchPhoto[0].getElementsByTagName("LyricCovertArtUrl")[0].childNodes[0].nodeValue;

        document.getElementById("artist1").innerHTML="Artist: " + results[0].artist;
        document.getElementById("song1").innerHTML="Song: " + results[0].song;
        document.getElementById("freshness1").innerHTML="Freshness: " + results[0].rank;
        document.getElementById("searchedLyric").innerHTML= '"' + searchTerm + '"';
        document.getElementById("albumArt1").setAttribute("src", photo);
        banana_meter(1,results[0].rank);
        })
        
        
        
        var thirdApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=" + results[1].artist + "&song=" + results[1].song);
        fetch(thirdApiUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
                    
            var xmlDocTrd = new DOMParser().parseFromString(data.contents, "text/xml");
            var searchPhotoSec = xmlDocTrd.getElementsByTagName("GetLyricResult");
            var photoSec = searchPhotoSec[0].getElementsByTagName("LyricCovertArtUrl")[0].childNodes[0].nodeValue;

            document.getElementById("artist2").innerHTML="Artist: " + results[1].artist;
            document.getElementById("song2").innerHTML="Song: " + results[1].song;
            document.getElementById("freshness2").innerHTML="Freshness: " + results[1].rank;
            document.getElementById("albumArt2").setAttribute("src", photoSec);
            banana_meter(2,results[1].rank);
        })


        var forthApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=" + results[2].artist + "&song=" + results[2].song);
        fetch(forthApiUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
                    
            var xmlDocFrt = new DOMParser().parseFromString(data.contents, "text/xml");
            var searchPhotoTrd = xmlDocFrt.getElementsByTagName("GetLyricResult");
            var photoTrd = searchPhotoTrd[0].getElementsByTagName("LyricCovertArtUrl")[0].childNodes[0].nodeValue;

            document.getElementById("artist3").innerHTML="Artist: " + results[2].artist;
            document.getElementById("song3").innerHTML="Song: " + results[2].song;
            document.getElementById("freshness3").innerHTML="Freshness: " + results[2].rank;
            document.getElementById("albumArt3").setAttribute("src", photoTrd);
            banana_meter(3,results[2].rank);
        })
    })
    .catch(function (error) {

        const closeErrorButton = document.getElementById("error-close-button")
        const overlay = document.getElementById("overlay")
        const errorContainer = document.getElementById("error-container")

    // Function if lyrics are not found 
    if (error) {
        overlay.classList.add("active")
        errorContainer.classList.add("active")
    } 


    // Close Error Box Button 
    function closeContainer() {

    overlay.classList.remove("active") 
    errorContainer.classList.remove("active")
    }
    closeErrorButton.addEventListener("click", closeContainer);
    });
}






