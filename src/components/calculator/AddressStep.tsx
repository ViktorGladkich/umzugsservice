"use client";

/*
 Step 1: Origin and destination address fields.
 */

import { CalcFormData, FormErrors } from "./calculatorTypes";

export function AddressStep({
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
      <div className="space-y-2">
        <label className="text-md  text-black">
          Von (PLZ / Stadt) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.from}
          onChange={(e) => onChange("from", e.target.value)}
          placeholder="z.B. 01067 Dresden"
          className={`w-full px-5 py-4 rounded-2xl bg-neutral-50 border ${errors.from ? "border-red-400 ring-2 ring-red-100" : "border-neutral-200"} focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all outline-none text-neutral-900 placeholder:text-neutral-400`}
        />
        {errors.from && (
          <p className="text-red-500 text-xs font-medium">{errors.from}</p>
        )}
      </div>
      <div className="space-y-2">
        <label className="text-md  text-black">
          Nach (PLZ / Stadt) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.to}
          onChange={(e) => onChange("to", e.target.value)}
          placeholder="z.B. 10115 Berlin"
          className={`w-full px-5 py-4 rounded-2xl bg-neutral-50 border ${errors.to ? "border-red-400 ring-2 ring-red-100" : "border-neutral-200"} focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all outline-none text-neutral-900 placeholder:text-neutral-400`}
        />
        {errors.to && (
          <p className="text-red-500 text-xs font-medium">{errors.to}</p>
        )}
      </div>
    </div>
  );
}
