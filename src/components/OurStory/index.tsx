"use client";

import React from "react";
import "./index.css";
import { Box, Divider, Typography } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function OurStory() {
  const [progress, setProgress] = React.useState(0);
  const [entered, setEntered] = React.useState(false);

  return (
    <Parallax
      onProgressChange={(progress) => setProgress(progress)}
      onEnter={() => setEntered(true)}
      onExit={() => setEntered(false)}
    >
      <Box
        width="100%"
        padding="20rem"
        display="flex"
        justifyContent="center"
        paddingTop="30rem"
      >
        <Box
          maxWidth="1920px"
          width="100%"
          paddingLeft="2rem"
          display="flex"
          position="relative"
        >
          <div className="gift-card">
            <Typography variant="h3" fontFamily="LilyScriptOne">
              05
            </Typography>
            <Typography variant="h3" fontFamily="LilyScriptOne">
              May
            </Typography>
            <Box paddingX="1rem">
              <Box borderRadius="1rem" overflow="hidden">
                <img src="/images/story-card.JPG" alt="our-story" />
              </Box>
            </Box>

            <Box paddingTop="2rem" width="100%" paddingX="2rem">
              <Typography variant="h6" fontFamily="LilyScriptOne">
                "I do" as two words has so much power. It's a vow; a promise; a
                commitment.
              </Typography>
              <Typography variant="h6" fontFamily="LilyScriptOne">
                Thank God for bringing us together.
              </Typography>
            </Box>

            <div className="right-parallax"></div>
            <div className="left-parallax"></div>
          </div>
          <Box
            display="flex"
            justifyContent="center"
            width="calc(100% - 400px)"
            position="relative"
            zIndex={3}
          >
            <Box display="flex" flexDirection="column" maxWidth="310px">
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                >
                  2017 - First known each other
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                >
                  2019 - Millitary Service & Long Distance
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                >
                  2023 - The Proposal
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                >
                  2025 - And Beyond
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box display="flex" flexDirection="column" maxWidth="310px">
              <Box height="6rem" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingLeft="1rem"
                >
                  2018 - Officially Dating
                </Typography>
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingLeft="1rem"
                >
                  2021 - Covid 19, Ups & Downs
                </Typography>
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingLeft="1rem"
                >
                  2024 - The Wedding
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            className="name"
            sx={{
              opacity: 0.4,
            }}
          >
            <Typography variant="h1" fontFamily="LilyScriptOne">
              Jessie &amp; Matthew is getting married
            </Typography>
          </Box>
          <Box
            position="absolute"
            className="name-background"
            sx={{
              opacity: 1,
            }}
          ></Box>
        </Box>
      </Box>
    </Parallax>
  );
}
