import { SOLUTIONS, GENERATED } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Fuel, Leaf, ShieldCheck } from "lucide-react";

const ICONS = {
  plane: Fuel,
  leaf: Leaf,
  shield: ShieldCheck,
} as const;

export default function SolutionsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-[#0B1D3A] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#7ed957] text-sm font-mono tracking-widest uppercase">Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Sustainable Aviation Made Simple
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            SAF is currently available at less than 1% of airports worldwide. We bridge this gap with digital solutions that work everywhere.
          </p>
        </div>

        {/* Two-column layout: cards + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {SOLUTIONS.map((solution, i) => {
              const Icon = ICONS[solution.icon as keyof typeof ICONS];
              return (
                <div
                  key={i}
                  className={`glass-card rounded-xl p-6 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#7ed957]/10 flex items-center justify-center">
                      <Icon size={22} className="text-[#7ed957]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 font-display">{solution.title}</h3>
                      <p className="text-white/60 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image side */}
          <div className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src={GENERATED.saf}
                alt="Sustainable Aviation Fuel"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-5 shadow-xl">
              <div className="text-2xl font-bold text-[#7ed957] font-display">80%</div>
              <div className="text-sm text-white/60">CO₂ reduction<br />with SAF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
