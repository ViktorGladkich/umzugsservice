"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  IntroSlide,
  ImageSlide,
  StatsSlide,
  OutroSlide,
} from "./uberuns/AboutSlides";

/**
 * The 'Über Uns' section features a cinematic horizontal scroll effect.
 * The section is pinned while scrolling through 4 distinct slides.
 */
export function UberUns() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress within a 600vh container (Desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the horizontal translation (-75% total to show all 4 slides)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Transitions for the introduction text
  const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.05], [0, 50]);

  // Parallax effect for the image slide
  const imageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div id="about">
      {/* DESKTOP: Cinematic Horizontal Scroll */}
      <section
        ref={containerRef}
        className="hidden md:block relative bg-white w-full z-20"
        style={{ height: "600vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-white text-neutral-950">
          <motion.div
            style={{ x }}
            className="relative flex h-full w-[400vw] will-change-transform"
          >
            <IntroSlide opacity={introOpacity} y={introY} />
            <ImageSlide imageParallax={imageParallax} />
            <StatsSlide />
            <OutroSlide />
          </motion.div>
        </div>
      </section>

      {/* MOBILE: Clean Vertical Stack */}
      <section className="flex md:hidden flex-col bg-white text-neutral-900 border-t border-neutral-100">
        <div className="py-20 md:py-0">
          <IntroSlide mobile />
        </div>
        <div className="h-[70vh] min-h-[500px] border-y border-neutral-100">
          <ImageSlide mobile />
        </div>
        <div className="py-24 bg-blue-600 text-white">
          <StatsSlide mobile />
        </div>
        <div className="py-20 border-t border-neutral-100">
          <OutroSlide mobile />
        </div>
      </section>
    </div>
  );
}
