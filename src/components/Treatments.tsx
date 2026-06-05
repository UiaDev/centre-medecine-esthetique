import Link from "next/link";
import { ArrowRight, Syringe, Zap, Dna } from "lucide-react";
import SoftImage from "@/components/SoftImage";
import ScrollReveal from "@/components/ScrollReveal";

const treatments = [
  {
    icon: Syringe,
    title: "Injections anti-âge",
    description:
      "Acide hyaluronique, botox et biostimulateurs pour lisser les rides, restaurer les volumes et rajeunir le visage en douceur.",
    href: "#rendez-vous",
  },
  {
    icon: Zap,
    title: "Laser médical",
    description:
      "Traitements laser ciblés pour l'unification du teint, la réduction des taches pigmentaires et l'amélioration de la texture cutanée.",
    href: "#rendez-vous",
  },
  {
    icon: Dna,
    title: "Thérapie cellulaire régénérative",
    description:
      "Protocoles de régénération tissulaire à base de PRP et de facteurs de croissance pour stimuler la production naturelle de collagène.",
    href: "#rendez-vous",
  },
  {
    icon: Syringe,
    title: "Peeling & soins médicaux",
    description:
      "Peelings superficiels et moyens, soins hydratants et réparateurs adaptés à chaque type de peau pour un éclat immédiat.",
    href: "#rendez-vous",
  },
  {
    icon: Zap,
    title: "Épilation laser définitive",
    description:
      "Technologie laser dernière génération pour une épilation durable, confortable et adaptée à tous les phototypes.",
    href: "#rendez-vous",
  },
  {
    icon: Dna,
    title: "Mésothérapie & nutritherapie",
    description:
      "Cocktails de vitamines et nutriments injectés en intradermique pour revitaliser la peau en profondeur et prévenir le vieillissement.",
    href: "#rendez-vous",
  },
];

export default function Treatments() {
  return (
    <section id="traitements" className="section-padding section-surface">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Nos traitements</p>
          <h2 className="section-title mt-3">
            Des soins d&apos;exception, adaptés à vos besoins
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez notre gamme complète de traitements médico-esthétiques,
            réalisés par des praticiens expérimentés dans un environnement
            clinique haut de gamme.
          </p>
        </ScrollReveal>

        {/* Image 3 — Soins */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
          <ScrollReveal className="lg:col-span-2">
            <SoftImage
              src="/images/cabinet-soins.png"
              alt="Séance de soin esthétique personnalisée — praticienne et patiente dans notre cabinet médical à Rabat"
              aspect="video"
            />
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-blue/10 bg-white/70 p-8 shadow-soft backdrop-blur-sm md:p-10">
              <p className="section-eyebrow">Soins sur mesure</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-blue md:text-2xl">
                Chaque protocole est adapté à votre peau
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-blue/70">
                Avant chaque traitement, une consultation approfondie permet
                d&apos;établir un plan personnalisé. Nos praticiens vous
                accompagnent à chaque étape, en toute transparence et bienveillance.
              </p>
              <Link href="#rendez-vous" className="btn-appointment mt-6 inline-flex">
                <span className="relative">Prendre rendez-vous</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <ScrollReveal key={treatment.title}>
              <article className="card-base flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15">
                  <treatment.icon className="h-6 w-6 text-gold-dark" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-blue">{treatment.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-blue/70">
                  {treatment.description}
                </p>
                <Link
                  href={treatment.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors hover:text-slate-blue"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
