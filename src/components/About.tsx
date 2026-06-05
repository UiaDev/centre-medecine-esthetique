import { FlaskConical, ShieldCheck, HeartHandshake } from "lucide-react";
import SoftImage from "@/components/SoftImage";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: FlaskConical,
    title: "Innovation",
    description:
      "Des protocoles fondés sur les dernières avancées en médecine esthétique et régénérative, pour des résultats naturels et durables.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Chaque traitement est réalisé dans un cadre médical strict, avec des produits certifiés et un suivi rigoureux à chaque étape.",
  },
  {
    icon: HeartHandshake,
    title: "Soins personnalisés",
    description:
      "Une écoute attentive de vos attentes pour concevoir un parcours sur mesure, adapté à votre morphologie et à vos objectifs.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="section-padding section-surface-muted">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Le Centre</p>
          <h2 className="section-title mt-3">
            Une approche scientifique et humaine
          </h2>
          <p className="section-subtitle mx-auto">
            Notre centre de médecine esthétique et régénérative allie rigueur
            médicale et sensibilité esthétique. Nous croyons que la vraie beauté
            naît de l&apos;harmonie entre science, sécurité et bien-être.
          </p>
        </ScrollReveal>

        {/* Image 2 — Notre espace */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <SoftImage
              src="/images/cabinet-espace.png"
              alt="Notre espace de soins à Rabat — cabinet moderne, lumineux et accueillant pour vos traitements esthétiques"
              aspect="video"
            />
          </ScrollReveal>

          <ScrollReveal className="space-y-6">
            <div>
              <p className="section-eyebrow">Notre espace</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-blue">
                Un cadre pensé pour votre confort
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-blue/70">
                Nos salles de soins allient technologie médicale de pointe et
                ambiance apaisante. Chaque détail est conçu pour vous offrir une
                expérience sereine, dans un environnement clinique haut de gamme
                au cœur de Souissi, Rabat.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-blue/75">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Équipements médicaux certifiés
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Hygiène et protocoles stricts
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Accueil chaleureux et personnalisé
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <ScrollReveal key={value.title}>
              <article className="card-base h-full text-center md:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-blue/10 md:mx-0">
                  <value.icon className="h-7 w-7 text-slate-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-blue">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-blue/70">
                  {value.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
