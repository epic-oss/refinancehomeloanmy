"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import DebtConsolidationLeadForm from "@/components/DebtConsolidationLeadForm";
import BackToTop from "@/components/BackToTop";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  Wallet,
  Clock,
  Building2,
  FileText,
  Calculator,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  Home,
  TrendingDown,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

const bankComparisonData = [
  {
    bank: "Maybank",
    rate: "6.5-12%",
    maxAmount: "RM150,000",
    tenure: "Up to 7 years",
    href: "/maybank-refinance-home-loan",
  },
  {
    bank: "Public Bank",
    rate: "6.8-11%",
    maxAmount: "RM150,000",
    tenure: "Up to 7 years",
    href: "/public-bank-refinance-home-loan",
  },
  {
    bank: "CIMB",
    rate: "7-12%",
    maxAmount: "RM100,000",
    tenure: "Up to 7 years",
    href: "/cimb-refinance-home-loan",
  },
  {
    bank: "Hong Leong",
    rate: "6.5-11%",
    maxAmount: "RM150,000",
    tenure: "Up to 7 years",
    href: "/hong-leong-refinance-home-loan",
  },
  {
    bank: "RHB",
    rate: "7-12%",
    maxAmount: "RM100,000",
    tenure: "Up to 5 years",
    href: "/rhb-refinance-home-loan",
  },
  {
    bank: "AmBank",
    rate: "6.8-11%",
    maxAmount: "RM150,000",
    tenure: "Up to 7 years",
    href: "/ambank-refinance-home-loan",
  },
];

const incomeEstimates = [
  { income: "RM3,000", estimate: "RM30,000 - RM50,000" },
  { income: "RM5,000", estimate: "RM50,000 - RM80,000" },
  { income: "RM8,000", estimate: "RM80,000 - RM120,000" },
  { income: "RM10,000+", estimate: "RM100,000 - RM150,000" },
];

const faqs = [
  {
    question: "Can I get a personal loan to pay off credit card debt?",
    answer: "Yes, this is one of the most common uses for personal loans in Malaysia. A personal loan typically has rates of 6-12%, which is significantly lower than credit card rates of 15-18%. You can use the lump sum to pay off all credit cards, then make one fixed monthly payment at a lower rate.",
  },
  {
    question: "Which bank is best for debt consolidation personal loan?",
    answer: "It depends on your profile. For the lowest rates, Hong Leong and Maybank often offer competitive rates starting from 6.5%. For faster approval, CIMB and RHB are known for quick processing. We recommend applying to 2-3 banks simultaneously to compare actual offers.",
  },
  {
    question: "How much personal loan can I get for debt consolidation?",
    answer: "Most banks offer personal loans up to RM150,000, but your actual limit depends on your income and existing commitments. A general rule: you can borrow roughly 10-15x your monthly salary, subject to your DSR (Debt Service Ratio) being below 60-70%.",
  },
  {
    question: "Is a personal loan smart for debt consolidation?",
    answer: "It's smart if: (1) you don't own property, (2) your debt is under RM150k, (3) you need fast approval, or (4) you can get a rate lower than your current average. If you own property with equity, cash-out refinance at 3.5-4.5% is usually better than personal loans at 6-12%.",
  },
  {
    question: "What's the fastest debt consolidation loan in Malaysia?",
    answer: "Personal loans are the fastest option - you can get approval within 24-48 hours and funds within 3-5 working days. Some banks like CIMB and RHB offer same-day approval for existing customers. Compare this to cash-out refinance which takes 6-10 weeks.",
  },
];

export default function PersonalLoanDebtConsolidationPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-600 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-orange-200 mb-4">
            <Wallet className="w-5 h-5" />
            <span className="text-sm">No Property Required</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Personal Loan for Debt Consolidation Malaysia {currentYear} - No Property Required
          </h1>
          <p className="text-lg text-orange-100 mb-2">
            No property? You can still consolidate your debt. Get a personal loan to pay off all your
            high-interest debts with one simple monthly payment.
          </p>
          <p className="text-sm text-orange-200 mb-6">
            Updated: {SITE_CONFIG.lastUpdatedEn}
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition-all hover:scale-105"
            >
              Check My Eligibility
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/debt-consolidation-options"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-400 transition-all border border-orange-300"
            >
              Compare All Options
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">6%</p>
              <p className="text-xs text-orange-200">Rates From</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">RM150k</p>
              <p className="text-xs text-orange-200">Up To</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">24-48h</p>
              <p className="text-xs text-orange-200">Approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What is Debt Consolidation Personal Loan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What is a Debt Consolidation Personal Loan?
            </h2>

            <p className="text-gray-700 mb-4">
              A <strong>debt consolidation personal loan</strong> is an unsecured loan you can use to pay off multiple
              debts at once. Unlike cash-out refinancing which requires property, a personal loan only requires
              proof of income and a decent credit score.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">How It Works:</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Apply for a personal loan with your income documents</li>
                <li>Get approved in 1-3 days (some banks offer same-day approval)</li>
                <li>Receive a lump sum to pay off all your existing debts</li>
                <li>Make one fixed monthly payment over 1-7 years</li>
              </ol>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                Personal Loan vs Cash-Out Refinance
              </h3>
              <p className="text-gray-700">
                The main difference is that <strong>personal loans don&apos;t require property</strong> as collateral.
                This makes them faster to get but comes with higher interest rates (6-12% vs 3.5-4.5%).
                If you own property with equity, cash-out refinance is usually the better option.
              </p>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Personal Loan vs Cash-Out Refinance: Which is Better?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">Personal Loan</th>
                    <th className="text-left p-4 font-semibold">Cash-Out Refinance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Property Required</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" /> No
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-red-600">
                        <XCircle className="w-4 h-4" /> Yes
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Interest Rate</td>
                    <td className="p-4 text-orange-600 font-semibold">6-12%</td>
                    <td className="p-4">
                      <span className="text-green-600 font-semibold">3.5-4.5%</span>
                      <CheckCircle className="w-4 h-4 inline ml-1 text-green-600" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Maximum Amount</td>
                    <td className="p-4">RM50,000 - RM150,000</td>
                    <td className="p-4">
                      <span className="text-green-600">Up to 90% of property equity</span>
                      <CheckCircle className="w-4 h-4 inline ml-1 text-green-600" />
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Approval Time</td>
                    <td className="p-4">
                      <span className="text-green-600">1-3 days</span>
                      <CheckCircle className="w-4 h-4 inline ml-1 text-green-600" />
                    </td>
                    <td className="p-4 text-orange-600">6-10 weeks</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Credit Impact</td>
                    <td className="p-4 text-yellow-600">Hard inquiry</td>
                    <td className="p-4">
                      <span className="text-green-600">Minimal</span>
                      <CheckCircle className="w-4 h-4 inline ml-1 text-green-600" />
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Best For</td>
                    <td className="p-4 text-sm">Renters, smaller debts, urgent needs</td>
                    <td className="p-4 text-sm">Property owners with large debts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Own property?</strong> You&apos;ll likely save more with cash-out refinance.
                <Link href="/cash-out-refinance-malaysia" className="text-green-600 hover:underline ml-1">
                  Learn more about cash-out refinance →
                </Link>
              </p>
            </div>
          </section>

          {/* Best Personal Loans */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Best Personal Loans for Debt Consolidation {currentYear}
            </h2>

            <p className="text-gray-700 mb-6">
              Here are the top banks offering personal loans suitable for debt consolidation in Malaysia:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold">Bank</th>
                    <th className="text-left p-4 font-semibold">Interest Rate</th>
                    <th className="text-left p-4 font-semibold">Max Amount</th>
                    <th className="text-left p-4 font-semibold">Tenure</th>
                    <th className="text-left p-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {bankComparisonData.map((bank, index) => (
                    <tr key={bank.bank} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-medium">{bank.bank}</td>
                      <td className="p-4 font-semibold text-orange-600">{bank.rate}</td>
                      <td className="p-4">{bank.maxAmount}</td>
                      <td className="p-4">{bank.tenure}</td>
                      <td className="p-4">
                        <Link
                          href={bank.href}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Details →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              * Rates are indicative and may vary based on credit profile. Contact banks for exact rates.
            </p>
          </section>

          {/* Income Estimate Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How Much Can You Borrow?
            </h2>

            <p className="text-gray-700 mb-6">
              Your personal loan limit depends on your income and existing debt commitments.
              Here&apos;s a rough estimate based on monthly income:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="text-left p-4 font-semibold">Monthly Income</th>
                    <th className="text-left p-4 font-semibold">Estimated Max Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {incomeEstimates.map((item, index) => (
                    <tr key={item.income} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-medium">{item.income}</td>
                      <td className="p-4 font-semibold text-orange-600">{item.estimate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              * Estimates assume no existing loan commitments and DSR below 60%. Actual amounts may vary.
            </p>
          </section>

          {/* Mid-page CTA */}
          <div className="my-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Not Sure if You Qualify?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Get a free assessment and find out how much you can borrow for debt consolidation.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Check My Eligibility
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Who Should Use Personal Loan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Who Should Use a Personal Loan for Debt Consolidation?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Personal Loan is Right for You If:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>You <strong>don&apos;t own property</strong> or are renting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Your total debt is <strong>under RM150,000</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>You need <strong>fast approval</strong> (days, not weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>You <strong>don&apos;t want to touch your home loan</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Your credit score is <strong>decent to good</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Consider Other Options If:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>You <strong>own property with equity</strong> - cash-out is cheaper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>Your debt exceeds <strong>RM150,000</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>You have <strong>very poor credit</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>You <strong>can&apos;t afford monthly payments</strong> - consider AKPK</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Own Property Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Own Property? Cash-Out Refinance May Be Better
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you own a property with equity, you can likely get a much better rate with cash-out refinance
                    (3.5-4.5%) compared to personal loans (6-12%). This could save you thousands in interest.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Example Savings:</h4>
                    <p className="text-sm text-gray-700">
                      RM50,000 debt at <span className="text-red-600">12% personal loan</span> = RM6,000/year interest<br />
                      RM50,000 debt at <span className="text-green-600">4% cash-out</span> = RM2,000/year interest<br />
                      <strong className="text-green-600">You save: RM4,000/year</strong>
                    </p>
                  </div>
                  <Link
                    href="/cash-out-refinance-malaysia"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Learn About Cash-Out Refinance
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Documents Required */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Documents Required for Personal Loan
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  For Salaried Employees
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>IC (MyKad) - front and back</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Latest 3 months salary slips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Latest 3-6 months bank statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>EA form / Latest tax return (BE form)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  For Self-Employed
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>IC (MyKad) - front and back</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Business registration (SSM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Latest 6 months bank statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Latest 2 years tax returns (B form)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
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
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
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

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/debt-consolidation-options"
                className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-semibold text-emerald-900">Compare All Debt Consolidation Options</h3>
                <p className="text-sm text-emerald-700">Cash-out vs personal loan vs balance transfer vs AKPK</p>
              </Link>
              <Link
                href="/cash-out-refinance-malaysia"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <h3 className="font-semibold text-green-900">Cash Out Refinance Guide</h3>
                <p className="text-sm text-green-700">Better rates for property owners</p>
              </Link>
              <Link
                href="/debt-consolidation-calculator"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Debt Consolidation Calculator</h3>
                <p className="text-sm text-blue-700">Calculate your potential savings</p>
              </Link>
              <Link
                href="/debt-consolidation-lenders-malaysia"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-purple-900">Find Debt Consolidation Lenders</h3>
                <p className="text-sm text-purple-700">Compare banks and financial institutions</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Consolidate Your Debt?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free quote and find out how much you can save with a personal loan.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get Your Personal Loan Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <DebtConsolidationLeadForm variant="modal" source="personal-loan-debt-consolidation" />
            </div>
          </div>
        </div>
      )}

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Personal Loan for Debt Consolidation Malaysia ${currentYear} - No Property Required`,
            description: "Best personal loans for debt consolidation in Malaysia. Compare bank rates, see how much you can borrow, consolidate credit card debt without property.",
            datePublished: "2026-01-22",
            dateModified: "2026-01-22",
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

      <BackToTop />
      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Get personal loan quote"
        buttonText="Check Eligibility"
      />
    </>
  );
}
