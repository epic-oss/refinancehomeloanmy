import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penyatuan Hutang Malaysia 2026 - Cara Gabungkan Semua Hutang Anda",
  description: "Panduan lengkap penyatuan hutang di Malaysia 2026. Ketahui cara gabungkan hutang kad kredit, pinjaman peribadi dengan kadar faedah rendah.",
  openGraph: {
    title: "Penyatuan Hutang Malaysia 2026 - Cara Gabungkan Semua Hutang Anda",
    description: "Gabungkan semua hutang anda menjadi satu bayaran bulanan dengan kadar faedah serendah 3.5%. Jimat sehingga RM7,000 setahun.",
    type: "website",
  },
};

export default function PenyatuanHutangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
