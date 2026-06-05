"use client";

import { useState } from "react";

export default function HeroBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 hero-bg-shell" aria-hidden="true">
      {!loaded && <div className="hero-bg-placeholder absolute inset-0 z-0" />}

      <div className="hero-bg-image-wrap absolute inset-0 z-[1]">
        <img
          src="/images/cabinet-hero.png?v=7"
          alt=""
          decoding="async"
          fetchPriority="high"
          className="hero-bg-image"
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="hero-bg-overlay absolute inset-0 z-[2]" />
      <div className="hero-bg-glow absolute inset-0 z-[2]" />
    </div>
  );
}
