import { B2B_SERVICES, GENERATED, EXTERNAL_LINKS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Layers, Cloud, Compass, Check, ArrowRight } from "lucide-react";

const ICONS = {
  layers: Layers,
  cloud: Cloud,
  compass: Compass,
} as const;

const IMAGES = [GENERATED.whitelabel, GENERATED.platform, GENERATED.consulting];

export default function B2BSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="b2b" className="relative py-24 lg:py-32 bg-[#0B1D3A] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7ed957]/5 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#7ed957] text-sm font-mono tracking-widest uppercase">B2B Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Enterprise Solutions for General Aviation
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Partner with FlyGreen24 to integrate sustainability into your business. Our B2B solutions are designed for FBOs, flight schools, charter operators, and aviation service providers.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {B2B_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <div
                key={i}
                className={`group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 hover:border-[#7ed957]/30 hover:bg-white/[0.07] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={IMAGES[i]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/40 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-10 h-10 rounded-lg bg-[#7ed957]/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={20} className="text-[#7ed957]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 font-display">{service.title}</h3>
                  <p className="text-white/55 leading-relaxed mb-5 text-sm">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                        <Check size={14} className="text-[#7ed957] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${EXTERNAL_LINKS.email}?subject=${encodeURIComponent(service.title + " Inquiry")}`}
                    className="inline-flex items-center gap-2 text-[#7ed957] text-sm font-medium hover:gap-3 transition-all duration-300"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA bar */}
        <div className={`mt-16 glass-card rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "600ms" }}>
          <div>
            <h3 className="text-2xl font-bold text-white font-display mb-2">Ready to integrate sustainability?</h3>
            <p className="text-white/60">Let's discuss how FlyGreen24 can support your business goals.</p>
          </div>
          <a
            href={`mailto:${EXTERNAL_LINKS.email}?subject=${encodeURIComponent("B2B Partnership Inquiry")}`}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#7ed957] text-[#0B1D3A] font-semibold rounded-lg hover:bg-[#8ee467] transition-all duration-300 hover:shadow-xl hover:shadow-[#7ed957]/20 group"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
