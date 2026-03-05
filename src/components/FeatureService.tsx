"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";

const services = [
  {
    id: "01",
    title: "Privatumzüge",
    shortTitle: "Privatumzüge",
    description:
      "Komplett-Service für Ihren Wohnungswechsel. Von der Planung bis zur letzten Box – wir kümmern uns um alles.",
    image: "/images/private_moving_germany_1772677492864.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Büroumzüge",
    shortTitle: "Büroumzüge",
    description:
      "Minimale Ausfallzeiten für Ihr Business. Professionelle IT-Verlagerung und Aktenumzüge nach Maß.",
    image: "/images/office_moving_germany_1772677505816.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Einpackservice",
    shortTitle: "Einpackservice",
    description:
      "Sicherheit für Ihr Hab und Gut. Wir verpacken alles bruchsicher mit modernsten Materialien для максимальной защиты.",
    image: "/images/packing_service_germany_1772677518641.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
];

// Content corrected to German
const correctedServices = [
  {
    ...services[0],
    description:
      "Komplett-Service für Ihren Wohnungswechsel. Von der Planung bis zur letzten Box – wir kümmern uns um alles.",
  },
  {
    ...services[1],
    description:
      "Minimale Ausfallzeiten für Ihr Business. Professionelle IT-Verlagerung und Aktenumzüge nach Maß.",
  },
  {
    ...services[2],
    description:
      "Sicherheit für Ihr Hab und Gut. Wir verpacken alles bruchsicher mit modernsten Materialien für maximalen Schutz.",
  },
];

export function FeatureService() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-12 md:gap-20 px-6 md:px-0">
        {/* Header content */}
        <div className="flex flex-col items-center text-center gap-4 w-full max-w-[1000px] mx-auto overflow-hidden">
          <SectionBadge title="Unsere Leistungen" />

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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto">
              Unser umfassendes Serviceangebot umfasst professionelle
              Privatumzüge, effiziente Projektlogistik und erstklassige
              Verpackungslösungen.
            </p>
          </motion.div>
        </div>

        {/* Layout: Static Text Block + Dynamic Accordion Images */}
        <div className="flex flex-col lg:flex-row w-full gap-8 items-stretch pt-0">
          {/* Static Left Side Column */}
          <div className="flex flex-col justify-end gap-6 w-full lg:w-[380px] shrink-0 min-h-[400px]">
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
                  {correctedServices[activeIndex].icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl text-black tracking-tight leading-tight">
                    {correctedServices[activeIndex].title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-xl font-normal">
                    {correctedServices[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Accordion Images Side */}
          <div className="flex-1 flex flex-row items-stretch gap-0 bg-white">
            {correctedServices.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative flex overflow-hidden cursor-pointer h-[500px] ${
                    index === 2 && activeIndex !== 1
                      ? "border-l border-[#c7c7c7]"
                      : ""
                  }`}
                  animate={{
                    flex: isActive ? 4 : 0.45,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Expanded view for this item (Image only) */}
                  <div
                    className={`relative w-full h-full transition-opacity duration-500 rounded-[50px] overflow-hidden ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    {/* Bitten Corner Effect */}
                    <div className="absolute bottom-0 right-0 z-10 flex items-end">
                      <div className="relative flex items-end">
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
                        <div className="bg-white pt-5 pl-10 pr-10  rounded-tl-[40px] min-w-[220px]">
                          <span className="text-5xl text-black leading-none block">
                            {service.id}
                          </span>
                          <p className="text-2xl text-black uppercase tracking-widest ">
                            {service.shortTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab view for this item (When NOT active) */}
                  <div
                    className={`absolute inset-0 bg-white flex flex-col items-center justify-start py-10 z-20 transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-0" : "opacity-100"}`}
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
        </div>
      </div>
    </section>
  );
}
