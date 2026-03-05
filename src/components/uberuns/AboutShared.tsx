"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, animate, useMotionValue, useSpring } from "framer-motion";

/**
 * Animated number counter component.
 */
export function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 18 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, target]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) =>
      setDisplay(Math.round(v).toString()),
    );
    return unsub;
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
