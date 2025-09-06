import { useState, useEffect, useRef } from "react";

const Timer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  // State for hours, minutes, seconds
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  // State to track if timer is running
  const [isActive, setIsActive] = useState(false);

  // Ref to store interval ID
  const intervalRef = useRef(null);

  // Effect to decrement the timer every second
  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSec => {
          if (prevSec === 0) {
            setMinutes(prevMin => {
              if (prevMin === 0) {
                setHours(prevHour => {
                  if (prevHour === 0) {
                    clearInterval(intervalRef.current);
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
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  // Handlers
  const start = () => setIsActive(true);
  const pause = () => setIsActive(false);
  const reset = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setHours(initialHours);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <h2>
        {String(hours).padStart(2,"0")}:
        {String(minutes).padStart(2,"0")}:
        {String(seconds).padStart(2,"0")}
      </h2>
      {!isActive ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
