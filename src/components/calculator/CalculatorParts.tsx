"use client";

/*
 Success screen shown after the form is submitted.
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="text-center py-16 md:py-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-100"
      >
        <CheckCircle2 className="w-12 h-12" />
      </motion.div>
      <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-neutral-950">
        Anfrage gesendet!
      </h3>
      <p className="text-neutral-500 mb-10 max-w-md mx-auto text-lg leading-relaxed">
        Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 2 Stunden mit
        Ihrem persönlichen Angebot.
      </p>
      <button
        onClick={onReset}
        className="text-blue-600 font-bold hover:underline cursor-pointer text-base"
      >
        Neue Berechnung starten
      </button>
    </motion.div>
  );
}
