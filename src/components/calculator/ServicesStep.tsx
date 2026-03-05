"use client";

/*
 Step 3: Additional services with checkbox-style cards.
 */

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  {
    id: "packing",
    label: "Einpackservice",
    sub: "Wir verpacken alles sicher für Sie",
  },
  {
    id: "assembly",
    label: "Möbelmontage",
    sub: "Ab- und Aufbau Ihrer Möbel",
  },
  {
    id: "cleaning",
    label: "Endreinigung",
    sub: "Besenrein oder professionell",
  },
  {
    id: "storage",
    label: "Zwischenlagerung",
    sub: "Sichere Einlagerung bei zeitlichem Versatz",
  },
];

export function ServicesStep({
  selectedServices,
  onToggle,
}: {
  selectedServices: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {serviceOptions.map((s) => {
        const isChecked = selectedServices.includes(s.id);
        return (
          <button
            key={s.id}
            onClick={() => onToggle(s.id)}
            className={cn(
              "flex items-center justify-between w-full p-5 md:p-6 rounded-2xl border-2 transition-all cursor-pointer text-left group",
              isChecked
                ? "border-blue-600 bg-blue-50/50"
                : "border-neutral-100 hover:border-neutral-200",
            )}
          >
            <div>
              <p
                className={cn(
                  " text-base md:text-lg transition-colors",
                  isChecked ? "text-blue-600" : "text-neutral-900",
                )}
              >
                {s.label}
              </p>
              <p className="text-sm text-neutral-400">{s.sub}</p>
            </div>
            <div
              className={cn(
                "w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-colors",
                isChecked
                  ? "bg-blue-600 border-blue-600"
                  : "border-neutral-300",
              )}
            >
              {isChecked && (
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
