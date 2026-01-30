import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Refinance Home Loan Calculator Malaysia ${currentYear} | Calculate Your Savings`,
  description: `Free refinance home loan calculator Malaysia. Calculate how much you can save by refinancing your house loan. Compare rates and see monthly savings instantly.`,
  keywords: "refinance home loan calculator, refinance house loan calculator, home loan calculator Malaysia, refinancing calculator, mortgage calculator, housing loan calculator, refinance savings calculator",
  openGraph: {
    title: `Refinance Home Loan Calculator Malaysia ${currentYear} | Calculate Your Savings`,
    description: "Free refinance home loan calculator Malaysia. Calculate how much you can save by refinancing your house loan. Compare rates and see monthly savings instantly.",
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
