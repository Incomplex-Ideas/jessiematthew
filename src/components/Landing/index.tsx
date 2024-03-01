import React from "react";
import { Box, Typography } from "@mui/material";
import Countdown from "../Countdown";

const section1Grid = `
". . . . . title title title title title title title"
"photo1 photo1 photo1 photo1 . title title title title title title title"
"photo1 photo1 photo1 photo1 . . names names names names . ."
". . photo2 photo2 photo2 . names names names names . ."
". . photo2 photo2 photo2 . names names names names . ."
". . photo2 photo2 photo2 . names names names names . ."
". . . . . time time time time time time time"
". . . . . time time time time time time time"
`;

const pageTitle = "Save The Date";

export default function Landing() {
  return (
    <Box
      paddingLeft="1.25rem"
      display="grid"
      paddingTop="2.5rem"
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(8, 1fr)"
      gridTemplateAreas={section1Grid}
      minHeight="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridArea="title"
      >
        <Typography variant="h1" textAlign="center">
          {pageTitle}
        </Typography>
      </Box>
      <Box width="100%" height="100%" bgcolor="white" gridArea="photo1"></Box>
      <Box gridArea="names">
        <Typography variant="h1">Matthew & Jessie</Typography>
      </Box>
      <Box width="100%" height="100%" bgcolor="white" gridArea="photo2"></Box>
      <Box gridArea="time">
        <Countdown />
      </Box>
    </Box>
  );
}
