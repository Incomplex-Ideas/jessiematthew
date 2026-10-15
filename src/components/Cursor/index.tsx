"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    // No custom cursor on touch devices
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const render = () => {
      frame = 0;
      cursor.style.translate = `${x}px ${y}px`;
    };

    const onMove = (e: MouseEvent) => {
      x = e.pageX - 10;
      y = e.pageY - 10;
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onClick = () => {
      cursor.classList.add("expand");
      clearTimeout(timeout);
      timeout = setTimeout(() => cursor.classList.remove("expand"), 500);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
}
