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

export const metadata: Metadata = {
  title: "Taatom - Travel Anywhere And Take Only Memories",
  description: "A travel-focused social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide.",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${playfair.variable} ${dancing.variable} ${pacifico.variable} ${satisfy.variable}`}>{children}</body>
    </html>
  );
}

