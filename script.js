document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search");
    var iconButton = document.getElementById("icon");
    var googleSearchButton = document.getElementById("googlesearch");
  
    // Add event listener for Enter key press
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") { // Check if Enter key is pressed
        googleSearch();
        event.preventDefault(); // Prevent form submission or page reload
      }
    });
  
    // Add event listener for icon button click
    iconButton.addEventListener("click", function() {
      googleSearch();
    });
  
    // Add event listener for googlesearch button click
    googleSearchButton.addEventListener("click", function(event) {
      googleSearch();
      event.preventDefault();
    });
  
    function googleSearch() {
      var text = searchInput.value;
      var cleanQuery = text.replace(" ", "+");
      var url = 'http://www.google.com/search?q=' + cleanQuery;
  
      window.location.href = url;
    }
  });