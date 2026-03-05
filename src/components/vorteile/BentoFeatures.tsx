"use client";

import React from "react";
import Image from "next/image";
import { Package, Hammer, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BentoCard } from "./BentoCard";

export function FeatureRating() {
  return (
    <BentoCard
      index={0}
      direction="left"
      className="bg-blue-50 border-none shadow-none"
    >
      <div className="font-bold text-blue-600">Top bewertet</div>
      <div className="mt-auto flex justify-end items-end gap-1 pt-8">
        <div className="text-5xl font-black text-blue-900 tracking-tighter">
          4.5
        </div>
        <sup className="text-3xl text-blue-600 pb-2">★</sup>
      </div>
    </BentoCard>
  );
}

export function FeatureCustomers() {
  return (
    <BentoCard
      index={1}
      direction="right"
      className="bg-neutral-50 border border-neutral-200/80 shadow-lg shadow-neutral-200/30 sm:col-span-2"
    >
      <strong className="text-3xl lg:text-4xl font-black text-neutral-900 leading-tight">
        Über <span className="text-blue-600">200+</span> erfolgreiche Umzüge in
        Dresden
      </strong>
      <div className="mt-auto pt-8 flex items-center gap-4">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full border-[3px] border-white bg-neutral-100 overflow-hidden shadow-sm shrink-0"
            >
              <Image
                src={`https://i.pravatar.cc/88?u=customer${i}`}
                alt="Kunde"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-11 h-11 rounded-full bg-neutral-900 border-[3px] border-white flex items-center justify-center text-white shrink-0 text-xs">
            +99
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

export function FeatureAssembly() {
  return (
    <BentoCard
      index={2}
      direction="left"
      className="bg-cyan-50 border-none shadow-none"
    >
      <Hammer className="w-10 h-10 text-cyan-600 mb-4" />
      <strong className="text-xl text-cyan-900">De-/Montage</strong>
      <div className="mt-auto pt-4">
        <div className="text-sm text-cyan-700 leading-relaxed">
          Fachgerechter Auf- & Abbau Ihrer Möbel und Küchen.
        </div>
      </div>
    </BentoCard>
  );
}

export function FeaturePackaging() {
  return (
    <BentoCard
      index={3}
      direction="right"
      className="bg-neutral-950 text-white sm:col-span-2 md:flex-row items-center gap-8 justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
    >
      <div className="w-full md:w-1/2">
        <div className="text-3xl font-black text-white mb-4">
          Profi-Verpackung
        </div>
        <p className="text-neutral-400 text-sm xl:text-base leading-relaxed">
          Wir verpacken everything vom Klavier bis zum Porzellan absolut
          bruchsicher.
        </p>
      </div>
      <div className="relative w-full md:w-40 h-40 mt-8 md:mt-0 shrink-0 bg-neutral-900 rounded-3xl flex items-center justify-center border border-neutral-800">
        <Package className="w-16 h-16 text-blue-500 relative z-10 animate-bounce [animation-duration:3s]" />
      </div>
    </BentoCard>
  );
}

export function FeatureBranding() {
  return (
    <BentoCard
      index={4}
      direction="left"
      className="bg-blue-600 sm:col-span-2 border-none shadow-none group p-0! justify-center items-center"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full h-full p-8 py-16">
        <div className="text-6xl sm:text-7xl md:text-[6rem] leading-none font-black uppercase text-blue-800/80 transition-all duration-500 group-hover:text-white/20">
          STRESS
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-black uppercase text-white transition-all duration-500 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100">
          -FREI
        </div>
      </div>
    </BentoCard>
  );
}

export function FeaturePunctuality() {
  return (
    <BentoCard
      index={5}
      direction="right"
      className="bg-neutral-50 border border-neutral-200/80 items-center justify-center text-center shadow-lg shadow-neutral-200/30"
    >
      <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 text-green-600" />
      </div>
      <div className="text-neutral-900 text-xl leading-tight">
        Pünktlichkeits- <br /> garantie
      </div>
    </BentoCard>
  );
}

export function FeatureRegions() {
  return (
    <BentoCard
      index={6}
      direction="left"
      className="bg-neutral-50 border border-neutral-200/80 shadow-lg shadow-neutral-200/30 justify-center gap-3"
    >
      <div className="w-full -rotate-2 rounded-2xl border border-blue-100 bg-white py-3.5 text-center text-blue-600 shadow-sm transition-transform hover:rotate-0 cursor-pointer">
        Dresden
      </div>
      <div className="w-full rotate-2 rounded-2xl border border-neutral-200 bg-white py-3.5 text-center text-neutral-600 shadow-sm transition-transform hover:rotate-0 cursor-pointer">
        Sachsen
      </div>
      <div className="w-full -rotate-1 rounded-2xl border border-neutral-800 bg-neutral-900 py-3.5 text-center text-white shadow-md transition-transform hover:rotate-0 cursor-pointer">
        Deutschland
      </div>
    </BentoCard>
  );
}

export function FeatureConsultation() {
  return (
    <BentoCard
      index={7}
      direction="right"
      className="bg-neutral-50 border border-neutral-200/80 sm:col-span-2 group shadow-lg shadow-neutral-200/30 justify-center"
    >
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-linear-to-l from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10 max-w-sm">
        <div className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
          Besichtigung
        </div>
        <p className="text-neutral-500 leading-relaxed">
          Wir planen den gesamten Ablauf unverbindlich vor Ort.
        </p>
        <div className="mt-8">
          <Button variant="secondary">Termin vereinbaren</Button>
        </div>
      </div>
    </BentoCard>
  );
}
