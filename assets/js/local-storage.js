var lyricsInput = document.querySelector("#Artist");
var searchResultsInput = document.querySelector("#search-button");

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    lyrics: lyricsInput.value.trim(),
    search: searchInput.value.trim(),
    
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});
