import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Taatom",
  description: "Contact Taatom - Have a question or feedback? We'd love to hear from you!",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

