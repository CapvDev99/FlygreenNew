import { ASSETS, SOLUTIONS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Calculator, Fuel, Leaf, ShieldCheck } from "lucide-react";

const ICONS = {
  calculator: Calculator,
  fuel: Fuel,
  leaf: Leaf,
  shield: ShieldCheck,
} as const;

export default function SolutionsSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="solutions"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.18) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Section header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#64b943] text-sm font-mono tracking-widest uppercase">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6">
            One Platform. Zero Complexity.
          </h2>
          <p className="text-lg text-[#575756] leading-relaxed max-w-3xl">
            FlyGreen24 removes the barriers that make aviation sustainability
            complex. Through flight emissions calculation, SAF Book &amp; Claim,
            regional carbon credits, and blockchain-powered traceability, we
            enable immediate, credible, and scalable climate action across the
            aviation industry.
          </p>
          <p className="mt-5 text-base sm:text-lg font-semibold text-[#4f9e34]">
            No hardware upgrades. No operational disruption. No procurement
            complexity.
          </p>
        </div>

        {/* Four solution cards + image */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-12 items-stretch">
          <div className="grid sm:grid-cols-2 gap-5">
            {SOLUTIONS.map((solution, i) => {
              const Icon = ICONS[solution.icon as keyof typeof ICONS];
              return (
                <article
                  key={solution.title}
                  className={`flex h-full flex-col rounded-2xl border border-black/10 bg-[#F8F6F3] p-6 transition-all duration-700 hover:-translate-y-1 hover:border-[#7ed957]/50 hover:shadow-xl hover:shadow-black/5 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7ed957]/15 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#4f9e34]" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3 font-display">
                    {solution.title}
                  </h3>
                  <p className="text-[#575756] leading-relaxed text-sm flex-1">
                    {solution.description}
                  </p>
                  <a
                    href={solution.href}
                    target={solution.external ? "_blank" : undefined}
                    rel={solution.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#4f9e34] hover:text-black transition-colors group"
                  >
                    {solution.cta}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </article>
              );
            })}
          </div>

          {/* Image side */}
          <div
            className={`relative min-h-[420px] lg:min-h-full transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={ASSETS.forestAircraft}
                alt="Aircraft flying above a healthy forest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
