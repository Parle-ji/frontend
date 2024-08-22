const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weather-container');
const grantAccessContainer = document.querySelector('.grant-location');
const searchForm = document.querySelector('.form-container');
const loadingScreen = document.querySelector('.loading-container');
const userInfoContainer = document.querySelector('.user-info-container');
let notFound = document.querySelector('.notFound');

let oldTab = userTab;
const API_KEY = 'b3af3bcc7511be7ed7799617f61998a7';

oldTab.classList.add('current-tab');

function switchTab(newTab) {

    if (newTab != oldTab) {
        oldTab.classList.remove('current-tab');
        oldTab = newTab;
        oldTab.classList.add('current-tab')
        notFound.classList.remove('active')
        if (!searchForm.classList.contains('active')) {
            // agar search form wala container active hold nhi kr rha hai tab
            userInfoContainer.classList.remove('active')
            grantAccessContainer.classList.remove('active')
            searchForm.classList.add('active')
        } else {
            // pahle mai search wale tab pr tha . ab mujhe your weather tab pr aana hai...
            searchForm.classList.remove('active');
            userInfoContainer.classList.remove('active')
            // AB mai your weather tab me aa gya hu... to weather bhi display krna padega...
            // to ab storage ko check krte hain...
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener('click', () => {
    switchTab(userTab)
})

searchTab.addEventListener('click', () => {
    switchTab(searchTab)
})

// check if cordinates  are already present in session  storage...
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem('user-coordinates');
    if (!localCoordinates) {
        // agar local coordinates nhi mile...
        grantAccessContainer.classList.add('active');
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
        console.log(coordinates)
    }
    console.log(localCoordinates)
}

async function fetchUserWeatherInfo(coordinates) {

    const { lat, lon } = coordinates;

    //  grant access container ko hide krte hain...
    grantAccessContainer.classList.remove('active')

    // ab loader ko active krte hain...
    loadingScreen.classList.add('active');

    //  api call krte hainnn...
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)

        const data = await response.json();

        loadingScreen.classList.remove('active')

        userInfoContainer.classList.add('active')

        renderWeatherInfo(data);
    }
    catch (e) {
        loadingScreen.classList.remove('active')
        console.log(e)
        alert(e)
    }
}

function renderWeatherInfo(weatherInfo) {
    // pahale sabhi data ko fetch kro html se 
    const cityName = document.querySelector('[data-cityName]');
    const countryIcon = document.querySelector('[data-countryIcon]');
    const desc = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]')
    const temp = document.querySelector('[data-temp]')
    const windSpeed = document.querySelector('[data-windSpeed]');
    const humidity = document.querySelector('[data-humidity]');
    const cloudiness = document.querySelector('[data-cloud]')



    //  z`  fetch values form weather info object and put it ui elements 

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo.sys?.country.toLowerCase()}.png`
    desc.innerText = weatherInfo?.weather?.[0].description;

    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    temp.innerText = `${weatherInfo?.main?.temp}°C `;
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem('user-coordinates', JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

function getlocation() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition)

    } else {

    }
}
const grantAccessButton = document.querySelector('[data-grantAccess]')
grantAccessButton.addEventListener('click', getlocation);
const searchInput = document.querySelector('[data-searchInput]');
searchForm.addEventListener('submit', (f) => {
    f.preventDefault();
    let cityName = searchInput.value;

    if (cityName === '') {
        return;
    } else {
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add('active')
    userInfoContainer.classList.remove('active');
    grantAccessButton.classList.remove('active');

    try {

        // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);


        // const data = await res.JSON();

        const data = await res.json();
        loadingScreen.classList.remove('active');
        console.log(data)
        if (data.cod == 404) {
            notFound.classList.add('active')
            // alert(data.message)
            return;
        }

        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);

    } catch (z) {
        alert(z)

        alert('apne jo likha hai wo lagat hai kripya thik se likhe')
    }
}