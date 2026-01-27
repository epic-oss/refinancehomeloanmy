"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getBanksSortedByRate } from "@/lib/constants";
import { BankRatesTable } from "@/components/content/BankRatesTable";
import { EligibilityCard } from "@/components/content/EligibilityCard";
import { LastUpdated } from "@/components/content/LastUpdated";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight } from "lucide-react";

const { currentYear, eligibility } = SITE_CONFIG;
const banks = getBanksSortedByRate();

const lockInPeriods = banks.slice(0, 8).map((bank) => ({
  bank: bank.name,
  lockIn: bank.lockIn,
  penalty: bank.earlySettlement,
}));

const faqs = [
  {
    question: "How many years before I can refinance my home loan?",
    answer:
      "There is no minimum waiting period to refinance your home loan. You can refinance anytime after purchase. However, if you're still within the lock-in period (typically 3-5 years), you'll need to pay an early settlement penalty of 2-3% of the outstanding loan amount.",
  },
  {
    question: "Can I refinance during the lock-in period?",
    answer:
      "Yes, you can refinance during the lock-in period, but you'll pay a penalty of 2-3% on your outstanding balance. For example, a RM400,000 loan with 3% penalty = RM12,000. Calculate whether your savings will exceed this penalty before deciding.",
  },
  {
    question: "How much is the early settlement penalty?",
    answer:
      "Early settlement penalties vary by bank, typically 2-3% of the outstanding loan amount. Some banks reduce the penalty each year. For example: Year 1 = 3%, Year 2 = 2%, Year 3 = 1%. Check your loan agreement for exact terms.",
  },
  {
    question: "What's the minimum loan amount for refinancing?",
    answer:
      "Most banks require a minimum loan amount of RM100,000 for refinancing. Some banks have higher minimums (RM150,000-200,000) for promotional rates. The higher your loan amount, the more you'll benefit from rate reductions.",
  },
  {
    question: "Can I refinance with the same bank?",
    answer:
      "Yes, this is called internal refinancing or loan restructuring. While it involves less paperwork, you may get better rates from competing banks. Always compare offers from multiple banks before deciding.",
  },
  {
    question: "How long does the refinancing process take?",
    answer:
      "The typical refinancing process takes 1-3 months from application to disbursement. This includes loan application review (1-2 weeks), property valuation (1-2 weeks), loan approval (2-4 weeks), and legal documentation (2-4 weeks).",
  },
  {
    question: "Is refinancing worth the hassle?",
    answer:
      "Refinancing is typically worth it if: (1) you can save 0.5% or more on interest rate, (2) your lock-in period has ended, (3) you have more than 10 years remaining, and (4) you plan to keep the property for at least 2-3 years to recoup refinancing costs.",
  },
];

const bestTimes = [
  {
    title: "After Lock-in Period Ends",
    description:
      "This is the ideal time as you won't pay any early settlement penalty. Most lock-ins are 3-5 years.",
    icon: "🔓",
  },
  {
    title: "When Market Rates Drop",
    description:
      "When BNM reduces OPR or banks offer promotional rates lower than your current rate by 0.5% or more.",
    icon: "📉",
  },
  {
    title: "When Your Financial Profile Improves",
    description:
      "Salary increase, better credit score, or reduced debts can qualify you for better rates.",
    icon: "📈",
  },
  {
    title: "When You Need Cash",
    description:
      "If property value has increased and you need funds for renovation, education, or investment at low mortgage rates.",
    icon: "💰",
  },
  {
    title: "When You Want to Change Loan Type",
    description:
      "Switch from conventional to Islamic, or from variable to fixed rate (or vice versa).",
    icon: "🔄",
  },
];

const refinancingSteps = [
  {
    step: 1,
    title: "Check Your Current Lock-in Status",
    description:
      "Review your loan agreement to confirm if lock-in period has ended. Calculate any penalties if applicable.",
  },
  {
    step: 2,
    title: "Compare Bank Rates",
    description:
      "Use our comparison table to find the best rates. Consider factors beyond just interest rate.",
  },
  {
    step: 3,
    title: "Calculate Your Savings",
    description:
      "Use our calculator to see if savings justify the refinancing costs.",
  },
  {
    step: 4,
    title: "Gather Documents",
    description:
      "Prepare IC, payslips, bank statements, EPF statement, and property documents.",
  },
  {
    step: 5,
    title: "Submit Application",
    description:
      "Apply to your chosen bank(s). You can apply to multiple banks simultaneously.",
  },
  {
    step: 6,
    title: "Property Valuation",
    description:
      "Bank arranges property valuation by approved valuer. Costs RM300-500.",
  },
  {
    step: 7,
    title: "Sign Documents & Disburse",
    description:
      "After approval, sign legal documents. New bank settles your old loan and disbursement occurs.",
  },
];

