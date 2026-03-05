"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroBadge } from "./hero/HeroBadge";
import { BittenCorner } from "./shared/BittenCorner";

/**
 * Main Hero section with parallax background and kinetic typography.
 * First impression for the user, highlighting the "Stress-free" promise.
 */
export function Hero() {
  const { scrollYProgress } = useScroll();

  // Create a parallax effect for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="px-0 pb-6 pt-10 min-h-screen bg-white">
      <div className="relative h-[calc(100vh-120px)] min-h-[600px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900">
        {/* Parallax Background Layer */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <Image
            src="/hero.png"
            alt="Professioneller Umzugsservice Szene"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          {/* Subtle overlay for better text contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-end md:items-center px-6 md:px-20 pb-32 md:pb-20 z-10">
          <div className="max-w-3xl">
            {/* Title with kinetic reveal */}
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

            {/* Supporting description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-white/90 mb-12 leading-[1.3] tracking-tight max-w-2xl px-1"
            >
              Ihr Wegbegleiter für nahtlose Umzüge. Vergessen Sie Stress. Wir
              choreografieren den perfekten Wechsel in Ihr neues Leben – mit
              absoluter{" "}
              <span className="text-white ">Leichtigkeit</span>.
            </motion.p>

            {/* Primary Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="#calculator" variant="secondary">
                Bereit für den Umzug?
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Review Badge */}
        <div className="absolute bottom-0 right-0 z-20 flex items-end scale-75 md:scale-100 origin-bottom-right">
          <div className="relative flex items-end">
            {/* Corner cutouts that "bite" into the photo container */}
            <BittenCorner
              className="absolute -top-[32px] right-0 text-white"
              size={32}
            />
            <BittenCorner
              className="absolute bottom-0 -left-[32px] text-white"
              size={32}
            />

            <HeroBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
