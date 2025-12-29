import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Taatom",
  description: "Taatom's Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

