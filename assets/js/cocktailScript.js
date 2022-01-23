
// Cocktail suggestion API
var cocktailRandoms = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

fetch(cocktailRandoms)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    document.getElementById("cocktailImage").innerHTML='<image id="albumArt2" Class="CSSDropShadow" src="' + data.drinks[0].strDrinkThumb + '" width="150px" height ="150px" ></image><br></br>' 
    document.getElementById("cocktailName").innerHTML= "<h4> Instead of being disappointed, why not make a cocktail? </h4><br> How about a " + data.drinks[0].strDrink + "? <br>";
    document.getElementById("cocktailGlass").innerHTML= "Best place to start is with a the right glass, grab a " + data.drinks[0].strGlass + "! <br>";
    document.getElementById("cocktailIng").innerHTML= "<br> Time for some ingredients! We want " + data.drinks[0].strIngredient1 + ", " + data.drinks[0].strIngredient2 + " and " + data.drinks[0].strIngredient3 + ". <br>";
    document.getElementById("cocktailMethod").innerHTML= data.drinks[0].strInstructions;
})