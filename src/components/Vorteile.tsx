"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FeatureRating,
  FeatureCustomers,
  FeatureAssembly,
  FeaturePackaging,
  FeatureBranding,
  FeaturePunctuality,
  FeatureRegions,
  FeatureConsultation,
} from "./vorteile/BentoFeatures";

/**
 * Animated section header for the Vorteile section.
 */
function SectionHeader() {
  return (
    <div className="mb-16 md:mb-20 text-center flex flex-col items-center gap-4">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-blue-600 font-bold tracking-widest uppercase text-sm md:text-base block"
      >
        Ihre Vorteile
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl tracking-tighter"
      >
        Alles aus einer Hand.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto"
      >
        Vom ersten Karton bis zum letzten Möbelstück – wir bieten Ihnen einen
        lückenlosen Service für Ihren stressfreien Umzug.
      </motion.p>
    </div>
  );
}

/**
 * Main Vorteile component displaying a Bento grid of features.
 * Highlights the key benefits and unique selling points of the service.
 */
export function Vorteile() {
  return (
    <section
      id="services"
      className="relative py-32 px-0 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader />

        <div className="w-full px-6 md:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 auto-rows-fr">
            <FeatureRating />
            <FeatureCustomers />
            <FeatureAssembly />
            <FeaturePackaging />
            <FeatureBranding />
            <FeaturePunctuality />
            <FeatureRegions />
            <FeatureConsultation />
          </div>
        </div>
      </div>
    </section>
  );
}
