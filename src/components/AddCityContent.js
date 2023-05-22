import React from "react";

export default function AddCityContent({ data }) {
  if (!data || !data.location || !data.location.name) {
    return null; // Return null or display a message when data or location name is undefined
  }

  return (
    <div className="AddCityContent">
      {/* <h2>{data.location.name}, {data.location.country}</h2>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Humidity: {data.current.humidity}%</p> */}

      <div className="app_container">
        <div className="app_city_icon">
          <img src={data?.current.condition.icon} />
          <span>{data?.current.condition.text}</span>
        </div>
        <div className="app_info">
          {data && (
            <div>
              <h2>
                {data.location.name}, {data.location.country}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="app_city_data">
        <div>
          <span>Temperature</span>
          <p>
            {data.current.temp_c}
            <span>°C</span>
          </p>
        </div>
        <div>
          <span>Humidity</span>
          <p>
            {data.current.humidity}
            <span>%</span>
          </p>
        </div>
        <div>
          <span>Pressure</span>
          <p>
            {data.current.pressure_mb}
            <span>mb</span>
          </p>
        </div>
        <div>
          <span>Wind</span>
          <p>
            {data.current.wind_kph}
            <span>km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
