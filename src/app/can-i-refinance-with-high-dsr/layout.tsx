import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "High DSR? 5 Banks That Still Approve Refinancing (2026)",
  description: "DSR above 70%? Don't give up. Bank Rakyat approves up to 80%, LPPSA has no DSR limit. See which banks accept high-DSR applicants + how to lower yours.",
  keywords: "high DSR refinance Malaysia, 70% DSR home loan, which bank accepts high DSR, DSR limit Malaysia, refinance rejected DSR",
  openGraph: {
    title: "High DSR? 5 Banks That Still Approve Refinancing (2026)",
    description: "DSR above 70%? Don't give up. Bank Rakyat approves up to 80%, LPPSA has no DSR limit. See which banks accept high-DSR applicants + how to lower yours.",
    type: "article",
    locale: "en_MY",
  },
};

export default function HighDSRRefinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
