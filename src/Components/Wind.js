import React from "react";
import { MainContext, useContext } from "../context";

export default function Wind() {
  const { state } = useContext(MainContext);
  const { weatherData } = state;
  return (
    <div className="wind">
      <i className="fas fa-wind"></i>
      <p>
        {" "}
        <span>Speed:</span> {weatherData && weatherData.wind.speed}
      </p>
    </div>
  );
}
