import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { setWeatherData, setCityData } from "./Store/weatherActions/Actions";
import { MainContext } from "./context";
import { initialState, reducer } from "./Store/Reducer";
import Temperature from "./Components/Temperature";
import ToggleTemp from "./Components/ToggleTemp";
import Wind from "./Components/Wind";
import { Row, Col } from "antd";
import SunRiseSet from "./Components/SunRiseSet";
const { Option } = Select;

function onSearch(val) {
  console.log("search:", val);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchWeatherData(cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?` +
        new URLSearchParams({
          appid: "d8fb4bb09382527f598f69911db07d73",
          q: cityName,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setWeatherData(data));
      });
  }
  function fetchCityData() {
    fetch(
      `https://countriesnow.space/api/v0.1/countries/capital?` +
        new URLSearchParams({
          appid: "d8fb4bb09382527f598f69911db07d73",
        })
    )
      .then((response) => response.json())
      .then((cityName) => {
        dispatch(setCityData(cityName));
      });
  }
  useEffect(() => {
    fetchWeatherData("Baku");

    fetchCityData("Baku");
    console.log("didmount success");
  }, []);
  const sharedContext = {
    state,
    dispatch,
  };
  return (
    <MainContext.Provider value={sharedContext}>
      <div className="container">
        <Select
          showSearch
          placeholder="Select a city"
          optionFilterProp="children"
          onChange={(value) => fetchWeatherData(value)}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {state.cityData &&
            state.cityData.data
              .map((item, index) => item.capital)
              .map((item, index) => (
                <Option value={item} key={index}>
                  {item}
                </Option>
              ))}
        </Select>
        {typeof state.weatherData?.main === "undefined" ? (
          <div>
            <p>enter city</p>
          </div>
        ) : (
          <div className="weather">
            <span>{state.weatherData.name}</span>
            <span></span>
            <p>{state.weatherData.weather[0].main}</p>
          </div>
        )}
        <SunRiseSet />
        <Row>
          <Col span={8}>
            <Temperature />
          </Col>
          <Col span={8}>
            <ToggleTemp />
          </Col>
          <Col span={8}>
            <Wind />
          </Col>
        </Row>
      </div>
    </MainContext.Provider>
  );
}

export default App;
