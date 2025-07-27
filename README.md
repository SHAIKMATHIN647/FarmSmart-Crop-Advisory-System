# Farm Smart - Crop Advisory System

This project is a Weather-Based Crop Advisory System developed using HTML, CSS, and JavaScript, integrated with APIs to provide real-time updates relevant to Indian farmers and agriculture enthusiasts. The system is designed to support better farming decisions by offering dynamic data on weather conditions and crop prices.

## 🔧 Features

- ✅ Real-time weather updates for Indian regions using Weather API
- ✅ Live crop market prices using Agriculture Price API
- ✅ Simple and clean user interface
- ✅ Responsive design for desktop and mobile
- ✅ Easy integration using API keys

---

## 🛠️ Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | HTML, CSS, JavaScript |
| APIs Used   | Weather API (e.g., OpenWeatherMap), Crop Price API (e.g., Agmarknet) |

---

## 🔑 API Integration

- **Weather API**  
  Fetches real-time weather data based on user's region or selected location.
  
- **Crop Price API**  
  Displays latest prices of crops such as wheat, rice, maize, etc., updated from Indian market sources.

> **Note**: You need to get your own API keys and place them inside the JavaScript file (`script.js`).

```js
const weatherApiKey = "YOUR_WEATHER_API_KEY";
const cropPriceApiKey = "YOUR_CROP_PRICE_API_KEY";
