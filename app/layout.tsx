import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Overpass, Overpass_Mono } from "next/font/google";

import { StructuredData } from "@/components/StructuredData";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";

import "./globals.css";

/* Overpass viene de Highway Gothic, la familia de la señalización vial que
   también usa Colombia: el mundo del sitio es un mapa de transporte. Es
   variable, así que un solo archivo cubre todos los pesos. `next/font` la
   auto-hospeda: cero peticiones externas y cero CLS por cambio de fuente. */
const overpass = Overpass({
  subsets: ["latin", "latin-ext"],
  variable: "--font-overpass",
  display: "swap",
});

/* Solo para datos: horas, códigos, normas. */
const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-overpass-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.legalName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.lang} className={`${overpass.variable} ${overpassMono.variable}`}>
      <body className="antialiased">
        <StructuredData />

        {/* Salto directo al contenido: primer tabulador de la página. */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-button focus:bg-primary focus:px-5 focus:py-3 focus:text-small focus:font-bold focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
