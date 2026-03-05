"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  title: string;
  className?: string;
}

export function SectionBadge({ title, className }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "inline-block px-5 py-2 rounded-[32px] border border-black/10",
        // Glassmorphism effect
        "bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
        className,
      )}
    >
      <p className="text-sm text-blue-600 leading-none font-medium">{title}</p>
    </motion.div>
  );
}
