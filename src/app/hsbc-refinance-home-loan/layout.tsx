import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `HSBC Refinance Home Loan Malaysia ${currentYear} | HomeSmart Rates & How to Apply`,
  description: `HSBC home loan refinancing Malaysia. HomeSmart package, competitive rates from 4.30%, up to RM50,000 upfront costs waived. Check eligibility and apply.`,
  keywords: "HSBC refinance, HSBC home loan Malaysia, HSBC HomeSmart, HSBC SmartMortgage, HSBC housing loan, HSBC Amanah, HSBC mortgage Malaysia",
  openGraph: {
    title: `HSBC Refinance Home Loan Malaysia ${currentYear} | HomeSmart Rates & How to Apply`,
    description: `HSBC home loan refinancing Malaysia. HomeSmart package, competitive rates from 4.30%, up to RM50,000 upfront costs waived. Check eligibility and apply.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function HSBCRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
