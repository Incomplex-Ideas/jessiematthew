"use client";

import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function OurName() {
  const handleNameHover = (el: HTMLElement) => {
    // Get the height and width of the element
    const height = el.clientHeight;
    const width = el.clientWidth;

    el.addEventListener("mousemove", handleMove);

    function handleMove(e: any) {
      // Get position of mouse cursor with respect to the element on mouseover
      const xVal = e.layerX;
      const yVal = e.layerY;

      // Calculate rotation value along the Y-axis
      const yRotation = 20 * ((xVal - width / 2) / width);

      // Calculate the rotation along the X-axis
      const xRotation = -20 * ((yVal - height / 2) / height);

      // Generate string for CSS transform property
      const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      // Apply the calculated transformation
      el.style.transform = string;
    }

    function handleMouseOut() {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    }

    el.addEventListener("mouseout", handleMouseOut);

    function handleMouseDown() {
      el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    }
    el.addEventListener("mousedown", handleMouseDown);

    function handleMouseUp() {
      el.style.transform =
        "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    }
    el.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    let el = document.getElementById("names");
    if (!el) {
      console.error("Element with ID 'names' not found.");
      return;
    }

    handleNameHover(el);
  }, []);

  return (
    <Box
      id="names"
      minHeight="200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="999"
    >
      <Typography fontSize="10rem" fontFamily="Darling" color="var(--brown-bg)">
        Jessie{" "}
        <span
          style={{
            fontFamily: "LilyScriptOne",
            color: "var(--light-orange)",
          }}
        >
          &
        </span>{" "}
        Matthew
      </Typography>
    </Box>
  );
}
