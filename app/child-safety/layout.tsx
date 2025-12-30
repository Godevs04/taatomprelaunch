import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";

export const metadata: Metadata = {
  title: "Child Safety & Compliance",
  description: "Taatom's comprehensive child safety measures, content moderation systems, privacy controls, and compliance features. Learn about our commitment to protecting young users.",
  keywords: ["child safety", "COPPA compliance", "content moderation", "child protection", "online safety", "parental controls", "age restrictions"],
  openGraph: {
    title: "Child Safety & Compliance - Taatom",
    description: "Taatom's comprehensive child safety measures, content moderation systems, privacy controls, and compliance features.",
    type: "article",
    url: `${siteUrl}/child-safety`,
  },
  twitter: {
    card: "summary",
    title: "Child Safety & Compliance - Taatom",
    description: "Taatom's comprehensive child safety measures, content moderation systems, privacy controls, and compliance features.",
  },
  alternates: {
    canonical: `${siteUrl}/child-safety`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChildSafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

