"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const cursorHandle = (e: any) => {
      cursor?.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    };

    window.addEventListener("mousemove", cursorHandle);

    window.addEventListener("click", () => {
      cursor?.classList.add("expand");

      setTimeout(() => {
        cursor?.classList.remove("expand");
      }, 500);
    });

    return () => {
      window.removeEventListener("mousemove", cursorHandle);
    };
  }, []);

  return <motion.div className="cursor" animate="default" />;
}
