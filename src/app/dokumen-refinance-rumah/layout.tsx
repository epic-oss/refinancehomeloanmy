import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Senarai Dokumen Refinance Rumah Malaysia ${currentYear} - Panduan Lengkap | RefinanceHomeLoanMY`,
  description: `Senarai lengkap dokumen yang diperlukan untuk refinance rumah di Malaysia. Pastikan permohonan anda berjaya ${currentYear}.`,
  keywords:
    "dokumen untuk refinance rumah, dokumen refinance rumah, senarai dokumen refinance, syarat dokumen refinance",
  openGraph: {
    title: `Senarai Dokumen Refinance Rumah Malaysia ${currentYear}`,
    description: `Senarai lengkap dokumen yang diperlukan untuk refinance rumah di Malaysia.`,
    type: "article",
    locale: "ms_MY",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
