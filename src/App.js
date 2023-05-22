import React, { useState, useEffect } from "react";
import "./App.css";
import AddCity from "./components/AddCity";
import Dark from "./components/Dark";

function App() {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setQuery(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=0a0139df6eb24bd9acc112311230704&q=${query}`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Dark />
      <AddCity />
      <div className="app_container">
        <div className="app_icon">
          <img src={data?.current.condition.icon} alt="Weather icon" />
          <span>{data?.current.condition.text}</span>
        </div>
        <div className="app_info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h3>Today</h3>
          {data && (
            <div>
              <h2>
                {data.location.name}, {data.location.country}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="app_data">
        <div>
          <span>Temperature</span>
          <p>
            {data?.current.temp_c}
            <span>°C</span>
          </p>
        </div>
        <div>
          <span>Humidity</span>
          <p>
            {data?.current.humidity}
            <span>%</span>
          </p>
        </div>
        <div>
          <span>Pressure</span>
          <p>
            {data?.current.pressure_mb}
            <span>mb</span>
          </p>
        </div>
        <div>
          <span>Wind</span>
          <p>
            {data?.current.wind_kph}
            <span>km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
