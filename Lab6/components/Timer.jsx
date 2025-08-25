import React, {useState, useEffect, useRef} from 'react';

const Timer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const internalRef = useRef(null)
    const [isActive, setIsActive] = useState(false)

    
    useEffect(() => {
        if(isActive){
            internalRef.current = setInterval(() =>{
                setSeconds((prev) => {
                    if(prev == 59){
                        setMinutes((m) => {
                            if(m == 59){
                                setHours((h) => h + 1)
                                return 0;
                            }return m + 1;
                        });return 0;
                    }return prev + 1;
                })
            }, 1000)
        }
        return () => setInterval(internalRef.current)
    }, [isActive])

    const startTimer = () => {
        if(!isActive){
            setIsActive(true)
            clearInterval(internalRef.current)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
        }
    }

    const stopTimer = () =>{
        setIsActive(false);
    }
    return (
        <div>
            <h2>
                {String(hours).padStart(2, "0")}
                {String(minutes).padStart(2, "0")}
                {String(seconds).padStart(2, "0")}
            </h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default Timer;
