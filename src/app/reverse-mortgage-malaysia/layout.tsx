import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Reverse Mortgage Malaysia ${currentYear} | Is It Available? + Alternatives`,
  description: `Looking for reverse mortgage in Malaysia? Learn what it is, which banks offer it, and discover better alternatives like cash-out refinancing to unlock your home equity.`,
  openGraph: {
    title: `Reverse Mortgage Malaysia ${currentYear} | Is It Available? + Alternatives`,
    description: `Looking for reverse mortgage in Malaysia? Learn what it is, which banks offer it, and discover better alternatives like cash-out refinancing to unlock your home equity.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function ReverseMortgageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
