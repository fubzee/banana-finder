var artistInput = document.querySelector("#Artist");
var songInput = document.querySelector("#Song")

var searchResultsInput = document.querySelector("#search-button");

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    artist: artistInput.value.trim(),
    song: songInput.value.trim(),
    
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});
