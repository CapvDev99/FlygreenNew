import { EXTERNAL_LINKS, ASSETS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Headphones, Users, ArrowRight } from "lucide-react";

export default function CommunitySection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-24 lg:py-32 bg-[#F8F6F3]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Community card */}
          <div className={`bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#0B1D3A]/5 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-[#0B1D3A] flex items-center justify-center mb-6">
              <Users size={22} className="text-[#00D4AA]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1D3A] mb-4 font-display">Join the Movement</h3>
            <p className="text-[#0B1D3A]/60 leading-relaxed mb-6">
              Be part of the FlyGreen24 community and help shape the future of sustainable aviation. Stay informed, contribute your voice, and unlock exclusive member benefits — together, we're making aviation cleaner, smarter, and more connected.
            </p>

            {/* Newsletter form */}
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-[#0B1D3A]/10 bg-[#F8F6F3] text-[#0B1D3A] placeholder:text-[#0B1D3A]/30 focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/50 focus:border-[#00D4AA] transition-all"
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[type="email"]') as HTMLInputElement;
                  if (input?.value) {
                    const subject = encodeURIComponent("Newsletter Subscription");
                    const body = encodeURIComponent(`New subscription from: ${input.value}`);
                    window.location.href = `mailto:${EXTERNAL_LINKS.email}?subject=${subject}&body=${body}`;
                  }
                }}
                className="px-6 py-3 bg-[#0B1D3A] text-white font-medium rounded-lg hover:bg-[#132B4D] transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Podcast card */}
          <div className={`relative bg-[#0B1D3A] rounded-2xl overflow-hidden shadow-sm transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute inset-0">
              <img
                src={ASSETS.podcastStudio}
                alt="Podcast Studio"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/70 to-[#0B1D3A]/40" />
            </div>
            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[360px]">
              <div className="w-12 h-12 rounded-xl bg-[#00D4AA]/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Headphones size={22} className="text-[#00D4AA]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">FlyGreen24 Podcast</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Join the conversation about sustainable aviation. Expert interviews, industry insights, and the latest developments in green aviation technology.
              </p>
              <a
                href={EXTERNAL_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00D4AA] font-medium hover:gap-3 transition-all duration-300 group"
              >
                Listen on Spotify
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
