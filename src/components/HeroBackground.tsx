"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 hero-bg-shell" aria-hidden="true">
      {!loaded && <div className="hero-bg-placeholder absolute inset-0 z-0" />}

      <Image
        src="/images/cabinet-hero.png?v=3"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="hero-bg-image z-[1] object-cover object-center"
        onLoad={() => setLoaded(true)}
      />

      <div className="hero-bg-overlay absolute inset-0 z-[2]" />
    </div>
  );
}
