fetch('https://www.stands4.com/services/v2/lyrics.php?uid=9860&tokenid=gfCFrxlNnTRayIdf&term=forever%20young&artist=Alphaville&format=xml')
    .then(response => {
        console.log(cityName);
        console.log(response);
    })
    .catch(err => {
        console.log("error");
    });