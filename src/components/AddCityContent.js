import React from 'react';

export default function AddCityContent({ data }) {
  return (
    <div className="AddCityContent">
      {data && data.location.name && (
        <div>
          <h2>{data.location.name}, {data.location.country}</h2>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Humidity: {data.current.humidity}%</p>
          <p>Humidity: {data.current.feelslike_f}%</p>
        </div>
      )}
 </div>
  );
}