"use client";

/*
 Step 2: Moving size selection with radio-style cards.
 */

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormErrors } from "./calculatorTypes";

const sizeOptions = [
  { value: "1-2", label: "1 – 2 Zimmer", sub: "Ca. 20–40 m²" },
  { value: "3-4", label: "3 – 4 Zimmer", sub: "Ca. 50–80 m²" },
  { value: "5+", label: "5+ Zimmer", sub: "Haus oder große Wohnung" },
  { value: "office", label: "Büro / Gewerbe", sub: "Gewerblicher Umzug" },
];

export function SizeStep({
  selectedSize,
  errors,
  onSelect,
}: {
  selectedSize: string | null;
  errors: FormErrors;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sizeOptions.map((opt) => {
          const isSelected = selectedSize === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={cn(
                "flex items-start gap-4 p-5 md:p-6 rounded-2xl border-2 transition-all text-left cursor-pointer group",
                isSelected
                  ? "border-blue-600 bg-blue-50/50"
                  : "border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50/50",
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors",
                  isSelected
                    ? "border-blue-600 bg-blue-600"
                    : "border-neutral-300",
                )}
              >
                {isSelected && (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                )}
              </div>
              <div>
                <span
                  className={cn(
                    "text-base md:text-lg  block transition-colors",
                    isSelected
                      ? "text-blue-600"
                      : "text-neutral-900 group-hover:text-neutral-950",
                  )}
                >
                  {opt.label}
                </span>
                <span className="text-sm text-neutral-400">{opt.sub}</span>
              </div>
            </button>
          );
        })}
      </div>
      {errors.size && (
        <p className="text-red-500 text-xs font-medium mt-3">{errors.size}</p>
      )}
    </div>
  );
}
