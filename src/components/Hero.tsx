import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white section-padding">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-slate-blue/5 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge mb-6">
            <span className="hero-badge-icon">
              <Sparkles className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="hero-badge-text">
              Médecine esthétique &amp; régénérative
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Révélez votre</span>
            <span className="hero-title-highlight">beauté naturelle</span>
            <span className="hero-title-accent" aria-hidden="true" />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-blue/70 md:text-xl">
            Une approche alliant expertise médicale, innovation scientifique et
            accompagnement personnalisé pour sublimer votre éclat en toute sécurité.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#rendez-vous" className="btn-appointment btn-appointment-lg w-full sm:w-auto">
              <span className="btn-appointment-icon">
                <Calendar className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="relative">Réserver une consultation</span>
            </Link>
            <Link href="#traitements" className="btn-discover btn-discover-lg w-full sm:w-auto">
              <span className="btn-discover-icon">
                <Stethoscope className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="relative">Découvrir nos traitements</span>
              <ArrowRight className="btn-discover-arrow h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-slate-blue/10 pt-10 sm:grid-cols-3">
            {[
              { value: "20+", label: "Années d'expertise" },
              { value: "100%", label: "Protocoles médicaux" },
              { value: "Sur mesure", label: "Accompagnement personnalisé" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold text-slate-blue">{item.value}</p>
                <p className="mt-1 text-sm text-slate-blue/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
