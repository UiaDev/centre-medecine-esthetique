"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ScanFace,
  PersonStanding,
  Feather,
  Droplets,
  Plus,
  X,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type Category = {
  id: string;
  icon: LucideIcon;
  title: string;
  teaser: string;
  treatments: { title: string; description: string }[];
};

const categories: Category[] = [
  {
    id: "visage",
    icon: ScanFace,
    title: "Visage",
    teaser: "Injections, peeling et laser médical pour un teint lumineux.",
    treatments: [
      {
        title: "Injections anti-âge",
        description:
          "Acide hyaluronique, botox et biostimulateurs pour lisser les rides et restaurer les volumes.",
      },
      {
        title: "Laser médical visage",
        description:
          "Unification du teint, réduction des taches pigmentaires et amélioration de la texture cutanée.",
      },
      {
        title: "Peeling & soins médicaux",
        description:
          "Peelings superficiels et moyens adaptés à chaque type de peau pour un éclat immédiat.",
      },
    ],
  },
  {
    id: "corps",
    icon: PersonStanding,
    title: "Corps & Silhouette",
    teaser: "Mésothérapie, drainage et fermeté pour sublimer votre silhouette.",
    treatments: [
      {
        title: "Protocoles de fermeté & drainage",
        description:
          "Soins raffermissants pensés pour affiner et tonifier la silhouette en douceur.",
      },
      {
        title: "Accompagnement silhouette sur mesure",
        description:
          "Un plan personnalisé établi avec votre praticien selon vos objectifs et votre morphologie.",
      },
    ],
  },
  {
    id: "cheveux",
    icon: Feather,
    title: "Cheveux",
    teaser: "PRP, mésothérapie et bilans personnalisés pour un cuir chevelu en santé.",
    treatments: [
      {
        title: "Thérapie capillaire régénérative",
        description:
          "Protocoles à base de PRP et de facteurs de croissance pour stimuler la repousse naturelle.",
      },
      {
        title: "Mésothérapie capillaire",
        description:
          "Cocktails de vitamines ciblés pour renforcer et fortifier le cuir chevelu.",
      },
      {
        title: "Bilan capillaire personnalisé",
        description:
          "Diagnostic complet du cuir chevelu et plan de soins adapté à votre situation.",
      },
    ],
  },
  {
    id: "epilation-peau",
    icon: Droplets,
    title: "Épilation & Peau",
    teaser: "Épilation laser définitive et soins de peau adaptés à tous les phototypes.",
    treatments: [
      {
        title: "Épilation laser définitive",
        description:
          "Technologie laser dernière génération pour une épilation durable, confortable et adaptée à tous les phototypes.",
      },
      {
        title: "Soins hydratants & réparateurs",
        description:
          "Soins de peau ciblés pour restaurer confort, hydratation et éclat au quotidien.",
      },
      {
        title: "Traitement des taches & de la texture",
        description:
          "Laser médical ciblé pour uniformiser le teint et affiner le grain de peau.",
      },
    ],
  },
];

export default function DiscoverByArea() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeCategory = categories.find((c) => c.id === openId) ?? null;

  useEffect(() => {
    if (!activeCategory) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCategory]);

  return (
    <section id="decouvrir" className="section-divider section-padding section-surface">
      <div className="section-container">
        <ScrollReveal direction="up" className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Vous ne savez pas par où commencer ?</p>
          <h2 className="section-title mt-3">Découvrez nos soins par zone</h2>
          <p className="section-subtitle mx-auto">
            Parcourez nos catégories et laissez-vous guider vers le soin qui
            vous correspond.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} direction="up" delay={(index % 4) * 100}>
              <article className="card-base flex h-full flex-col items-center p-8 text-center">
                <div className="group/icon relative mb-5 h-16 w-16">
                  <div
                    className="discover-icon-float flex h-16 w-16 items-center justify-center rounded-full bg-gold/15"
                    style={{ animationDelay: `${(index % 4) * 0.25}s` }}
                  >
                    <category.icon className="h-8 w-8 text-gold-dark" strokeWidth={1.5} />
                  </div>

                  <div className="discover-tooltip pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-60 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover/icon:opacity-100">
                    <div className="discover-tooltip-box">{category.teaser}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-blue">{category.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-blue/70">
                  {category.teaser}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenId(category.id)}
                  className="btn-discover mt-6 w-full"
                  aria-haspopup="dialog"
                >
                  <span className="btn-discover-icon">
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="relative">Découvrir</span>
                  <ArrowRight className="btn-discover-arrow relative h-4 w-4" strokeWidth={2} />
                </button>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {activeCategory && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-blue/30 p-4 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
          role="presentation"
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-soft md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="discover-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <activeCategory.icon className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                </div>
                <h3 id="discover-modal-title" className="text-xl font-semibold text-slate-blue">
                  {activeCategory.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Fermer"
                className="flex-shrink-0 rounded-lg p-2 text-slate-blue/60 transition-colors hover:bg-slate-blue/5 hover:text-slate-blue"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-6 space-y-5">
              {activeCategory.treatments.map((treatment) => (
                <li key={treatment.title} className="border-b border-slate-blue/10 pb-5 last:border-0 last:pb-0">
                  <p className="font-semibold text-slate-blue">{treatment.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-blue/70">
                    {treatment.description}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              href="#rendez-vous"
              onClick={() => setOpenId(null)}
              className="btn-appointment mt-8 w-full"
            >
              <span className="relative">Prendre rendez-vous</span>
              <ArrowRight className="relative h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
