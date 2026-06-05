"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type SoftImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  aspect?: "video" | "square" | "wide";
  className?: string;
};

const aspectClasses = {
  video: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export default function SoftImage({
  src,
  alt,
  priority = false,
  aspect = "video",
  className = "",
}: SoftImageProps) {
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
    <div className={`soft-image-wrap ${aspectClasses[aspect]} ${className}`}>
      <div
        className={`soft-image-placeholder absolute inset-0 ${loaded ? "soft-image-placeholder-hidden" : ""}`}
        aria-hidden="true"
      />

      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className={`soft-image-photo object-cover ${loaded ? "soft-image-photo-visible" : ""}`}
        loading={priority ? undefined : "lazy"}
        priority={priority}
        onLoad={markLoaded}
      />
    </div>
  );
}
