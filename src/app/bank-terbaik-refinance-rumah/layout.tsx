import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Bank Terbaik Untuk Refinance Rumah Malaysia ${currentYear} | RefinanceHomeLoanMY`,
  description: `Bandingkan kadar refinance rumah dari 10+ bank di Malaysia. Ketahui bank mana yang menawarkan kadar terendah untuk refinance ${currentYear}.`,
  keywords:
    "bank terbaik untuk refinance rumah, bank untuk refinance rumah, bank terbaik refinance 2026, refinance rumah malaysia",
  openGraph: {
    title: `Bank Terbaik Untuk Refinance Rumah Malaysia ${currentYear}`,
    description: `Bandingkan kadar refinance rumah dari 10+ bank di Malaysia. Ketahui bank mana yang menawarkan kadar terendah.`,
    type: "article",
    locale: "ms_MY",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
