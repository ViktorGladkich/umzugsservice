"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="bg-white pt-4 pl-6 pr-8 pb-4 md:pt-4 md:pl-8 md:pr-12 md:pb-4 rounded-tl-[32px] relative z-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm shrink-0"
            >
              <Image
                src={`https://i.pravatar.cc/100?u=hero-${i}`}
                alt="Kunde"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="hidden md:block h-8 w-px bg-neutral-200" />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <div className="relative w-4 h-4">
                <Star className="w-4 h-4 text-neutral-200 absolute inset-0" />
                <div className="overflow-hidden w-[50%] h-full absolute inset-0">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </div>
            <span className="text-lg tracking-tight text-neutral-900 font-bold leading-none">
              4.5 / 5
            </span>
          </div>
          <div className="text-[10px] text-neutral-500 uppercase font-black tracking-widest">
            Kundenzufriedenheit
          </div>
        </div>
      </div>
    </div>
  );
}
