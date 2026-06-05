"use client";

import { useState } from "react";

export default function HeroBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 hero-bg-shell" aria-hidden="true">
      {!loaded && <div className="hero-bg-placeholder absolute inset-0 z-0" />}

      {/* img natif = fichier PNG original, sans compression Next.js */}
      <img
        src="/images/cabinet-hero.png?v=5"
        alt=""
        decoding="async"
        fetchPriority="high"
        className="hero-bg-image z-[1]"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
