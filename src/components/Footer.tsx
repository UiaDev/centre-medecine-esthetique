import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import MapQrCode from "@/components/MapQrCode";
import { siteConfig } from "@/config/site";

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

const contactItems = [
  {
    icon: MapPin,
    label: "Adresse",
    content: (
      <a
        href={siteConfig.mapsShortUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-gold"
      >
        Rue Bani Bouayach, Souissi
        <br />
        Rabat, Maroc
      </a>
    ),
  },
  {
    icon: Phone,
    label: "Téléphone",
    content: (
      <>
        <a href="tel:+212537663320" className="transition-colors hover:text-gold">
          RDV : 05 37 66 33 20
        </a>
        <br />
        <a href="tel:+212537663330" className="transition-colors hover:text-gold">
          Standard : 05 37 66 33 30
        </a>
      </>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href="mailto:centre-esthetique@hup.ma"
        className="transition-colors hover:text-gold"
      >
        centre-esthetique@hup.ma
      </a>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-blue text-white">
      {/* Bande dorée décorative */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="section-container py-14 md:py-16">
        {/* Section principale */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Marque */}
          <div className="lg:col-span-4">
            <Link href="#accueil" className="inline-block">
              <div className="inline-block rounded-xl bg-white px-5 py-3.5 shadow-soft">
                <Image
                  src="/logo.png"
                  alt="Centre de Médecine Esthétique et Régénérative"
                  width={320}
                  height={90}
                  className="h-11 w-auto max-w-[260px] object-contain sm:h-12"
                />
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Centre de médecine esthétique et régénérative à Rabat.
              Expertise médicale et accompagnement personnalisé.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-all hover:border-gold/50 hover:bg-white/5 hover:text-gold"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <ul className="space-y-5">
              {contactItems.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/8">
                    <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                      {item.label}
                    </p>
                    <div className="mt-1 text-sm leading-relaxed text-white/75">
                      {item.content}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* QR code */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Localisation
            </h3>
            <MapQrCode />
          </div>
        </div>

        {/* Barre inférieure : logo + légal + copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <Link
              href="#accueil"
              className="flex-shrink-0 opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                src="/logo-icon.png"
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 object-contain brightness-0 invert opacity-80"
                aria-hidden
              />
            </Link>

            <nav aria-label="Liens légaux">
              <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm text-white/55">
                {legalLinks.map((link, i) => (
                  <li key={link.label} className="flex items-center">
                    {i > 0 && (
                      <span className="mx-3 hidden text-white/25 sm:inline" aria-hidden>
                        ·
                      </span>
                    )}
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="flex-shrink-0 text-center text-xs text-white/40 md:text-right">
              © {new Date().getFullYear()} CMER
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
