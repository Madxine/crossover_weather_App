import React, { useState, useEffect, useRef } from "react";
import AddCityContent from "./AddCityContent";

export default function AddCity() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=0a0139df6eb24bd9acc112311230704&q=${query}`
        );
        const data = await response.json();
        setData(data);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(inputRef.current.value);
  };

  return (
    <div className="AddCity">
      <form onSubmit={handleSubmit}>
        <input className="input-search" type="text" ref={inputRef} />
        <button type="submit">Add City</button>
      </form>

      <AddCityContent data={data} />
    </div>
  );
}
