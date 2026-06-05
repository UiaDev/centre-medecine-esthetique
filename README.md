# Centre de Médecine Esthétique et Régénérative

Site vitrine premium one-page — Next.js, Tailwind CSS, Lucide React.

## Prérequis

Installez [Node.js](https://nodejs.org/) (version 18 ou supérieure).

## Installation

```powershell
cd C:\Users\Admin\Desktop\centre-medecine-esthetique
npm install
```

## Lancer en local

```powershell
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Publier sur Internet

| Plateforme | Commande |
|------------|----------|
| **Vercel** | Connectez le dossier sur [vercel.com](https://vercel.com) — déploiement automatique |
| **Netlify** | `npm run build` puis déployez le dossier `.next` ou connectez GitHub |
| **Build local** | `npm run build && npm start` |

## Structure

```
src/
├── app/
│   ├── globals.css     # Styles globaux + classes utilitaires
│   ├── layout.tsx      # Layout racine + métadonnées
│   └── page.tsx        # Page one-page (assemble tous les composants)
└── components/
    ├── Header.tsx      # Navigation sticky + CTA or
    ├── Hero.tsx        # Section d'accroche
    ├── About.tsx       # Valeurs du centre
    ├── Treatments.tsx  # Grille des traitements
    ├── Booking.tsx     # Prise de rendez-vous
    ├── Contact.tsx     # Contact + formulaire
    └── Footer.tsx      # Pied de page
public/
└── logo.png            # Logo du centre
```

## Personnalisation

- **Couleurs** : `tailwind.config.ts` → `slate.blue` (#5B788E) et `gold` (#D1B78D)
- **Textes** : modifiez chaque composant dans `src/components/`
- **Calendrier** : remplacez le placeholder dans `Booking.tsx` par votre iframe Doctolib/Calendly
- **Carte** : remplacez le placeholder dans `Contact.tsx` par votre iframe Google Maps
