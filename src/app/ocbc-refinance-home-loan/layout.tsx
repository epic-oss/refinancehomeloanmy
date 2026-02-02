import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `OCBC Refinance Home Loan Malaysia ${currentYear} | Rates & How to Apply`,
  description: `OCBC home loan refinancing Malaysia. Competitive rates, flexible packages, international bank reliability. Compare OCBC rates and check your eligibility.`,
  openGraph: {
    title: `OCBC Refinance Home Loan Malaysia ${currentYear} | Rates & How to Apply`,
    description: `OCBC home loan refinancing Malaysia. Competitive rates, flexible packages, international bank reliability. Compare OCBC rates and check your eligibility.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function OCBCRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
