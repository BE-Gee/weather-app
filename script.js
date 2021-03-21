// 8603cea0aa6a99964ac5e98175d3d54a
//create index, css, js. console log to verify connected.
//console.log("Hello Weather");

//run jquery script to insure running.
/*$(document).ready(function () {
  alert("jquery loaded baby");
});*/
$(document).ready(function () {
  //create vars to link to search and serch history.

  var searchHistoryContainer = $("#past-searches");
  var searchForm = $("#search-form");
  var apiKey = "8603cea0aa6a99964ac5e98175d3d54a";
  //usign the api "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"everything past the "?" is used in areas below. the city name is not known until the user inputs.remove "q={city name}&appid={API key}"for line
  var baseUrl = "https://api.openweathermap.org/data/2.5/weather?"; //search for city, and form submission using .submit() jquery
  /* jquery gives you the following. 
    $( "#target" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });
*/
  //change "$( "#target" )" to your 'searchForm" var, need a form submit that will capture the data "city" when the click occurs. There will need to be a "name="city" on the html for this to look for
  searchForm.submit(function (event) {
    // comment out this alert it worked when refreshing html alert("Handler for .submit() called.");
    event.preventDefault(); //remember this keeps the page from resetting.
    console.log(event);
    var formValues = $(this).serializeArray(); //this, this form/input/city that was just entered
    var city = formValues[0].value;
    var searchTermDiv = $('<div class = "past-search-term">'); //use jquery selector to create an element for history element 'div' addition when search performed
    searchTermDiv.text(city); //this is an input not a div, has a path and actual value
    searchHistoryContainer.append(searchTermDiv); //this will add the search term to history contaner in html
    console.log(formValues, city);
    searchForCityWeather(city);
  });
  //when I hit the search I want it to save the city I looked at.add to line 30 activating the function on 33
  function searchForCityWeather(city) {
    var fullUrl = baseUrl + "q=" + city + "&appid=" + apiKey;
    // fullUrl is going here.
    fetch(fullUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
});
