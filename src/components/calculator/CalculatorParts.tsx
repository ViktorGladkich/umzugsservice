"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * Data structures for the multi-step calculator form.
 */
export const steps = [
  {
    id: 1,
    title: "Start & Ziel",
    fields: [
      {
        name: "from",
        label: "Von (PLZ / Stadt)",
        placeholder: "z.B. 01067 Dresden",
      },
      {
        name: "to",
        label: "Nach (PLZ / Stadt)",
        placeholder: "z.B. 10115 Berlin",
      },
    ],
  },
  {
    id: 2,
    title: "Größe des Umzugs",
    options: [
      { value: "1-2", label: "1 - 2 Zimmer", sub: "Ca. 20-40 m²" },
      { value: "3-4", label: "3 - 4 Zimmer", sub: "Ca. 50-80 m²" },
      { value: "5+", label: "5+ Zimmer", sub: "Haus oder große Wohnung" },
      { value: "office", label: "Büro", sub: "Gewerblicher Umzug" },
    ],
  },
  {
    id: 3,
    title: "Zusatzleistungen",
    services: [
      {
        id: "packing",
        label: "Einpackservice",
        sub: "Wir verpacken alles sicher",
      },
      { id: "assembly", label: "Möbelmontage", sub: "Ab- und Aufbau" },
      {
        id: "cleaning",
        label: "Endreinigung",
        sub: "Besenrein oder professionell",
      },
    ],
  },
];

/**
 * Success message screen shown after form submission.
 */
export function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-3xl font-bold mb-4">Vielen Dank!</h3>
      <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
        Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 2
        Stunden mit Ihrem persönlichen Angebot.
      </p>
      <button
        onClick={onReset}
        className="text-blue-600 font-bold hover:underline cursor-pointer"
      >
        Neue Berechnung starten
      </button>
    </motion.div>
  );
}
