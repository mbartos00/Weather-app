import { useEffect, useState } from 'react';
import Aside from './components/Aside/Aside';
import useGetPosition from './components/hooks/useGetPosition';
import Main from './components/Main/Main';
import Loader from './components/UI/Loader';

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [newCoords, setNewCoords] = useState();

  const { coords, error } = useGetPosition();
  const fetchData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setWeatherData(data);
  };
  useEffect(() => {
    if (coords && newCoords === undefined) {
      fetchData(coords.lat, coords.lon);
    } else if (newCoords) {
      fetchData(newCoords.lat, newCoords.lon);
    }
  }, [coords, newCoords]);

  const handleCityData = cityCoords => {
    cityCoords.then(({ lat, lon }) => setNewCoords({ lat, lon }));
  };

  return (
    <div className='App'>
      {!weatherData ? (
        <Loader />
      ) : (
        <>
          <Aside
            error={error}
            setNewData={handleCityData}
            data={weatherData}
          />
          <Main data={weatherData} />
        </>
      )}
    </div>
  );
};

export default App;
