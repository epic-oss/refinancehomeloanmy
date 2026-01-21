import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Contoh Kiraan Refinance Rumah Malaysia ${currentYear} - Panduan Lengkap | RefinanceHomeLoanMY`,
  description: `Lihat contoh kiraan refinance rumah yang lengkap. Ketahui berapa anda boleh jimat dengan refinancing ${currentYear}.`,
  keywords:
    "contoh refinance rumah, kiraan refinance rumah, contoh kiraan refinance, kalkulator refinance rumah",
  openGraph: {
    title: `Contoh Kiraan Refinance Rumah Malaysia ${currentYear}`,
    description: `Lihat contoh kiraan refinance rumah yang lengkap. Ketahui berapa anda boleh jimat.`,
    type: "article",
    locale: "ms_MY",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
