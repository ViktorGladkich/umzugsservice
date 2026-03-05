"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* ─── Animated Counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
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

/* ─── Infinite Marquee ─── */
function Marquee() {
  const items = [
    { text: "Zuverlässig", color: "text-black" },
    { text: "Professionell", color: "text-blue-600" },
    { text: "Versichert", color: "text-neutral-400" },
    { text: "Pünktlich", color: "text-black" },
    { text: "Erfahren", color: "text-blue-600" },
    { text: "Sorgfältig", color: "text-neutral-400" },
    { text: "Transparent", color: "text-black" },
    { text: "Stressfrei", color: "text-blue-600" },
  ];

  return (
    <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden py-8 md:py-12 border-y border-neutral-200/60">
      <motion.div
        className="flex gap-6 md:gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`text-4xl md:text-6xl lg:text-7xl tracking-tighter font-black uppercase select-none shrink-0 ${item.color}`}
          >
            {item.text}
            <span className="text-neutral-200 mx-3 md:mx-6">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Main Section ─── */
export function UeberUns() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const darkBgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [1.2, 1]);

  return (
    <section ref={sectionRef} id="about" className="bg-white overflow-hidden">
      {/* ── Marquee Divider ── */}
      <Marquee />

      {/* ── Dark Immersive Block ── */}
      <div className="relative mt-16 md:mt-24">
        {/* Full-bleed dark container */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-neutral-950 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-[15px] md:px-[70px]">
            {/* Top section with rounded corners matching site style */}
            <div className="pt-16 md:pt-28 pb-20 md:pb-32 relative z-10">
              {/* Über uns label */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-bold tracking-widest uppercase text-sm md:text-base block mb-8 md:mb-12"
              >
                Über Uns
              </motion.span>

              {/* Giant headline with staggered reveal */}
              <div className="max-w-5xl mb-16 md:mb-24">
                <h2 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] tracking-[-0.04em] leading-[0.95] text-white">
                  {[
                    { text: "Ihr Umzug.", line: 1 },
                    { text: "Unsere", line: 2 },
                    { text: "Leidenschaft.", line: 2, accent: true },
                  ].map((wordObj, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 60, rotate: 3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`inline-block mr-[0.2em] last:mr-0 ${
                        wordObj.accent ? "text-blue-500" : ""
                      }`}
                    >
                      {wordObj.text}
                      {wordObj.line === 1 && <br />}
                    </motion.span>
                  ))}
                </h2>
              </div>

              {/* Content Grid: Text + Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
                {/* Left: Story + Stats */}
                <div className="flex flex-col gap-12 md:gap-16">
                  {/* Story paragraphs with line reveals */}
                  <div className="max-w-lg">
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-6"
                    >
                      Seit über 15 Jahren stehen wir für{" "}
                      <span className="text-white font-medium">
                        Präzision, Zuverlässigkeit
                      </span>{" "}
                      und absolute Sorgfalt bei jedem einzelnen Umzug.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-neutral-500 text-base md:text-lg leading-relaxed"
                    >
                      Von der ersten Beratung bis zum letzten Karton — unser
                      erfahrenes Team begleitet Sie durch jeden Schritt. Weil
                      Ihr Vertrauen unser wichtigstes Gut ist.
                    </motion.p>
                  </div>

                  {/* Horizontal Stats */}
                  <div className="grid grid-cols-3 gap-0 border-t border-neutral-800">
                    {[
                      { value: 200, suffix: "+", label: "Umzüge" },
                      { value: 15, suffix: "+", label: "Jahre" },
                      { value: 100, suffix: "%", label: "Versichert" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.15,
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`py-8 md:py-10 ${
                          i > 0
                            ? "border-l border-neutral-800 pl-6 md:pl-8"
                            : ""
                        }`}
                      >
                        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-1">
                          <Counter target={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Large Image with Bitten Corner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-[3/4] md:aspect-square">
                    <motion.div
                      style={{ scale: imgScale }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="/images/office_moving.png"
                        alt="Unser professionelles Umzugsteam"
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-transparent" />

                    {/* Bitten Corner */}
                    <div className="absolute bottom-0 right-0 z-10 flex items-end">
                      <div className="relative flex items-end">
                        <div className="absolute -top-[40px] right-0 w-[40px] h-[40px] text-neutral-950">
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
                        <div className="absolute bottom-0 -left-[40px] w-[40px] h-[40px] text-neutral-950">
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
                        <div className="bg-neutral-950 pt-6 pl-6 pr-8 md:pt-8 md:pl-10 md:pr-12 rounded-tl-[32px] md:rounded-tl-[40px]">
                          <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                              {[1, 2, 3, 4].map((i) => (
                                <div
                                  key={i}
                                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 overflow-hidden shrink-0"
                                >
                                  <Image
                                    src={`https://i.pravatar.cc/80?u=team${i + 10}`}
                                    alt="Team"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm leading-tight">
                                Unser Team
                              </div>
                              <div className="text-neutral-500 text-xs">
                                Profis für Ihren Umzug
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Signature Quote */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-20 md:mt-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 border-t border-neutral-800 pt-10 md:pt-14"
              >
                <blockquote className="max-w-2xl">
                  <p className="text-2xl md:text-4xl text-white tracking-tight leading-tight">
                    &ldquo;Wir bewegen nicht nur Möbel —{" "}
                    <span className="text-blue-500">wir bewegen Leben.</span>
                    &rdquo;
                  </p>
                </blockquote>
                <motion.div
                  style={{ y: darkBgY }}
                  className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-black text-neutral-900 leading-none tracking-tighter select-none -mb-4 md:-mb-8"
                >
                  EST.
                  <br />
                  2009
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
