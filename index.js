let inputCityEl = document.getElementById("inputCity");
let buttonSearchEl = document.getElementById("buttonSearch");
let weatherIconEl = document.getElementById("weatherIcon");
let cityTempEl = document.getElementById("cityTemp");
let cityNameEl = document.getElementById("cityName");
let percentHumidityEl = document.getElementById("percentHumidity");
let windSpeedEl = document.getElementById("windSpeed");
let errorMsgEl = document.getElementById("errorMsg");
let weatherContEl = document.getElementById("weatherCont");


// let apiKey = "df5f98a6a57f2ea6e5775e5de876cd7c";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=df5f98a6a57f2ea6e5775e5de876cd7c&units=metric&q=";

async function fetchWeatherApi(city){
     let response = await fetch(apiUrl + city);
     let data = await response.json();
     console.log(data);

     // console.log(data.cod);
     if(data.cod === "404"){
          errorMsgEl.innerText = data.message;
          weatherContEl.style.display = "none";

     }else{

          cityTempEl.innerText = Math.ceil(data.main.temp) + "°c";
     cityNameEl.innerText = data.name;
     percentHumidityEl.innerText = data.main.humidity + "%";
     windSpeedEl.innerText = data.wind.speed + " km/h";

     if(data.weather[0].main === "Clouds"){
          weatherIconEl.src = "images/clouds.png";
     }else if(data.weather[0].main === "Clear"){
          weatherIconEl.src = "images/clear.png";
     }
     else if(data.weather[0].main === "Drizzle"){
          weatherIconEl.src = "images/drizzle.png";
     }
     else if(data.weather[0].main === "Mist"){
          weatherIconEl.src = "images/mist.png";
     }
     else if(data.weather[0].main === "Rain"){
          weatherIconEl.src = "images/rain.png";
     }
     else if(data.weather[0].main === "Snow"){
          weatherIconEl.src = "images/snow.png";
     }

     weatherContEl.style.display = "block";
     errorMsgEl.style.display = "none";
}
     }
     

buttonSearchEl.addEventListener("click",()=>{

     fetchWeatherApi(inputCityEl.value);
     inputCityEl.value = "";
})