import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function ExitComponent() {
  const [count, setCount] = useState(5);
  const [startCountdown, setStartCountdown] = useState(false);
  const history = useNavigate();

  const handleButtonClick = () => {
    setStartCountdown(true);
  };

  React.useEffect(() => {
    let countdownTimer;

    if (startCountdown) {
      countdownTimer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    if (count === 0) {
      clearInterval(countdownTimer);
      // Redirect to page 3
      history("/page3");
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [count, startCountdown, history]);
  return (
    <div>
      <div>
        <button onClick={handleButtonClick} className='Button-bot' >Exit</button>
        {startCountdown && <div className="counter"> {count} </div>}
      </div>
    </div>
  );
}
