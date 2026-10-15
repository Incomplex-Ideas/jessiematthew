"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./index.css";
import { useTimeCountdown } from "@/hooks/useTimeCountdown";
import WeMadeIt from "../WeMadeIt";
import { motion } from "framer-motion";

type MyFormattedTime = {
  days: number;
  hours: number;
  minutes: number;
};
export default function Countdown() {
  const { isMarried, formattedTime } = useTimeCountdown();
  const isMobile = useMediaQuery("(max-width: 1439px)");

  return (
    <Box>
      {isMarried ? <WeMadeIt /> : null}
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: isMobile ? "1rem" : "3rem",
          width: "100%",
        }}
        initial={{
          translateY: "100px",
          opacity: 0,
        }}
        whileInView={{
          translateX: "0px",
          translateY: "0px",
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <FloralFrame time={`${formattedTime.days}D`} />
        <FloralFrame time={`${formattedTime.hours}H`} />
        <FloralFrame time={`${formattedTime.minutes}M`} />
      </motion.div>
    </Box>
  );
}

type FloralFrameProps = {
  time: string;
  [key: string]: any;
};

const FloralFrame = ({ time, ...rest }: FloralFrameProps) => {
  const onClick = () => {
    document
      .getElementById("time-and-place")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      id="floral_frame"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={{ xs: "100px", md: "200px" }}
      height={{ xs: "100px", md: "200px" }}
      position="relative"
      zIndex="2"
      sx={{
        background: "url('/images/floral_frame_2.png') no-repeat center",
        backgroundSize: "cover",
        ":hover": {
          transform: "scale(1.1)",
          transition: "transform 0.5s",
          color: "var(--light-orange)",
          cursor: "pointer",
        },
      }}
      onClick={onClick}
      {...rest}
    >
      <motion.div
        initial={{
          translateY: "100px",
          opacity: 0,
        }}
        whileInView={{
          translateX: "0px",
          translateY: "0px",
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <Typography
          variant="h3"
          fontFamily="Iosevka"
          className="gradient-countdown"
        >
          {time}
        </Typography>
      </motion.div>
    </Box>
  );
};
