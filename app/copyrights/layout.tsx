import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Consent - Taatom",
  description: "Copyright Consent and User Responsibility for Taatom - Understand your responsibilities regarding copyright when using our service.",
};

export default function CopyrightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

