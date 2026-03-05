"use client";

import React from "react";

interface BittenCornerProps {
  className?: string;
  size?: number;
}

export function BittenCorner({ className = "", size = 32 }: BittenCornerProps) {
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d={`M${size} ${size}V0C${size} ${size * 0.55} ${size * 0.55} ${size} 0 ${size}H${size}Z`}
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
