"use client";

import { useEffect } from "react";

/**
 * Fixes mobile browser address bar jumps by setting a CSS variable `--vh`
 * that calculates 1% of the actual viewport height dynamically.
 */
export function ViewportFix() {
  useEffect(() => {
    // Initial set
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    let lastWidth = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        setVh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
}
