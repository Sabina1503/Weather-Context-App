import React, { useEffect, useState } from "react";
import { MainContext, useContext } from "../context";
export default function SunRiseSet() {
  const { state } = useContext(MainContext);
  const { weatherData } = state;
  const [timeString, setTimestring] = useState("*");

  useEffect(() => {
    if (weatherData) {
      let date = new Date(weatherData.sys.sunrise * 1000);
      setTimestring(
        `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
          date.getUTCMinutes() < 10
            ? "0" + date.getUTCMinutes()
            : date.getUTCMinutes()
        }:${
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        }`
      );
    }
  }, [weatherData]);

  return (
    <div>
      <p>
        <i className="far fa-sun"></i>
        <span>Sunrise: {timeString}</span>
      </p>
    </div>
  );
}
