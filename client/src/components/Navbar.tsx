import { ASSETS, EXTERNAL_LINKS, NAV_LINKS } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B1D3A]/95 backdrop-blur-xl shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src={ASSETS.logo}
            alt="FlyGreen24"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-[#7ed957] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={EXTERNAL_LINKS.app}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 bg-[#7ed957] text-[#0B1D3A] font-semibold text-sm rounded-lg hover:bg-[#8ee467] transition-all duration-300 hover:shadow-lg hover:shadow-[#7ed957]/20"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu – increased max-h to prevent clipping */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 bg-[#0B1D3A]/98 backdrop-blur-xl border-t border-white/10">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-[#7ed957] hover:bg-white/5 transition-colors py-3 px-3 rounded-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href={EXTERNAL_LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full px-5 py-3.5 bg-[#7ed957] text-[#0B1D3A] font-semibold text-center rounded-lg hover:bg-[#8ee467] transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
