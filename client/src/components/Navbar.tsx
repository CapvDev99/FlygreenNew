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
              className="text-sm font-medium text-white/70 hover:text-[#00D4AA] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={EXTERNAL_LINKS.app}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 bg-[#00D4AA] text-[#0B1D3A] font-semibold text-sm rounded-lg hover:bg-[#00E4BA] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D4AA]/20"
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

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 bg-[#0B1D3A]/98 backdrop-blur-xl border-t border-white/10 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/80 hover:text-[#00D4AA] transition-colors py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={EXTERNAL_LINKS.app}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-5 py-3 bg-[#00D4AA] text-[#0B1D3A] font-semibold text-center rounded-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
