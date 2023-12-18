import React, { useState, useEffect } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime.js';

function App() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1);
      setTimerId(id);
    }
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

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
