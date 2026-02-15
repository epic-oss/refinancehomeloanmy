import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSR Calculator Malaysia 2026 | Check If Banks Approve You",
  description: "Free DSR calculator — enter salary & commitments, see your ratio instantly. Most banks approve below 70%. Check Maybank, CIMB, RHB limits.",
  openGraph: {
    title: "DSR Calculator Malaysia 2026 | Check If Banks Approve You",
    description: "Free DSR calculator — enter salary & commitments, see your ratio instantly. Most banks approve below 70%. Check Maybank, CIMB, RHB limits.",
    type: "website",
  },
};

export default function DSRCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
