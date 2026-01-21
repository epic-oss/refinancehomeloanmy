import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Home Loan Refinancing Calculator Malaysia ${currentYear} - Calculate Savings`,
  description: `Calculate how much you can save by refinancing your home loan in Malaysia ${currentYear}. Compare rates from Maybank, CIMB, Public Bank & more. Free calculator.`,
  keywords: "home loan calculator Malaysia, refinancing calculator, mortgage calculator, housing loan calculator, refinance savings calculator",
  openGraph: {
    title: `Home Loan Refinancing Calculator Malaysia ${currentYear}`,
    description: "Calculate your potential savings from refinancing your home loan. Free calculator for Malaysian homeowners.",
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
