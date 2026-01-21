import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Kelebihan & Keburukan Refinance Rumah Malaysia ${currentYear} | RefinanceHomeLoanMY`,
  description: `Ketahui kelebihan dan keburukan refinance rumah sebelum membuat keputusan. Panduan lengkap pro dan kontra refinancing ${currentYear}.`,
  keywords:
    "kelebihan refinance rumah, kebaikan dan keburukan refinance rumah, keburukan refinance rumah, pro kontra refinance",
  openGraph: {
    title: `Kelebihan & Keburukan Refinance Rumah Malaysia ${currentYear}`,
    description: `Ketahui kelebihan dan keburukan refinance rumah sebelum membuat keputusan.`,
    type: "article",
    locale: "ms_MY",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
