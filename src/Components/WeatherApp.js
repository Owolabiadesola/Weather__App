import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const api = {
  key: "6b52701097d9e87ac66a6b7b91660fc4",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    if (search === "") {
      console.log("Please enter a city name.");
      return;
    }

    //  Perform the API request using `search` and `api` values
    //For example:
    const apiUrl = `${api.base}weather?q=${search}&appid=${api.key}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        // Handle the data and update the UI
        setWeather(result);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="main mt-3">
            <div className="top-bar">
              {/* Search Box */}
              <input
                type="text"
                className="cityInput"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="search-icon">
                <img
                  src="/Images/search1.png"
                  alt="img"
                  className="img-fluid search"
                  onClick={handleSearch}
                />
              </div>
            </div>
            {/* Location */}
            <p className="weatherlocation mt-5">{weather.name}</p>
            {/* Temperature F/C */}
            <p className="weathertemp">{weather.main.temp}°F</p>
            {/* Condition (Sunny) */}
            <p className="weathercondition">{weather.weather[0].main}</p>
            <p className="weathercondition">{weather.weather[0].description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherApp;
