import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LPPSA Refinance Malaysia 2026 | Tukar LPPSA ke Bank & Penjimatan",
  description: "Panduan refinance pinjaman LPPSA ke bank. Bandingkan kadar LPPSA vs bank, syarat kelayakan, proses tukar, dan berapa anda boleh jimat. Untuk penjawat awam Malaysia.",
  openGraph: {
    title: "LPPSA Refinance Malaysia 2026 | Tukar LPPSA ke Bank & Penjimatan",
    description: "Panduan refinance pinjaman LPPSA ke bank. Bandingkan kadar LPPSA vs bank, syarat kelayakan, proses tukar, dan berapa anda boleh jimat.",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
