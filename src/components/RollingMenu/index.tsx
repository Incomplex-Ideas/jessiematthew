"use client";

import { Box, Typography } from "@mui/material";
import FloralFrame from "@/assets/svgs/floral_frame.png";
import Image from "next/image";
import "./index.css";

type RollingMenuProps = {
  activeSlide: number;
};

export default function RollingMenu({ activeSlide }: RollingMenuProps) {
  return (
    <Box
      className="scroller"
      width="400px"
      height="400px"
      bgcolor="transparent"
      borderRadius="50%"
      visibility={activeSlide === 0 ? "hidden" : "visible"}
      sx={{
        transition: "all ease-in-out 0.5s",
      }}
    >
      <Box className="where">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
        <Typography
          variant="h6"
          className="rolling-name"
          fontFamily="LilyScriptOne"
        >
          Where
        </Typography>
      </Box>
      <Box className="story">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
        <Typography
          variant="h6"
          className="rolling-name"
          fontFamily="LilyScriptOne"
        >
          Story
        </Typography>
      </Box>
      <Box className="gallery">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
        <Typography
          variant="h6"
          className="rolling-name"
          fontFamily="LilyScriptOne"
        >
          Gallery
        </Typography>
      </Box>
    </Box>
  );
}
