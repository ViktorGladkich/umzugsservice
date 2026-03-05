"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
      if (latest < 50 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  });

  const menuItems = [
    { label: "Leistungen", link: "#services" },
    { label: "Rechner", link: "#calculator" },
    { label: "Über uns", link: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isNavVisible || isMobileMenuOpen ? 0 : -100,
        opacity: isNavVisible || isMobileMenuOpen ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-[15px] right-[15px] md:left-[70px] md:right-[70px] z-50 py-6 md:py-8 ${
        isNavVisible || isMobileMenuOpen
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/60 backdrop-blur-2xl border border-white/40 px-6 py-4 md:px-8 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-50">
        <div className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2 text-neutral-900">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-lg" />
          Umzugsservice.
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-neutral-500">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button className="py-2 text-[12px] h-11 pr-1.5 pl-6">
              Anfrage senden
            </Button>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="flex md:hidden items-center text-neutral-900">
          <label className="w-12 h-12 relative flex items-center justify-center -mr-2 cursor-pointer z-50 [-webkit-tap-highlight-color:transparent]">
            <input
              type="checkbox"
              className="hidden"
              checked={isMobileMenuOpen}
              onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
            />
            <svg
              viewBox="0 0 32 32"
              className={`w-8 h-8 pointer-events-none transition-transform duration-600 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45" : ""
              }`}
            >
              <path
                className={`fill-none stroke-current stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round] transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-in-out ${
                  isMobileMenuOpen
                    ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42]"
                    : "[stroke-dasharray:12_63]"
                }`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path
                className="fill-none stroke-current stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]"
                d="M7 16 27 16"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Staggered Layers */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: isMobileMenuOpen ? 0 : 0.2,
        }}
        className="fixed inset-0 h-dvh w-screen bg-neutral-100 z-30 pointer-events-none"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: isMobileMenuOpen ? 0.07 : 0.1,
        }}
        className="fixed inset-0 h-dvh w-screen bg-blue-100 z-30 pointer-events-none"
      />

      {/* Main Mobile Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
          delay: isMobileMenuOpen ? 0.14 : 0,
        }}
        className={`fixed inset-0 h-dvh w-screen bg-white z-40 pt-32 px-6 pb-12 flex flex-col justify-between overflow-y-auto ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 mt-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.a
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ y: "140%", rotate: 10 }}
                animate={{
                  y: isMobileMenuOpen ? "0%" : "140%",
                  rotate: isMobileMenuOpen ? 0 : 10,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isMobileMenuOpen ? 0.3 + idx * 0.1 : 0,
                }}
                className="group relative inline-block text-[3.8rem] sm:text-7xl font-black uppercase tracking-tighter text-neutral-900 origin-bottom-left hover:text-blue-600 transition-colors pr-10"
              >
                {item.label}
                <span className="absolute top-2 -right-2 text-lg sm:text-2xl font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </span>
              </motion.a>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : 20,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: isMobileMenuOpen ? 0.6 : 0,
          }}
          className="mt-12 flex flex-col gap-8"
        >
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
              Kontakt
            </h3>
            <div className="flex gap-6 text-lg font-bold text-neutral-900">
              <a
                href="mailto:info@umzug.de"
                className="hover:text-blue-600 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <Button
            onClick={() => setIsMobileMenuOpen(false)}
            variant="secondary"
            className="w-full py-5 text-xl h-20 pl-10 pr-2"
          >
            Anfrage senden
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
