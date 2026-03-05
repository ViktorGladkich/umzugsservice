"use client";

import React from "react";
import { Package, Boxes, Building2 } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export const services: Service[] = [
  {
    id: "01",
    title: "Privatumzüge",
    shortTitle: "Privat",
    description:
      "Sorgloser Umzug für Sie und Ihre Familie – stressfrei in Ihr neues Zuhause. Wir planen jedes Detail, von der ersten Besichtigung bis zum sicheren Transport Ihrer wertvollsten Besitztümer in die neuen vier Wände.",
    image: "/images/private_moving.png",
    icon: <Package className="w-full h-full" />,
  },
  {
    id: "02",
    title: "Büroumzüge",
    shortTitle: "Business",
    description:
      "Effiziente Verlagerung Ihrer Büro-Infrastruktur ohne lange Ausfallzeiten. Wir sorgen dafür, dass Ihr Betrieb schnellstmöglich wieder arbeitsfähig ist, inklusive IT-Umzug und fachgerechter Aktenvernichtung falls nötig.",
    image: "/images/office_moving.png",
    icon: <Building2 className="w-full h-full" />,
  },
  {
    id: "03",
    title: "Einpackservice",
    shortTitle: "Einpacken",
    description:
      "Sicherheit für Ihr Hab und Gut. Wir verpacken alles absolut bruchsicher mit modernsten Materialien, damit auch zerbrechliche Gegenstände unbeschadet ankommen – professionell, schnell und absolut verlässlich.",
    image: "/images/packing_service.png",
    icon: <Boxes className="w-full h-full" />,
  },
];
