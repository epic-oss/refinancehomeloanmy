"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Calculator,
  Users,
  CreditCard,
  Clock,
  Handshake,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const bankDSRData = [
  { bank: "Hong Leong", standard: "70%", max: "75%", bestFor: "High DSR applicants", link: "/hong-leong-refinance-home-loan" },
  { bank: "CIMB", standard: "70%", max: "75%", bestFor: "Self-employed", link: "/cimb-refinance-home-loan" },
  { bank: "Maybank", standard: "70%", max: "75%", bestFor: "Existing customers", link: "/maybank-refinance-home-loan" },
  { bank: "RHB", standard: "70%", max: "70%", bestFor: "Standard cases", link: "/rhb-refinance-home-loan" },
  { bank: "Public Bank", standard: "65%", max: "70%", bestFor: "Low-risk only", link: "/public-bank-refinance-home-loan" },
  { bank: "AmBank", standard: "70%", max: "70%", bestFor: "Standard cases", link: "/ambank-refinance-home-loan" },
];

const strategies = [
  {
    icon: Users,
    title: "Add a Co-Borrower",
    description: "Spouse or family member's income combined = lower DSR",
  },
  {
    icon: CreditCard,
    title: "Debt Consolidation Refinance",
    description: "Roll credit cards and personal loans into home loan at lower rate",
    link: "/debt-consolidation-malaysia",
  },
  {
    icon: CheckCircle2,
    title: "Pay Off Small Debts First",
    description: "Clearing a RM500/month car loan can drop DSR by 5-10%",
  },
  {
    icon: Clock,
    title: "Choose Longer Tenure",
    description: "35 years vs 25 years = lower monthly payment = lower DSR",
  },
  {
    icon: Handshake,
    title: "Work with a Mortgage Broker",
    description: "Brokers know which banks are flexible for your profile",
  },
];

const rejectionTips = [
  "Wait 3-6 months before reapplying",
  "Pay down existing debts",
  "Try a different bank",
  "Consider cash-out to consolidate debts",
];

const faqs = [
  {
    question: "Can I refinance with 70% DSR?",
    answer: "Yes, most Malaysian banks accept refinancing applications with 70% DSR as their standard limit. Hong Leong and CIMB may approve up to 75% on a case-by-case basis for strong applicants with good credit history and stable income.",
  },
  {
    question: "Which bank accepts highest DSR in Malaysia?",
    answer: "Hong Leong Bank typically accepts the highest DSR in Malaysia, approving up to 75% DSR for eligible applicants. CIMB and Maybank may also go up to 75% for existing customers or exceptional cases. Public Bank is more conservative at 65-70%.",
  },
  {
    question: "How to lower my DSR for refinancing?",
    answer: "To lower your DSR: 1) Pay off or settle small debts like credit cards or personal loans, 2) Add a co-borrower to increase combined income, 3) Choose a longer loan tenure to reduce monthly payments, 4) Consider debt consolidation to combine high-interest debts into your home loan.",
  },
  {
    question: "Can I add my spouse to reduce DSR?",
    answer: "Yes, adding your spouse as a co-borrower is one of the most effective ways to reduce DSR. The bank will calculate DSR based on combined household income, which can significantly lower your DSR percentage and improve approval chances.",
  },
];

export default function HighDSRRefinancePage() {
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
            Can I Refinance with High DSR in Malaysia?
          </h1>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 text-primary-200 text-sm font-medium mb-3">
              <CheckCircle2 className="w-4 h-4" />
              QUICK ANSWER
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              <strong>Yes, you can refinance with high DSR.</strong> While most banks cap at 70%,
              Hong Leong accepts up to 75%, and some banks go case-by-case up to 80% for strong
              applicants. Options include adding a co-borrower, debt consolidation, or working
              with a mortgage broker who knows which banks are flexible.
            </p>
          </div>
        </div>
      </section>

      {/* Bank DSR Limits Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Bank DSR Limits
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Bank</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Standard DSR</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Maximum</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Best For</th>
                </tr>
              </thead>
              <tbody>
                {bankDSRData.map((row) => (
                  <tr key={row.bank} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <Link
                        href={row.link}
                        className="font-medium text-primary-600 hover:text-primary-700"
                      >
                        {row.bank}
                      </Link>
                    </td>
                    <td className="p-3 text-center text-gray-600">{row.standard}</td>
                    <td className="p-3 text-center font-semibold text-green-600">{row.max}</td>
                    <td className="p-3 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Refinance with High DSR
          </h2>

          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-4"
              >
                <div className="bg-primary-100 rounded-full p-2 flex-shrink-0">
                  <strategy.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {index + 1}. {strategy.title}
                  </h3>
                  <p className="text-gray-600">{strategy.description}</p>
                  {strategy.link && (
                    <Link
                      href={strategy.link}
                      className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium mt-1 hover:text-primary-700"
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculate DSR */}
      <section className="py-10 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Calculate Your DSR
          </h2>
          <p className="text-gray-600 mb-6">
            Check your current DSR and see how much you can borrow.
          </p>
          <Link
            href="/dsr-calculator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Open DSR Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What If Rejected */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              What If I Am Still Rejected?
            </h2>
          </div>

          <ul className="space-y-3 mb-6">
            {rejectionTips.map((tip, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/home-loan-rejected-malaysia"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
          >
            Full guide: What to do when home loan is rejected
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA with Lead Form */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-3">
              Struggling with High DSR?
            </h2>
            <p className="text-primary-100">
              Our specialists help tough cases get approved.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <LeadForm source="high-dsr-help" />
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
    </>
  );
}