export default function WhenToRefinance() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            When to Refinance Your Home Loan in Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300">
            Complete guide on timing, lock-in periods, and the best time to
            refinance your mortgage.
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
              href="/berapa-tahun-boleh-refinance-rumah"
              className="text-primary-600 hover:underline font-medium"
            >
              Bahasa Malaysia
            </Link>
          </p>
        </div>
      </div>

      {/* Quick Answer - Featured Snippet */}
      <section className="py-8 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary-500">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Quick Answer:
            </h2>
            <p className="text-gray-700">
              <strong>You can refinance your home loan at any time</strong>, but
              it&apos;s recommended to wait until your{" "}
              <strong>lock-in period ends (typically 3-5 years)</strong> to avoid
              paying 2-3% early settlement penalty. After lock-in ends, you&apos;re
              free to refinance without any penalty.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Many Malaysian homeowners wonder when is the right time to
              refinance their home loan. The answer depends on several factors
              including your lock-in period, current interest rates, and your
              financial situation.
            </p>
            <p className="text-lg text-gray-700">
              In this comprehensive guide, we explain the minimum waiting period,
              lock-in penalties, and the best timing to refinance your home in
              Malaysia.
            </p>
          </section>

          {/* Lock-in Periods by Bank */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lock-in Periods by Bank
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="text-left p-4 font-semibold border">Bank</th>
                    <th className="text-left p-4 font-semibold border">
                      Lock-in Period
                    </th>
                    <th className="text-left p-4 font-semibold border">
                      Early Settlement Penalty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lockInPeriods.map((item, index) => (
                    <tr
                      key={item.bank}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 border font-medium">{item.bank}</td>
                      <td className="p-4 border">{item.lockIn} years</td>
                      <td className="p-4 border text-red-600">{item.penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Lock-in periods and penalties may vary by loan package. Check your
              loan agreement for exact terms.
            </p>
          </section>

          {/* Penalty Calculation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Early Settlement Penalties
            </h2>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
              <h3 className="font-semibold text-red-800 mb-4">
                Penalty Calculation Formula:
              </h3>
              <div className="bg-white rounded-lg p-4 text-center mb-4">
                <p className="font-mono text-lg text-red-700">
                  Penalty = Outstanding Loan × Penalty Rate (%)
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>RM200,000 balance × 3% penalty</span>
                  <span className="font-bold text-red-600">= RM6,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>RM400,000 balance × 3% penalty</span>
                  <span className="font-bold text-red-600">= RM12,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span>RM600,000 balance × 3% penalty</span>
                  <span className="font-bold text-red-600">= RM18,000</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Tip:</strong> Some banks reduce penalty rates each year.
                Example: Year 1 = 3%, Year 2 = 2%, Year 3 = 1%. Check your loan
                agreement for the exact penalty structure.
              </p>
            </div>
          </section>

          {/* Best Time to Refinance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5 Signs It&apos;s Time to Refinance
            </h2>

            <div className="space-y-4">
              {bestTimes.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-lg p-4 border border-secondary-200 flex items-start gap-4"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Eligibility Requirements for Refinancing
            </h2>
            <p className="text-gray-700 mb-4">
              Besides the right timing, ensure you meet the basic eligibility
              requirements:
            </p>
            <EligibilityCard lang="en" />
          </section>

          {/* Refinancing an Ongoing Loan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Refinancing a Loan That&apos;s Still Outstanding
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Yes, you can refinance your home loan even if it&apos;s still
                outstanding. In fact, this is the most common refinancing
                scenario. Here&apos;s how it works:
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                {
                  step: 1,
                  text: "New bank evaluates your property and financial profile",
                },
                {
                  step: 2,
                  text: "Once approved, new bank directly settles your existing loan with old bank",
                },
                {
                  step: 3,
                  text: "You start making payments to new bank at the lower rate",
                },
                {
                  step: 4,
                  text: "If there's cash out, the balance is credited to your account",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                >
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Refinancing a Paid Off Home */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Refinancing a Fully Paid Property (Cash Out)
            </h2>

            <div className="bg-primary-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                If your home is fully paid, you can still refinance to access
                cash. This is called <strong>Cash Out Refinancing</strong>.
              </p>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Example Scenario:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Current property value: RM700,000</li>
                  <li>• Outstanding loan: RM0 (fully paid)</li>
                  <li>• Maximum LTV (90%): RM630,000</li>
                  <li>• Cash out available: Up to RM630,000</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  This cash can be used for investments, renovations, education,
                  or business capital.
                </p>
              </div>
            </div>
          </section>

          {/* Bank Rates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Current Refinancing Rates
            </h2>
            <BankRatesTable limit={5} lang="en" />
          </section>

          {/* Steps to Refinance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Step-by-Step Refinancing Process
            </h2>

            <div className="space-y-4">
              {refinancingSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
                href="/calculator"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Refinancing Calculator
                </h3>
                <p className="text-sm text-primary-700">
                  Calculate your potential savings
                </p>
              </Link>
              <Link
                href="/en/documents-required"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Documents Required
                </h3>
                <p className="text-sm text-primary-700">
                  Complete checklist for your application
                </p>
              </Link>
              <Link
                href="/en/best-refinance-banks"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Best Banks for Refinancing
                </h3>
                <p className="text-sm text-primary-700">
                  Compare rates from 10+ banks
                </p>
              </Link>
              <Link
                href="/en/pros-cons-refinancing"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Pros & Cons of Refinancing
                </h3>
                <p className="text-sm text-primary-700">
                  Understand the benefits and risks
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
            Ready to Refinance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free quote and let our specialists help you find the best
            timing and rates for your situation.
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
              <LeadForm variant="modal" source="en-when-refinance" lang="en" />
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
            headline: `When to Refinance Your Home Loan in Malaysia ${currentYear}`,
            description: `Learn the best time to refinance your home loan in Malaysia. Understand lock-in periods, penalties, and signs it's time to refinance ${currentYear}.`,
            datePublished: "2026-01-18",
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
