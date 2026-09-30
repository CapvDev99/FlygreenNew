import { PARTNERS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export default function PartnersSection() {
  const { ref, isInView } = useInView();
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14"
      >
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#7ed957]" />
            <span className="text-[#64b943] text-sm font-mono tracking-widest uppercase">
              Trusted By
            </span>
            <div className="h-px w-12 bg-[#7ed957]" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-black tracking-tight transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Partners &amp; Supporters
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative w-full overflow-hidden"
        aria-label="FlyGreen24 partners and supporters"
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-24 lg:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-24 lg:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee will-change-transform">
          {doubled.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 mx-2 sm:mx-4 group"
              aria-label={`Visit ${partner.name}`}
            >
              <div className="w-36 h-24 sm:w-44 sm:h-28 bg-[#F8F6F3] border border-black/10 rounded-xl flex items-center justify-center p-4 sm:p-5 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#7ed957]/10 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 sm:max-h-16 max-w-28 sm:max-w-32 w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
