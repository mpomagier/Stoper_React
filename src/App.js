import React, { useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime.js";

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
      setTimer(newTimer);
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="App">
      <FormattedTime time={time} />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
