"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Calendar,
  Home,
  Building2,
  Sparkles,
  Mail,
  type LucideIcon,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  sectionId: string;
};

const navLinks: NavLink[] = [
  { href: "#accueil", label: "Accueil", icon: Home, sectionId: "accueil" },
  { href: "#apropos", label: "Le Centre", icon: Building2, sectionId: "apropos" },
  { href: "#traitements", label: "Traitements", icon: Sparkles, sectionId: "traitements" },
  { href: "#rendez-vous", label: "Rendez-vous", icon: Calendar, sectionId: "rendez-vous" },
  { href: "#contact", label: "Contact", icon: Mail, sectionId: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = (sectionId: string) =>
    `nav-link ${activeSection === sectionId ? "nav-link-active" : ""}`;

  const mobileLinkClass = (sectionId: string) =>
    `nav-link-mobile ${activeSection === sectionId ? "nav-link-mobile-active" : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-blue/10 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="section-container">
        <div className="flex h-24 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="#accueil" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo.png"
              alt="Centre de Médecine Esthétique et Régénérative"
              width={420}
              height={120}
              className="h-14 w-auto max-w-[min(100%,280px)] object-contain sm:h-16 sm:max-w-[320px] md:h-[4.5rem] md:max-w-[380px] lg:max-w-none"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 rounded-full border border-slate-blue/10 bg-gray-50/80 p-1.5"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.sectionId)}>
                <link.icon className="h-4 w-4 opacity-70" strokeWidth={1.75} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="#rendez-vous"
              className={`btn-appointment ${activeSection === "rendez-vous" ? "ring-2 ring-gold/40 ring-offset-2" : ""}`}
            >
              <span className="btn-appointment-icon">
                <Calendar className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="relative">Prendre rendez-vous</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden rounded-xl border border-slate-blue/10 bg-gray-50 p-2.5 text-slate-blue transition-colors hover:bg-slate-blue/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay + menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-24 z-40 bg-slate-blue/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed left-4 right-4 top-28 z-50 rounded-2xl border border-slate-blue/10 bg-white p-3 shadow-soft lg:hidden"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={mobileLinkClass(link.sectionId)}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        activeSection === link.sectionId
                          ? "bg-gold/20 text-gold-dark"
                          : "bg-slate-blue/8 text-slate-blue"
                      }`}
                    >
                      <link.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-slate-blue/10 pt-3">
              <Link
                href="#rendez-vous"
                className="btn-appointment btn-appointment-lg w-full"
                onClick={() => setMobileOpen(false)}
              >
                <span className="btn-appointment-icon">
                  <Calendar className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="relative">Prendre rendez-vous</span>
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
