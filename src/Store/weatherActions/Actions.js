import { TYPES } from "./Types";

export const setWeatherData = (weather) => {
  return { type: TYPES.SET_WEATHER_DATA, data: weather };
};
export const setCityData = (cityName) => {
  return { type: TYPES.SET_CITY_DATA, data: cityName };
};
export const ToggleScale = () => {
  return { type: TYPES.TOGGLE_SCALE };
};
