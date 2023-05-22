import { useState, useEffect } from "react";

export default function Dark() {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(false);

  function getTime(hours) {
    if (hours > 21 || hours < 6) setTime(true);
  }

  useEffect(() => {
    getTime(new Date().getHours());
    if (time) {
      document.body.classList.add("night");
    }
  }, []);

  return (
    <div
      onClick={function toggleBtn() {
        document.body.classList.toggle("night");
        setActive(!active);
      }}
      className="dark"
    >
      {active ? "Day mode" : "Night mode"}
    </div>
  );
}
