import { B2B_SERVICES, EXTERNAL_LINKS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Compass,
  Layers,
  Ticket,
} from "lucide-react";

const ICONS = {
  layers: Layers,
  cloud: Cloud,
  chart: BarChart3,
  ticket: Ticket,
  compass: Compass,
} as const;

export default function B2BSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="b2b"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7ed957]/8 to-transparent" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Section header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#64b943] text-sm font-mono tracking-widest uppercase">
              B2B Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6">
            Tailored Solutions for Enterprise Aviation
          </h2>
          <p className="text-lg text-[#575756] leading-relaxed">
            Make sustainability part of your core operations with FlyGreen24.
            Our technology-powered B2B solutions are built to meet the
            real-world demands of modern aviation.
          </p>
        </div>

        {/* Five use cases */}
        <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-6">
          {B2B_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const spanClass = i < 2 ? "xl:col-span-3" : "xl:col-span-2";

            return (
              <article
                key={`${service.title}-${i}`}
                className={`group relative ${spanClass} flex h-full flex-col rounded-2xl border border-black/10 bg-[#F8F6F3] p-7 transition-all duration-700 hover:-translate-y-1 hover:border-[#7ed957]/50 hover:shadow-xl hover:shadow-black/5 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center mb-6">
                  <Icon size={20} className="text-[#7ed957]" />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-[#575756] leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#343433]"
                    >
                      <Check
                        size={15}
                        className="text-[#4f9e34] shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.title === "Corporate Emissions Accounting" && (
                  <a
                    href={EXTERNAL_LINKS.emissionsPlatform}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 pt-5 border-t border-black/10 text-sm font-semibold text-[#4f9e34] hover:text-black transition-colors group/link"
                  >
                    Explore Emissions Platform (Beta)
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* CTA bar */}
        <div
          className={`mt-16 rounded-2xl border border-black/10 bg-black p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white font-display mb-2">
              Ready to integrate sustainability?
            </h3>
            <p className="text-white/65">
              Let&apos;s discuss how FlyGreen24 can support your business goals.
            </p>
          </div>
          <a
            href={EXTERNAL_LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#7ed957] text-black font-semibold rounded-lg hover:bg-[#8ee467] transition-all duration-300 hover:shadow-xl hover:shadow-[#7ed957]/20 group"
          >
            Book a Call
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
