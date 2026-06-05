import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Centre de Médecine Esthétique et Régénérative",
  description:
    "Révélez votre beauté naturelle grâce à une approche scientifique et humaine. Injections, laser médical et thérapie cellulaire régénérative",
};

export const viewport = {
  themeColor: "#5B788E",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} bg-white text-slate-blue`}
      style={{ colorScheme: "light only" }}
    >
      <head>
        <link rel="preload" as="image" href="/images/cabinet-hero.png?v=8" fetchPriority="high" />
        <link rel="preload" as="image" href="/logo.png" />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-blue">{children}</body>
    </html>
  );
}
