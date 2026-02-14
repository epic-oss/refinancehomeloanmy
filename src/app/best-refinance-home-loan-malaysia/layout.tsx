import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Best Refinance Home Loan Malaysia ${currentYear} | Compare Top Packages`,
  description: `Compare the best home loan refinancing packages in Malaysia ${currentYear}. Rates from 2.88%, zero entry cost deals, flexi vs term loans. Find the best refinance deal for your situation.`,
  keywords: "best refinance home loan Malaysia, best home loan refinancing, refinance package comparison, lowest refinance rate Malaysia, flexi loan Malaysia, zero cost refinancing",
  openGraph: {
    title: `Best Refinance Home Loan Malaysia ${currentYear} | Compare Top Packages`,
    description: `Compare the best home loan refinancing packages in Malaysia ${currentYear}. Rates from 2.88%, zero entry cost deals, flexi vs term loans. Find the best refinance deal for your situation.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function BestRefinanceHomeLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
