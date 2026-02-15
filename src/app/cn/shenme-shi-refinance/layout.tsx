import { Metadata } from "next";

export const metadata: Metadata = {
  title: "什么是Refinance？马来西亚房贷再融资完整指南 2026",
  description: "用简单中文解释refinance。每月可省RM200-800，还能cash out套现。了解条件、流程、所需文件。附免费计算器。",
  openGraph: {
    title: "什么是Refinance？马来西亚房贷再融资完整指南 2026",
    description: "用简单中文解释refinance。每月可省RM200-800，还能cash out套现。了解条件、流程、所需文件。附免费计算器。",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
