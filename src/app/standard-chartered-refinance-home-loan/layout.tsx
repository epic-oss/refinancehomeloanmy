import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Standard Chartered Refinance Home Loan Malaysia ${currentYear} | Premium Rates & Benefits`,
  description: `Standard Chartered home loan refinancing Malaysia. MortgageOne offset account, rates from 4.10%, up to 90% margin, expat-friendly. Check eligibility & apply.`,
  keywords: "Standard Chartered refinance, Standard Chartered home loan, MortgageOne, Standard Chartered housing loan Malaysia, expat home loan Malaysia, premium home loan",
  openGraph: {
    title: `Standard Chartered Refinance Home Loan Malaysia ${currentYear} | Premium Rates & Benefits`,
    description: `Standard Chartered home loan refinancing Malaysia. MortgageOne offset account, rates from 4.10%, up to 90% margin, expat-friendly. Check eligibility & apply.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function StandardCharteredRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
