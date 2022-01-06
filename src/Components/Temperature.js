import React from "react";
import { MainContext, useContext } from "../context";
export default function Temperature() {
  const { state } = useContext(MainContext);
  const { scale, weatherData } = state;
  return (
    <div>
      <p>
        <i className="fas fa-temperature-low"></i>
        <span>Temperature:</span>
        {scale === "K"
          ? Math.round(weatherData && weatherData.main.temp)
          : Math.round(weatherData && weatherData.main.temp) - 273}
        {scale}
      </p>
    </div>
  );
}
