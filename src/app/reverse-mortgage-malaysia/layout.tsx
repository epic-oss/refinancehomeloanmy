import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Reverse Mortgage Malaysia ${currentYear} | Skim Saraan Bercagar (SSB) Guide`,
  description: `Reverse mortgage in Malaysia via Skim Saraan Bercagar (SSB) by Cagamas. Learn eligibility, how it works, SSB vs cash-out refinance, and which option is better for you.`,
  keywords: "reverse mortgage Malaysia, Skim Saraan Bercagar, SSB Cagamas, SSB Malaysia, reverse mortgage for elderly, SSB-i Islamic, Cagamas reverse mortgage",
  openGraph: {
    title: `Reverse Mortgage Malaysia ${currentYear} | Skim Saraan Bercagar (SSB) Guide`,
    description: `Reverse mortgage in Malaysia via Skim Saraan Bercagar (SSB) by Cagamas. Learn eligibility, how it works, SSB vs cash-out refinance, and which option is better for you.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function ReverseMortgageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
