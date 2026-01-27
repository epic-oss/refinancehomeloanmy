import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Home Loan Eligibility Calculator Malaysia ${currentYear} | Check How Much You Can Borrow`,
  description: `Free home loan eligibility calculator Malaysia. Find out maximum loan amount based on your salary, age & debts. Instant results for Maybank, CIMB, Public Bank & more.`,
  keywords: "home loan eligibility calculator Malaysia, housing loan calculator, how much loan can I get, loan eligibility check, bank loan calculator Malaysia, DSR calculator",
  openGraph: {
    title: `Home Loan Eligibility Calculator Malaysia ${currentYear} | Check How Much You Can Borrow`,
    description: `Free home loan eligibility calculator Malaysia. Find out maximum loan amount based on your salary, age & debts. Instant results for Maybank, CIMB, Public Bank & more.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function HomeLoanEligibilityCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
