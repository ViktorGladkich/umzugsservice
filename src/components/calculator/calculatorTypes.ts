/*
 Shared types for the calculator form state.
 */

export interface CalcFormData {
  from: string;
  to: string;
  size: string;
  services: string[];
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof CalcFormData, string>>;
