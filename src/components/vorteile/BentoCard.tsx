"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  direction?: "left" | "right" | "none";
}

export function BentoCard({
  children,
  className,
  index = 0,
  direction = "none",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative h-full w-full overflow-hidden rounded-4xl p-6 lg:p-8 flex flex-col ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}
