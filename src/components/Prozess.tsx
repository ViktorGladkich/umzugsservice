"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

import { PhoneCall, ClipboardCheck, PackageCheck, Truck } from "lucide-react";

/* ─── Process Step Data ─── */
const steps = [
  {
    id: "01",
    title: "Anfrage",
    subtitle: "Kontakt aufnehmen",
    description:
      "Ein kurzer Anruf oder eine Nachricht genügt. Wir erfassen erste Details Ihres Umzugs und besprechen die wichtigsten Parameter, um Ihnen den besten Service zu garantieren.",
    icon: PhoneCall,
  },
  {
    id: "02",
    title: "Vor Ort",
    subtitle: "Kostenlose Besichtigung",
    description:
      "Unser Team besucht Sie, um das Umzugsvolumen exakt einzuschätzen. Wir planen Routen und erstellen ein verbindliches Festpreisangebot – ohne böse Überraschungen.",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Planung",
    subtitle: "Organisation & Schutz",
    description:
      "Sie lehnen sich zurück, während wir fachmännisch verpacken, Möbel demontieren und Halteverbotszonen einrichten. Alles ist bereit für den großen Tag.",
    icon: PackageCheck,
  },
  {
    id: "04",
    title: "Umzug",
    subtitle: "Ihr großer Tag",
    description:
      "Pünktlich, sicher und effizient. Wir transportieren Ihr Hab und Gut ins neue Zuhause, montieren Möbel und hinterlassen alles genau dort, wo Sie es wünschen.",
    icon: Truck,
  },
];

/* ─── Single Sticky Card (Light Style) ─── */
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

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (total - index - 1) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  /* Spotlight hover */
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
        style={{ scale, opacity, y, transformOrigin: "top" }}
        className="group relative flex flex-col md:flex-row w-full max-w-6xl h-auto min-h-[60vh] md:h-[75vh] bg-white border border-neutral-200 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-default"
      >
        {/* Mouse-following blue spotlight */}
        <motion.div
          className="absolute -inset-px rounded-[40px] md:rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                700px circle at ${mouseX}px ${mouseY}px,
                rgba(59,130,246,0.06),
                transparent 70%
              )
            `,
          }}
        />

        {/* Inner Content */}
        <div className="relative z-20 flex flex-col md:flex-row w-full h-full">
          {/* Left: Number & Icon */}
          <div className="w-full md:w-5/12 p-8 md:p-14 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-100 relative overflow-hidden">
            {/* Watermark number */}
            <div className="absolute -bottom-10 -left-10 text-[12rem] md:text-[20rem] font-black text-blue-600/4 leading-none tracking-tighter select-none pointer-events-none">
              {step.id}
            </div>

            <div className="relative">
              <span className="text-blue-600/60 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                Schritt {step.id}
              </span>
            </div>

            <div className="relative mt-12 md:mt-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 border border-blue-100">
                <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-950 tracking-tight leading-[1.1]">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-neutral-50/50 relative">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit bg-blue-50 text-blue-600 border border-blue-100">
              {step.subtitle}
            </div>
            <p className="text-neutral-500 text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium max-w-2xl">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── MAIN: Process Section ─── */
export function Prozess() {
  return (
    <section className="relative bg-neutral-50 text-neutral-900 font-sans selection:bg-blue-500/30">
      {/* Section Header */}
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

      {/* Stacked Sticky Cards */}
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

      {/* Blue CTA Banner */}
    </section>
  );
}
