import React, { useState } from "react";
import Timer from "./Timer";

const TimerInput = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  const handleStart = () => {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setStartTimer(true);
    } else {
      alert("Please set a non-zero time!");
    }
  };

  const handleReset = () => {
    setStartTimer(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      {!startTimer && (
        <div>
          <h3>Set Timer</h3>
          <input
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="Hours"
          />
          <input
            type="number"
            min="0"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            placeholder="Minutes"
          />
          <input
            type="number"
            min="0"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            placeholder="Seconds"
          />
          <br />
          <button onClick={handleStart}>Start Timer</button>
        </div>
      )}

      {startTimer && (
        <div>
          <Timer
            initialHours={hours}
            initialMinutes={minutes}
            initialSeconds={seconds}
          />
          <button onClick={handleReset}>Set New Timer</button>
        </div>
      )}
    </div>
  );
};

export default TimerInput;
