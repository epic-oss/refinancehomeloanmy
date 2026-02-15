import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSR Calculator Malaysia 2026 | Can You Refinance? Check Now",
  description: "Free DSR calculator with all bank limits (Maybank 70%, Hong Leong 75%, CIMB 70%). Enter salary & commitments → instant result. Most banks need DSR below 70%.",
  openGraph: {
    title: "DSR Calculator Malaysia 2026 | Can You Refinance? Check Now",
    description: "Free DSR calculator with all bank limits (Maybank 70%, Hong Leong 75%, CIMB 70%). Enter salary & commitments → instant result. Most banks need DSR below 70%.",
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
