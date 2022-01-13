var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector('#search-input');
var buttonEl = document.querySelector('#button');
var searchResultContainerEl = document.querySelector('#search-container');




var searchHandler = function(event){
    event.preventDefault();

    var lyricSearch = searchInputEl.value.trim();

    if (lyricSearch){
        getLyrics(lyricSearch);

        searchResultContainerEl.textContent = '';
        searchInputEl.value = '';
    } else { 
        // we need a professional ERROR pop-up screen.
    }
};


// API yet to confirm. term 'fromAPI' is unknown.it can be something lie 'song' or 'artist'
var getLyrics = function (fromAPI){
  var apiUrl = 'https://......'

  fetch(apiUrl)
   .then(function(response){
       if (response.ok){
           response.json().then(function(data){
               displayResults(data, fromAPI);
           });
       } else{
           // we need ERROR alert.
       }
   })
  .catch(function(error){
      //ERROR alert.
  });  
};


 var displayResults = function (fromAPI, lyrics){
     if (fromAPI.length === 0){
         searchResultContainerEl.textContent = 'no results found.';
         return;
     }
         for (var i=0; i < fromAPI.length; i++){
             var songName = fromAPI[i]...;
             var artistName = fromAPI[i]...;

             var resultListEl = document.createElement('a');
             resultListEl.classList = 'list-item flex-row justify-space-between align-center';
             resultListEl.setAttribute('href','./second HTML page to show more upcoming events');

             var titleEl = document.createElement('span');
             titleEl.textContent = songName + artistName;

             resultListEl.appendChild(titleEl);
             searchResultContainerEl.appendChild(resultListEl);
         }
     };

     buttonEl.addEventListener('click', searchHandler);

 
