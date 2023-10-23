document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search");
    var iconButton = document.getElementById("icon");
    var googleSearchButton = document.getElementById("googlesearch");
  
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        googleSearch();
        event.preventDefault(); 
      }
    });
  
    iconButton.addEventListener("click", function() {
      googleSearch();
    });
  
    googleSearchButton.addEventListener("click", function(event) {
      googleSearch();
        console.log(searchInput.value);
      event.preventDefault();
    });
  
    function googleSearch() {
      var text = searchInput.value;
      var cleanQuery = text.replace(" ", "+");
      var url = 'http://www.google.com/search?q=' + cleanQuery;
  
      window.location.href = url;
    }
  });
