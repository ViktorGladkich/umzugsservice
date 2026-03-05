"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

/* ─── Animated Counter ─── */
import { useEffect, useState } from "react";
import { useMotionValue, useSpring, animate } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
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

export function UberUns() {
  const containerRef = useRef<HTMLElement>(null);

  // We track scroll progress for a large tall container (e.g. 400vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pin it and slide horizontally
  // The content is let's say 4 screens wide (400vw)
  // We will move it from 0 to -75% (so 100vw remains visible)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Opacity fading for intro text
  const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.05], [0, 50]);

  // Image Parallax (since it moves horizontally, we can add a slight counter-movement)
  const imageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    // Make the section super tall so we can scroll through it
    <section
      ref={containerRef}
      id="about"
      className="relative bg-neutral-950 w-full z-20"
      style={{ height: "400vh" }}
    >
      {/* Sticky container that holds the horizontal scroll track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-white text-neutral-950">
        {/* Force full viewport width just in case parent has padding constraints */}
        <motion.div
          style={{ x }}
          className="relative flex h-full w-[400vw] will-change-transform"
        >
          {/* SLIDE 1: INTRO (100vw) */}
          <div className="w-[100vw] h-full flex flex-col items-center justify-center px-[15px] md:px-[70px] relative text-center">
            <motion.div
              style={{ opacity: introOpacity, y: introY }}
              className="max-w-6xl mx-auto flex flex-col items-center"
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm md:text-base block mb-6 md:mb-12">
                Über Uns
              </span>
              <h2 className="text-[3rem] sm:text-6xl md:text-8xl lg:text-[7.5rem] tracking-[-0.04em] leading-[0.9] text-neutral-950">
                Wir sind nicht nur Möbelpacker.
                <br />
                <span className="text-neutral-400 block mt-2">
                  Wir sind Ihr Neuanfang.
                </span>
              </h2>
            </motion.div>
            {/* Scroll Indicator */}
            <motion.div
              style={{ opacity: introOpacity }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500"
            >
              <div className="w-12 h-[2px] bg-neutral-200 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-blue-600"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  }}
                />
              </div>
              Scrollen zum Entdecken
            </motion.div>
          </div>

          {/* SLIDE 2: GIANT IMAGE (100vw) */}
          <div className="w-[100vw] h-full relative overflow-hidden">
            {/* Parallax block inside horizontal scroll */}
            <motion.div
              style={{ x: imageParallax }}
              className="absolute inset-[-15%] w-[130%] h-[130%]"
            >
              <Image
                src="/uberUns/uberUns_slid2.png"
                alt="Unser Team in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Overlay Glass Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 md:p-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-[30px] max-w-2xl text-center shadow-2xl">
                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
                  &ldquo;Jeder Karton erzählt eine Geschichte.&rdquo;
                </h3>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                  Seit über 15 Jahren haben wir tausende Haushalte und
                  Unternehmen im Raum Dresden erfolgreich begleitet. Vom
                  sensiblen Erbstück bis zur IT-Infrastruktur – wir verpacken
                  Vertrauen.
                </p>
              </div>
            </div>
          </div>

          {/* SLIDE 3: STATS & BIG TYPOGRAPHY (100vw) */}
          <div className="w-[100vw] h-full flex items-center justify-center bg-blue-600 relative overflow-hidden px-[15px] md:px-[70px]">
            {/* Background huge watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-black/10 select-none pointer-events-none tracking-tighter w-full text-center leading-none">
              DRESDEN
            </div>

            <div className="relative z-10 w-full max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {[
                  {
                    val: 200,
                    suf: "+",
                    label: "Glückliche Kunden",
                    sub: "Im Großraum Dresden und Umgebung",
                  },
                  {
                    val: 15,
                    suf: "",
                    label: "Jahre Erfahrung",
                    sub: "Gegründet im Jahr 2009",
                  },
                  {
                    val: 100,
                    suf: "%",
                    label: "Versicherung",
                    sub: "Voller Schutz für Ihr Hab und Gut",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col border-t-2 border-white/20 pt-8"
                  >
                    <div className="text-[5rem] lg:text-[7rem]  leading-none tracking-tighter text-white mb-4">
                      <Counter target={stat.val} suffix={stat.suf} />
                    </div>
                    <div className="text-2xl  text-white mb-2">
                      {stat.label}
                    </div>
                    <div className="text-white/70">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLIDE 4: TEAM & OUTRO (100vw) */}
          <div className="w-[100vw] h-full flex flex-col justify-center bg-white text-neutral-900 px-[15px] md:px-[70px] relative">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[65vh] lg:max-h-[700px] rounded-[40px] overflow-hidden bg-neutral-100">
                <Image
                  src="/uberUns/uberUns_slid4.png"
                  alt="Das Profi Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-transparent" />
                <div className="absolute bottom-0 right-0 z-10 flex">
                  <div className="relative flex">
                    <div className="absolute -top-[40px] right-0 w-[40px] h-[40px] text-white">
                      <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 -left-[40px] w-[40px] h-[40px] text-white">
                      <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="bg-white pt-4 pl-4 md:pt-6 md:pl-6 rounded-tl-[32px] md:rounded-tl-[40px]">
                      <div className="bg-white rounded-2xl p-4 md:p-5 flex items-center justify-center ">
                        <div className="font-black text-xl md:text-2xl tracking-tighter text-blue-600">
                          UMZUGS
                          <span className="text-neutral-900">SERVICE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm block mb-6">
                  Das Herz der Firma
                </span>
                <h2 className="text-4xl md:text-6xl tracking-[-0.03em] leading-[0.9] mb-8">
                  Ihr Hab und Gut in{" "}
                  <span className="text-blue-600">besten Händen.</span>
                </h2>
                <p className="text-xl leading-relaxed text-neutral-500 mb-10">
                  Wir verzichten auf ungelernte Hilfskräfte. Unser fest
                  angestelltes, geschultes Team garantiert Ihnen einen
                  reibungslosen Ablauf – mit der nötigen Ruhe und Expertise,
                  auch wenn es mal eng wird.
                </p>
                <div className="mt-4">
                  <Button variant="secondary" href="#calculator">
                    Bereit für den Umzug?
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
