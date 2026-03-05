"use client";

import { Button } from "@/components/ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 text-white py-16 md:py-24 px-[15px] md:px-[70px] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-black tracking-tighter mb-8 italic">
            Umzugsservice.
          </div>
          <p className="text-neutral-500 max-w-sm mb-8 text-lg leading-relaxed">
            Professionelle Umzugsdienstleistungen für Dresden, Sachsen und ganz
            Europa. Qualität, die man sieht и профессионализм в каждой детали.
          </p>
          <div className="mt-4">
            <Button
              href="#calculator"
              variant="primary"
              className="bg-white text-neutral-900"
            >
              Kostenvoranschlag erhalten
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-[11px] tracking-[0.2em] text-blue-500">
            Kontakt
          </h4>
          <address className="flex flex-col gap-6 text-neutral-400 not-italic">
            <p className="leading-relaxed">
              Hauptstraße 123, <br />
              01067 Dresden
            </p>
            <a
              href="tel:+493511234567"
              className="hover:text-white transition-colors"
            >
              +49 (0) 351 1234567
            </a>
            <a
              href="mailto:info@umzug-dresden.de"
              className="hover:text-white transition-colors"
            >
              info@umzug-dresden.de
            </a>
          </address>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-[11px] tracking-[0.2em] text-blue-500">
            Rechtliches
          </h4>
          <nav>
            <ul className="flex flex-col gap-6 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-neutral-900 text-center text-neutral-600 text-[13px] tracking-wide">
        © {currentYear} Umzugsservice Dresden. Все права защищены.
      </div>
    </footer>
  );
}
