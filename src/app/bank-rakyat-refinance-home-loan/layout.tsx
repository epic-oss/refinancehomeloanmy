import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Bank Rakyat Refinance Home Loan ${currentYear} | Rates, Eligibility & How to Apply`,
  description: `Bank Rakyat home loan refinancing for government servants & Bumiputera. Competitive Islamic rates, flexible tenure, easy approval. Check eligibility & apply.`,
  keywords: "Bank Rakyat refinance, Bank Rakyat home loan, Pembiayaan Rumah-i, Islamic home loan Malaysia, government servant home loan, Bumiputera home loan",
  openGraph: {
    title: `Bank Rakyat Refinance Home Loan ${currentYear} | Rates, Eligibility & How to Apply`,
    description: `Bank Rakyat home loan refinancing for government servants & Bumiputera. Competitive Islamic rates, flexible tenure, easy approval. Check eligibility & apply.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function BankRakyatRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
