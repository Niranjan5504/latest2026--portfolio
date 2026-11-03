import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolio";
import { cn } from "../lib/utils";

const DESKTOP_NAV_LINKS = [
  { label: "About", href: "about", id: "about" },
  { label: "Skills", href: "skills", id: "skills" },
  { label: "Projects", href: "projects", id: "projects" },
  { label: "Experience", href: "experience", id: "experience" },
  { label: "Achievements", href: "achievements", id: "achievements" },
] as const;

const MOBILE_NAV_LINKS = [
  { label: "Home", href: "", id: "home" },
  ...DESKTOP_NAV_LINKS,
  { label: "Contact", href: "contact", id: "contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <a
        href=""
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-[#2563EB] focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-colors duration-200",
          scrolled || mobileOpen
            ? "border-b border-zinc-800/80 bg-[#050505]/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-5 sm:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="/"
            aria-label="Niranjan Kumar A — Back to Home"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 shrink-0 transition-opacity duration-150 hover:opacity-85 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <img
              src="/logo1.jpg"
              alt="Niranjan Kumar A"
              className="h-10 w-10 rounded-full object-cover border border-white/20"
            />

            <span className="font-display text-lg font-bold tracking-tight text-zinc-50 whitespace-nowrap">
              {PROFILE_DATA.monogram}
            </span>
          </a>

          {/* Zone 2: 5 Clean Single-Line Text Navigation Links */}
          <nav
            aria-label="Primary site navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {DESKTOP_NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500",
                    "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#3B82F6] after:transition-transform after:duration-300 after:origin-left",
                    isActive
                      ? "text-zinc-50 after:scale-x-100"
                      : "text-zinc-400 after:scale-x-0 hover:text-zinc-100 hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) + Mobile Menu Toggle */}
          <div className="flex items-center shrink-0">
            <a
              href="contact"
              className={cn(
                "hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
                activeSection === "contact"
                  ? "bg-blue-500 text-white"
                  : "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
              )}
            >
              Contact
            </a>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-zinc-200 transition-colors duration-150 hover:bg-zinc-900 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Accessible Mobile Navigation Drawer */}
        {mobileOpen && (
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile site navigation"
            className="border-t border-zinc-800/80 bg-[#050505] px-5 pt-3 pb-6 md:hidden"
          >
            <ul className="flex flex-col divide-y divide-zinc-900">
              {MOBILE_NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex min-h-[48px] items-center justify-between text-base font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
                        isActive
                          ? "text-blue-400"
                          : "text-zinc-200 hover:text-white",
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="font-mono text-xs text-blue-400">
                          Active
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
