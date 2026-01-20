import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "D'Pary - Descubre los Mejores Eventos y Vida Nocturna",
    template: "%s | D'Pary",
  },
  description:
    "D'Pary es la app definitiva para descubrir eventos, comprar tickets y reservar mesas VIP en los mejores locales nocturnos de tu ciudad. Disponible para iOS y Android.",
  keywords: [
    "eventos",
    "vida nocturna",
    "clubs",
    "discotecas",
    "tickets",
    "entradas",
    "reservas",
    "mesas VIP",
    "fiestas",
    "nightlife",
    "D'Pary",
    "dpary",
  ],
  authors: [{ name: "D'Pary" }],
  creator: "D'Pary",
  publisher: "Yuti Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dpary.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dpary.app",
    siteName: "D'Pary",
    title: "D'Pary - Descubre los Mejores Eventos y Vida Nocturna",
    description:
      "La app definitiva para descubrir eventos, comprar tickets y reservar mesas VIP en los mejores locales nocturnos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "D'Pary - Tu app de vida nocturna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D'Pary - Descubre los Mejores Eventos",
    description:
      "La app definitiva para descubrir eventos y vida nocturna.",
    images: ["/og-image.png"],
    creator: "@dpary",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
