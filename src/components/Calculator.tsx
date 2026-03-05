"use client";

/*
 Multi-step moving calculator combined with a contact form.
 Collects addresses, size, services, and contact info in 4 steps.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { CalcFormData, FormErrors } from "./calculator/calculatorTypes";
import { StepIndicator } from "./calculator/StepIndicator";
import { AddressStep } from "./calculator/AddressStep";
import { SizeStep } from "./calculator/SizeStep";
import { ServicesStep } from "./calculator/ServicesStep";
import { ContactStep } from "./calculator/ContactStep";
import { SuccessScreen } from "./calculator/CalculatorParts";

const TOTAL_STEPS = 4;

const stepMeta = [
  { title: "Start & Ziel", subtitle: "Wohin geht die Reise?" },
  { title: "Umzugsgröße", subtitle: "Wie viel muss transportiert werden?" },
  { title: "Zusatzleistungen", subtitle: "Brauchen Sie Extra-Service?" },
  { title: "Kontaktdaten", subtitle: "Wie können wir Sie erreichen?" },
];

const initialFormData: CalcFormData = {
  from: "",
  to: "",
  size: "",
  services: [],
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  message: "",
};

/* ─── Validation per step ─── */
function validateStep(step: number, data: CalcFormData): FormErrors {
  const errors: FormErrors = {};

  if (step === 0) {
    if (!data.from.trim()) errors.from = "Bitte Abholort angeben";
    if (!data.to.trim()) errors.to = "Bitte Zielort angeben";
  }

  if (step === 1) {
    if (!data.size) errors.size = "Bitte wählen Sie eine Größe aus";
  }

  // Step 2 (services) has no required fields

  if (step === 3) {
    if (!data.name.trim()) errors.name = "Bitte Name angeben";
    if (!data.phone.trim()) errors.phone = "Bitte Telefonnummer angeben";
    if (!data.email.trim()) {
      errors.email = "Bitte E-Mail angeben";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Ungültige E-Mail-Adresse";
    }
    if (!data.date) errors.date = "Bitte Wunschtermin angeben";
  }

  return errors;
}

export default function MovingCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [formData, setFormData] = useState<CalcFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on edit
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  };

  const toggleService = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});

    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setErrors({});
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsFinished(false);
    setCurrentStep(0);
    setFormData(initialFormData);
    setErrors({});
  };

  const meta = stepMeta[currentStep];

  return (
    <section id="calculator" className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm block mb-6"
          >
            Umzugs-Rechner
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl  tracking-tighter leading-[0.9] text-neutral-950 mb-6"
          >
            Angebot in
            <span className="text-blue-600"> 60 Sekunden.</span>
          </motion.h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed">
            Beantworten Sie 4 kurze Fragen und erhalten Sie Ihr persönliches,
            unverbindliches Angebot.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative bg-white border border-neutral-200 p-6 md:p-12 lg:p-14 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Progress bar */}
          {!isFinished && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-100">
              <motion.div
                className="h-full bg-blue-600"
                animate={{
                  width: `${((currentStep + 1) / TOTAL_STEPS) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <StepIndicator
                  currentStep={currentStep}
                  totalSteps={TOTAL_STEPS}
                />

                {/* Step title */}
                <div className="mb-8 md:mb-10">
                  <span className="text-blue-600 text-xs md:text-sm  tracking-widest uppercase block mb-2">
                    Schritt {currentStep + 1} von {TOTAL_STEPS}
                  </span>
                  <h3 className="text-2xl md:text-4xl tracking-tight text-neutral-950">
                    {meta.title}
                  </h3>
                  <p className="text-neutral-400 text-md mt-1">
                    {meta.subtitle}
                  </p>
                </div>

                {/* Step content */}
                {currentStep === 0 && (
                  <AddressStep
                    formData={formData}
                    errors={errors}
                    onChange={updateField}
                  />
                )}
                {currentStep === 1 && (
                  <SizeStep
                    selectedSize={formData.size}
                    errors={errors}
                    onSelect={(v) => updateField("size", v)}
                  />
                )}
                {currentStep === 2 && (
                  <ServicesStep
                    selectedServices={formData.services}
                    onToggle={toggleService}
                  />
                )}
                {currentStep === 3 && (
                  <ContactStep
                    formData={formData}
                    errors={errors}
                    onChange={updateField}
                  />
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-10 mt-10 border-t border-neutral-100">
                  <button
                    onClick={handleBack}
                    className={cn(
                      "flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer",
                      currentStep === 0 && "invisible",
                    )}
                  >
                    <ChevronLeft className="w-4 h-4" /> Zurück
                  </button>

                  <button
                    onClick={handleNext}
                    className="group relative inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all active:scale-95 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full z-0 bg-blue-700" />
                    <span className="relative z-10">
                      {currentStep === TOTAL_STEPS - 1
                        ? "Anfrage senden"
                        : "Weiter"}
                    </span>
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white text-blue-600 shrink-0">
                      {currentStep === TOTAL_STEPS - 1 ? (
                        <ArrowRight className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                </div>
              </motion.div>
            ) : (
              <SuccessScreen onReset={handleReset} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
