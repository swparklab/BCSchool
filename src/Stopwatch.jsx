import React, { useState, useEffect } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime((time) => time + 1);
        }, 10);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const handleStartStop = () => setIsRunning(!isRunning);
  
    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    const formatTime = (time) => {
      const date = new Date(time * 10);
      const hours = date.getUTCHours().toString().padStart(1, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      const seconds = date.getUTCSeconds().toString().padStart(2, "0");
      const milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
        .toString()
        .padStart(2, "0");
  
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-6xl font-bold">{formatTime(time)}</div>
            <div className="mt-4">
                <button
                    className={`px-4 py-2 text-white rounded-md focus:outline-none ${
                        isRunning ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    onClick={handleStartStop}
                >
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button
                    className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none ml-2"
                    onClick={handleReset}
                    disabled={time === 0}
                >
                Reset
                </button>
            </div>
        </div>
    )

}

export default Stopwatch;


