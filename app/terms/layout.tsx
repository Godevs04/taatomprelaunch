import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Taatom",
  description: "Terms of Service for Taatom - Understand your rights and responsibilities when using our platform.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

