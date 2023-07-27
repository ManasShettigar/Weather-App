// var cityname;
var iconUrl;
const data=['New York City','Santorini','British Virgin Islands','Bali','Grand Canyon National Park','Rio de Janeiro','Great Barrier Reef','Dubai','Paris','Bora','Glacier National Park','Rome','Swiss Alps','Maui','London','England','Maldives','Costa Rica','New Zealand'];
const rand=Math.random();
function getweather() {
    var location = document.getElementById('locationInput').value;
    var inputElement = document.getElementById("locationInput");
    var apiKey = "9a85baa4f13a41b0b8484701230507"; // Replace with your actual API key
    
    var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + location;
    
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Handle the weather data
        console.log(data); // Display the data in the console for testing
        
        // Update the weatherData div with the desired information
        console.log(apiUrl);
        var weatherDataDiv = document.getElementById('fetchdata2');
        document.getElementById("fetchedlocation2").textContent=data.location.name;
        weatherDataDiv.innerHTML = 'Country: ' + data.location.country + '<br>';
        weatherDataDiv.innerHTML = 'Location: ' + data.location.name + '<br>';
        weatherDataDiv.innerHTML += 'Temperature: ' + data.current.temp_c + '°C';
        console.log(data.current.temp_c);
        document.getElementById("iconChange2").src="https:"+data.current.condition.icon;
  
  //  console.log(typeof("https"+data.current.condition.icon))
  
        console.log("https"+data.current.condition.icon);
     //iconUrl = "https:" + iconUrl;
      //console.log(iconUrl);
      //document.getElementById("iconfetchset").src = "https://cdn.weatherapi.com/weather/64x64/day/113.png";
        // var iconfetchset = document.getElementById("iconfetch");
 
        // iconfetchset.setAttribute("src", iconUrl);

        inputElement.value = "";
        displayImage(data.location.name);
        // Add more weather information as needed
      })
      .catch(function(error) {
        // Handle any errors
        console.log('Error:', error);
      });
      
      // displayImage(cityn);
      
  };
  function displayImage(cityname) {
    var apikey = "EH2rUWM9bZOn6B6crCEMoJQym3GKcqdSvcmIG1Puzkg";
    var apiurl = "https://api.unsplash.com/photos/random?query="+cityname+"&client_id=" + apikey;
  
    fetch(apiurl)
      .then(function(response) {
        
        return response.json();
      })
      .then(function(data) {
        var imageUrl =  "background-image: url('"+ data.urls.regular+"');";
        var imageElement = document.getElementById("imageElement2");
        imageElement.style = imageUrl;
        
        
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  };
  function displayData() {
    const card1=Math.random();
    var location = data[(card1)%(data.length)];
    var apiKey = "9a85baa4f13a41b0b8484701230507"; // Replace with your actual API key
    
    var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + location;
    
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Handle the weather data
        console.log(data); // Display the data in the console for testing
        
        // Update the weatherData div with the desired information
        console.log(apiUrl);
        var weatherDataDiv = document.getElementById('fetchdata1');
        document.getElementById("fetchedlocation1").textContent=data.location.name;
        weatherDataDiv.innerHTML = 'Country: ' + data.location.country + '<br>';
        weatherDataDiv.innerHTML = 'Location: ' + data.location.name + '<br>';
        weatherDataDiv.innerHTML += 'Temperature: ' + data.current.temp_c + '°C';
        console.log(data.current.temp_c);
        document.getElementById("iconChange1").src="https:"+data.current.condition.icon;
  
  //  console.log(typeof("https"+data.current.condition.icon))
  
        console.log("https"+data.current.condition.icon);
     //iconUrl = "https:" + iconUrl;
      //console.log(iconUrl);
      //document.getElementById("iconfetchset").src = "https://cdn.weatherapi.com/weather/64x64/day/113.png";
        // var iconfetchset = document.getElementById("iconfetch");
 
        // iconfetchset.setAttribute("src", iconUrl);

        // inputElement.value = "";
        displayImage(data.location.name);
        // Add more weather information as needed
      })
      .catch(function(error) {
        // Handle any errors
        console.log('Error:', error);
      });
      
    
  }
  setInterval(displayData, 1000);
  window.onload = displayData;