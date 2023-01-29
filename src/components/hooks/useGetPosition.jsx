import { useEffect, useState } from 'react';

const useGetPosition = () => {
  const DEFAULT_COORDS = {
    lat: '52.237049',
    lon: '21.017532',
  };

  const [coords, setCoords] = useState();
  const [error, setError] = useState({
    code: '',
    message: '',
  });

  const getWeatherData = ({ coords: pos }) => {
    const { latitude: lat, longitude: lon } = pos;
    setCoords({ lat, lon });
  };

  const err = err => {
    setError({ code: err.code, message: err.message });
    setCoords(DEFAULT_COORDS);
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(getWeatherData, err, {
      enableHighAccuracy: true,
    });
  }, []);
  return { coords, error, setError };
};

export default useGetPosition;
