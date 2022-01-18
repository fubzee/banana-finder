
var searchArtist = "Alphaville"
var searchTerm = "forever young"



    fetch("https://www.abbreviations.com/services/v2/lyrics.php?&uid=9860&tokenid=gfCFrxlNnTRayIdf&artist=" + searchArtist + "&term=" + searchTerm +"&format=json")
    .then(function(response) {
        return response.json();
    })
        .then(function(data) {
            console.log(data);

            console.log(data.result[0].album);
            console.log(data.result[0].artist);
            console.log(data.result[0].song);
    });

