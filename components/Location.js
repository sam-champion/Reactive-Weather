import React from "react";
import iconSelector from "../helpers";

function Location({ data, location }) {
  const locationData = data.find((city) => city.city === location);
  const icon = iconSelector(locationData.forecast);
  return (
    <>
      <div className="card">
        <h2>Your Locations Weather</h2>
        <div className="img-container">
          <img
            className="card-img-top"
            src={icon}
            alt="Card image cap"
            id="icon"
          />
        </div>
        <div class="card-body">
          <h3 className="card-title">{locationData.city}</h3>
          <h5 className="card-text">{locationData.temperature}</h5>
          <h5 className="card-text">{locationData.forecast}</h5>
        </div>
      </div>
    </>
  );
}
export default Location;
