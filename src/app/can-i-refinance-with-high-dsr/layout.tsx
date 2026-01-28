import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Can I Refinance with High DSR Malaysia ${currentYear} | Banks That Accept 70%+`,
  description: `Yes, you can refinance with high DSR in Malaysia. See which banks accept 70-80% DSR, how to improve approval chances, and alternatives if rejected.`,
  keywords: "high DSR refinance Malaysia, 70% DSR home loan, which bank accepts high DSR, DSR limit Malaysia, refinance rejected DSR",
  openGraph: {
    title: `Can I Refinance with High DSR Malaysia ${currentYear} | Banks That Accept 70%+`,
    description: `Yes, you can refinance with high DSR in Malaysia. See which banks accept 70-80% DSR, how to improve approval chances, and alternatives if rejected.`,
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
