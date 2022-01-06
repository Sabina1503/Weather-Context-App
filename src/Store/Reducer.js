import { TYPES } from "../Store/weatherActions/Types";
export const initialState = {
  weatherData: null,
  cityData: null,
  scale: "K",
  scaleType: "C",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.data,
      };
    case TYPES.SET_CITY_DATA:
      return {
        ...state,
        cityData: action.data,
      };
    case TYPES.TOGGLE_SCALE:
      return {
        ...state,
        scale: state.scale === "K" ? "C" : "K",
        scaleType: state.scaleType === "C" ? "K" : "C",
      };
    default:
      return state;
  }
};
