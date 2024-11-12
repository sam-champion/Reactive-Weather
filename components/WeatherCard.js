import React from "react";
import iconSelector from "../helpers";

function WeatherCard({ data }) {
  const icon = iconSelector(data.forecast);
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={icon}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}</h5>
        <h5 className="card-text">{data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
