import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Maybank HouzKEY (M2Own) ${currentYear} | 100% Financing, Zero Downpayment`,
  description: `Buy a home with NO downpayment via M2Own portal. HouzKEY = rent 5 years, then own. Rate from 2.88%. But watch out for these 4 catches. Full guide inside.`,
  keywords: "Maybank HouzKEY, rent to own Malaysia, m2own, Maybank2Own, HouzKEY eligibility, HouzKEY interest rate, zero downpayment home, Maybank rent to own, HouzKEY pros cons",
  openGraph: {
    title: `Maybank HouzKEY (M2Own) ${currentYear} | 100% Financing, Zero Downpayment`,
    description: `Buy a home with NO downpayment via M2Own portal. HouzKEY = rent 5 years, then own. Rate from 2.88%. But watch out for these 4 catches. Full guide inside.`,
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
