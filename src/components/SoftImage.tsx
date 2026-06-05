"use client";

import Image from "next/image";
import { useState } from "react";

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

  return (
    <div className={`soft-image-wrap ${aspectClasses[aspect]} ${className}`}>
      {!loaded && (
        <div className="soft-image-placeholder absolute inset-0 z-0" aria-hidden="true" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="soft-image-photo z-[1] object-cover"
        loading={priority ? undefined : "lazy"}
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
