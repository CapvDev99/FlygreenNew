import { EXTERNAL_LINKS, GENERATED, METRICS } from "@/lib/data";
import { useCountUp } from "@/hooks/useInView";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={GENERATED.hero}
          alt="Aviation at altitude"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#7ed957] text-sm font-mono tracking-widest uppercase">
              Sustainable Aviation Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
            Making Sustainability{" "}
            <span className="text-[#7ed957]">Accessible</span> for General Aviation
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 font-body animate-fade-in [animation-delay:400ms]">
            Digital platform and B2B solutions enabling General Aviation to achieve net-zero emissions through SAF access, carbon credits, and blockchain transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
            <a
              href={EXTERNAL_LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7ed957] text-black font-semibold rounded-lg hover:bg-[#8ee467] transition-all duration-300 hover:shadow-xl hover:shadow-[#7ed957]/20 group"
            >
              Get Started
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#b2b"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              B2B Solutions
            </a>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl animate-fade-in [animation-delay:800ms]">
          {METRICS.map((metric, i) => (
            <MetricCard key={i} value={metric.value} suffix={metric.suffix} label={metric.label} displayValue={'displayValue' in metric ? (metric as any).displayValue : undefined} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#solutions" className="text-white/40 hover:text-[#7ed957] transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}

function MetricCard({ value, suffix, label, displayValue }: { value: number; suffix: string; label: string; displayValue?: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="glass-card rounded-xl p-5 text-center">
      <div className="text-3xl font-bold text-[#7ed957] font-display">
        {displayValue ? displayValue : <>{count}{suffix}</>}
      </div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}
