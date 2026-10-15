"use client";

import { useState, type ImgHTMLAttributes } from "react";
import { Skeleton } from "@mui/material";

/** <img> that shows a shimmer placeholder until the image has loaded, then fades in. */
export default function FadeInImage({
  style,
  onLoad,
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span style={{ position: "relative", display: "block" }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            minHeight: 160,
            bgcolor: "rgba(230, 217, 178, 0.08)",
          }}
        />
      )}
      <img
        {...rest}
        alt={alt}
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true);
        }}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        style={{
          ...style,
          display: "block",
          width: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />
    </span>
  );
}
