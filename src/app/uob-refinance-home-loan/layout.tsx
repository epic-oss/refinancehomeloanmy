import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `UOB Refinance Home Loan Malaysia ${currentYear} | Intelligent Home Loan Rates`,
  description: `UOB home loan refinancing Malaysia. Compare UOB Intelligent Home Loan & Flexi Mortgage rates from 4.61%, up to 95% margin, no processing fees. Check eligibility & apply.`,
  keywords: "UOB refinance, UOB home loan, UOB housing loan Malaysia, UOB Intelligent Home Loan, UOB Flexi Mortgage, UOB refinancing rates, UOB home financing-i",
  openGraph: {
    title: `UOB Refinance Home Loan Malaysia ${currentYear} | Intelligent Home Loan Rates`,
    description: `UOB home loan refinancing Malaysia. Compare UOB Intelligent Home Loan & Flexi Mortgage rates from 4.61%, up to 95% margin, no processing fees. Check eligibility & apply.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function UOBRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
