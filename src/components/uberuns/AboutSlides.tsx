"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Counter } from "./AboutShared";
import { cn } from "@/lib/utils";

/* 
Slide 1 
 */
export function IntroSlide({
  opacity,
  y,
  mobile = false,
}: {
  opacity?: MotionValue<number>;
  y?: MotionValue<number>;
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-[15px] md:px-[70px] relative text-center",
        mobile ? "w-full py-20" : "w-screen h-full",
      )}
    >
      <motion.div
        style={{ opacity, y }}
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
      {!mobile && (
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500"
        >
          <div className="w-12 h-[2px] bg-neutral-200 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-blue-600"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
          Scrollen zum Entdecken
        </motion.div>
      )}
    </div>
  );
}

/* 
  Slide 2 
 */
export function ImageSlide({
  imageParallax,
  mobile = false,
}: {
  imageParallax?: MotionValue<string>;
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        mobile ? "w-full h-full" : "w-screen h-full",
      )}
    >
      <motion.div
        style={!mobile ? { x: imageParallax } : {}}
        className="absolute inset-[-15%] w-[130%] h-[130%]"
      >
        <Image
          src="/uberUns/uberUns_slid2.png"
          alt="Unser Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 md:p-0">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-[30px] max-w-2xl text-center shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
            &ldquo;Jeder Karton erzählt eine Geschichte.&rdquo;
          </h3>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Seit über 15 Jahren haben wir tausende Haushalte und Unternehmen im
            Raum Dresden erfolgreich begleitet.
          </p>
        </div>
      </div>
    </div>
  );
}
/* 
  Slide 3
 */
export function StatsSlide({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center bg-blue-600 text-white px-[15px] md:px-[70px] relative overflow-hidden",
        mobile ? "w-full py-20" : "w-screen h-full",
      )}
    >
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden flex justify-center items-center h-full">
        <h2 className="text-[18vw] font-black text-white/10 tracking-tighter leading-none">
          DRESDEN
        </h2>
      </div>
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center">
        {[
          { label: "Erfolgreiche Umzüge", value: 200, suffix: "+" },
          { label: "Zufriedene Kunden", value: 92, suffix: "%" },
          { label: "Jahre Erfahrung", value: 15, suffix: "+" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <span className="text-7xl md:text-9xl tracking-tighter text-white">
              <Counter target={stat.value} suffix={stat.suffix} />
            </span>
            <p className="text-white/70 text-lg md:text-xl font-medium tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
 Slide 4 
 */
export function OutroSlide({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center bg-white text-neutral-900 px-[15px] md:px-[70px] relative",
        mobile ? "w-full py-20" : "w-screen h-full",
      )}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative w-full h-[50vh] min-h-[350px] lg:h-[65vh] lg:max-h-[700px] rounded-[40px] overflow-hidden bg-neutral-100 shadow-2xl">
          <Image
            src="/uberUns/uberUns_slid4.png"
            alt="Team"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 right-0 z-10 flex">
            <div className="relative flex">
              <div className="absolute -top-[40px] right-0 w-[40px] h-[40px] text-white">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path
                    d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 -left-[40px] w-[40px] h-[40px] text-white">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path
                    d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="bg-white pt-4 pl-4 md:pt-6 md:pl-6 rounded-tl-[32px] md:rounded-tl-[40px]">
                <div className="bg-white rounded-2xl p-4 md:p-5 flex items-center justify-center">
                  <div className="font-black text-xl md:text-2xl tracking-tighter text-blue-600">
                    UMZUGS<span className="text-neutral-900">SERVICE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col gap-8 md:gap-10",
            mobile ? "items-center text-center" : "items-start text-left",
          )}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm md:text-base">
            Ihr Vertrauen, unser Antrieb
          </span>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-none text-neutral-950">
              Präzision trifft <br /> Sorgfalt.
            </h2>
            <p className="text-neutral-500 text-lg md:text-2xl leading-relaxed max-w-xl">
              Seit über 15 Jahren sind wir die erste Wahl für stressfreie Umzüge
              in Dresden. Wir verstehen, dass wir nicht nur Möbel
              transportieren, sondern Ihr Zuhause. Mit Pünktlichkeit, Erfahrung
              und einem Auge fürs Detail machen wir Ihren Neuanfang perfekt.
            </p>
          </div>
          <Button variant="secondary" href="#calculator" className="mt-4">
            Bereit für den Umzug?
          </Button>
        </div>
      </div>
    </div>
  );
}
