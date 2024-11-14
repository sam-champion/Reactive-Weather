import React, { useState } from "react";
const cities = require("./data");
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("London");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form setLocation={setLocation} />
      <div className="app">
        <Location location={location} />
        {cities.map((city, index) => (
          <WeatherCard key={index} data={city} />
        ))}
      </div>
    </>
  );
}

export default App;
