//solution of shecodes for week3 project
/*
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
*/
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
// write your code here
debugger;
let city = prompt("Enter a city");
if (city) {
  city = city.trim().toLowerCase();
  if (city === "paris") {
    let tempParisF = Math.round((weather.paris.temp * 9) / 5 + 32);
    debugger;
    alert(
      `It is currently ${Math.round(
        weather.paris.temp
      )}°C(${tempParisF}°F) in ${city} with a humudity of ${
        weather.paris.humidity
      }%`
    );
  } else if (city === "tokyo") {
    let tempTokyoF = Math.round((weather.tokyo.temp * 9) / 5 + 32);

    alert(
      `It is currently ${Math.round(
        weather.tokyo.temp
      )}°C(${tempTokyoF}°F) in ${city} with a humudity of ${
        weather.tokyo.humidity
      }%`
    );
  } else if (city === "lisbon") {
    let tempLisbonF = Math.round((weather.lisbon.temp * 9) / 5 + 32);

    alert(
      `It is currently ${Math.round(
        weather.lisbon.temp
      )}°C(${tempLisbonF}°F) in ${city} with a humudity of ${
        weather.lisbon.humidity
      }%`
    );
  } else if (city === "san francisco") {
    let tempsanF = Math.round((weather["san francisco"].temp * 9) / 5 + 32);
    alert(
      `It is currently ${Math.round(
        weather["san francisco"].temp
      )}°C(${tempsanF}°F) in ${city} with a humudity of ${
        weather["san francisco"].humidity
      }%`
    );
  } else if (city === "oslo") {
    let tempOsloF = Math.round((weather.oslo.temp * 9) / 5 + 32);
    alert(
      `It is currently ${Math.round(
        weather.oslo.temp
      )}°C(${tempOsloF}°F) in ${city} with a humudity of ${
        weather.oslo.humidity
      }%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
} else {
  alert(`Please enter a city`);
}
