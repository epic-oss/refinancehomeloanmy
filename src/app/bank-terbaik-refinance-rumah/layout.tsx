import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank Terbaik Refinance Rumah 2026 | Perbandingan 6 Bank Utama",
  description: "Perbandingan bank terbaik untuk refinance rumah di Malaysia. Kadar faedah, cashback, tempoh lock-in & review jujur dari Maybank, CIMB, Public Bank, RHB & lain-lain.",
  openGraph: {
    title: "Bank Terbaik Refinance Rumah 2026 | Perbandingan 6 Bank Utama",
    description: "Perbandingan bank terbaik untuk refinance rumah di Malaysia. Kadar faedah, cashback, tempoh lock-in & review jujur dari Maybank, CIMB, Public Bank, RHB & lain-lain.",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
