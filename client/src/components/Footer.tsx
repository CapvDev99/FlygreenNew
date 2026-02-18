import { ASSETS, EXTERNAL_LINKS, NAV_LINKS } from "@/lib/data";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#7ed957]" />
              <span className="text-[#7ed957] text-sm font-mono tracking-widest uppercase">Get in Touch</span>
              <div className="h-px w-12 bg-[#7ed957]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Whether you're a pilot looking to offset your emissions, or a business seeking enterprise sustainability solutions — we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${EXTERNAL_LINKS.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7ed957] text-black font-semibold rounded-lg hover:bg-[#8ee467] transition-all duration-300 hover:shadow-xl hover:shadow-[#7ed957]/20 group"
              >
                <Mail size={18} />
                {EXTERNAL_LINKS.email}
              </a>
              <a
                href={EXTERNAL_LINKS.app}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
              >
                Open Platform
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <img src={ASSETS.logo} alt="FlyGreen24" className="h-8 w-auto mb-5" />
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Digital platform for sustainable aviation solutions. Making sustainability accessible, transparent, and simple for General Aviation.
              </p>
              <div className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>
                  FlyGreen24 GmbH<br />
                  c/o Hochschule Luzern<br />
                  Technikumstrasse 21<br />
                  6048 Horw, Switzerland
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-5 font-display">Navigation</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/40 hover:text-[#7ed957] transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-5 font-display">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href={EXTERNAL_LINKS.privacy} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#7ed957] transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href={EXTERNAL_LINKS.terms} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#7ed957] transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href={EXTERNAL_LINKS.imprint} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#7ed957] transition-colors text-sm">
                    Imprint
                  </a>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-white/30 text-xs">
                  UID: CHE-455.836.412
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              &copy; {year} FlyGreen24 GmbH. All rights reserved.
            </p>
            <a
              href={`mailto:${EXTERNAL_LINKS.email}`}
              className="text-white/30 hover:text-[#7ed957] transition-colors text-sm"
            >
              {EXTERNAL_LINKS.email}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
