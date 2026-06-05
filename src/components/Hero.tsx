import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Stethoscope, Smile } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] overflow-x-hidden bg-[#dce4ea] section-padding pb-20 md:pb-24">
      <HeroBackground />

      <div className="section-container relative z-10 flex min-h-[70vh] items-center py-6">
        <div className="hero-content-backdrop mx-auto w-full max-w-3xl text-center">
          <div className="hero-badge hero-badge-float hero-enter-scale hero-delay-1 mb-6 inline-flex">
            <span className="hero-badge-icon">
              <Sparkles className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="hero-badge-text">
              Médecine esthétique &amp; régénérative
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line hero-enter-left hero-delay-2">
              Révélez votre
            </span>
            <span className="hero-title-highlight hero-title-highlight-enter mt-1 block">
              beauté naturelle
            </span>
            <span className="hero-title-accent hero-title-accent-animated" aria-hidden="true" />
          </h1>

          <p className="hero-enter hero-delay-4 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-blue md:text-xl">
            Une approche alliant expertise médicale, innovation scientifique et
            accompagnement personnalisé pour sublimer votre éclat en toute sécurité.
          </p>

          <div className="friendly-accent hero-enter-scale hero-delay-5 mx-auto mt-5 inline-flex">
            <span className="friendly-accent-icon">
              <Smile className="h-4 w-4" strokeWidth={2} />
            </span>
            <span>Vous êtes entre de bonnes mains</span>
          </div>

          <div className="hero-enter hero-delay-6 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-slate-blue/20 pt-10 sm:grid-cols-3">
            {[
              { value: "20+", label: "Années d'expertise" },
              { value: "100%", label: "Protocoles médicaux" },
              { value: "Sur mesure", label: "Accompagnement personnalisé" },
            ].map((item) => (
              <div key={item.label} className="hero-stat hero-stat-animated rounded-xl px-4 py-3">
                <p className="text-2xl font-semibold text-slate-blue">{item.value}</p>
                <p className="mt-1 text-sm text-slate-blue/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
