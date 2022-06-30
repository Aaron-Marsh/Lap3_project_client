import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./index.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Get Ready</div>;
  }
  
  return (
    <div className="timer">
      <div className="text">Only</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds left</div>
    </div>
  );
};

function Timer(props) {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={props.isPlaying}
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 3 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Timer;
