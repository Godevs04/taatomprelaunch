import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Taatom's Privacy Policy - Learn how we collect, use, disclose, and protect your information when you use our mobile application and services.",
  keywords: ["privacy policy", "data protection", "user privacy", "information security", "Taatom privacy"],
  openGraph: {
    title: "Privacy Policy - Taatom",
    description: "Taatom's Privacy Policy - Learn how we collect, use, and protect your information.",
    type: "article",
    url: `${siteUrl}/privacy`,
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Taatom",
    description: "Taatom's Privacy Policy - Learn how we collect, use, and protect your information.",
  },
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

