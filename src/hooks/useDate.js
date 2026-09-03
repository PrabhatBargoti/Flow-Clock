import { useEffect, useState } from "react";

function useDate() {
  const [date, setdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setdate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return { day, month, year };
}

export default useDate;
