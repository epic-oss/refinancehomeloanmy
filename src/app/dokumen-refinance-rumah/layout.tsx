import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dokumen Refinance Rumah 2026 | Senarai Lengkap & Checklist",
  description: "Senarai lengkap dokumen untuk refinance rumah di Malaysia. Checklist IC, slip gaji, penyata bank, geran rumah & dokumen wajib lain. Jimat masa, sedia semua sekali.",
  keywords:
    "dokumen untuk refinance rumah, dokumen refinance rumah, senarai dokumen refinance, syarat dokumen refinance",
  openGraph: {
    title: "Dokumen Refinance Rumah 2026 | Senarai Lengkap & Checklist",
    description: "Senarai lengkap dokumen untuk refinance rumah di Malaysia. Checklist IC, slip gaji, penyata bank, geran rumah & dokumen wajib lain.",
    type: "article",
    locale: "ms_MY",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
