"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { PhoneCall, ClipboardCheck, PackageCheck, Truck } from "lucide-react";

/* ─── Process Step Data ─── */
const steps = [
  {
    id: "01",
    title: "Anfrage",
    subtitle: "Kontakt aufnehmen",
    description:
      "Ein kurzer Anruf oder eine Nachricht genügt. Wir erfassen erste Details Ihres Umzugs und besprechen die wichtigsten Parameter, um Ihnen den besten Service zu garantieren.",
    color: "#3b82f6", // blue-500
    icon: PhoneCall,
  },
  {
    id: "02",
    title: "Vor Ort",
    subtitle: "Kostenlose Besichtigung",
    description:
      "Unser Team besucht Sie, um das Umzugsvolumen exakt einzuschätzen. Wir planen Routen und erstellen ein verbindliches Festpreisangebot – ohne böse Überraschungen.",
    color: "#06b6d4", // cyan-500
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Planung",
    subtitle: "Organisation & Schutz",
    description:
      "Sie lehnen sich zurück, während wir fachmännisch verpacken, Möbel demontieren und Halteverbotszonen einrichten. Alles ist bereit für den großen Tag.",
    color: "#10b981", // emerald-500
    icon: PackageCheck,
  },
  {
    id: "04",
    title: "Umzug",
    subtitle: "Der schwere Teil",
    description:
      "Pünktlich, sicher und effizient. Wir transportieren Ihr Hab und Gut ins neue Zuhause, montieren Möbel und hinterlassen alles genau dort, wo Sie es wünschen.",
    color: "#f59e0b", // amber-500
    icon: Truck,
  },
];

/* ─── Single Sticky Card ─── */
function ProcessCard({
  step,
  index,
  total,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Track the scroll of THIS wrapper element taking up 100vh
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Scale shrinks as the NEXT card scrolls up over it.
  const targetScale = 1 - (total - index - 1) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Fade out a bit to simulate depth behind the next card
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // Push up slightly to enhance the stacking effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  /* ─── Spotlight Interactive Effect ─── */
  const mouseX = useSpring(0, { stiffness: 400, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 40 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const Icon = step.icon;

  return (
    <div
      ref={wrapperRef}
      className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-10"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        style={{
          scale,
          opacity,
          y,
          transformOrigin: "top",
        }}
        className="group relative flex flex-col md:flex-row w-full max-w-6xl h-auto min-h-[60vh] md:h-[75vh] bg-neutral-900 border border-white/10 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)] cursor-default"
      >
        {/* Deep dark background layer */}
        <div className="absolute inset-0 bg-[#070707] z-0" />

        {/* Dynamic Hover Spotlight */}
        <motion.div
          className="absolute -inset-px rounded-[40px] md:rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                ${step.color}15,
                transparent 80%
              )
            `,
          }}
        />

        {/* Permanent subtle glow from the right */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 100% 50%, ${step.color}, transparent 60%)`,
          }}
        />

        {/* Cinematic Noise Texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E\')',
          }}
        />

        {/* Inner Content Layout */}
        <div className="relative z-20 flex flex-col md:flex-row w-full h-full">
          {/* Left / Top Side: Huge Number & Icon */}
          <div className="w-full md:w-5/12 p-8 md:p-14 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
            {/* Giant Number Background */}
            <div
              className="absolute -bottom-10 -left-10 text-[12rem] md:text-[20rem] font-black opacity-5 leading-none tracking-tighter select-none pointer-events-none"
              style={{ color: step.color }}
            >
              {step.id}
            </div>

            <div className="relative">
              <span className="text-white/40 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                Schritt {step.id}
              </span>
            </div>

            <div className="relative mt-12 md:mt-auto">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 border border-white/5 backdrop-blur-md"
                style={{
                  backgroundColor: `${step.color}20`,
                  color: step.color,
                }}
              >
                <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Right / Bottom Side: Description Details */}
          <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-black/40 backdrop-blur-sm relative">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit border border-white/10"
              style={{ backgroundColor: `${step.color}10`, color: step.color }}
            >
              {step.subtitle}
            </div>
            <p className="text-neutral-300 text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium max-w-2xl">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Bottom CTA Banner ─── */
function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full px-6 py-24 md:py-40 flex items-center justify-center z-10 bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl rounded-[40px] bg-gradient-to-br from-neutral-900 to-black border border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]"
            style={{ backgroundSize: "60px 60px" }}
          />
        </div>

        {/* Giant abstract blue glow behind CTA */}
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16 lg:p-20">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Bereit? Ihr Umzug <br />
              <span className="text-blue-500">beginnt hier.</span>
            </h3>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Erhalten Sie in unter 60 Sekunden ein unverbindliches Angebot.
              Ohne Wartezeit, ohne versteckte Kosten.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              variant="secondary"
              href="#calculator"
              className="scale-100 md:scale-110"
            >
              Jetzt kalkulieren
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── MAIN: Process Section ─── */
export function Prozess() {
  return (
    <section className="relative bg-white text-neutral-900 font-sans selection:bg-blue-500/30">
      {/* Dynamic Intro Header */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-8 md:pb-16 text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm block mb-6"
        >
          Stressfrei ins neue Zuhause
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-neutral-950"
        >
          Unser Prozess <br />
          <span className="text-neutral-400 block mt-2">Ihre Entspannung.</span>
        </motion.h2>
      </div>

      {/* The Stacked Sticky Cards Container */}
      <div className="relative w-full pb-32">
        {steps.map((step, index) => (
          <ProcessCard
            key={step.id}
            step={step}
            index={index}
            total={steps.length}
          />
        ))}
      </div>

      {/* Dark Footer CTA Banner */}
      <CtaBanner />
    </section>
  );
}
