"use client";

import { Box } from "@mui/material";
import "./index.css";
import FloralFrame from "@/assets/svgs/floral_frame.png";
import Image from "next/image";

type RollingMenuProps = {
  activeSlide: number;
};

export default function RollingMenu() {
  return (
    <Box
      className="scroller"
      width="400px"
      height="400px"
      bgcolor="transparent"
      borderRadius="50%"
      border="2px solid var(--white-text)"
    >
      <Box className="home">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
      </Box>
      <Box className="where">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
      </Box>
      <Box className="story">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
      </Box>
      <Box className="gallery">
        <Image src={FloralFrame} alt="floral_frame" width={100} height={100} />
      </Box>
    </Box>
  );
}
