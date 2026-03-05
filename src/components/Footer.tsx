"use client";

import { ArrowRight } from "lucide-react";

/**
 * Dark cinematic footer inspired by INVERSA / Awwwards style.
 * Features a 3-column grid with border dividers and massive neon typography.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-600 text-white relative overflow-hidden">
      {/* Top Grid: 3 Columns */}
      <div className="mx-6 md:mx-10 border border-white/20 rounded-t-[4px]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Column 1: Contact */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2 mt-auto">
              <a
                href="mailto:info@janyusufi.de"
                className="text-sm md:text-[15px] text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                info@janyusufi.de
              </a>
              <a
                href="tel:+493511234567"
                className="text-sm md:text-[15px] text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                +49 351 1234567
              </a>
            </div>
            <div className="flex flex-col gap-1 mt-12">
              <span className="text-sm text-white/80">
                Umzugsservice Dresden
              </span>
              <span className="text-sm text-white/80">01067 Dresden</span>
              <a
                href="#about"
                className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors mt-2 cursor-pointer"
              >
                Mehr erfahren
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Connect */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col min-h-[280px]">
            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
              Verbinden
            </h4>
            <div className="flex flex-col gap-2 mt-auto">
              <a
                href="#"
                className="text-sm md:text-[15px] text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm md:text-[15px] text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Column 3: CTA */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col min-h-[280px]">
            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
              Angebot
            </h4>
            <div className="mt-auto">
              <a
                href="#calculator"
                className="group flex items-center justify-between border-b border-white/30 pb-3 hover:border-white transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-[15px] text-white/80 group-hover:text-white transition-colors">
                  Kostenvoranschlag
                </span>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Neon Typography */}
      <div className="w-full mt-8 md:mt-12 px-6 md:px-10 pointer-events-none select-none overflow-hidden">
        <svg
          viewBox="0 0 1000 180"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="central"
            textAnchor="middle"
            className="font-black"
            style={{
              fontSize: "205px",
              letterSpacing: "-0.03em",
              fill: "white",
            }}
          >
            JANYUSUFI
          </text>
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-10 py-6 text-[11px] md:text-xs text-white/50 tracking-wide">
        <span>©{currentYear} JANYUSUFI</span>
        <a
          href="#"
          className="hover:text-white transition-colors cursor-pointer"
        >
          Datenschutz
        </a>
        <span>Dresden, DE</span>
      </div>
    </footer>
  );
}
