import React from "react";
import Logo from "../components/Logo";
import ClockDigits from "../components/ClockDigits";
import DateBox from "../components/DateBox";

const Clock = () => {
  return (
    <section>
      <div className="flex justify-center mt-15">
        <Logo />
      </div>
      <ClockDigits />
      <div className="flex justify-center mt-10">
        <DateBox />
      </div>
    </section>
  );
};

export default Clock;
