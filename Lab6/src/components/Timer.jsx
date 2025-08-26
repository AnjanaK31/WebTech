import React, { useState, useEffect, useRef } from "react";

const Timer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const [isActive, setIsActive] = useState(false);
  const internalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
        internalRef.current = setInterval(() => {
            setSeconds(prevSec => {
                if (prevSec === 0) {
                    setMinutes(prevMin => {
                        if (prevMin === 0) {
                            setHours(prevHour => {
                                if (prevHour === 0) {
                                    clearInterval(internalRef.current);
                                    setIsActive(false);
                                    return 0;
                                }
                                return prevHour - 1;
                            });
                            return 59;
                        }
                        return prevMin - 1;
                    });
                    return 59;
                }
                return prevSec - 1;
            });
        }, 1000);
    }
    return () => clearInterval(internalRef.current);
}, [isActive]);

  const startTimer = () => {
    if (!isActive) setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(internalRef.current);
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(internalRef.current);
    setHours(initialHours);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <h2>
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h2>
      {!isActive ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
