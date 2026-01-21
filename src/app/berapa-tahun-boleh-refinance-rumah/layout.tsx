import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Berapa Tahun Boleh Refinance Rumah? Panduan ${currentYear} | RefinanceHomeLoanMY`,
  description: `Ketahui bila anda layak refinance rumah di Malaysia. Panduan lengkap tentang tempoh minimum dan syarat refinancing ${currentYear}.`,
  keywords:
    "berapa tahun boleh refinance rumah, bila boleh refinance rumah, syarat refinance rumah, tempoh lock-in refinance",
  openGraph: {
    title: `Berapa Tahun Boleh Refinance Rumah Malaysia ${currentYear}`,
    description: `Ketahui bila anda layak refinance rumah di Malaysia. Panduan lengkap tentang tempoh minimum.`,
    type: "article",
    locale: "ms_MY",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
