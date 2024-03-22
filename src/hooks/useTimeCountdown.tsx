import { useEffect, useState } from "react";

type MyFormattedTime = {
  days: number;
  hours: number;
  minutes: number;
};

export const useTimeCountdown = () => {
  const [isMarried, setIsMarried] = useState(false);
  const myWeddingTimeInMilliseconds = 1714910400000; // May 05 2024
  const [formattedTime, setFormattedTime] = useState<MyFormattedTime>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const formatTime = (milliseconds: number) => {
    const minutes = Math.abs(Math.floor((milliseconds / (1000 * 60)) % 60));
    const hours = Math.abs(Math.floor((milliseconds / (1000 * 60 * 60)) % 24));
    const days = Math.abs(Math.floor(milliseconds / (1000 * 60 * 60 * 24)));

    setFormattedTime({ days, hours, minutes });
  };

  // Function to update the countdown time every minute
  const updateCountdown = () => {
    formatTime(myWeddingTimeInMilliseconds - Date.now());
  };

  // Start the countdown interval when the component mounts
  useEffect(() => {
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 60000);

    if (Date.now() > myWeddingTimeInMilliseconds) {
      setIsMarried(true);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return {
    isMarried,
    formattedTime,
  };
};
