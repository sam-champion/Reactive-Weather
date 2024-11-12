import React, { useState } from "react";
const cities = require("./data");
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("London");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        <Location data={cities} location={location} />
        {cities.map((city) => (
          <WeatherCard data={city} />
        ))}
      </div>
    </>
  );
}

export default App;
