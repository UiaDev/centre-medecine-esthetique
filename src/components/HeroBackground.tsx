"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const markLoaded = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      markLoaded();
    }
  }, [markLoaded]);

  return (
    <div className="pointer-events-none absolute inset-0 hero-bg-shell" aria-hidden="true">
      <div
        className={`hero-bg-placeholder absolute inset-0 ${loaded ? "hero-bg-placeholder-hidden" : ""}`}
      />

      <Image
        ref={imgRef}
        src="/images/cabinet-hero.png?v=3"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`hero-bg-image object-cover object-[58%_42%] ${loaded ? "hero-bg-image-visible" : ""}`}
        onLoad={markLoaded}
      />

      <div className={`hero-bg-overlay absolute inset-0 ${loaded ? "hero-bg-overlay-visible" : ""}`} />
      <div className={`hero-bg-glow absolute inset-0 ${loaded ? "hero-bg-glow-visible" : ""}`} />
    </div>
  );
}
