import clear from '../../assets/Clear.svg';
import brokenClouds from '../../assets/BrokenClouds.svg';
import heavyCloud from '../../assets/HeavyCloud.svg';
import heavyRain from '../../assets/HeavyRain.svg';
import lightCloud from '../../assets/LightCloud.svg';
import mist from '../../assets/Mist.svg';
import shower from '../../assets/Shower.svg';
import snow from '../../assets/Snow.svg';
import thunderstorm from '../../assets/Thunderstorm.svg';

const iconFilter = weatherIcon => {
  const icons = {
    clear,
    brokenClouds,
    heavyCloud,
    heavyRain,
    lightCloud,
    mist,
    shower,
    snow,
    thunderstorm,
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

export default iconFilter;
