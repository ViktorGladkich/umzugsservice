"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="px-0 pb-6 pt-10 min-h-screen bg-white">
      <div className="relative h-[calc(100vh-120px)] min-h-[600px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900">
        {/* Full-width Image Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <Image
            src="/hero.png"
            alt="Professioneller Umzugsservice Szene"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          {/* Subtle gradient to ensure text readability on varied images */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>

        <div className="absolute inset-0 flex items-end md:items-center px-6 md:px-20 pb-32 md:pb-20 z-10">
          <div className="max-w-3xl">
            <div className="overflow-hidden mb-8 py-2">
              <motion.h1
                initial={{ opacity: 0, y: 100, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[4.5rem] sm:text-7xl md:text-[6.5rem] lg:text-[8rem] tracking-[-0.04em] leading-[0.8] text-white"
              >
                Besser <br />
                <span className="text-blue-600 drop-shadow-lg">umziehen.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-white/90 mb-12 leading-[1.3]  tracking-tight max-w-2xl"
            >
              Ihr Wegbegleiter für nahtlose Umzüge. Vergessen Sie Stress. Wir
              choreografieren den perfekten Wechsel in Ihr neues Leben – mit
              absoluter{" "}
              <span className="text-white text-shadow">Leichtigkeit</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="#calculator" variant="primary">
                Preis kalkulieren
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Hero Inverted Corner Component (Bitten Corner) - Placed inside overflow-hidden to bite the image! */}
        <div className="absolute bottom-0 right-0 z-20 flex items-end scale-75 md:scale-100 origin-bottom-right">
          <div className="relative flex items-end">
            {/* Top Inverted Corner - Matches background color of the section (bg-white) */}
            <div className="absolute -top-[32px] right-0 w-[32px] h-[32px] text-white pointer-events-none">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M32 32V0C32 17.6731 17.6731 32 0 32H32Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Left Inverted Corner - Matches background color of the section (bg-white) */}
            <div className="absolute bottom-0 -left-[32px] w-[32px] h-[32px] text-white pointer-events-none">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M32 32V0C32 17.6731 17.6731 32 0 32H32Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Badge Content - Rectangular and Row layout, matches section background */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white pt-4 pl-6 pr-8 md:pt-4 md:pl-8 md:pr-12 md:pb-4 rounded-tl-[32px] relative z-10"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm shrink-0"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?u=${i}`}
                        alt="Kunde"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="hidden md:block h-8 w-px bg-neutral-300" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <div className="relative w-4 h-4">
                        <Star className="w-4 h-4 text-neutral-200 absolute inset-0" />
                        <div className="overflow-hidden w-[50%] h-full absolute inset-0">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <span className="text-lg tracking-tight text-neutral-900 leading-none">
                      4.5/5
                    </span>
                  </div>
                  <div className="text-[10px] text-black uppercase tracking-widest">
                    Kundenzufriedenheit
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
