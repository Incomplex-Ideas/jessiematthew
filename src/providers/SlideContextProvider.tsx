import React, { createContext, useState } from "react";

const initialActiveSlide = 0;

export const SlideContext = createContext<number>(initialActiveSlide);

type SlideContextProviderProps = {
  activeSlide: number;
} & React.PropsWithChildren;
export const SlideContextProvider = ({
  children,
  activeSlide,
}: SlideContextProviderProps) => {
  return (
    <SlideContext.Provider value={activeSlide}>
      {children}
    </SlideContext.Provider>
  );
};
