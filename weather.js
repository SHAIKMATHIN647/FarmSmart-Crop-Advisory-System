const apiKey = "a63b0e18099c21bd9c5e7ce9f319410d"; // Your OpenWeatherMap API key

// Function to get crop recommendations based on temperature and humidity
function getRecommendations(temp, humidity) {
  const crops = [];

  // High temperature and low humidity (Suitable for dry crops)
  if (temp < 10) {
    // Cold temperature – suitable for frost-tolerant crops
    crops.push("Potatoes", "Cabbage", "Carrots", "Spinach");
  } else if (temp <= 20 && humidity >= 70) {
    // Cool temperature and high humidity – suitable for cool-season crops
    crops.push("Wheat", "Oats", "Barley", "Millet");
  } else if (temp <= 25 && humidity >= 60) {
    // Moderate temperature and high humidity – crops needing more water
    crops.push("Rice", "Sugarcane", "Soybeans", "Sugar Beet");
  } else if (temp > 25 && temp <= 30 && humidity < 60) {
    // Moderate temperature and low humidity
    crops.push("Maize", "Cotton", "Peanuts", "Tobacco");
  } else if (temp > 30 && temp <= 35 && humidity < 50) {
    // High temperature and low humidity – drought-tolerant crops
    crops.push("Sorghum", "Maize", "Barley", "Cotton");
  } else if (temp > 30 && humidity >= 60) {
    // High temperature and high humidity – tropical crops
    crops.push("Bananas", "Coconuts", "Pineapple", "Citrus Fruits");
  } else if (temp > 35 && humidity >= 50 && humidity < 70) {
    // Very high temperature and moderate humidity – arid and semi-arid crops
    crops.push("Chili Peppers", "Grapes", "Agave", "Date Palm");
  } else {
    // Default/general conditions – adaptable crops
    crops.push("Corn", "Sunflower", "Lentils", "Tomatoes");
  }
  
  return crops;
}

// Function to update the UI with the fetched weather data and crop recommendations
function updateUI(data) {
  // Update weather details
  document.getElementById("temp").textContent = data.main.temp;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("condition").textContent = data.weather[0].description;

  // Fetching Wind Speed, Pressure, and Visibility
  const windSpeed = data.wind ? data.wind.speed : "--";
  const pressure = data.main ? data.main.pressure : "--";
  const visibility = data.visibility ? data.visibility : "--";

  // Updating the UI with the fetched data
  document.getElementById("wind").textContent = windSpeed;
  

  // Handling crop recommendations
  const crops = getRecommendations(data.main.temp, data.main.humidity);
  const cropList = document.getElementById("crop-list");
  cropList.innerHTML = ""; // Clear previous list
  crops.forEach(crop => {
    const li = document.createElement("li");
    li.textContent = crop;
    cropList.appendChild(li);
  });
}

// Function to get weather by city name
function getWeatherByCity() {
  const city = document.getElementById("location").value;
  if (!city) {
    alert("Please enter a location.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        updateUI(data); // Update the UI with weather data and crop recommendations
      } else {
        alert("Location not found. Please try again.");
      }
    })
    .catch(err => console.error("Error fetching weather:", err));
}
