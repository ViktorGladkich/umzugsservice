"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, CheckCircle2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

const steps = [
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

export default function MovingCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="calculator" className="py-32 px-0">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6"
          >
            <Calculator className="w-4 h-4" />
            Umzugs-Rechner
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Erhalten Sie ein <br />{" "}
            <span className="text-blue-600">unverbindliches Angebot.</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            In nur 60 Sekunden zum fairen Preis для Ihren Umzug в Dresden или
            deutschlandweit.
          </p>
        </div>

        <div className="relative bg-white border border-neutral-100 p-8 md:p-12 rounded-[40px] shadow-2xl shadow-neutral-200/50 overflow-hidden">
          {/* Progress Bar */}
          {!isFinished && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-50">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Schritt {currentStep + 1} von {steps.length}
                  </span>
                  <h3 className="text-2xl font-bold">
                    {steps[currentStep].title}
                  </h3>
                </div>

                {currentStep === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps[0].fields?.map((f) => (
                      <div key={f.name} className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-700">
                          {f.label}
                        </label>
                        <input
                          type="text"
                          placeholder={f.placeholder}
                          className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-blue-600/20 transition-all outline-none"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {steps[1].options?.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={handleNext}
                        className="flex flex-col items-start p-6 rounded-2xl border border-neutral-100 hover:border-blue-600 hover:bg-blue-50/50 transition-all group text-left"
                      >
                        <span className="text-lg font-bold group-hover:text-blue-600">
                          {opt.label}
                        </span>
                        <span className="text-sm text-neutral-400">
                          {opt.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    {steps[2].services?.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center justify-between p-6 rounded-2xl border border-neutral-100 hover:bg-neutral-50/50 transition-all"
                      >
                        <div>
                          <p className="font-bold">{s.label}</p>
                          <p className="text-sm text-neutral-400">{s.sub}</p>
                        </div>
                        <input
                          type="checkbox"
                          className="w-6 h-6 rounded-lg border-neutral-200 text-blue-600 focus:ring-blue-600"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-8 border-t border-neutral-50">
                  <button
                    onClick={handleBack}
                    className={`flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-neutral-900 transition-colors ${currentStep === 0 ? "invisible" : ""}`}
                  >
                    <ChevronLeft className="w-4 h-4" /> Zurück
                  </button>
                  <Button
                    onClick={handleNext}
                    variant="secondary"
                    className="h-12 pl-8 pr-2"
                  >
                    {currentStep === steps.length - 1
                      ? "Angebot anfragen"
                      : "Weiter"}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4"> Vielen Dank!</h3>
                <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
                  Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns
                  innerhalb von 2 Stunden mit Ihrem persönlichen Angebot.
                </p>
                <button
                  onClick={() => setIsFinished(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Neue Berechnung starten
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
