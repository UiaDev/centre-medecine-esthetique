"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 hero-bg-shell" aria-hidden="true">
      <div className="hero-bg-placeholder absolute inset-0" />

      <Image
        src="/images/cabinet-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`hero-bg-image object-cover ${loaded ? "hero-bg-image-visible" : ""}`}
        onLoad={() => setLoaded(true)}
        onLoadingComplete={() => setLoaded(true)}
      />

      <div className="hero-bg-overlay absolute inset-0" />
      <div className="hero-bg-glow absolute inset-0" />
    </div>
  );
}
