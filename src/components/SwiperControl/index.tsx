"use client";

import "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "./styles.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, A11y, Keyboard, Controller } from "swiper/modules";
import Landing from "../Landing";
import OurStory from "../OurStory";
import { SlideContextProvider } from "@/providers/SlideContextProvider";
import AnimatedLeft from "../AnimatedLeft";

export default function SwiperControl({ children }: React.PropsWithChildren) {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const [controlledSwiper, setControlledSwiper] = React.useState(null);

  const handleActiveSlide = (slide: number) => {
    setActiveSlide(slide);
  };

  return (
    <SlideContextProvider activeSlide={activeSlide}>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel, A11y, Keyboard, Controller]}
        onSlideChange={(slide) => handleActiveSlide(slide.activeIndex)}
        effect="fade"
        controller={{ control: controlledSwiper }}
      >
        <SwiperSlide>
          <Landing />
        </SwiperSlide>
        <SwiperSlide>
          <OurStory />
        </SwiperSlide>
      </Swiper>
      {children}
      <AnimatedLeft
        activeSlide={activeSlide}
        handleActiveSlide={handleActiveSlide}
      />
    </SlideContextProvider>
  );
}
