"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Rue Bani Bouayach\nSouissi - Rabat - Maroc",
    href: "https://maps.app.goo.gl/pBbH13MAcgSUM9uh6",
    external: true,
  },
  {
    icon: Phone,
    label: "Prise de rendez-vous",
    value: "05 37 66 33 20",
    href: "tel:+212537663320",
  },
  {
    icon: Phone,
    label: "Standard",
    value: "05 37 66 33 30",
    href: "tel:+212537663330",
  },
  {
    icon: Mail,
    label: "Email",
    value: "centre-esthetique@hup.ma",
    href: "mailto:centre-esthetique@hup.ma",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun – Ven : 9h – 19h | Sam : 9h – 14h",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-divider section-padding section-surface">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mt-3">Nous trouver & vous écrire</h2>
          <p className="section-subtitle mx-auto">
            Une question sur nos traitements ? Contactez-nous ou passez nous
            voir au centre. Nous serons ravis de vous accueillir.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ScrollReveal className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-slate-blue/10">
                  <item.icon className="h-5 w-5 text-slate-blue" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-blue/50">
                    {item.label}
                  </p>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-sm font-medium text-slate-blue transition-colors hover:text-gold-dark"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line text-sm font-medium text-slate-blue">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps */}
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-blue/10 shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d-6.8333109!3d33.9716542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b061221c013%3A0xffc59eeb080476f!2sHospital%20University%20Proximity%20-%20Uman!5e0!3m2!1sfr!2sma!4v1749120000000"
                className="h-64 w-full border-0 md:h-72"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du centre — Rue Bani Bouayach, Souissi, Rabat"
              />
              <div className="border-t border-slate-blue/10 bg-gray-50 px-4 py-3 text-center">
                <a
                  href="https://maps.app.goo.gl/pBbH13MAcgSUM9uh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-blue transition-colors hover:text-gold-dark"
                >
                  <MapPin className="h-4 w-4" />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
          <form onSubmit={handleSubmit} className="card-base space-y-5">
            <h3 className="text-lg font-semibold text-slate-blue">
              Envoyez-nous un message
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="prenom" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-blue/60">
                  Prénom
                </label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  required
                  placeholder="Marie"
                  className="w-full rounded-lg border border-slate-blue/20 px-4 py-2.5 text-sm text-slate-blue placeholder:text-slate-blue/40 focus:border-slate-blue focus:outline-none focus:ring-1 focus:ring-slate-blue"
                />
              </div>
              <div>
                <label htmlFor="nom" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-blue/60">
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  placeholder="Dupont"
                  className="w-full rounded-lg border border-slate-blue/20 px-4 py-2.5 text-sm text-slate-blue placeholder:text-slate-blue/40 focus:border-slate-blue focus:outline-none focus:ring-1 focus:ring-slate-blue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-blue/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="vous@email.com"
                className="w-full rounded-lg border border-slate-blue/20 px-4 py-2.5 text-sm text-slate-blue placeholder:text-slate-blue/40 focus:border-slate-blue focus:outline-none focus:ring-1 focus:ring-slate-blue"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-blue/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre demande ou posez votre question..."
                className="w-full resize-none rounded-lg border border-slate-blue/20 px-4 py-2.5 text-sm text-slate-blue placeholder:text-slate-blue/40 focus:border-slate-blue focus:outline-none focus:ring-1 focus:ring-slate-blue"
              />
            </div>

            <button type="submit" className="btn-gold w-full">
              <Send className="h-4 w-4" />
              Envoyer le message
            </button>

            {submitted && (
              <p className="text-center text-sm font-medium text-slate-blue">
                Message envoyé ! Nous vous répondrons sous 24h.
              </p>
            )}
          </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
