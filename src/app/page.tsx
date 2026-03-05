"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureService } from "@/components/FeatureService";
import { Vorteile } from "@/components/Vorteile";
import { UeberUns } from "@/components/UeberUns";
import MovingCalculator from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden text-neutral-800 font-sans selection:bg-blue-100">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-101 origin-left"
        style={{ scaleX }}
      />

      {/* Background System */}
      <AnimatedBackground />

      {/* Page Content System */}
      <div className="relative z-10 w-full">
        <div className="px-[15px] md:px-[70px]">
          <Navbar />

          <article>
            <Hero />
            <FeatureService />

            <section id="services">
              <Vorteile />
            </section>

            <UeberUns />

            <section id="calculator">
              <MovingCalculator />
            </section>
          </article>
        </div>

        <Footer />
      </div>
    </main>
  );
}
