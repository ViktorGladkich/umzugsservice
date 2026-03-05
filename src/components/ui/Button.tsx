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
      <span className="relative z-10 transition-colors duration-300">
        {children}
      </span>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 text-white transition-all duration-300 group-hover:bg-blue-600 shrink-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5 fill-current transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
        </svg>
      </div>
    </>
  );

  const baseStyles =
    "group relative inline-flex items-center gap-4 pl-7 pr-1.5 py-1.5 rounded-full font-bold text-base transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-white text-neutral-900 shadow-xl hover:shadow-2xl hover:shadow-white/20",
    secondary:
      "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700",
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
