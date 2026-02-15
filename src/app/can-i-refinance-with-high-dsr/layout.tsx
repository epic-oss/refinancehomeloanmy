import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `High DSR? These 5 Banks Still Approve Refinancing (75% DSR OK)`,
  description: `Hong Leong accepts 75% DSR. RHB, CIMB up to 70%. See exactly which banks approve high DSR refinancing + 5 tricks to get approved even if rejected before.`,
  keywords: "high DSR refinance Malaysia, 70% DSR home loan, which bank accepts high DSR, DSR limit Malaysia, refinance rejected DSR",
  openGraph: {
    title: `High DSR? These 5 Banks Still Approve Refinancing (75% DSR OK)`,
    description: `Hong Leong accepts 75% DSR. RHB, CIMB up to 70%. See exactly which banks approve high DSR refinancing + 5 tricks to get approved even if rejected before.`,
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
