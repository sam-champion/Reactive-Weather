import sunny from "./assets/Sunny.svg";
import rainy from "./assets/Rainy.svg";
import cloudy from "./assets/Cloudy.svg";
import partlyCloudy from "./assets/PartlyCloudy.svg";

function iconSelector(forecast) {
  const weatherIcons = {
    Sunny: sunny,
    Rainy: rainy,
    Cloudy: cloudy,
    "Partly Cloudy": partlyCloudy,
  };
  return weatherIcons[forecast] || sunny;
}

export default iconSelector;
