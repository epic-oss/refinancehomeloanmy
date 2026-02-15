import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Refinance? 7 Pros vs 4 Cons (Malaysia 2026)",
  description: "Refinancing saves RM200-800/month but costs 2-3% upfront. See the real math — when it's worth it, when it's not, and the break-even point.",
  openGraph: {
    title: "Should You Refinance? 7 Pros vs 4 Cons (Malaysia 2026)",
    description: "Refinancing saves RM200-800/month but costs 2-3% upfront. See the real math — when it's worth it, when it's not, and the break-even point.",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
