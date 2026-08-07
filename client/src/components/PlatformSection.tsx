import { ASSETS, EXTERNAL_LINKS, STEPS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

export default function PlatformSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="platform" className="relative py-24 lg:py-32 bg-[#F8F6F3]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#64b943] text-sm font-mono tracking-widest uppercase">
              The Platform
            </span>
            <div className="h-px w-12 bg-[#7ed957]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6">
            Carbon-neutral in 3 steps
          </h2>
          <p className="text-lg text-[#575756] leading-relaxed">
            FlyGreen24&apos;s digital platform helps General Aviation to move
            toward net-zero emissions by providing impactful, industry-relevant
            solutions through a system that makes emissions cuts more
            accessible, transparent, and streamlined than ever before.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {STEPS.map((step, i) => (
            <article
              key={step.number}
              className={`relative bg-white rounded-2xl p-8 pt-16 shadow-sm hover:shadow-xl transition-all duration-500 group border border-black/5 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="text-6xl font-bold text-[#7ed957]/20 font-display absolute top-4 right-6"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3 font-display">
                {step.title}
              </h3>
              <p className="text-[#575756] leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Platform preview */}
        <div
          className={`relative transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href={EXTERNAL_LINKS.compensate}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-black/10 bg-white"
            aria-label="Open the FlyGreen24 flight emissions calculator"
          >
            <img
              src={ASSETS.platformPreview}
              alt="FlyGreen24 flight emissions calculator"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end justify-center pb-5 sm:pb-10">
              <span className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#7ed957] text-black font-semibold rounded-lg group-hover:bg-[#8ee467] transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#7ed957]/30">
                Calculate Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
