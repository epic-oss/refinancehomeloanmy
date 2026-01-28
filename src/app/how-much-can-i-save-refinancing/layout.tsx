import type { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `How Much Can I Save Refinancing Malaysia ${currentYear} | Calculate Your Savings`,
  description: `Find out exactly how much you can save by refinancing your home loan in Malaysia. Real examples, savings calculator, and when refinancing is worth it.`,
  keywords: "refinance savings Malaysia, how much save refinancing, refinance calculator Malaysia, home loan savings, refinance worth it Malaysia",
  openGraph: {
    title: `How Much Can I Save Refinancing Malaysia ${currentYear} | Calculate Your Savings`,
    description: `Find out exactly how much you can save by refinancing your home loan in Malaysia. Real examples, savings calculator, and when refinancing is worth it.`,
    type: "article",
    locale: "en_MY",
  },
};

export default function HowMuchCanISaveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
