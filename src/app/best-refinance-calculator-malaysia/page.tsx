"use client";

import Link from "next/link";
import {
  Award,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Star,
  FileText,
  HelpCircle,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const currentYear = new Date().getFullYear();

const calculators = [
  {
    rank: 1,
    name: "RefinanceHomeLoanMY Calculator",
    badge: "Our Pick",
    pros: [
      "Shows monthly AND total savings",
      "Includes refinancing costs (legal fees, valuation)",
      "Break-even period calculation",
      "Links to expert consultation",
      "Free, no signup required",
    ],
    cons: [],
    link: "/calculator",
    linkLabel: "Try Our Calculator",
    isInternal: true,
  },
  {
    rank: 2,
    name: "PropertyGuru Refinance Calculator",
    badge: null,
    pros: [
      "Simple, clean interface",
      "Quick estimates in seconds",
      "Good for initial research",
    ],
    cons: ["Limited cost breakdown", "No break-even calculation"],
    link: "https://www.propertyguru.com.my",
    linkLabel: "propertyguru.com.my",
    isInternal: false,
  },
  {
    rank: 3,
    name: "iMoney Home Loan Calculator",
    badge: null,
    pros: [
      "Compares multiple banks",
      "Shows monthly payments clearly",
      "User-friendly design",
    ],
    cons: [
      "Doesn't show savings vs current loan",
      "No refinancing cost estimate",
    ],
    link: "https://www.imoney.my",
    linkLabel: "imoney.my",
    isInternal: false,
  },
  {
    rank: 4,
    name: "Maybank Home Refinancing Calculator",
    badge: null,
    pros: [
      "Official bank calculator",
      "Accurate for Maybank products",
      "Good for existing Maybank customers",
    ],
    cons: ["Maybank rates only", "No competitor comparison"],
    link: "https://www.maybank2u.com.my",
    linkLabel: "maybank2u.com.my",
    isInternal: false,
  },
  {
    rank: 5,
    name: "RinggitPlus Calculator",
    badge: null,
    pros: [
      "Multiple loan types supported",
      "Bank comparison feature",
      "Educational content included",
    ],
    cons: ["Interface can be overwhelming", "Requires more inputs"],
    link: "https://ringgitplus.com",
    linkLabel: "ringgitplus.com",
    isInternal: false,
  },
];

const comparisonFeatures = [
  {
    feature: "Monthly Savings",
    values: [true, true, false, true, true],
  },
  {
    feature: "Total Savings Over Tenure",
    values: [true, false, false, false, false],
  },
  {
    feature: "Refinancing Costs Included",
    values: [true, false, false, false, false],
  },
  {
    feature: "Break-even Calculation",
    values: [true, false, false, false, false],
  },
  {
    feature: "Mobile Friendly",
    values: [true, true, true, true, "partial"],
  },
];

const calculatorNames = [
  "RefinanceHomeLoanMY",
  "PropertyGuru",
  "iMoney",
  "Maybank",
  "RinggitPlus",
];

const howToUseSteps = [
  {
    step: 1,
    title: "Enter your current loan details",
    description:
      "Outstanding balance, current interest rate, and remaining tenure.",
  },
  {
    step: 2,
    title: "Enter new interest rate",
    description:
      "Check current market rates — most banks offer 3.85%-4.10% in " +
      currentYear +
      ".",
  },
  {
    step: 3,
    title: "Compare monthly payments",
    description:
      "See your new monthly instalment vs what you're paying now.",
  },
  {
    step: 4,
    title: "Check total savings over tenure",
    description:
      "Monthly savings add up — a RM200/month saving = RM48,000 over 20 years.",
  },
  {
    step: 5,
    title: "Factor in costs",
    description:
      "Legal fees, valuation, and stamp duty typically cost RM3,000-8,000.",
  },
  {
    step: 6,
    title: "Calculate break-even",
    description:
      "Divide total costs by monthly savings. Usually 12-18 months to break even.",
  },
];

const whatYouNeed = [
  "Current loan outstanding amount (check your bank statement)",
  "Current interest rate (check your loan agreement or bank app)",
  "Years remaining on your loan",
  "New interest rate you're considering",
];

const nextSteps = [
  {
    label: "Check your DSR",
    description: "Make sure you qualify for refinancing",
    link: "/dsr-calculator",
  },
  {
    label: "Compare bank rates",
    description: "Find the best rate for your profile",
    link: "/en/best-refinance-banks",
  },
  {
    label: "Gather your documents",
    description: "Prepare everything you need to apply",
    link: "/en/documents-required",
  },
];

const faqs = [
  {
    question: "Which refinance calculator is most accurate?",
    answer:
      "A calculator that includes refinancing costs (legal fees, valuation, stamp duty) gives you the most accurate picture. Our RefinanceHomeLoanMY calculator includes all costs and shows your true net savings after expenses. Basic calculators that only show monthly payment differences can overestimate savings by RM3,000-8,000.",
  },
  {
    question: "How do I calculate refinance savings in Malaysia?",
    answer:
      "To calculate refinance savings: (1) Find your current monthly instalment, (2) Calculate the new monthly instalment with a lower rate, (3) Multiply the monthly difference by remaining months, (4) Subtract refinancing costs (RM3,000-8,000). The result is your true net savings. Our calculator does all this automatically.",
  },
  {
    question: "Is there a free refinance calculator?",
    answer:
      "Yes, all the calculators reviewed on this page are free to use. Our RefinanceHomeLoanMY calculator is completely free with no signup required, and it's the most comprehensive — showing monthly savings, total savings, costs, and break-even period in one view.",
  },
  {
    question: "What information do I need to use a refinance calculator?",
    answer:
      "You need four key numbers: (1) Current outstanding loan amount, (2) Current interest rate, (3) Remaining loan tenure in years, (4) The new interest rate you're comparing. You can find your current loan details on your bank's app or your latest loan statement.",
  },
  {
    question:
      "Should I include legal fees when calculating refinance savings?",
    answer:
      "Absolutely. Legal fees, valuation fees, and stamp duty typically cost RM3,000-8,000 for refinancing in Malaysia. Without including these costs, you might think you're saving more than you actually are. A good calculator factors in all costs to show your true net savings and break-even timeline.",
  },
];

const relatedPages = [
  {
    title: "Refinance Calculator",
    description: "Calculate your savings now",
    link: "/calculator",
  },
  {
    title: "DSR Calculator",
    description: "Check if you qualify",
    link: "/dsr-calculator",
  },
  {
    title: "Eligibility Calculator",
    description: "How much can you borrow?",
    link: "/home-loan-eligibility-calculator",
  },
  {
    title: "Best Refinance Banks",
    description: "Compare bank rates",
    link: "/en/best-refinance-banks",
  },
];

export default function BestRefinanceCalculatorPage() {
  const faqSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero with Quick Answer */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Best Refinance House Loan Calculator Malaysia {currentYear}
          </h1>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 text-primary-200 text-sm font-medium mb-3">
              <Award className="w-4 h-4" />
              QUICK ANSWER
            </div>
            <p className="text-lg leading-relaxed">
              The best refinance calculator for most Malaysians is one that
              shows: <strong>monthly savings</strong>,{" "}
              <strong>total savings over tenure</strong>,{" "}
              <strong>break-even period</strong>, and{" "}
              <strong>factors in refinancing costs</strong>. Our top pick is the{" "}
              <Link
                href="/calculator"
                className="underline font-semibold hover:text-primary-200"
              >
                RefinanceHomeLoanMY Calculator
              </Link>{" "}
              for comprehensive savings analysis, followed by PropertyGuru for
              quick estimates.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes a Good Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Makes a Good Refinance Calculator?
          </h2>

          <p className="text-gray-600 mb-6">
            Not all refinance calculators are equal. A basic calculator only
            shows your new monthly payment — but that&apos;s not enough to make
            a smart decision. Here&apos;s what to look for:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Shows monthly savings (not just new payment)",
              "Calculates total savings over remaining tenure",
              "Includes refinancing costs (legal fees, valuation, stamp duty)",
              "Shows break-even point — when savings exceed costs",
              "Easy to use on mobile",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 5 Calculators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top 5 Refinance Calculators Compared
          </h2>

          <div className="space-y-6">
            {calculators.map((calc) => (
              <div
                key={calc.rank}
                className={`bg-white rounded-xl p-6 shadow-sm border ${
                  calc.rank === 1
                    ? "border-primary-300 ring-2 ring-primary-100"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 ${
                      calc.rank === 1
                        ? "bg-primary-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {calc.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900">
                        {calc.name}
                      </h3>
                      {calc.badge && (
                        <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                          <Star className="w-3 h-3" />
                          {calc.badge}
                        </span>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-green-700 mb-2">
                          Strengths:
                        </p>
                        <ul className="space-y-1">
                          {calc.pros.map((pro, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {calc.cons.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">
                            Limitations:
                          </p>
                          <ul className="space-y-1">
                            {calc.cons.map((con, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-500 flex items-start gap-2"
                              >
                                <span className="text-gray-400 mt-0.5">—</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {calc.isInternal ? (
                      <Link
                        href={calc.link}
                        className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                      >
                        {calc.linkLabel}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-500">
                        {calc.linkLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Feature Comparison Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">
                    Feature
                  </th>
                  {calculatorNames.map((name) => (
                    <th
                      key={name}
                      className="text-center p-3 font-semibold text-gray-900 border-b text-sm"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-gray-700 font-medium text-sm">
                      {row.feature}
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="p-3 text-center">
                        {val === true ? (
                          <span className="text-green-600 text-lg">✅</span>
                        ) : val === "partial" ? (
                          <span className="text-yellow-500 text-lg">⚠️</span>
                        ) : (
                          <span className="text-gray-300 text-lg">❌</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            How to Use a Refinance Calculator
          </h2>

          <div className="space-y-4">
            {howToUseSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-lg p-5 shadow-sm flex items-start gap-4"
              >
                <div className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What You&apos;ll Need Before Calculating
          </h2>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <div className="flex items-center gap-2 text-primary-700 font-medium mb-4">
              <FileText className="w-5 h-5" />
              Have These Ready
            </div>
            <ul className="space-y-3">
              {whatYouNeed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Not sure about current rates?{" "}
              <Link
                href="/en/best-refinance-banks"
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                Check latest bank rates here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Beyond the Calculator: Next Steps
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {nextSteps.map((step, index) => (
              <Link
                key={index}
                href={step.link}
                className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                    {step.label}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Calculator */}
      <section className="py-10 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Calculate Your Savings?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our comprehensive refinance calculator — see exactly how much
            you can save monthly and over your full tenure.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Open Refinance Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <HelpCircle className="w-10 h-10 mx-auto mb-4 text-primary-200" />
            <h2 className="text-2xl font-bold mb-3">
              Need Help With Your Refinance?
            </h2>
            <p className="text-primary-100">
              Our specialists can run the numbers for you and find the best bank
              match.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <LeadForm source="best-calculator-comparison" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Pages
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 hover:border-primary-200 border border-gray-200 transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-500">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
