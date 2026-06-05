import { Calendar, Clock, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";

const steps = [
  "Accédez à notre plateforme de rendez-vous en ligne",
  "Choisissez votre praticien et le créneau qui vous convient",
  "Recevez une confirmation par email et SMS",
];

export default function Booking() {
  const { bookingPlatformUrl, bookingPlatformName } = siteConfig;
  const isExternalLink = bookingPlatformUrl.startsWith("http");

  return (
    <section id="rendez-vous" className="section-divider section-padding section-surface-muted">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="section-eyebrow">Rendez-vous</p>
            <h2 className="section-title mt-3">
              Réservez votre consultation en ligne
            </h2>
            <p className="section-subtitle">
              Prenez rendez-vous par téléphone ou en ligne. Appelez-nous au{" "}
              <a
                href="tel:+212537663320"
                className="font-semibold text-slate-blue underline decoration-gold/50 underline-offset-2 hover:text-gold-dark"
              >
                05 37 66 33 20
              </a>{" "}
              ou réservez directement sur {bookingPlatformName}.
            </p>

            <ul className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-blue text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-blue/80 pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="tel:+212537663320" className="btn-outline">
                <Calendar className="h-4 w-4" />
                05 37 66 33 20
              </a>
              {isExternalLink && (
                <a
                  href={bookingPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-appointment"
                >
                  <span className="btn-appointment-icon">
                    <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="relative">Réserver en ligne</span>
                </a>
              )}
              <div className="flex items-center gap-2 text-sm text-slate-blue/60">
                <Clock className="h-4 w-4" />
                Confirmation immédiate
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-blue/60">
              <CheckCircle2 className="h-4 w-4 text-gold-dark" />
              Annulation gratuite jusqu&apos;à 24h avant le rendez-vous
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="card-base overflow-hidden p-0">
            <div className="border-b border-slate-blue/10 bg-slate-blue/5 px-6 py-4">
              <p className="text-sm font-semibold text-slate-blue">
                Agenda en ligne
              </p>
              <p className="text-xs text-slate-blue/60">
                Réservation via une plateforme dédiée
              </p>
            </div>

            <div className="flex min-h-[400px] flex-col items-center justify-center bg-white p-8 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/15">
                <Calendar className="h-10 w-10 text-gold-dark" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-slate-blue">
                Prenez rendez-vous en ligne
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-blue/70">
                Vous serez redirigé vers {bookingPlatformName} pour choisir
                votre créneau en toute simplicité.
              </p>

              {isExternalLink ? (
                <a
                  href={bookingPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-appointment btn-appointment-lg mt-8"
                >
                  <span className="btn-appointment-icon">
                    <Calendar className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="relative">Accéder à l&apos;agenda</span>
                  <ArrowRight className="relative h-4 w-4" />
                </a>
              ) : (
                <div className="mt-8 rounded-lg border border-dashed border-slate-blue/20 bg-gray-50 px-6 py-4">
                  <p className="text-sm font-medium text-slate-blue/70">
                    Lien à configurer
                  </p>
                  <p className="mt-1 text-xs text-slate-blue/50">
                    Ajoutez l&apos;URL de votre plateforme dans{" "}
                    <code className="rounded bg-slate-blue/10 px-1.5 py-0.5 text-slate-blue">
                      src/config/site.ts
                    </code>
                  </p>
                </div>
              )}

              <p className="mt-6 flex items-center gap-1.5 text-xs text-slate-blue/50">
                <ExternalLink className="h-3.5 w-3.5" />
                Ouverture dans un nouvel onglet
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
