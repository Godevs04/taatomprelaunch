import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Dancing_Script, Pacifico, Satisfy } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taatom - Travel Anywhere And Take Only Memories",
    template: "%s | Taatom",
  },
  description: "A travel-focused social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide. Join thousands of travelers sharing their adventures.",
  keywords: [
    "travel",
    "social media",
    "travel platform",
    "journey documentation",
    "travel routes",
    "travel community",
    "explorer",
    "adventure",
    "travel blog",
    "travel sharing",
    "GPS tracking",
    "travel memories",
    "worldwide travel",
    "travel social network",
  ],
  authors: [{ name: "Taatom Team" }],
  creator: "Taatom",
  publisher: "Taatom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/assets/Logo_Only.PNG", sizes: "any" },
    ],
    apple: [
      { url: "/assets/Logo_Only.PNG", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/assets/Logo_Only.PNG",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Taatom",
    title: "Taatom - Travel Anywhere And Take Only Memories",
    description: "A travel-focused social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide.",
    images: [
      {
        url: `${siteUrl}/assets/Logo_Only.PNG`,
        width: 1200,
        height: 630,
        alt: "Taatom - Travel Anywhere And Take Only Memories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taatom - Travel Anywhere And Take Only Memories",
    description: "A travel-focused social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide.",
    images: [`${siteUrl}/assets/Logo_Only.PNG`],
    creator: "@taatom",
    site: "@taatom",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/Logo_Only.PNG" />
        <link rel="apple-touch-icon" href="/assets/Logo_Only.PNG" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${playfair.variable} ${dancing.variable} ${pacifico.variable} ${satisfy.variable}`}>
        {children}
      </body>
    </html>
  );
}

