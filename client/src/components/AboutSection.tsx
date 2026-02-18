import { ASSETS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#F8F6F3]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={ASSETS.founder}
                  alt="Michael and Benja – FlyGreen24 Founders"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-[#00D4AA]/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-[#0B1D3A]/5 -z-10" />
            </div>
          </div>

          {/* Content side */}
          <div className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#00D4AA]" />
              <span className="text-[#00D4AA] text-sm font-mono tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D3A] tracking-tight mb-6">
              Shaping the Future of Sustainable Aviation
            </h2>

            <div className="space-y-5 text-[#0B1D3A]/70 leading-relaxed">
              <p>
                FlyGreen24 began in early 2023 when Michael, then at Europe's largest airline group and training for his private pilot license, noticed a gap: while commercial aviation was pushing toward net-zero, General Aviation lacked accessible, impactful climate solutions.
              </p>
              <p>
                By late 2023, he met Benja — a tech expert in blockchain and digital infrastructures. Together, they refined the idea, joined startup programs, and built a strong foundation in sustainable aviation.
              </p>
              <p>
                By 2025, with a working supply chain and their first paying customers, FlyGreen24 was officially incorporated. Today, we're building a digital platform to make sustainability in General Aviation accessible, transparent, and easy for all.
              </p>
            </div>

            {/* Vision quote */}
            <blockquote className="mt-8 pl-6 border-l-2 border-[#00D4AA]">
              <p className="text-[#0B1D3A] font-medium italic">
                "Our vision is to proactively accelerate the transition of General Aviation toward a net-zero future by making sustainability simple, accessible, and transparent for everyone."
              </p>
              <footer className="mt-3 text-sm text-[#0B1D3A]/50">
                — Michael Franco & Benja Begovic, Founders
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
