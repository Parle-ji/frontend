console.log('Aapan tej samharo aape...')
const apiKey = 'b3af3bcc7511be7ed7799617f61998a7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
let cityName = document.querySelector('.cityName')
let temp = document.querySelector('.temp')
let humi = document.querySelector('#humi');
let wind = document.querySelector('#wind')
let searchBox = document.querySelector('#cityNameInput')
let searchbtn = document.querySelector('.iconSearch')
let weatherIcon = document.querySelector('.weatherIcon')



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.errormsg').style.display = 'block'
    }

    let data = await response.json();
    // console.log(data)

    cityName.innerHTML = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    humi.innerHTML = `${data.main.humidity} %`;
    wind.innerHTML = `${data.wind.speed} km/h`;

    // if (data.weather[0].main == 'Clouds') {
    //     weatherIcon.src = 'images/clouds.png';
    // }
    // if (data.weather[0].main == 'Clear') {
    //     weatherIcon.src = 'images/clear.png'
    // }
    // if (data.weather[0].main == 'Rain') {
    //     weatherIcon.src = 'images/rain.png'
    // }
    // if (data.weather[0].main == 'Snow') {
    //     weatherIcon.src = 'images/snow.png'
    // }
    // if (data.weather[0].main == 'Mist') {
    //     weatherIcon.src = 'images/mist.png'
    // }
    // if (data.weather[0].main == 'Wind') {
    //     weatherIcon.src = 'images/wind.png'
    // }

    // if (data.weather[0].main == 'Humidity') {
    //     weatherIcon.src = 'images/humidity.png'
    // }

    //  MAI YAHA PR data.weather[0].main == 'cloud' LIKH RHA THA LEKIN LEKIN MERE FILE ME CAPTLIESE NAMES HAI FILES KE IS LIYE GPT "TO.LOWERcASE" KRNE KE LIYE BOL RHA THA...


    if (data.weather[0].main.toLowerCase() === 'clouds') {
        weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main.toLowerCase() === 'clear') {
        weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main.toLowerCase() === 'rain') {
        weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main.toLowerCase() === 'snow') {
        weatherIcon.src = 'images/snow.png';
    } else if (data.weather[0].main.toLowerCase() === 'mist') {
        weatherIcon.src = 'images/mist.png';
    }
}


searchbtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})

checkWeather('balua');

