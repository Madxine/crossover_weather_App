import React from 'react';

export default function AddCityContent({ data }) {
  if (!data || !data.location || !data.location.name) {
    return null; // Return null or display a message when data or location name is undefined
  }

  return (
    <div className="AddCityContent">
      <h2>{data.location.name}, {data.location.country}</h2>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Humidity: {data.current.humidity}%</p>
    </div>
  );
}
