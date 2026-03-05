"use client";

/*
 Step indicator with animated circles and connecting lines.
 */

import { motion } from "framer-motion";
import { MapPin, Home, PackageCheck, User, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const stepIcons = [MapPin, Home, PackageCheck, User];

export function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const Icon = stepIcons[i];
        const isActive = i === currentStep;
        const isDone = i < currentStep;

        return (
          <div key={i} className="flex items-center gap-2 md:gap-3">
            <motion.div
              animate={{
                scale: isActive ? 1 : 0.85,
                backgroundColor: isDone || isActive ? "#2563eb" : "#f5f5f5",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300",
                isDone || isActive ? "text-white" : "text-neutral-400",
              )}
            >
              {isDone ? (
                <Check className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
              ) : (
                <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
              )}
            </motion.div>
            {i < totalSteps - 1 && (
              <div className="w-8 md:w-16 h-[2px] bg-neutral-100 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: i < currentStep ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
