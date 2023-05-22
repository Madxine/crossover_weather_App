import React, { useState, useEffect } from "react";
import './App.css';
import AddCity from "./components/AddCity";

function App() {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  // Get the user's location and update the query state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setQuery(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);

  // Fetch weather data when the query state changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0a0139df6eb24bd9acc112311230704&q=${query}`);
      const data = await response.json();
      setData(data);
    };

    if (query) {
      fetchData();
    }
  }, [query]);
 console.log(data)
  return (
    <div className="App">
    <div>
    <h3>Add your favorite city</h3>
      {data && (
        <div>
    <AddCity />

          <h2>{data.location.name}, {data.location.country}</h2>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Humidity: {data.current.humidity}%</p>
        </div>
      )}
      
    </div>
    </div>
  );
}

export default App;