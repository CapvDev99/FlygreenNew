import { STEPS, EXTERNAL_LINKS, GENERATED, ASSETS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

export default function PlatformSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="platform" className="relative py-24 lg:py-32 bg-[#F8F6F3]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#00D4AA]" />
            <span className="text-[#00D4AA] text-sm font-mono tracking-widest uppercase">The Platform</span>
            <div className="h-px w-12 bg-[#00D4AA]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1D3A] tracking-tight mb-6">
            3 Steps to Sustainability
          </h2>
          <p className="text-lg text-[#0B1D3A]/60 leading-relaxed">
            Our digital platform makes it simple for pilots and operators to contribute to a cleaner future in aviation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#0B1D3A]/5 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-6xl font-bold text-[#00D4AA]/15 font-display absolute top-4 right-6">
                {step.number}
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#00D4AA]/10 flex items-center justify-center mb-5">
                  <span className="text-[#00D4AA] font-bold font-mono text-sm">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0B1D3A] mb-3 font-display">{step.title}</h3>
                <p className="text-[#0B1D3A]/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform preview */}
        <div className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B1D3A]/10 border border-[#0B1D3A]/5">
            <img
              src={GENERATED.platform}
              alt="FlyGreen24 Platform"
              className="w-full h-auto"
            />
            {/* Overlay CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-transparent to-transparent flex items-end justify-center pb-12">
              <a
                href={EXTERNAL_LINKS.compensate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4AA] text-[#0B1D3A] font-semibold rounded-lg hover:bg-[#00E4BA] transition-all duration-300 hover:shadow-xl hover:shadow-[#00D4AA]/30 group"
              >
                Calculate Your Emissions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
