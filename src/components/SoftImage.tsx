import Image from "next/image";

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
  return (
    <div className={`soft-image-wrap ${aspectClasses[aspect]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />
    </div>
  );
}
