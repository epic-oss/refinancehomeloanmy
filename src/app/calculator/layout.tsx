import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Refinance Home Loan Calculator Malaysia ${currentYear} | Calculate Your Savings`,
  description: `Refinance home loan calculator Malaysia ${currentYear}. Calculate monthly savings, total interest saved, and break-even period. Compare rates from 14 banks. Free instant results.`,
  keywords: "refinance home loan calculator, refinance house loan calculator, home loan calculator Malaysia, refinancing calculator, mortgage calculator, housing loan calculator, refinance savings calculator",
  openGraph: {
    title: `Refinance Home Loan Calculator Malaysia ${currentYear} | Calculate Your Savings`,
    description: `Refinance home loan calculator Malaysia ${currentYear}. Calculate monthly savings, total interest saved, and break-even period. Compare rates from 14 banks. Free instant results.`,
    type: "website",
    locale: "en_MY",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
