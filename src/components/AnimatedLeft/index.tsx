"use client";

import { Box, Typography } from "@mui/material";
import "./index.css";
import Heart from "@/assets/svgs/heart.svg";
import Image from "next/image";
import { useTimeCountdown } from "@/hooks/useTimeCountdown";

type AnimatedLeftProps = {
  activeSlide: number;
};
export default function AnimatedLeft({ activeSlide }: AnimatedLeftProps) {
  const { formattedTime } = useTimeCountdown();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className="animated-left">
      <Box
        className="animated-left-content"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap="0.25rem"
        onClick={scrollTop}
        borderRadius="4px"
      >
        <Typography variant="h6" fontFamily="LilyScriptOne">
          J
        </Typography>
        <Image src={Heart} alt="heart" width={24} height={24} />
        <Typography variant="h6" fontFamily="LilyScriptOne">
          M
        </Typography>
      </Box>
      <TimeSign
        text={`${formattedTime.days} DAYS`}
        top="calc(10vh + 0rem)"
        className="day"
        activeSlide={activeSlide}
      />
      <TimeSign
        text={`${formattedTime.hours} HOURS`}
        top="calc(10vh + 4rem)"
        className="hour"
        activeSlide={activeSlide}
      />
      <TimeSign
        text={`${formattedTime.minutes} MINS`}
        top="calc(10vh + 8rem)"
        className="minute"
        activeSlide={activeSlide}
      />
    </Box>
  );
}

const TimeSign = ({
  text,
  top,
  className,
  activeSlide,
}: {
  text: string;
  top: string;
  className: string;
  activeSlide: number;
}) => {
  const onTimeClick = () => {
    document
      .getElementById("time-and-place")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      className={className}
      borderRadius="0px 99px 101px 0px"
      width={activeSlide !== 0 ? "110px" : "0px"}
      height="2rem"
      position="fixed"
      top={top}
      zIndex="12"
      display="flex"
      justifyContent="left"
      alignItems="center"
      paddingLeft="12px"
      sx={{
        opacity: activeSlide !== 0 ? "1" : "0",
        transition: "all 0.5s ease-in-out",
        transitionDelay: "0.5s",
      }}
      onClick={onTimeClick}
    >
      <Typography variant="h6" fontFamily="Iosevka" whiteSpace="nowrap">
        {text}
      </Typography>
    </Box>
  );
};
