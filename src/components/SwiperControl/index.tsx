"use client";

import "swiper/react";
import "swiper/css";
import "./styles.css";

import React, { useEffect, useLayoutEffect } from "react";
// import Landing from "../Landing";
// import OurStory from "../OurStory";
// import WeddingPhotoshoot from "../WeddingPhotoshoot";
// import TimePlace from "../TimePlace";
import { SlideContextProvider } from "@/providers/SlideContextProvider";
import AnimatedLeft from "../AnimatedLeft";
import RollingMenu from "../RollingMenu";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import Aos from "aos";
import { Skeleton, Stack, useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";

const LoadingSkeleton = () => (
  <Stack justifyContent={"center"} alignItems={"center"} paddingY="2rem">
    <Skeleton variant="rectangular" width="80vw" height="80vh" />
  </Stack>
);

const Landing = dynamic(() => import("../Landing"), {
  ssr: false,
  loading: () => (
    <Stack justifyContent={"center"} alignItems={"center"} paddingY="2rem">
      <Skeleton variant="rectangular" width="80vw" height="100vh" />
    </Stack>
  ),
});

const OurStory = dynamic(() => import("../OurStory"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const WeddingPhotoshoot = dynamic(() => import("../WeddingPhotoshoot"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const TimePlace = dynamic(() => import("../TimePlace"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

export default function SwiperControl() {
  const isMobile = useMediaQuery("(max-width: 1439px)");
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isMobile && activeSlide === 0 && latest > 1300) {
      setActiveSlide(1);
    }
    if (!isMobile && activeSlide !== 0 && latest < 1300) {
      setActiveSlide(0);
    }

    if (isMobile && activeSlide === 0 && latest > 900) {
      setActiveSlide(1);
    }
    if (isMobile && activeSlide !== 0 && latest < 900) {
      setActiveSlide(0);
    }
  });

  useLayoutEffect(() => {
    Aos.init();
  }, []);

  return (
    <SlideContextProvider activeSlide={activeSlide}>
      <ParallaxProvider>
        <Landing />
        <OurStory />
        <WeddingPhotoshoot />
        <TimePlace />
      </ParallaxProvider>
      <AnimatedLeft activeSlide={activeSlide} />
      {/* <RollingMenu activeSlide={activeSlide} /> */}
    </SlideContextProvider>
  );
}
