"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getLowestRate } from "@/lib/constants";
import { CostsTable } from "@/components/content/CostsTable";
import { LastUpdated } from "@/components/content/LastUpdated";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight } from "lucide-react";

const { currentYear, costs } = SITE_CONFIG;
const lowestRateBank = getLowestRate();

const advantages = [
  {
    title: "Lower Interest Rates",
    description:
      "Refinancing allows you to switch from your current rate (potentially 4.5-5%) to today's competitive rates starting from 3.65%. This single change can save you hundreds of ringgit monthly.",
    example: `Example: On a RM400,000 loan, dropping from 4.5% to ${lowestRateBank?.rateFrom || "3.65%"} saves approximately RM190/month.`,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
  },
  {
    title: "Reduced Monthly Payments",
    description:
      "Lower interest rates directly translate to lower monthly installments. This frees up cash flow for other financial goals like investments, education, or emergencies.",
    example:
      "Typical savings range from RM300-1,000/month depending on your loan amount and rate reduction.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Cash Out Option",
    description:
      "Access your home equity through cash-out refinancing. If your property has appreciated, you can borrow against this increased value at home loan rates (3-4%) instead of personal loan rates (8-15%).",
    example:
      "If your home is worth RM600,000 with RM300,000 outstanding, you could potentially cash out up to RM240,000 (at 90% LTV).",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Debt Consolidation",
    description:
      "Combine multiple high-interest debts (credit cards, personal loans, car loans) into your mortgage at a much lower interest rate. This simplifies payments and reduces overall interest costs.",
    example:
      "Converting RM50,000 in credit card debt (18% interest) to mortgage rate (3.65%) saves you approximately RM7,000/year in interest.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Switch Loan Types",
    description:
      "Refinancing lets you change between conventional and Islamic financing, or switch from variable to fixed rate (or vice versa) based on your preferences and market conditions.",
    example:
      "If you want predictable payments, switch to a fixed-rate loan. If you believe rates will drop, stay with variable.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Tenure Options",
    description:
      "Extend your tenure to reduce monthly payments, or shorten it to pay off your loan faster and save on total interest. Refinancing gives you a fresh start to restructure your loan.",
    example:
      "Shortening tenure from 25 to 15 years on RM400,000 saves over RM100,000 in total interest.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Better Banking Experience",
    description:
      "Switch to a bank with better customer service, digital banking features, or branch accessibility. Sometimes it's not just about rates—the overall banking relationship matters.",
    example:
      "Moving to a bank with a superior mobile app can make managing your mortgage much more convenient.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

const disadvantages = [
  {
    title: "Refinancing Costs",
    description:
      "Refinancing involves upfront costs including legal fees (0.5-1% of loan), valuation fees (RM300-500), and stamp duty. These typically total RM5,000-15,000 depending on loan size.",
    impact: "Costs can take 12-24 months to recoup through monthly savings.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Lock-in Penalties",
    description:
      "If you refinance before your current lock-in period ends (typically 3-5 years), you'll pay a penalty of 2-3% of your outstanding loan amount. This can amount to thousands of ringgit.",
    impact:
      "On a RM400,000 loan, a 3% penalty = RM12,000. Factor this into your calculations.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Lengthy Process",
    description:
      "The refinancing process takes 1-3 months from application to completion. During this time, you'll need to coordinate with banks, lawyers, and valuers, which can be time-consuming.",
    impact:
      "Plan for potential delays and ensure all documents are ready before starting.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Rejection Risk",
    description:
      "Your refinancing application may be rejected if your credit score has dropped, income has decreased, or the property value has fallen. This wastes time and may affect your credit report.",
    impact:
      "Check your CTOS/CCRIS score before applying. Multiple rejections can further hurt your score.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    title: "Extended Loan Tenure",
    description:
      "If you extend your loan tenure to reduce monthly payments, you may end up paying more total interest over the life of the loan, even with a lower rate.",
    impact:
      "Extending from 15 to 25 remaining years could add RM50,000+ in total interest paid.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

const whenToRefinance = [
  {
    situation: "Interest rates dropped by 0.5% or more",
    recommendation: "Refinance",
    reason: "Significant savings potential over remaining tenure",
  },
  {
    situation: "Lock-in period has ended",
    recommendation: "Refinance",
    reason: "No penalty, perfect time to shop for better rates",
  },
  {
    situation: "Need cash for renovation/education",
    recommendation: "Consider",
    reason:
      "Cash-out refinancing offers lower rates than personal loans, but increases debt",
  },
  {
    situation: "Income has significantly increased",
    recommendation: "Consider",
    reason: "May qualify for better rates; consider shortening tenure",
  },
  {
    situation: "Credit score has improved",
    recommendation: "Refinance",
    reason: "Better credit = better rates; worth exploring options",
  },
];

const whenToAvoid = [
  "Still within lock-in period (penalty would exceed savings)",
  "Planning to sell property within 2-3 years",
  "Less than RM100,000 outstanding (savings too small)",
  "Credit score has dropped (risk of rejection or poor rates)",
  "Property value has decreased (may not qualify for same loan amount)",
  "Recently changed jobs (banks prefer 2+ years employment stability)",
];

const faqs = [
  {
    question: "Is refinancing my home loan worth it?",
    answer:
      "Refinancing is typically worth it if: (1) you can reduce your interest rate by at least 0.5%, (2) you have more than 10 years remaining on your loan, (3) your lock-in period has ended, and (4) you plan to stay in the property long enough to recoup refinancing costs (usually 12-24 months).",
  },
  {
    question: "How do I calculate if refinancing makes sense?",
    answer:
      "Calculate your break-even point: Divide total refinancing costs by monthly savings. For example, if costs are RM6,000 and monthly savings are RM300, break-even is 20 months. If you'll stay longer than 20 months, refinancing makes sense.",
  },
  {
    question: "Can I refinance if I have bad credit?",
    answer:
      "It's difficult but not impossible. Your options may be limited and rates will be higher. Some banks are more lenient than others. Improving your credit score before applying is recommended—pay down debts and ensure no late payments for 6-12 months.",
  },
  {
    question: "What happens to my current loan when I refinance?",
    answer:
      "The new bank settles your existing loan directly with your old bank. You don't need to pay off the loan yourself. The process is handled between the banks and their lawyers.",
  },
  {
    question: "Can I refinance multiple times?",
    answer:
      "Yes, there's no legal limit on how many times you can refinance. However, each refinancing incurs costs and a new lock-in period. Ensure the savings justify the costs each time.",
  },
];

// Helper function to calculate monthly payment
const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  years: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
};

export default function ProsConsRefinancing() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sample calculation
  const loanAmount = 400000;
  const currentRate = 4.5;
  const newRate = 3.65;
  const tenure = 25;
  const refinanceCost = 6000;

  const currentMonthly = calculateMonthlyPayment(loanAmount, currentRate, tenure);
  const newMonthly = calculateMonthlyPayment(loanAmount, newRate, tenure);
  const monthlySavings = currentMonthly - newMonthly;
  const totalSavings = monthlySavings * tenure * 12 - refinanceCost;
  const breakEven = Math.ceil(refinanceCost / monthlySavings);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pros and Cons of Refinancing Your Home Loan ({currentYear} Guide)
          </h1>
          <p className="text-lg text-gray-300">
            Make an informed decision with our comprehensive guide to the
            advantages and disadvantages of refinancing your mortgage.
          </p>
          <LastUpdated lang="en" variant="hero" />
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Language Switch */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">
            Also available in:{" "}
            <Link
              href="/kelebihan-keburukan-refinance-rumah"
              className="text-primary-600 hover:underline font-medium"
            >
              Bahasa Malaysia
            </Link>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Refinancing your home loan means replacing your existing mortgage
              with a new one, typically to secure a lower interest rate or
              better terms. In Malaysia, with interest rates fluctuating and
              competition among banks increasing, refinancing has become a
              popular strategy for homeowners to reduce their financial burden.
            </p>
            <p className="text-lg text-gray-700">
              However, refinancing isn&apos;t right for everyone. Like any
              financial decision, it has both advantages and disadvantages that
              you need to carefully weigh. This guide will help you understand
              both sides so you can make an informed decision for your specific
              situation.
            </p>
          </section>

          {/* Advantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              7 Advantages of Refinancing Your Home Loan
            </h2>

            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-green-50 border border-green-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {index + 1}. {advantage.title}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {advantage.description}
                      </p>
                      <p className="text-sm text-green-700 bg-green-100 rounded-lg p-3">
                        <strong>Example:</strong> {advantage.example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Disadvantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5 Disadvantages of Refinancing
            </h2>

            <div className="space-y-6">
              {disadvantages.map((disadvantage, index) => (
                <div
                  key={index}
                  className="bg-red-50 border border-red-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                      {disadvantage.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {index + 1}. {disadvantage.title}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {disadvantage.description}
                      </p>
                      <p className="text-sm text-red-700 bg-red-100 rounded-lg p-3">
                        <strong>Impact:</strong> {disadvantage.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When Refinancing Makes Sense */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              When Refinancing Makes Sense
            </h2>
            <p className="text-gray-700 mb-6">
              Use this guide to help determine if refinancing is right for your
              situation:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="text-left p-4 font-semibold border">
                      Situation
                    </th>
                    <th className="text-left p-4 font-semibold border">
                      Recommendation
                    </th>
                    <th className="text-left p-4 font-semibold border">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {whenToRefinance.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 border">{item.situation}</td>
                      <td className="p-4 border">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.recommendation === "Refinance"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.recommendation}
                        </span>
                      </td>
                      <td className="p-4 border text-gray-600">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When to Avoid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              When to Avoid Refinancing
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Refinancing may not be the best choice in these situations:
              </p>
              <ul className="space-y-3">
                {whenToAvoid.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Costs Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Refinancing Costs Breakdown
            </h2>
            <p className="text-gray-700 mb-6">
              Understanding the costs involved helps you calculate if
              refinancing makes financial sense:
            </p>
            <CostsTable lang="en" />
          </section>

          {/* Sample Calculation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sample Calculation: Is Refinancing Worth It?
            </h2>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">
                  RM{loanAmount.toLocaleString()} Loan - {tenure} Year Tenure
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">
                      BEFORE Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Loan Amount: RM{loanAmount.toLocaleString()}</li>
                      <li>Interest Rate: {currentRate}%</li>
                      <li>Tenure: {tenure} years</li>
                      <li className="font-semibold text-red-700">
                        Monthly Payment: RM{Math.round(currentMonthly).toLocaleString()}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">
                      AFTER Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Loan Amount: RM{loanAmount.toLocaleString()}</li>
                      <li>Interest Rate: {newRate}%</li>
                      <li>Tenure: {tenure} years</li>
                      <li className="font-semibold text-green-700">
                        Monthly Payment: RM{Math.round(newMonthly).toLocaleString()}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary-100 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Your Savings
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-600">Monthly Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM{Math.round(monthlySavings).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Yearly Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM{Math.round(monthlySavings * 12).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">
                        Total Savings ({tenure} years)
                      </p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM{Math.round(totalSavings).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Break-even Period</p>
                      <p className="text-xl font-bold text-secondary-600">
                        {breakEven} months
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    *After deducting estimated refinancing costs of RM
                    {refinanceCost.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12 bg-primary-50 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Calculate Your Own Savings
            </h2>
            <p className="text-primary-700 mb-6">
              Use our free calculator to see exactly how much you could save
              based on your loan details.
            </p>
            <Link
              href="/calculator"
              className="btn-primary inline-block text-lg px-8 py-3"
            >
              Try the Calculator →
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/en/best-refinance-banks"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Best Banks for Refinancing
                </h3>
                <p className="text-sm text-primary-700">
                  Compare rates from 10+ Malaysian banks
                </p>
              </Link>
              <Link
                href="/en/refinance-calculation-examples"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Refinance Calculation Examples
                </h3>
                <p className="text-sm text-primary-700">
                  See real savings scenarios
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See If Refinancing Is Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free, personalized quote from our refinancing specialists.
            No obligation, just honest advice.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quote Now
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Your Free Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <LeadForm variant="modal" source="en-pros-cons" lang="en" />
            </div>
          </div>
        </div>
      )}

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Pros and Cons of Refinancing Home Loan Malaysia ${currentYear}`,
            description: `Discover 7 advantages and 5 disadvantages of refinancing your home loan in Malaysia. Make an informed decision with our comprehensive guide ${currentYear}.`,
            datePublished: "2025-12-08",
            dateModified: "2026-01-21",
            author: {
              "@type": "Organization",
              name: "RefinanceHomeLoanMY",
            },
            publisher: {
              "@type": "Organization",
              name: "RefinanceHomeLoanMY",
              url: "https://refinancehomeloanmy.com",
            },
          }),
        }}
      />

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Save RM500+/month"
        buttonText="Get Free Quote"
      />
    </>
  );
}
