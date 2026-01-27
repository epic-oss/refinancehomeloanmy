import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Maybank HouzKEY ${currentYear} | Rent-to-Own Malaysia - Pros, Cons & How It Works`,
  description: `Complete guide to Maybank HouzKEY rent-to-own scheme. 100% financing, no downpayment, eligibility, interest rates, pros & cons. Is HouzKEY right for you?`,
  keywords: "Maybank HouzKEY, rent to own Malaysia, m2own, HouzKEY eligibility, HouzKEY interest rate, zero downpayment home, Maybank rent to own, HouzKEY pros cons",
  openGraph: {
    title: `Maybank HouzKEY ${currentYear} | Rent-to-Own Malaysia - Pros, Cons & How It Works`,
    description: `Complete guide to Maybank HouzKEY rent-to-own scheme. 100% financing, no downpayment, eligibility, interest rates, pros & cons. Is HouzKEY right for you?`,
    type: "article",
    locale: "en_MY",
  },
};

export default function MaybankHouzKeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
