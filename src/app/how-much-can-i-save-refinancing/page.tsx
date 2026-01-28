"use client";

import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  XCircle,
  DollarSign,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const savingsData = [
  { loan: 300000, oldPayment: 1898, newPayment: 1751, monthly: 147, total: 35280 },
  { loan: 400000, oldPayment: 2531, newPayment: 2335, monthly: 196, total: 47040 },
  { loan: 500000, oldPayment: 3164, newPayment: 2919, monthly: 245, total: 58800 },
  { loan: 600000, oldPayment: 3796, newPayment: 3502, monthly: 294, total: 70560 },
  { loan: 700000, oldPayment: 4429, newPayment: 4086, monthly: 343, total: 82320 },
  { loan: 800000, oldPayment: 5062, newPayment: 4670, monthly: 392, total: 94080 },
];

const bestRates = [
  { bank: "Public Bank", rate: "3.85%" },
  { bank: "Maybank", rate: "3.88%" },
  { bank: "CIMB", rate: "3.95%" },
];

const faqs = [
  {
    question: "How much can I save by refinancing in Malaysia?",
    answer: "On average, Malaysian homeowners save RM300-700 per month by refinancing from 4.5% to 3.85% interest rate. On a RM500,000 loan with 20 years remaining, that is approximately RM245/month or RM58,800 total savings over the loan tenure.",
  },
  {
    question: "Is it worth refinancing for 0.5% lower rate?",
    answer: "Yes, a 0.5% rate reduction is generally worth refinancing for loans above RM200,000 with more than 10 years remaining. For a RM500,000 loan, 0.5% lower rate saves approximately RM150/month or RM36,000 over 20 years.",
  },
  {
    question: "How long to break even on refinancing costs?",
    answer: "Most homeowners break even on refinancing costs within 12-18 months. With typical costs of RM5,000-10,000 and monthly savings of RM200-400, the break-even period is usually 15-25 months.",
  },
  {
    question: "What is the best refinance rate in Malaysia 2026?",
    answer: "The best refinance rates in Malaysia 2026 start from 3.85% at Public Bank, 3.88% at Maybank, and 3.95% at CIMB. Actual rates depend on your credit profile, loan amount, and property type.",
  },
];

export default function HowMuchCanISavePage() {
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
            How Much Can I Save by Refinancing My Home Loan in Malaysia?
          </h1>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 text-primary-200 text-sm font-medium mb-3">
              <TrendingDown className="w-4 h-4" />
              QUICK ANSWER
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              On average, Malaysian homeowners save <strong>RM300-700 per month</strong> by
              refinancing from 4.5% to 3.85% interest rate. On a RM500,000 loan with 20 years
              remaining, that is approximately <strong>RM245/month</strong> or{" "}
              <strong>RM58,800 total savings</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Savings by Loan Amount
          </h2>
          <p className="text-gray-600 mb-6">
            Based on refinancing from 4.5% to 3.85% with 20 years remaining:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Loan Amount</th>
                  <th className="text-right p-3 font-semibold text-gray-900 border-b">Old (4.5%)</th>
                  <th className="text-right p-3 font-semibold text-gray-900 border-b">New (3.85%)</th>
                  <th className="text-right p-3 font-semibold text-green-700 border-b">Monthly Savings</th>
                  <th className="text-right p-3 font-semibold text-green-700 border-b">Total (20yr)</th>
                </tr>
              </thead>
              <tbody>
                {savingsData.map((row) => (
                  <tr key={row.loan} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">RM{row.loan.toLocaleString()}</td>
                    <td className="p-3 text-right text-gray-600">RM{row.oldPayment.toLocaleString()}</td>
                    <td className="p-3 text-right text-gray-600">RM{row.newPayment.toLocaleString()}</td>
                    <td className="p-3 text-right text-green-600 font-semibold">RM{row.monthly}</td>
                    <td className="p-3 text-right text-green-600 font-semibold">RM{row.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-10 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Calculate Your Exact Savings
          </h2>
          <p className="text-gray-600 mb-6">
            Use our free calculator to see your personalized savings based on your loan details.
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

      {/* When Worth It */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            When Is Refinancing Worth It?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Worth Refinancing If:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Rate difference of 0.5% or more</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>More than 10 years remaining on loan</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Loan amount above RM200,000</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Been paying for at least 3 years (past lock-in)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Not Worth It If:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-red-700">
                  <XCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Less than 5 years remaining</span>
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <XCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Rate difference under 0.3%</span>
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <XCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>High penalty fees still apply</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Refinancing Costs to Consider
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <DollarSign className="w-6 h-6 text-primary-600 mb-2" />
              <div className="font-semibold text-gray-900">Legal Fees</div>
              <div className="text-gray-600">RM2,000-5,000</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <DollarSign className="w-6 h-6 text-primary-600 mb-2" />
              <div className="font-semibold text-gray-900">Valuation</div>
              <div className="text-gray-600">RM300-500</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <DollarSign className="w-6 h-6 text-primary-600 mb-2" />
              <div className="font-semibold text-gray-900">Stamp Duty</div>
              <div className="text-gray-600">~0.5% of loan</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <DollarSign className="w-6 h-6 text-primary-600 mb-2" />
              <div className="font-semibold text-gray-900">Break Even</div>
              <div className="text-gray-600">12-18 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Rates */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Current Best Rates (2026)
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full max-w-md border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Bank</th>
                  <th className="text-right p-3 font-semibold text-gray-900 border-b">Rate</th>
                </tr>
              </thead>
              <tbody>
                {bestRates.map((row) => (
                  <tr key={row.bank} className="border-b">
                    <td className="p-3 font-medium">{row.bank}</td>
                    <td className="p-3 text-right text-primary-600 font-semibold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href="/en/best-refinance-banks"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
          >
            View full bank comparison
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA with Lead Form */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-3">
              Want to Know Your Exact Savings?
            </h2>
            <p className="text-primary-100">
              Get a free assessment from our refinancing specialists.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <LeadForm source="savings-calculator-page" />
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
