"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Countdown() {
  const myWeddingTimeInMilliseconds = 1714910400000;
  const [time, setTime] = useState(myWeddingTimeInMilliseconds - Date.now());

  // Function to format the time in HH:MM:SS format
  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Function to update the countdown time every minute
  const updateCountdown = () => {
    setTime(myWeddingTimeInMilliseconds - Date.now());
  };

  // Start the countdown interval when the component mounts
  useEffect(() => {
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
        Time remaining: {formatTime(time)}
      </Typography>
    </Box>
  );
}
