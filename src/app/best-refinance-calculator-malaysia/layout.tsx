import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Best Refinance Calculator Malaysia ${currentYear} | Top 5 Compared`,
  description: `Compare the best home loan refinance calculators in Malaysia. We reviewed Maybank, PropertyGuru, iMoney, RinggitPlus & more. Find the most accurate calculator for your needs.`,
  keywords: "best refinance calculator Malaysia, refinance home loan calculator, refinance house loan calculator, home loan calculator comparison, mortgage calculator Malaysia",
  openGraph: {
    title: `Best Refinance Calculator Malaysia ${currentYear} | Top 5 Compared`,
    description: `Compare the best home loan refinance calculators in Malaysia. We reviewed Maybank, PropertyGuru, iMoney, RinggitPlus & more. Find the most accurate calculator for your needs.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function BestRefinanceCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
