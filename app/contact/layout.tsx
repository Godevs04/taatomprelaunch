import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Taatom - Have a question or feedback? We'd love to hear from you! Reach out to our team for support, inquiries, or suggestions.",
  keywords: ["contact", "contact us", "support", "customer service", "help", "Taatom contact"],
  openGraph: {
    title: "Contact Us - Taatom",
    description: "Contact Taatom - Have a question or feedback? We'd love to hear from you!",
    type: "website",
    url: `${siteUrl}/contact`,
  },
  twitter: {
    card: "summary",
    title: "Contact Us - Taatom",
    description: "Contact Taatom - Have a question or feedback? We'd love to hear from you!",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

