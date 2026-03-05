"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

// Separate props for bridge between button and anchor
type ButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> &
  Omit<HTMLMotionProps<"a">, keyof ButtonBaseProps>;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant = "primary", href, children, ...props }, ref) => {
  const content = (
    <>
      <div
        className={cn(
          "absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full z-0",
          variant === "primary" || variant === "outline" || variant === "ghost"
            ? "bg-blue-600"
            : variant === "secondary"
              ? "bg-white"
              : "bg-neutral-950",
        )}
      />
      <span
        className={cn(
          "relative z-10 transition-colors duration-500",
          variant === "primary" || variant === "outline" || variant === "ghost"
            ? "group-hover:text-white"
            : variant === "secondary"
              ? "group-hover:text-blue-600"
              : "",
        )}
      >
        {children}
      </span>
      <div
        className={cn(
          "relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 shrink-0",
          variant === "primary" || variant === "outline" || variant === "ghost"
            ? "bg-neutral-950 text-white group-hover:bg-white group-hover:text-blue-600"
            : variant === "secondary"
              ? "bg-white text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              : "bg-white text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
        )}
      >
        <svg
          className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </>
  );

  const baseStyles =
    "group relative inline-flex items-center gap-4 pl-7 pr-1.5 py-1.5 rounded-full font-bold text-base transition-all duration-300 active:scale-95 overflow-hidden cursor-pointer";

  const variants = {
    primary:
      "bg-white text-neutral-900 shadow-xl hover:shadow-2xl hover:shadow-white/20 border border-neutral-100",
    secondary: "bg-blue-600 text-white shadow-lg shadow-blue-500/30",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/10",
    ghost: "bg-transparent text-white hover:bg-white/5",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
        {...(props as HTMLMotionProps<"a">)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...(props as HTMLMotionProps<"button">)}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };
