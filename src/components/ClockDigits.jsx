import React, { useEffect, useState } from "react";
import ClockDigit from "../hooks/ClockDigit";

const ClockDigits = () => {
  const { hours, minutes } = ClockDigit();
  return (
    <div className="flex flex-row justify-center items-center text-6xl mt-10 gap-4 select-none">
      <div className="flex items-center border-2 border-white p-10 rounded-4xl bg-[#282929]">
        <h1 className="text-9xl">{hours[0]}</h1>
        <h1 className="text-9xl">{hours[1]}</h1>
      </div>
      <span className="flex items-center text-9xl -mt-5">:</span>
      <div className="flex items-center border-2 border-white p-10 rounded-4xl bg-[#282929]">
        <h1 className="text-9xl">{minutes[0]}</h1>
        <h1 className="text-9xl">{minutes[1]}</h1>
      </div>
    </div>
  );
};

export default ClockDigits;
