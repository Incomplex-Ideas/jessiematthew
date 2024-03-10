"use client";

import { Box, Typography } from "@mui/material";
import "./index.css";
import Heart from "@/assets/svgs/heart.svg";
import Image from "next/image";

export default function AnimatedLeft() {
  return (
    <Box
      className="animated-left"
      fontFamily="LilyScriptOne"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>J</Typography>
      <Image src={Heart} alt="heart" width={24} height={24} />
      <Typography>M</Typography>
    </Box>
  );
}
