import { ASSETS, EXTERNAL_LINKS, METRICS } from "@/lib/data";
import { useCountUp } from "@/hooks/useInView";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F6F3]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroPc12}
          alt="PC-12 flying above an alpine forest"
          className="w-full h-full object-cover object-[68%_center] opacity-45 sm:opacity-65 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F3] via-[#F8F6F3]/95 to-[#F8F6F3]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F3]/30 via-transparent to-[#F8F6F3]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black leading-[1.06] tracking-tight mb-7 animate-fade-in">
            Sustainable Aviation{" "}
            <span className="text-[#64b943]">Made Simple.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#343433] leading-relaxed max-w-2xl mb-7 font-body animate-fade-in [animation-delay:200ms]">
            FlyGreen24 removes the barriers that make aviation sustainability
            complex. Through flight emissions calculation, SAF Book &amp; Claim,
            regional carbon credits, and blockchain-powered traceability, we
            enable immediate, credible, and scalable climate action across the
            aviation industry.
          </p>

          <p className="max-w-2xl border-l-4 border-[#7ed957] pl-5 text-base sm:text-lg font-semibold text-[#4f9e34] leading-relaxed mb-9 animate-fade-in [animation-delay:350ms]">
            No hardware upgrades. No operational disruption. No procurement
            complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:500ms]">
            <a
              href={EXTERNAL_LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7ed957] text-black font-semibold rounded-lg hover:bg-[#8ee467] transition-all duration-300 hover:shadow-xl hover:shadow-[#7ed957]/20 group"
            >
              Get Started
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#b2b"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-black/20 bg-white/50 text-black font-semibold rounded-lg hover:bg-white hover:border-black/40 transition-all duration-300"
            >
              B2B Solutions
            </a>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl animate-fade-in [animation-delay:700ms]">
          {METRICS.map((metric, i) => (
            <MetricCard
              key={i}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              displayValue={
                "displayValue" in metric
                  ? (metric as { displayValue?: string }).displayValue
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#solutions"
          className="text-black/35 hover:text-[#64b943] transition-colors"
          aria-label="Scroll to solutions"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  suffix,
  label,
  displayValue,
}: {
  value: number;
  suffix: string;
  label: string;
  displayValue?: string;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-black/10 bg-white/85 p-5 text-center shadow-sm backdrop-blur-md"
    >
      <div className="text-3xl font-bold text-[#64b943] font-display">
        {displayValue ? (
          displayValue
        ) : (
          <>
            {count}
            {suffix}
          </>
        )}
      </div>
      <div className="text-sm text-[#575756] mt-1">{label}</div>
    </div>
  );
}
