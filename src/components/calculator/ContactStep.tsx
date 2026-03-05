"use client";

/*
 Step 4: Contact details with required validation.
 */

import { cn } from "@/lib/utils";
import { CalcFormData, FormErrors } from "./calculatorTypes";

const contactFields = [
  {
    name: "name",
    label: "Vor- und Nachname",
    placeholder: "Max Mustermann",
    type: "text",
    half: true,
    required: true,
  },
  {
    name: "phone",
    label: "Telefon",
    placeholder: "+49 351 ...",
    type: "tel",
    half: true,
    required: true,
  },
  {
    name: "email",
    label: "E-Mail",
    placeholder: "max@beispiel.de",
    type: "email",
    half: false,
    required: true,
  },
  {
    name: "date",
    label: "Wunschtermin",
    placeholder: "",
    type: "date",
    half: true,
    required: true,
  },
  {
    name: "time",
    label: "Bevorzugte Uhrzeit",
    placeholder: "Morgens / Nachmittags",
    type: "text",
    half: true,
    required: false,
  },
  {
    name: "message",
    label: "Nachricht (optional)",
    placeholder: "Besondere Wünsche oder Anmerkungen…",
    type: "textarea",
    half: false,
    required: false,
  },
] as const;

export { contactFields };

export function ContactStep({
  formData,
  errors,
  onChange,
}: {
  formData: CalcFormData;
  errors: FormErrors;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {contactFields.map((f) => {
        const fieldKey = f.name as keyof CalcFormData;
        const error = errors[fieldKey];
        const value = formData[fieldKey] || "";

        const inputClasses = cn(
          "w-full px-5 py-4 rounded-2xl bg-neutral-50 border transition-all outline-none text-neutral-900 placeholder:text-neutral-400",
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-neutral-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10",
        );

        if (f.type === "textarea") {
          return (
            <div key={f.name} className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-neutral-600">
                {f.label}
              </label>
              <textarea
                placeholder={f.placeholder}
                value={value}
                onChange={(e) => onChange(f.name, e.target.value)}
                rows={4}
                className={cn(inputClasses, "resize-none")}
              />
            </div>
          );
        }

        return (
          <div
            key={f.name}
            className={cn("space-y-2", !f.half && "md:col-span-2")}
          >
            <label className="text-sm font-semibold text-neutral-600">
              {f.label}
              {f.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              value={value}
              onChange={(e) => onChange(f.name, e.target.value)}
              className={inputClasses}
            />
            {error && (
              <p className="text-red-500 text-xs font-medium">{error}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
