"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Service, services } from "./features/serviceData";

/**
 * Animated section header.
 * Using kinetic typography for a modern look.
 */
function ServiceHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-full max-w-[1000px] mx-auto overflow-hidden">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-blue-600 font-bold tracking-widest uppercase text-sm md:text-base"
      >
        Unsere Leistungen
      </motion.span>

      <div className="relative w-full">
        <h2 className="text-5xl md:text-7xl tracking-[-0.04em] leading-[0.9] text-black whitespace-normal md:whitespace-nowrap">
          {["Kompetente", "Umzugslösungen"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.2em] last:mr-0 will-change-transform"
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
          Professionelle Privatumzüge, effiziente Projektlogistik und
          erstklassige Verpackungslösungen – alles aus einer Hand.
        </p>
      </motion.div>
    </div>
  );
}

/**
 * Reusable "Bitten Corner" cutout effect for stickers.
 * Uses two SVG cutouts to smooth the transition between the card and the sticker.
 */
function BittenCornerEffect() {
  return (
    <>
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
    </>
  );
}

/**
 * Mobile view for services — a clean list of cards.
 */
function MobileServiceList() {
  return (
    <div className="flex flex-col gap-0 md:hidden">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col"
        >
          <div className="relative w-full h-[320px] rounded-[30px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 right-0 z-10">
              <div className="relative flex items-end">
                <BittenCornerEffect />
                <div className="bg-white pt-5 pl-8 pr-8 rounded-tl-[30px] min-w-[180px] relative z-20">
                  <span className="text-4xl text-blue-600 leading-none block mb-1">
                    {service.id}
                  </span>
                  <p className="text-xl text-black uppercase tracking-widest">
                    {service.shortTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-2 pt-6 pb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-black shrink-0">{service.icon}</div>
              <h3 className="text-xl font-bold text-black tracking-tight">
                {service.title}
              </h3>
            </div>
            <p className="text-neutral-500 leading-relaxed text-base">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Accordion-style layout for desktop.
 */
function DesktopAccordion({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  return (
    <div className="hidden md:flex flex-1 flex-row items-stretch gap-0 bg-white">
      {services.map((service: Service, index: number) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={service.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative flex overflow-hidden cursor-pointer ${
              index > 0 ? "border-l border-neutral-100/50" : ""
            }`}
            animate={{ flex: isActive ? 4 : 0.45 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 500 }}
          >
            {/* Expanded Content View */}
            <div
              className={`relative w-full h-full transition-opacity duration-500 overflow-hidden rounded-[50px] ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 right-0 z-10">
                <div className="relative flex items-end">
                  <BittenCornerEffect />
                  <div className="bg-white pt-6 pl-10 pr-10 rounded-tl-[40px] min-w-[220px] relative z-20">
                    <span className="text-5xl text-blue-600 leading-none block mb-1">
                      {service.id}
                    </span>
                    <p className="text-2xl text-black uppercase tracking-widest">
                      {service.shortTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsed Vertical Indicator View */}
            <div
              className={`absolute inset-0 bg-white flex flex-col items-center justify-start py-10 z-20 transition-opacity duration-300 pointer-events-none ${
                isActive ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-400 mb-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 -rotate-45"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-12">
                <div className="text-5xl font-black text-white stroke-neutral-200 stroke-1 [text-shadow:-1px_-1px_0_#e5e5e5,1px_-1px_0_#e5e5e5,-1px_1px_0_#e5e5e5,1px_1px_0_#e5e5e5]">
                  {service.id}
                </div>
                <div className="[writing-mode:vertical-lr] rotate-180 font-black text-[13px] uppercase tracking-[0.2em] text-[#c7c7c7] whitespace-nowrap">
                  {service.shortTitle}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Main FeatureService section entry point.
 * Houses the kinetic grid system for services.
 */
export function FeatureService() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-12 md:gap-20 px-6 md:px-0">
        <ServiceHeader />

        <div className="flex flex-col lg:flex-row w-full gap-8 items-stretch pt-0">
          {/* Active Detail Info Block */}
          <div className="hidden lg:flex flex-col justify-end gap-6 w-[380px] shrink-0 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="w-14 h-14 text-black shrink-0">
                  {services[activeIndex].icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl text-black tracking-tight leading-tight">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-xl font-normal">
                    {services[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <MobileServiceList />
          <DesktopAccordion
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}
