import { useEffect, useState } from "react";

type MyFormattedTime = {
  days: number;
  hours: number;
  minutes: number;
};

export const useTimeCountdown = () => {
  const [isMarried, setIsMarried] = useState(false);
  const myWeddingTimeInMilliseconds = 1714910400000; // May 05 2024
  // null until mounted so the UI can show a placeholder instead of flashing 0D 0H 0M
  const [formattedTime, setFormattedTime] = useState<MyFormattedTime | null>(
    null
  );

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

    setIsMarried(Date.now() > myWeddingTimeInMilliseconds);

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
