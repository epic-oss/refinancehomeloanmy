import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Best Bank to Refinance Home Loan Malaysia ${currentYear} | Quick Comparison`,
  description: `Best bank for refinancing in Malaysia: Public Bank (lowest rate), Maybank (highest margin), CIMB (self-employed), Hong Leong (high DSR). Quick comparison guide.`,
  keywords: "best bank refinance Malaysia, best refinance rate Malaysia, Public Bank vs Maybank refinance, which bank refinance, home loan refinance comparison",
  openGraph: {
    title: `Best Bank to Refinance Home Loan Malaysia ${currentYear} | Quick Comparison`,
    description: `Best bank for refinancing in Malaysia: Public Bank (lowest rate), Maybank (highest margin), CIMB (self-employed), Hong Leong (high DSR). Quick comparison guide.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function BestBankRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
