"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import FadeInImage from "../FadeInImage";
import { photoUrl, type Photo } from "@/lib/cloudinary";

const PAGE_SIZE = 40;

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // Reveal more photos as the user nears the bottom
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible((v) => Math.min(v + PAGE_SIZE, photos.length));
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [photos.length]);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) =>
      setActive((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
  );

  return (
    <>
      <Box
        sx={{
          columnCount: { xs: 2, md: 3, lg: 4 },
          columnGap: "8px",
          "& > button": {
            display: "block",
            width: "100%",
            marginBottom: "8px",
            padding: 0,
            border: 0,
            background: "none",
            cursor: "zoom-in",
            breakInside: "avoid",
            overflow: "hidden",
            borderRadius: "4px",
            "&:hover img": { transform: "scale(1.04)" },
            "& img": { transition: "transform 0.4s ease, opacity 0.6s ease" },
          },
        }}
      >
        {photos.slice(0, visible).map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            aria-label={`Open photo ${i + 1}`}
            onClick={() => setActive(i)}
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
          >
            <FadeInImage
              src={photoUrl(photo.id, 480)}
              srcSet={`${photoUrl(photo.id, 480)} 1x, ${photoUrl(photo.id, 960)} 2x`}
              alt=""
              loading="lazy"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </button>
        ))}
      </Box>
      <div ref={sentinel} style={{ height: 1 }} />

      <AnimatePresence>
        {active !== null && (
          <Lightbox
            key="lightbox"
            photos={photos}
            index={active}
            onClose={close}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </>
  );
}

type LightboxProps = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
};

function Lightbox({ photos, index, onClose, onStep }: LightboxProps) {
  const photo = photos[index];
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onStep]);

  // Warm the cache for neighbouring photos
  useEffect(() => {
    [1, -1].forEach((d) => {
      const n = photos[(index + d + photos.length) % photos.length];
      new Image().src = photoUrl(n.id, 1600);
    });
  }, [index, photos]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(26, 22, 13, 0.94)",
      }}
    >
      <NavButton label="Previous photo" side="left" onClick={() => onStep(-1)} />
      <motion.img
        key={photo.id}
        src={photoUrl(photo.id, 1600)}
        alt=""
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "92vw",
          maxHeight: "90vh",
          objectFit: "contain",
          borderRadius: 4,
        }}
      />
      <NavButton label="Next photo" side="right" onClick={() => onStep(1)} />
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        style={{ ...buttonStyle, top: 16, right: 16 }}
      >
        ✕
      </button>
      <span
        style={{
          position: "absolute",
          bottom: 16,
          color: "var(--lighter-text)",
          fontSize: 14,
        }}
      >
        {index + 1} / {photos.length}
      </span>
    </motion.div>
  );
}

const buttonStyle: React.CSSProperties = {
  position: "absolute",
  width: 44,
  height: 44,
  border: 0,
  borderRadius: "50%",
  background: "rgba(60, 41, 18, 0.7)",
  color: "var(--lighter-text)",
  fontSize: 20,
  cursor: "pointer",
};

function NavButton({
  label,
  side,
  onClick,
}: {
  label: string;
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={{ ...buttonStyle, [side]: 12, top: "50%", marginTop: -22 }}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}
