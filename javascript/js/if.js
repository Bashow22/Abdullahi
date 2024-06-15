// {
//     let n = 5
//    if (n % 5 == 0) {
//       console.log("n is divisible by 5")
//    } else{
//       console.log("is not divisible by 5")
//    }
// }
// {
//    let n = 6
//    if (n % 6 == 0) {
//       console.log("n is divisible by 6")
//    } else{
//       console.log("is not divisible by 6")
//    }  
// }






// const apiKey = "fd1325fa69bcf16950e82c05d164cf43";
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather`;

// const locationInput = document.getElementById('locationInput');
// const searchButton = document.getElementById('searchButton');
// const locationElement = document.getElementById('location');
// const temperatureElement = document.getElementById('temperature');
// const descriptionElement = document.getElementById('description');

// searchButton.addEventListener('click', async () => {
//     const location = locationInput.value.trim();
//     if (location) {
//         try {
//             const response = await fetch(`${apiUrl}?q=${location}&appid=${apiKey}`);
//             const data = await response.json();
//             const weather = data.weather[0];
//             locationElement.textContent = data.name;
//             temperatureElement.textContent = `Temperature: ${weather.main.temp}°C`;
//             descriptionElement.textContent = `Description: ${weather.weather[0].description}`;
//         } catch (error) {
//             console.error(error);
//         }
//     }
// });








// document.getElementById('getWeather').addEventListener('click', getWeather);

// async function getWeather() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(async position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             const apiKey = 'fd1325fa69bcf16950e82c05d164cf43'; // Replace with your OpenWeatherMap API key
//             const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
            
//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();
//                 displayWeather(data);
//             } catch (error) {
//                 console.error('Error fetching weather data:', error);
//                 alert('Failed to fetch weather data. Please try again later.');
//             }
//         });
//     } else {
//         alert('Geolocation is not supported by this browser.');
//     }
// }

// function displayWeather(data) {
//     const location = `${data.name}, ${data.sys.country}`;
//     const temperature = `${data.main.temp} °C`;
//     const description = data.weather[0].description;
//     const iconUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

//     document.querySelector('.location').textContent = location;
//     document.querySelector('.temperature').textContent = temperature;
//     document.querySelector('.description').textContent = description;
//     document.querySelector('.icon').src = iconUrl;
//     document.querySelector('.icon').alt = description;
// }







// document.getElementById('searchWeather').addEventListener('click', getWeather);

// async function getWeather() {
//     const cityName = document.getElementById('cityName').value;
//     if (!cityName) {
//         alert('Please enter a city name.');
//         return;
//     }

//     const apiKey = 'fd1325fa69bcf16950e82c05d164cf43'; // Replace with your OpenWeatherMap API key
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('City not found');
//         }
//         const data = await response.json();
//         displayWeather(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         alert('Failed to fetch weather data. Please try again later.');
//     }
// }

// function displayWeather(data) {
//     const location = `${data.name}, ${data.sys.country}`;
//     const temperature = `${data.main.temp} °C`;
//     const description = data.weather[0].description;
//     const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//     document.querySelector('.location').textContent = location;
//     document.querySelector('.temperature').textContent = temperature;
//     document.querySelector('.description').textContent = description;
//     document.querySelector('.icon').src = iconUrl;
//     document.querySelector('.icon').alt = description;
// }






document.getElementById('searchWeather').addEventListener('click', getWeather);

async function getWeather() {
    const cityName = document.getElementById('cityName').value.trim();
    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'fd1325fa69bcf16950e82c05d164cf43'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                alert('City not found. Please check the city name and try again.');
            } else {
                alert('Failed to fetch weather data. Please try again later.');
            }
            return;
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
}

function displayWeather(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `${data.main.temp} °C`;
    const description = data.weather[0].description;
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.querySelector('.location').textContent = location;
    document.querySelector('.temperature').textContent = temperature;
    document.querySelector('.description').textContent = description;
    document.querySelector('.icon').src = iconUrl;
    document.querySelector('.icon').alt = description;
}


