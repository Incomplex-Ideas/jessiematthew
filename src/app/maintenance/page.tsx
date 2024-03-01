"use client";
import AOS from "aos";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { useLayoutEffect } from "react";
import MovingText from "react-moving-text";
import { customColor } from "@/theme/default-theme";

export default function Page() {
  // detect is Mobile screen with useMediaQuery
  const isMobile = useMediaQuery("(max-width:600px)");

  useLayoutEffect(() => {
    AOS.init();
  }, []);
  const Letters = [
    "C",
    "o",
    "n",
    "s",
    "t",
    "r",
    "u",
    "c",
    "t",
    "i",
    "n",
    "g",
    "!",
  ];

  return (
    <Box
      width="100%"
      height="100%"
      minHeight="inherit"
      paddingX="2rem"
      sx={{
        wordBreak: "break-word",
      }}
    >
      <Box
        paddingTop="8rem"
        paddingBottom="4rem"
        maxWidth="1920px"
        width="100%"
        height="100%"
        minHeight="inherit"
        margin="auto"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <Box display="flex" flexDirection="column" gap="3rem">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              fontSize: isMobile ? "3rem" : "5rem",
              fontFamily: "Iosevka",
            }}
          >
            {Letters.map((char, index) => (
              <MovingText
                key={index}
                type="unfold"
                duration="2000ms"
                delay={`${index * 100}ms`}
                direction="normal"
                timing="ease-in-out"
                iteration="infinite"
                fillMode="both"
              >
                {char}
              </MovingText>
            ))}
          </Box>
          <Typography variant="h5" fontFamily="Iosevka" fontWeight={500}>
            We are waiting for the photoshoot to be done. Please comeback at the
            end of april. Ariga-thankyou!
          </Typography>
        </Box>
        <Box
          className="moving-text"
          sx={{
            fontSize: isMobile ? "2rem" : "3rem",
            color: customColor.yellowText,
            position: "sticky",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        >
          <MovingText
            type="typewriter"
            dataText={[
              "Jessie",
              "Matthew",
              "😘",
              "Please comeback at the end of april",
              "🥰",
              "Don't forget",
              "🤗",
              "😬",
              "😲",
              "😅",
              "🤔",
              "Still here?",
              "🥶",
              "Thought about leaving yet?",
              "🤨",
              "🧐",
              "🤓",
              "Byeee",
            ]}
            duration="2000ms"
          />
        </Box>
      </Box>
    </Box>
  );
}
