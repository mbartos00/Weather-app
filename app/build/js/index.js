let api_key = '98c9a344a165964484231faf23acdf5c';

//open menu
const openNavBtn = document.getElementById('openNavBtn');
const closeNavBtn = document.getElementById('closeNavBtn');
const nav = document.querySelector('.header__nav');

openNavBtn.addEventListener('click', () => {
  nav.style.transform = 'translateX(0)';
});

closeNavBtn.addEventListener('click', () => {
  nav.style.transform = 'translateX(-200%)';
});

//get current date
const date = new Date();
let day = date.toLocaleString('en-US', { weekday: 'short' });
let dayOfMonth = date.getDate();
let month = date.toLocaleString('en-us', { month: 'short' });
const currentDate = document.getElementById('currentDate');
currentDate.innerText = `${day}, ${dayOfMonth} ${month}`;

//fetch data from weather api
const getWeatherData = async (pos) => {
  const { latitude, longitude } = pos.coords;
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${api_key}`
    );
    const cityRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    );
    const currentData = res.data.current;
    const dailyData = res.data.daily;
    setHighlightsValues(currentData);

    //rendering cards
    const cardContainer = document.querySelector('.main__content--cards');

    cardContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
      createCards(dailyData, i);
    }

    const currentLocation = document.getElementById('currentLocation');
    currentLocation.innerText = cityRes.data.name;
  } catch (error) {
    console.error(error);
  }
};

//create cards and insert values into them
const createCards = (dailyData, i) => {
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + i + 1);
  let nextDay = tomorrow.toString().split(' ').slice(0, 3);
  let ico = iconFilter(dailyData[i].weather[0].icon);

  const template = `<div class="main__content--cards-card">
  <h5 class="card__title">${nextDay[0]}, ${nextDay[2]} ${nextDay[1]}</h5>
  <img
    src=${ico}
    alt="shower"
    class="card__image"
  />
  <div class="card__temps">
    <p class="card__temps--day">${Math.round(dailyData[i].temp.day)}</p>
    <p class="card__temps--night">${Math.round(dailyData[i].temp.night)}</p>
  </div>
</div>
`;

  const cardContainer = document.querySelector('.main__content--cards');
  cardContainer.insertAdjacentHTML('beforeend', template);
};

//insert weather values into highlights panels
const setHighlightsValues = (currentData) => {
  let ico = iconFilter(currentData.weather[0].icon);

  const asideTemp = document.getElementById('asideTemperature');
  asideTemp.innerText = Math.round(currentData.temp);

  const asideImage = document.getElementById('asideImage');
  asideImage.setAttribute('src', `${ico}`);

  const asideWeatherType = document.getElementById('asideWeatherType');
  asideWeatherType.innerText = currentData.weather[0].main;

  const windSpeed = document.querySelector('.panel__wind--value');
  windSpeed.innerText = currentData.wind_speed.toFixed(1);

  const windDirection = document.querySelector(
    '.panel__wind--direction-direction'
  );
  windDirection.innerText = degToDirection(currentData.wind_deg);

  const humidity = document.querySelector('.panel__humidity--value');
  humidity.innerText = currentData.humidity;
  const progressBar = document.querySelector('.panel__humidity--progress-bar');
  progressBar.setAttribute('value', currentData.humidity * 0.01);
  progressBar.setAttribute('title', `${currentData.humidity}%`);

  const visibility = document.querySelector('.panel__visibility--value');
  visibility.innerText = `${(currentData.visibility / 1000).toFixed(1)}km`;

  const pressure = document.querySelector('.panel__pressure--value');
  pressure.innerText = `${currentData.pressure}hPa`;
};

//change meteorological value to direction
const degToDirection = (num) => {
  var val = Math.round(num);
  var arr = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  return arr[val % 16];
};

//icon filtering
const iconFilter = (weatherIcon) => {
  const path = './app/public/images/';

  const icons = {
    clear: `${path}Clear.svg`,
    brokenClouds: `${path}BrokenClouds.svg`,
    heavyCloud: `${path}HeavyCloud.svg`,
    heavyRain: `${path}HeavyRain.svg`,
    lightCloud: `${path}LightCloud.svg`,
    mist: `${path}Mist.svg`,
    shower: `${path}Shower.svg`,
    snow: `${path}Snow.svg`,
    thunderstorm: `${path}Thunderstorm.svg`,
  };
  switch (weatherIcon) {
    case '01d':
    case '01n':
      return icons.clear;

    case '02d':
    case '02n':
      return icons.lightCloud;

    case '03d':
    case '03n':
      return icons.heavyCloud;

    case '04d':
    case '04n':
      return icons.brokenClouds;

    case '09d':
    case '09n':
      return icons.heavyRain;

    case '10d':
    case '10n':
      return icons.shower;

    case '11d':
    case '11n':
      return icons.thunderstorm;

    case '13d':
    case '13n':
      return icons.snow;

    case '50d':
    case '50n':
      return icons.mist;

    default:
      return icons.clear;
  }
};

//searching by city
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const recentCities = document.getElementById('recentCities');
searchBtn.addEventListener('click', () => {
  if (searchBar.value != '' || typeof searchBar.value != 'string') {
    let capitalisedInput =
      searchBar.value[0].toUpperCase() + searchBar.value.substring(1);
    let searchArr = [capitalisedInput];

    localStorage.setItem('SearchList', JSON.stringify(searchArr));

    searchByCity(searchBar.value);
    //close nav
    nav.style.transform = 'translateX(-200%)';
  } else alert('Please enter correct city name');
});

const searchByCity = (prop) => {
  //fetching data and rendering it into elements

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${prop}&appid=${api_key}`
    )
    .then(({ data }) => {
      const { lat, lon } = data.coord;
      const currentLocation = document.getElementById('currentLocation');
      currentLocation.innerText = data.name;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${api_key}`
        )
        .then(({ data }) => {
          setHighlightsValues(data.current);

          //rendering cards
          const cardContainer = document.querySelector('.main__content--cards');
          cardContainer.innerHTML = '';
          for (let i = 0; i < 5; i++) {
            createCards(data.daily, i);
          }
        });
    });
};

//recently searched city
let newArr = JSON.parse(localStorage.getItem('SearchList'));
newArr &&
  newArr.map((city) => {
    recentCities.innerHTML += `<button class="header__nav--recent-cities-city">${city}</button>`;
    const cityBtn = document.querySelectorAll(
      '.header__nav--recent-cities-city'
    );
    cityBtn.forEach((e) =>
      e.addEventListener('click', () => {
        searchByCity(e.innerText);
        nav.style.transform = 'translateX(-200%)';
      })
    );
  });

const userLocationError = () => {
  if (
    window.confirm(`Turn on your localisation or search weather by city\n
  If you don't know how to turn it back on click 'Ok'`)
  ) {
    window.open(
      'https://support.google.com/chrome/answer/114662?hl=en&co=GENIE.Platform%3DDesktop',
      '_blank'
    );
  }
  //default location if no permission
  let pos = {
    coords: {
      latitude: 52.237049,
      longitude: 21.017532,
    },
  };
  getWeatherData(pos);
};
const options = { enableHighAccuracy: true };

//get user location
const locationBtn = document.getElementById('locationBtn');
locationBtn.addEventListener('click', () => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      getWeatherData,
      userLocationError,
      options
    );
  }
});
if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(
    getWeatherData,
    userLocationError,
    options
  );
}
