import React, { useState, useEffect } from "react";

function ClickGame() {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setStarted(false);
    }
  }, [started, timeLeft]);

  const startGame = () => {
    setStarted(true);
    setCount(0);
    setTimeLeft(10);
  };

  return (
    <div className="card game">
      <h3>Click Game </h3>
      <p>Time Left: {timeLeft}s</p>
      <button
        onClick={() => started && setCount(count + 1)}
        disabled={!started}
      >
        Click Me!
      </button>
      <p>Score: {count}</p>
      {!started && <button onClick={startGame}>Start Game</button>}
    </div>
  );
}

export default ClickGame;
