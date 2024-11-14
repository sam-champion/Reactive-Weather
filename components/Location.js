import React, { useState, useEffect } from "react";
import iconSelector from "../helpers";
require("dotenv").config();

function Location({ location }) {
  const [locationKey, setLocationKey] = useState(null);
  const [locationForecast, setLocationForecast] = useState(null);

  const apiKey = process.env.ACCUWEATHER_API_KEY;

  async function fetchLocationKey() {
    const res = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${location}&language=en-gb`
    );
    const data = await res.json();
    if (data.length > 0) {
      setLocationKey([data[0].LocalizedName, data[0].Key]);
    }
    console.log(locationKey);
  }
  useEffect(() => {
    if (location) {
      fetchLocationKey();
    }
  }, [location]);

  async function fetchLocationForecast() {
    const res = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey[1]}?apikey=${apiKey}&language=en-gb&details=false&metric=true`
    );
    const data = await res.json();
    if (data.length > 0) {
      setLocationForecast(data);
      console.log(locationForecast);
    }
  }
  useEffect(() => {
    if (locationKey) {
      fetchLocationForecast();
    }
  }, [locationKey]);

  return (
    <>
      <div className="card">
        <h2>Your Forecast</h2>
        <div className="img-container">
          <img
            className="card-img-top"
            src={
              locationForecast
                ? iconSelector(locationForecast[0].IconPhrase)
                : iconSelector()
            }
            alt="Card image cap"
            id="icon"
          />
        </div>
        <div className="card-body">
          {locationKey && locationForecast ? (
            <>
              <h3 className="card-title">{locationKey[0]}</h3>
              <h5 className="card-text">
                {locationForecast[0].Temperature.Value}
              </h5>
              <h5 className="card-text">{locationForecast[0].IconPhrase}</h5>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
export default Location;
