import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Taatom - Understand your rights and responsibilities when using our platform. Read our complete terms and conditions.",
  keywords: ["terms of service", "terms and conditions", "user agreement", "Taatom terms", "platform rules"],
  openGraph: {
    title: "Terms of Service - Taatom",
    description: "Terms of Service for Taatom - Understand your rights and responsibilities when using our platform.",
    type: "article",
    url: `${siteUrl}/terms`,
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - Taatom",
    description: "Terms of Service for Taatom - Understand your rights and responsibilities when using our platform.",
  },
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

