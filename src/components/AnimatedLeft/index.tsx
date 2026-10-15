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
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1500"
        paddingY="0.25rem"
      >
        <Typography variant="h6" fontFamily="LilyScriptOne">
          J
        </Typography>
        <Image src={Heart} alt="heart" width={24} height={24} loading="lazy" />
        <Typography variant="h6" fontFamily="LilyScriptOne">
          M
        </Typography>
      </Box>
      <TimeSign
        text={`${formattedTime.days} DAYS`}
        top={{ xs: "unset", md: "calc(10rem + 0rem)" }}
        bottom={{ xs: "calc(-70vh + 4rem)", md: "unset" }}
        className="day"
        activeSlide={activeSlide}
      />
      <TimeSign
        text={`${formattedTime.hours} HOURS`}
        top={{ xs: "unset", md: "calc(10rem + 4rem)" }}
        bottom={{ xs: "calc(-70vh + 2rem)", md: "unset" }}
        className="hour"
        activeSlide={activeSlide}
      />
      <TimeSign
        text={`${formattedTime.minutes} MINS`}
        top={{ xs: "unset", md: "calc(10rem + 8rem)" }}
        bottom={{ xs: "calc(-70vh + 0rem)", md: "unset" }}
        className="minute"
        activeSlide={activeSlide}
      />
    </Box>
  );
}

const TimeSign = ({
  text,
  top,
  bottom,
  className,
  activeSlide,
}: {
  text: string;
  top: any;
  bottom: any;
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
      bottom={bottom}
      zIndex="12"
      display="flex"
      justifyContent="left"
      alignItems="center"
      paddingLeft={{ md: "12px", xs: "0px" }}
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
