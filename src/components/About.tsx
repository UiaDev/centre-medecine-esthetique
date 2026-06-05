import { FlaskConical, ShieldCheck, HeartHandshake } from "lucide-react";

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
    <section id="apropos" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Le Centre
          </p>
          <h2 className="section-title mt-3">
            Une approche scientifique et humaine
          </h2>
          <p className="section-subtitle mx-auto">
            Notre centre de médecine esthétique et régénérative allie rigueur
            médicale et sensibilité esthétique. Nous croyons que la vraie beauté
            naît de l&apos;harmonie entre science, sécurité et bien-être.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="card-base text-center md:text-left">
              <div className="mx-auto md:mx-0 mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-blue/10">
                <value.icon className="h-7 w-7 text-slate-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-blue/70">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
