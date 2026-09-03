import { useState, useEffect } from "react";

function ClockDigit() {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return { hours, minutes };
}

export default ClockDigit;
