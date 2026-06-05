"use client";

import { QRCodeSVG } from "qrcode.react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MapQrCode() {
  const { mapsUrl } = siteConfig;

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-gold/30 hover:bg-white/10"
      aria-label="Scanner le QR code pour ouvrir la localisation sur Google Maps"
    >
      <div className="flex-shrink-0 rounded-lg bg-white p-2.5 transition-colors group-hover:ring-2 group-hover:ring-gold/30">
        <QRCodeSVG
          value={mapsUrl}
          size={110}
          level="M"
          marginSize={1}
          fgColor="#5B788E"
          bgColor="#FFFFFF"
          title="QR Code — Localisation du centre"
        />
      </div>
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
          <MapPin className="h-4 w-4 text-gold" />
          Scannez pour nous retrouver
        </p>
        <p className="mt-1 text-xs leading-relaxed text-white/55">
          Compatible Android &amp; iOS
        </p>
      </div>
    </a>
  );
}
