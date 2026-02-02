"use client";

import Link from "next/link";
import {
  TrendingDown,
  Award,
  ArrowRight,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const situationData = [
  { situation: "Want lowest rate", bank: "Public Bank", why: "3.85% - consistently lowest", link: "/public-bank-refinance-home-loan" },
  { situation: "Need high margin", bank: "UOB", why: "Up to 95% (incl. MRTA)", link: "/uob-refinance-home-loan" },
  { situation: "Self-employed", bank: "CIMB", why: "Flexible income docs", link: "/cimb-refinance-home-loan" },
  { situation: "High DSR (65-75%)", bank: "Hong Leong", why: "Accepts up to 75%", link: "/hong-leong-refinance-home-loan" },
  { situation: "Want fast approval", bank: "RHB", why: "2-3 weeks processing", link: "/rhb-refinance-home-loan" },
  { situation: "Cash-out refinance", bank: "Maybank", why: "MaxiHome, flexible cash-out", link: "/maybank-refinance-home-loan" },
  { situation: "Existing customer", bank: "Your current bank", why: "Loyalty rates, easier docs", link: null },
];

const rateData = [
  { bank: "Public Bank", rate: "3.85%", lockin: "3 years", margin: "90%" },
  { bank: "Maybank", rate: "3.88%", lockin: "3 years", margin: "90%" },
  { bank: "CIMB", rate: "3.95%", lockin: "3 years", margin: "90%" },
  { bank: "RHB", rate: "3.95%", lockin: "3 years", margin: "90%" },
  { bank: "Hong Leong", rate: "3.98%", lockin: "3 years", margin: "90%" },
  { bank: "AmBank", rate: "3.95%", lockin: "3 years", margin: "90%" },
  { bank: "UOB", rate: "4.61%", lockin: "3 years", margin: "95%" },
];

const topPicks = [
  {
    rank: 1,
    bank: "Public Bank",
    tagline: "Best overall",
    description: "Lowest rates, reliable processing, strong branch network",
    link: "/public-bank-refinance-home-loan",
  },
  {
    rank: 2,
    bank: "Maybank",
    tagline: "Best for flexibility",
    description: "MaxiHome product, high margin, most branches",
    link: "/maybank-refinance-home-loan",
  },
  {
    rank: 3,
    bank: "CIMB",
    tagline: "Best for self-employed",
    description: "Flexible income assessment, competitive rates",
    link: "/cimb-refinance-home-loan",
  },
];

const howToChoose = [
  "Compare effective rates, not just advertised rates",
  "Check lock-in period penalties",
  "Factor in legal fees and processing costs",
  "Consider your approval chances, not just rates",
];

const faqs = [
  {
    question: "Which bank has the lowest refinance rate in Malaysia?",
    answer: "Public Bank consistently offers the lowest refinance rates in Malaysia, currently around 3.85% effective rate. However, rates vary based on your profile, loan amount, and property type. Maybank and CIMB follow closely at 3.88-3.95%.",
  },
  {
    question: "Which bank is easiest to get refinancing approved?",
    answer: "Hong Leong is often considered easiest for approval as they accept higher DSR up to 75%. CIMB is most flexible for self-employed applicants. Your current bank may also offer easier approval due to existing relationship and reduced documentation.",
  },
  {
    question: "Is Public Bank or Maybank better for refinancing?",
    answer: "Public Bank offers lower rates (3.85% vs 3.88%) but stricter approval criteria with 65% DSR limit. Maybank offers more flexibility with MaxiHome product, higher margin up to 90%, and accepts higher DSR. Choose Public Bank for best rate, Maybank for easier approval.",
  },
  {
    question: "Which bank is best for self-employed refinancing?",
    answer: "CIMB is generally best for self-employed refinancing in Malaysia. They accept business bank statements, are flexible with income documentation, and understand variable income patterns. Hong Leong is also a good option with higher DSR acceptance.",
  },
];

export default function BestBankRefinancePage() {
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
            Best Bank to Refinance Home Loan in Malaysia 2026
          </h1>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 text-primary-200 text-sm font-medium mb-3">
              <Award className="w-4 h-4" />
              QUICK ANSWER
            </div>
            <p className="text-lg mb-4">The best bank depends on your situation:</p>
            <ul className="space-y-2 text-base md:text-lg">
              <li><strong>Lowest Rate:</strong> Public Bank (3.85%)</li>
              <li><strong>Highest Margin:</strong> UOB (95%), Maybank (90%)</li>
              <li><strong>Self-Employed:</strong> CIMB (flexible income assessment)</li>
              <li><strong>High DSR:</strong> Hong Leong (accepts up to 75%)</li>
              <li><strong>Fast Approval:</strong> RHB (2-3 weeks average)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Bank by Situation */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Best Bank by Situation
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Your Situation</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Best Bank</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Why</th>
                </tr>
              </thead>
              <tbody>
                {situationData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{row.situation}</td>
                    <td className="p-3">
                      {row.link ? (
                        <Link
                          href={row.link}
                          className="font-semibold text-primary-600 hover:text-primary-700"
                        >
                          {row.bank}
                        </Link>
                      ) : (
                        <span className="font-semibold text-gray-900">{row.bank}</span>
                      )}
                    </td>
                    <td className="p-3 text-gray-600">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Rate Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Rate Comparison 2026
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Bank</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Effective Rate</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Lock-in</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Max Margin</th>
                </tr>
              </thead>
              <tbody>
                {rateData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">{row.bank}</td>
                    <td className="p-3 text-center text-primary-600 font-semibold">{row.rate}</td>
                    <td className="p-3 text-center text-gray-600">{row.lockin}</td>
                    <td className="p-3 text-center text-gray-600">{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href="/en/best-refinance-banks"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
          >
            See detailed comparison
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Top 3 Picks */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Top 3 Picks
          </h2>

          <div className="space-y-4">
            {topPicks.map((pick) => (
              <div
                key={pick.rank}
                className="bg-gray-50 rounded-lg p-5 flex items-start gap-4"
              >
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {pick.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{pick.bank}</h3>
                    <span className="text-sm text-primary-600 font-medium">
                      — {pick.tagline}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{pick.description}</p>
                  <Link
                    href={pick.link}
                    className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium hover:text-primary-700"
                  >
                    View details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Choose
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {howToChoose.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-10 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Check Your Savings
          </h2>
          <p className="text-gray-600 mb-6">
            See how much you can save with each bank.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Open Savings Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA with Lead Form */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-3">
              Not Sure Which Bank Suits You?
            </h2>
            <p className="text-primary-100">
              Get free comparison from our specialists.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <LeadForm source="best-bank-question" showAllFields={true} />
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
