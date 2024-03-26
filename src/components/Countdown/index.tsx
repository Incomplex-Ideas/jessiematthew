"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useTimeCountdown } from "@/hooks/useTimeCountdown";
import WeMadeIt from "../WeMadeIt";

type MyFormattedTime = {
  days: number;
  hours: number;
  minutes: number;
};
export default function Countdown() {
  const { isMarried, formattedTime } = useTimeCountdown();
  return (
    <Box>
      {isMarried ? <WeMadeIt /> : null}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        columnGap="3rem"
        width="100%"
      >
        <FloralFrame time={`${formattedTime.days}D`} />
        <FloralFrame time={`${formattedTime.hours}H`} />
        <FloralFrame time={`${formattedTime.minutes}M`} />
      </Box>
    </Box>
  );
}

type FloralFrameProps = {
  time: string;
};

const FloralFrame = ({ time }: FloralFrameProps) => {
  return (
    <Box
      id="floral_frame"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="200px"
      height="200px"
      position="relative"
      zIndex="2"
      sx={{
        background: "url('/images/floral_frame.png') no-repeat center",
        backgroundSize: "cover",
        ":hover": {
          transform: "scale(1.1)",
          transition: "transform 0.5s",
          color: "var(--light-orange)",
          cursor: "pointer",
        },
      }}
    >
      <Typography variant="h3" fontFamily="LilyScriptOne">
        {time}
      </Typography>
    </Box>
  );
};
