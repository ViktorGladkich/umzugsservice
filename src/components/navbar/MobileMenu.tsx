"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: { label: string; link: string }[];
}

export function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: isOpen ? 0 : 0.2,
        }}
        className="fixed inset-0 h-dvh w-screen bg-neutral-100 z-30 pointer-events-none"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: isOpen ? 0.07 : 0.1,
        }}
        className="fixed inset-0 h-dvh w-screen bg-blue-100 z-30 pointer-events-none"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
          delay: isOpen ? 0.14 : 0,
        }}
        className={`fixed inset-0 h-dvh w-screen bg-white z-40 pt-32 px-6 pb-12 flex flex-col justify-between overflow-y-auto ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 mt-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.a
                href={item.link}
                onClick={onClose}
                initial={{ y: "140%", rotate: 10 }}
                animate={{
                  y: isOpen ? "0%" : "140%",
                  rotate: isOpen ? 0 : 10,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isOpen ? 0.3 + idx * 0.1 : 0,
                }}
                className="group relative inline-block text-[2.8rem] sm:text-5xl font-black uppercase tracking-tighter text-neutral-900 origin-bottom-left hover:text-blue-600 transition-colors pr-10"
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
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: isOpen ? 0.6 : 0,
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
            onClick={onClose}
            variant="secondary"
            className="w-full py-5 text-xl h-20 pl-10 pr-2"
          >
            Anfrage senden
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
}
