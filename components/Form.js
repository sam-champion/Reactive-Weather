import React, { useState } from "react";
const cities = require("../data");

function Form({ setLocation }) {
  const [typedLocation, setTypedLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (cities.some((city) => city.city === typedLocation)) {
      setLocation(typedLocation);
      setErrorMessage("");
    } else {
      setErrorMessage("Location not found");
    }
    setTypedLocation("");
  }

  return (
    <div className="form" style={{ marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input
            type="text"
            value={typedLocation}
            onChange={(e) => setTypedLocation(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Form;
