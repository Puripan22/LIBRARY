import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const target = new Date(targetTime).getTime();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex">
      {/*<p>{timeRemaining.days} D</p>*/}
      <p> {timeRemaining.hours} H</p>
      <p className="pl-1"> {timeRemaining.minutes} M</p>
      <p className="pl-1"> {timeRemaining.seconds} S</p>
    </div>
  );
};

export default CountdownTimer;
