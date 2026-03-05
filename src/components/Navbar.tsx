"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./navbar/MobileMenu";

/**
 * Responsive Navigation Bar.
 * Slides in from the top on scroll down and features a high-impact mobile menu.
 */
export function Navbar() {
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Resize listener to track mobile versus desktop viewport
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update navbar visibility based on scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
      // Close mobile menu if we scroll back to the very top
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

  // The navbar stays visible on mobile or when scrolling down
  const showNav = isMobile || isNavVisible || isMobileMenuOpen;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: showNav ? 0 : -100,
        opacity: showNav ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-[15px] right-[15px] md:left-[70px] md:right-[70px] z-50 py-4 md:py-4 ${
        showNav ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/60 backdrop-blur-2xl border border-white/40 px-6 py-2 md:px-8 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-50">
        {/* Branding Logo */}
        <div className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2 text-neutral-900">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-lg" />
          JANYUSUFI.
        </div>

        {/* Global Desktop Sitemap Links */}
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

        {/* Animated Hamburger Icon (Mobile) */}
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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </motion.nav>
  );
}
