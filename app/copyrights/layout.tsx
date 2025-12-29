import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";

export const metadata: Metadata = {
  title: "Copyright Consent",
  description: "Copyright Consent and User Responsibility for Taatom - Understand your responsibilities regarding copyright and intellectual property when using our service.",
  keywords: ["copyright", "copyright consent", "intellectual property", "user responsibility", "DMCA", "content ownership"],
  openGraph: {
    title: "Copyright Consent - Taatom",
    description: "Copyright Consent and User Responsibility for Taatom - Understand your responsibilities regarding copyright when using our service.",
    type: "article",
    url: `${siteUrl}/copyrights`,
  },
  twitter: {
    card: "summary",
    title: "Copyright Consent - Taatom",
    description: "Copyright Consent and User Responsibility for Taatom - Understand your responsibilities regarding copyright when using our service.",
  },
  alternates: {
    canonical: `${siteUrl}/copyrights`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CopyrightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

