"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

const MAX_TILT = 20;

export default function OurName() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skip the tilt effect for touch users and those preferring reduced motion
    if (
      !window.matchMedia("(hover: hover)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    const set = (transform: string) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = transform;
      });
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
      const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
      set(
        `perspective(500px) scale(1.1) rotateX(${-MAX_TILT * yRatio}deg) rotateY(${MAX_TILT * xRatio}deg)`
      );
    };
    const onLeave = () => set("perspective(500px) scale(1)");
    const onDown = () => set("perspective(500px) scale(0.9)");
    const onUp = () => set("perspective(500px) scale(1.1)");

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <Box
      ref={ref}
      id="names"
      minHeight="200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="999"
      sx={{
        transition: "transform 0.2s ease-out",
        willChange: "transform",
      }}
    >
      <Typography
        fontSize={{ xs: "5rem", md: "10rem" }}
        fontFamily="Darling"
        color="var(--brown-bg)"
      >
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
