import { PARTNERS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export default function PartnersSection() {
  const { ref, isInView } = useInView();
  // Double the partners array for seamless marquee
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="relative py-24 lg:py-32 bg-[#0B1D3A] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#00D4AA]" />
            <span className="text-[#00D4AA] text-sm font-mono tracking-widest uppercase">Trusted By</span>
            <div className="h-px w-12 bg-[#00D4AA]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-white tracking-tight transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Our Partners & Supporters
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0B1D3A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0B1D3A] to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 mx-5 group"
            >
              <div className="w-44 h-28 bg-white/90 rounded-xl flex items-center justify-center p-5 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#00D4AA]/10 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-32 w-auto h-auto object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
