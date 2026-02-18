import { FOUNDERS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Linkedin } from "lucide-react";

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#F8F6F3]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#7ed957] text-sm font-mono tracking-widest uppercase">Our Story</span>
            <div className="h-px w-12 bg-[#7ed957]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6">
            Meet the Founders
          </h2>
          <p className="text-lg text-[#575756] leading-relaxed">
            FlyGreen24 was born from a shared vision: making sustainability in General Aviation accessible, transparent, and easy for everyone.
          </p>
        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-14">
          {FOUNDERS.map((founder, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 transition-all duration-700 hover:shadow-xl ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Portrait */}
                <div className="sm:w-48 shrink-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-64 sm:h-full object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className="p-6 sm:p-7 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-black font-display mb-1">{founder.name}</h3>
                  <p className="text-[#7ed957] font-medium text-sm mb-4">{founder.role}</p>
                  <p className="text-[#575756] text-sm leading-relaxed mb-5">{founder.description}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#575756] hover:text-[#7ed957] transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision quote */}
        <div className={`max-w-3xl mx-auto mt-16 transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <blockquote className="text-center">
            <p className="text-lg sm:text-xl text-[#575756] font-medium italic leading-relaxed">
              "Our vision is to proactively accelerate the transition of General Aviation toward a net-zero future by making sustainability simple, accessible, and transparent for everyone."
            </p>
            <footer className="mt-4 text-sm text-[#575756]/60">
              — Michael Franco & Benja Begovic, Founders
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
