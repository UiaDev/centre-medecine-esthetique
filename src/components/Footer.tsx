import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const legalLinks = [
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "Politique de confidentialité" },
  { href: "#", label: "CGU" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-blue/10 bg-slate-blue text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <div>
            <div className="inline-block rounded-lg bg-white px-5 py-4">
              <Image
                src="/logo.png"
                alt="Centre de Médecine Esthétique et Régénérative"
                width={360}
                height={100}
                className="h-12 w-auto max-w-[280px] object-contain sm:h-14 sm:max-w-[320px]"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Rue Bani Bouayach, Souissi — Rabat, Maroc
              <br />
              <a href="tel:+212537663320" className="transition-colors hover:text-gold">
                RDV : 05 37 66 33 20
              </a>
              {" · "}
              <a href="tel:+212537663330" className="transition-colors hover:text-gold">
                Standard : 05 37 66 33 30
              </a>
            </p>
          </div>

          {/* Legal links */}
          <nav aria-label="Liens légaux">
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social media */}
          <div className="md:text-right">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Suivez-nous
            </p>
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/70 transition-all hover:border-gold hover:text-gold"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-5">
            <Link href="#accueil" className="rounded-2xl bg-white p-4 shadow-soft transition-transform hover:scale-105">
              <Image
                src="/logo-icon.png"
                alt="Centre de Médecine Esthétique et Régénérative"
                width={100}
                height={100}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
            </Link>
            <p className="text-center text-xs text-white/50">
              © {new Date().getFullYear()} Centre de Médecine Esthétique et Régénérative.
              Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
