// ✅ Add your own OpenWeatherMap API key here

const apiKey = "55a1ab410cc81489c19518f545097c48";  // replace with your key

// 🔄 DATE & TIME

function updateTime(){

  const now = new Date();

  document.getElementById("datetime").innerText =

    now.toDateString() + " | " + now.toLocaleTimeString();

}

setInterval(updateTime,1000);

updateTime();

// 🔄 INITIAL PAGE STATE

function resetPage(){

  document.getElementById("city").value = "";

  document.getElementById("result").innerHTML = "🌍 Enter a city to see weather";

}

function getWeather(){

  const city = document.getElementById("city").value.trim();

  const result = document.getElementById("result");

  if(city === ""){

    result.innerText = "Please enter a city name";

    return;

  }

  result.innerText = "Fetching weather...";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(res => res.json())

    .then(data => {

      if(data.cod !== 200){

        result.innerText = "City not found";

        return;

      }

      result.innerHTML = `

        <b>${data.name}</b><br>

        ${data.weather[0].main}<br>

        🌡 ${data.main.temp}°C
         `;
    

// Wait until the DOM is fully loaded

document.addEventListener("DOMContentLoaded", () => {
    // 🔒 select the Weather box 

const container = document.querySelector(".container");

// 🌈 Array of colors for cycling

const colors = [

  "rgba(255,255,255,0.25)",

  "rgba(255,200,200,0.25)",

  "rgba(200,255,200,0.25)",

  "rgba(200,200,255,0.25)",

  "rgba(255,255,200,0.25)"

];

let colorIndex = 0;

// ⏱ Change color every 4 seconds automatically

setInterval(() => {

  container.style.background = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;

}, 7000);
  });


    
    let body = document.body; // get the whole page

let weatherMain = data.weather[0].main.toLowerCase();

if(weatherMain.includes("cloud")) {

    body.style.background = "linear-gradient(to right,#bdc3c7,#2c3e50)"; // cloudy grey

} else if(weatherMain.includes("rain")) {

    body.style.background = "linear-gradient(to right,#2980b9,#6dd5fa)"; // rainy blue

} else if(weatherMain.includes("snow")) {

    body.style.background = "linear-gradient(to right,#e0f7fa,#ffffff)"; // snow white/light blue

} else if(weatherMain.includes("sun") || weatherMain.includes("clear")) {

    body.style.background = "linear-gradient(to right,#fbc2eb,#a6c1ee)"; // sunny pink/blue

} else {

    body.style.background = "linear-gradient(to right,#4facfe,#00f2fe)"; // default

}

      // 🔄 Reset after 10 seconds

      setTimeout(resetPage, 10000);

    })

    .catch(() => {

      result.innerText = "Error fetching weather";

    });

}