{
    async function getData(){
        let img = document.getElementById("dogImg")
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json() 
        console.log(data)
        img.src = data.message
    }
   
    getData()
    const button =document.getElementById("button")
    button.addEventListener('click', getData)
}
{
    async function getData(){
        let img = document.getElementById("dogImg")
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json()
        console.log(data)
        img.src = data.message
    }
    async function getJoke(){
        let punch = document.getElementById("punchline")
        let type = document.getElementById("type")
        let setup = document.getElementById("setup")
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
        let jokeData = await response.json()
        console.log(jokeData)
        punch.innerHTML = jokeData.punchline
        type.innerHTML = jokeData.type
        setup.innerHTML = jokeData.setup
    }
    async function getPhotos(){
        let resp = await fetch("https://jsonplaceholder.typicode.com/photos")
        let data  = await resp.json()
        console.log(data)
        for(i = 0; i<11; i++){
            newImage = document.createElement("img")
            newImage.src = data[i].url
            document.body.appendChild(newImage)
        }
    }
    async function getComments(){
        let resp = await fetch("https://jsonplaceholder.typicode.com/comments")
        let data  = await resp.json()
        let output = ''
        for(i = 0; i<30; i++){
            output += `<div class="jokeSection">
                    <h3>Name: ${data[i].name}</h3>
                    <h4>Email: ${data[i].email}</h4>
                    <p>${data[i].body}</p>
                </div>`
        }
        document.getElementById("comments").innerHTML = output
    }
    getData()
    getComments()
    getPhotos()
    getJoke()
}


// document.getElementById('getWeather').addEventListener('click', getWeather);

// async function getWeather() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(async position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
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
