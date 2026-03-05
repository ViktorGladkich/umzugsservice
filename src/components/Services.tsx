"use client";

import { motion } from "framer-motion";
import { Package, Hammer, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative h-full w-full overflow-hidden rounded-4xl p-6 lg:p-8 flex flex-col ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

// 1. Rating
function FeatureOne() {
  return (
    <BentoCard className="bg-blue-50 border-none shadow-none">
      <div className="font-bold text-blue-600">Top bewertet</div>
      <div className="mt-auto flex justify-end items-end gap-1 pt-8">
        <div className="text-5xl font-black text-blue-900 tracking-tighter">
          4.9
        </div>
        <sup className="text-3xl text-blue-600 pb-2">★</sup>
      </div>
    </BentoCard>
  );
}

// 2. Customers
function FeatureTwo() {
  return (
    <BentoCard className="bg-white border border-neutral-100 shadow-xl shadow-neutral-100/50 sm:col-span-2">
      <strong className="text-3xl lg:text-4xl font-black text-neutral-900 leading-tight">
        Über <span className="text-blue-600">200+</span> erfolgreiche Umzüge in
        Dresden
      </strong>
      <div className="mt-auto pt-8 flex items-center gap-4">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-neutral-100 border-4 border-white flex items-center justify-center text-neutral-400 shrink-0"
            >
              <User className="w-5 h-5" />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full bg-neutral-900 border-4 border-white flex items-center justify-center text-white shrink-0 font-bold text-xs">
            +99
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

// 3. Montage
function FeatureThree() {
  return (
    <BentoCard className="bg-cyan-50 border-none shadow-none">
      <Hammer className="w-10 h-10 text-cyan-600 mb-4" />
      <strong className="text-xl font-bold text-cyan-900"> De-/Montage</strong>
      <div className="mt-auto pt-4">
        <div className="text-sm font-medium text-cyan-700 leading-relaxed">
          Fachgerechter Auf- & Abbau Ihrer Möbel und Küchen.
        </div>
      </div>
    </BentoCard>
  );
}

// 4. Packing
function FeatureFour() {
  return (
    <BentoCard className="bg-neutral-950 text-white sm:col-span-2 md:flex-row items-center gap-8 justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
      <div className="w-full md:w-1/2">
        <div className="text-3xl font-black text-white mb-4">
          Profi-Verpackung
        </div>
        <p className="text-neutral-400 text-sm xl:text-base font-medium leading-relaxed">
          Stresstolerante Boxen. Wir verpacken vom Klavier bis zum feinsten
          Porzellan alles absolut bruchsicher.
        </p>
      </div>
      <div className="relative w-full md:w-40 h-40 mt-8 md:mt-0 flex-shrink-0 bg-neutral-900 rounded-3xl flex items-center justify-center border border-neutral-800">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-blue-500/20 to-transparent rounded-b-3xl pointer-events-none" />
        <Package className="w-16 h-16 text-blue-500 relative z-10 animate-bounce [animation-duration:3s]" />
      </div>
    </BentoCard>
  );
}

// 5. Bold Copy
function FeatureFive() {
  return (
    <BentoCard className="bg-blue-600 sm:col-span-2 border-none shadow-none group p-0! justify-center items-center">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full h-full p-8 py-16">
        <div className="text-6xl sm:text-7xl md:text-[6rem] leading-none font-black uppercase text-blue-800/80 transition-all duration-500 group-hover:text-white/20">
          STRESS
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-black uppercase text-white transition-all duration-500 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100">
          -FREI
        </div>
      </div>
    </BentoCard>
  );
}

// 6. Time/Punctuality
function FeatureSix() {
  return (
    <BentoCard className="bg-white border border-neutral-100 items-center justify-center text-center shadow-xl shadow-neutral-100/50">
      <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 text-green-600" />
      </div>
      <div className="font-bold text-neutral-900 text-xl leading-tight">
        Pünktlichkeits- <br />
        garantie
      </div>
    </BentoCard>
  );
}

// 7. Tags / Regions
function FeatureSeven() {
  return (
    <BentoCard className="bg-neutral-50/50 border-none shadow-none justify-center gap-3">
      <div className="w-full -rotate-2 rounded-2xl border border-blue-100 bg-white py-3.5 text-center font-bold text-blue-600 shadow-sm transition-transform hover:rotate-0">
        Dresden
      </div>
      <div className="w-full rotate-2 rounded-2xl border border-neutral-200 bg-white py-3.5 text-center font-bold text-neutral-600 shadow-sm transition-transform hover:rotate-0">
        Sachsen
      </div>
      <div className="w-full -rotate-1 rounded-2xl border border-neutral-800 bg-neutral-900 py-3.5 text-center font-bold text-white shadow-md transition-transform hover:rotate-0">
        Europaweit
      </div>
    </BentoCard>
  );
}

// 8. Consultation
function FeatureEight() {
  return (
    <BentoCard className="bg-white border border-neutral-100 sm:col-span-2 group shadow-xl shadow-neutral-100/50 justify-center">
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-linear-to-l from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10 max-w-sm">
        <div className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
          Kostenlose Besichtigung
        </div>
        <p className="text-neutral-500 font-medium leading-relaxed">
          Wir kommen zu Ihnen und planen den gesamten Ablauf unverbindlich vor
          Ort. Volle Transparenz von Anfang an.
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            className="pl-6 pr-1.5 py-1 text-sm h-10 gap-3"
          >
            Termin vereinbaren
          </Button>
        </div>
      </div>
    </BentoCard>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-0 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Ihre Vorteile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter"
          >
            Alles aus <br className="hidden md:block" />
            einer Hand.
          </motion.h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 auto-rows-fr">
            <FeatureOne />
            <FeatureTwo />
            <FeatureThree />

            <FeatureFour />
            <FeatureFive />

            <FeatureSix />
            <FeatureSeven />
            <FeatureEight />
          </div>
        </div>
      </div>
    </section>
  );
}
