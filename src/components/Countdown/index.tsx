"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

type MyFormattedTime = {
  days: number;
  hours: number;
  minutes: number;
};
export default function Countdown() {
  const myWeddingTimeInMilliseconds = 1714910400000; // May 05 2024
  const [formattedTime, setFormattedTime] = useState<MyFormattedTime>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    setFormattedTime({ days, hours, minutes });
  };

  // Function to update the countdown time every minute
  const updateCountdown = () => {
    formatTime(myWeddingTimeInMilliseconds - Date.now());
    console.log(myWeddingTimeInMilliseconds - Date.now());
  };

  // Start the countdown interval when the component mounts
  useEffect(() => {
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 60000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <Box>
      <Typography variant="h1">Countdown</Typography>
      <Typography variant="body1">
        Time remaining: {formattedTime.days} days, {formattedTime.hours} hours,
        and {formattedTime.minutes} minutes
      </Typography>
    </Box>
  );
}
