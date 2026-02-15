"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Check, X, Clock, FileText, AlertTriangle } from "lucide-react";

const bank = SITE_CONFIG.bankRates.maybank;
const { currentYear } = SITE_CONFIG;

const faqs = [
  {
    question: "What is Maybank's refinance rate in 2026?",
    answer: "Maybank's refinance rates start from 4.35% p.a. as of February 2026 for conventional home loans. Maybank Islamic (Shariah-compliant) financing is also available at competitive rates. Your actual rate depends on your credit profile, loan-to-value ratio, income stability, and whether you're an existing Maybank customer. Maybank uses a Base Rate (BR) system set by BNM, currently at 3.25%.",
  },
  {
    question: "Can I refinance from CIMB to Maybank?",
    answer: "Yes, you can refinance from CIMB (or any other Malaysian bank) to Maybank. Maybank will settle your existing CIMB loan and issue a new loan at Maybank's rates. This is a standard process that takes 2-3 months. As Malaysia's largest bank, Maybank handles a high volume of refinancing from other banks. A broker can help compare if switching makes financial sense after factoring in all costs including any early settlement penalty from CIMB.",
  },
  {
    question: "Does Maybank offer cash-out refinancing?",
    answer: "Yes, Maybank offers cash-out refinancing through their MaxiHome product. You can refinance up to 90% of your property's current market value (for first 2 properties) and receive the difference between the new loan and your outstanding balance as cash. For example, if your property is valued at RM800,000 and you owe RM500,000, you could potentially cash out up to RM220,000 (at 90% LTV). Use our cash-out calculator to estimate your amount.",
  },
  {
    question: "What is Maybank's lock-in period for refinancing?",
    answer: "Maybank's lock-in period is typically 3-5 years depending on the loan package. If you fully settle or refinance to another bank within this period, you'll incur an early settlement penalty of 2-3% of the outstanding loan amount. For example, on a RM400,000 balance, the penalty could be RM8,000-RM12,000. After the lock-in period expires, you can refinance freely. Always confirm the exact lock-in period with your loan officer before signing.",
  },
  {
    question: "How long does Maybank refinancing take?",
    answer: "The entire Maybank refinancing process typically takes 2-3 months from application to disbursement. Breakdown: document submission and credit assessment (1-2 weeks), property valuation (1-2 weeks), loan approval (2-4 weeks), legal documentation (3-5 weeks), and final disbursement (1-2 weeks). Maybank processes a high volume of applications, so processing may occasionally be slower during peak periods. Existing Maybank customers may experience faster processing.",
  },
  {
    question: "What documents does Maybank need for refinancing?",
    answer: "Salaried employees need: MyKad, latest 3 months payslips, latest 6 months bank statements (with salary crediting), EA form/tax return, existing loan statement, and property documents (S&P, title). Self-employed applicants need: SSM registration, 2 years tax returns (Form B/BE), 6 months business bank statements, and business profile. Having your salary credited to a Maybank account can speed up the process.",
  },
  {
    question: "Can I use Maybank HouzKey for refinancing?",
    answer: "HouzKey is Maybank's rent-to-own programme, not a traditional refinancing product. It's designed for new property purchases where you rent the property from Maybank with an option to buy later. If you're looking to refinance an existing loan, you'd use Maybank's standard home loan products (MaxiHome or Maybank Islamic). However, if you're struggling to qualify for traditional refinancing, HouzKey could be an alternative path to homeownership for a new property.",
  },
  {
    question: "What is the difference between Maybank conventional and Islamic refinancing?",
    answer: "Maybank conventional home loans use an interest-based structure (Base Rate + spread), while Maybank Islamic financing uses Shariah-compliant concepts like Tawarruq (Commodity Murabahah). Both offer similar rates and features. The key differences: Islamic financing has a fixed ceiling rate (maximum rate cap), while conventional rates can theoretically rise without limit. Islamic financing profits are also exempt from certain tax implications. Many Malaysians prefer Islamic financing for the ceiling rate protection.",
  },
  {
    question: "Does Maybank charge legal fees for refinancing?",
    answer: "Yes, refinancing with Maybank involves legal fees typically ranging from 0.4% to 1% of the loan amount. These cover the preparation of the loan agreement, discharge of charge from your existing bank, and registration of the new charge. During promotional periods, Maybank may offer to absorb legal fees, valuation fees, or stamp duty. Always ask about ongoing promotions when you apply.",
  },
  {
    question: "Can I refinance my Maybank loan with Maybank (same bank)?",
    answer: "Yes, existing Maybank customers can do internal refinancing, also called repricing. This is often faster (2-4 weeks) and cheaper than switching banks, as it typically doesn't require new legal documentation, valuation, or stamp duty. Contact your Maybank branch or relationship manager to discuss repricing options — you may be offered a better rate to retain your business, especially if you have a good repayment track record.",
  },
  {
    question: "What is Maybank's maximum DSR for refinancing?",
    answer: "Maybank's maximum DSR (Debt Service Ratio) is generally 70% for most applicants. However, this can be flexible — high-income applicants (above RM10,000/month) may qualify with a higher DSR, while applicants with lower income may face stricter limits. Your DSR is calculated as: (total monthly debt commitments ÷ gross monthly income) × 100%. Use our DSR calculator to check your eligibility before applying.",
  },
  {
    question: "Can foreigners refinance with Maybank?",
    answer: "Maybank accepts refinancing applications from selected foreigners, including permanent residents (PR), MM2H visa holders, and expats with valid employment passes. Foreigners typically receive a lower financing margin (60-80% LTV compared to 90% for Malaysians) and may face higher minimum income requirements. PR holders generally have better approval chances than non-resident foreigners. Documentation requirements include a valid passport, employment pass, and employment contract.",
  },
];

export default function MaybankRefinancePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            {bank.logo && (
              <div className="bg-white rounded-lg p-2">
                <Image
                  src={bank.logo}
                  alt="Maybank logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Maybank Refinance Home Loan Malaysia {currentYear}
          </h1>
          <p className="text-lg text-yellow-100 mb-2">
            Complete guide to Maybank home loan refinancing with current rates, honest review, and comparison with other banks.
          </p>
          <p className="text-sm text-yellow-200">
            Updated: {SITE_CONFIG.lastUpdatedEn}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 bg-white text-yellow-700 font-semibold px-6 py-3 rounded-full hover:bg-yellow-50 transition-all hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Quick Summary Box */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Maybank Refinance at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-700">4.35%</p>
                <p className="text-xs text-gray-600">Conv. Rate From</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">90%</p>
                <p className="text-xs text-gray-600">Max LTV (1st 2 props)</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">35 Yrs</p>
                <p className="text-xs text-gray-600">Max Tenure</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">RM3k</p>
                <p className="text-xs text-gray-600">Min Income/Month</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3-5 Yrs</p>
                <p className="text-xs text-gray-600">Lock-in Period</p>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-lg font-bold text-yellow-700">HouzKey</p>
                <p className="text-xs text-gray-600">Rent-to-Own Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Current Rates Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Maybank Refinance Interest Rates {currentYear}
            </h2>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Rate From</p>
                  <p className="text-3xl font-bold text-yellow-700">{bank.rateFrom}</p>
                  <p className="text-xs text-gray-500">p.a.</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Base Rate (BLR)</p>
                  <p className="text-3xl font-bold text-gray-700">{bank.rateBLR}</p>
                  <p className="text-xs text-gray-500">Current</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Spread</p>
                  <p className="text-3xl font-bold text-green-600">{bank.spreadFrom}</p>
                  <p className="text-xs text-gray-500">to {bank.spreadTo}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Loan Details</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Min Loan: RM{bank.minLoan.toLocaleString()}</li>
                  <li>Max Loan: RM{bank.maxLoan.toLocaleString()}</li>
                  <li>Max Tenure: {bank.maxTenure} years</li>
                  <li>Max LTV: {bank.maxLTV}%</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Fees & Penalties</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Processing Fee: {bank.processingFee}</li>
                  <li>Lock-in Period: {bank.lockIn} years</li>
                  <li>Early Settlement: {bank.earlySettlement}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Maybank Refinance Calculator Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Maybank Refinance Home Loan Calculator: How Much Can You Save?
            </h2>

            {/* Scenario 1: Standard Refinance */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Scenario 1: Standard Refinance (RM500k property)
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              RM500k property, RM300k outstanding, 30 years remaining
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    Current Bank (4.80%)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Outstanding Loan</span>
                      <span className="font-semibold">RM300,000</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold text-red-600">4.80%</span>
                    </div>
                    <div className="flex justify-between bg-red-50 rounded-lg p-3">
                      <span className="text-red-700">Monthly Payment</span>
                      <span className="font-bold text-red-700">RM1,576</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Maybank (4.35%)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Refinanced Loan</span>
                      <span className="font-semibold">RM300,000</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold text-green-600">4.35%</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span className="text-green-700">Monthly Payment</span>
                      <span className="font-bold text-green-700">RM1,490</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-5 text-center border border-green-200">
                  <p className="text-sm text-green-700 mb-1">Monthly Savings</p>
                  <p className="text-3xl font-bold text-green-600">RM86</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 text-center border border-green-200">
                  <p className="text-sm text-green-700 mb-1">Total Savings (30 Years)</p>
                  <p className="text-3xl font-bold text-green-600">RM30,960</p>
                </div>
              </div>
            </div>

            {/* Scenario 2: Cash-Out Refinance */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Scenario 2: Cash-Out Refinance (RM800k property)
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              RM800k property, RM500k outstanding, 25 years remaining — refinance at 80% LTV to cash out RM140k
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Property Value</p>
                  <p className="text-xl font-bold text-gray-900">RM800,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">New Loan (80% LTV)</p>
                  <p className="text-xl font-bold text-gray-900">RM640,000</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-200">
                  <p className="text-sm text-yellow-700 mb-1">Cash Out Amount</p>
                  <p className="text-xl font-bold text-yellow-700">RM140,000</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Monthly Payment (RM640k at 4.35%, 25 years)</span>
                  <span className="text-xl font-bold text-gray-900">RM3,493</span>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Cash-out refinancing increases your total loan amount. Ensure the cash-out serves a productive purpose (renovation, debt consolidation, investment) and that the new monthly payment fits comfortably within your budget.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Calculate Your Exact Savings
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/dsr-calculator"
                className="inline-flex items-center gap-2 bg-white text-yellow-700 border border-yellow-300 px-6 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors"
              >
                Check If You Qualify (DSR)
              </Link>
              <Link
                href="/cash-out-calculator"
                className="inline-flex items-center gap-2 bg-white text-yellow-700 border border-yellow-300 px-6 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors"
              >
                Calculate Cash-Out Amount
              </Link>
            </div>
          </section>

          {/* Honest Review Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Is Maybank Good for Refinancing? Honest Review
            </h2>

            <p className="text-gray-700 mb-6">
              Maybank is Malaysia&apos;s largest bank with extensive branch network and established mortgage operations.
              Here&apos;s our honest assessment:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Pros
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Competitive rates</strong> - Among the lowest in market at {bank.rateFrom}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>MaxiHome flexibility</strong> - <Link href="/cash-out-calculator" className="text-primary-600 hover:underline">Cash-out</Link>, top-up, and flexi features available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Largest branch network</strong> - Convenient for document submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Existing customer benefits</strong> - Better rates for current Maybank customers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> Cons
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Processing can be slow</strong> - Large volume means longer queues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Stricter approval criteria</strong> - Higher income requirements for best rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>{bank.lockIn}-year lock-in</strong> - Standard penalty if you refinance early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Variable service quality</strong> - Experience varies by branch</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="font-semibold text-yellow-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                {bank.bestFor}. Also ideal for those who value brand stability, need cash-out options,
                or prefer dealing with Malaysia&apos;s largest bank. If you&apos;re already a Maybank customer
                with salary crediting, you may get preferential rates.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Who Gets Approved? Maybank Refinance Eligibility
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Basic Requirements</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Malaysian citizens, PRs, and selected foreigners
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Age: 18 - 65 years old (at loan maturity)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Minimum income: <strong>RM3,000/month</strong> (may vary by product)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Clean CCRIS/CTOS record
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Both conventional and Islamic (Maybank Islamic) options
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Property: residential and selected commercial
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Max DSR: 70% (flexible for high-income applicants)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <Link href="/dsr-calculator" className="text-primary-600 hover:underline">Check your DSR eligibility →</Link>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <h3 className="font-semibold text-green-800 mb-3">Higher Approval Chances</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>- Income above RM5,000/month</li>
                  <li>- Existing Maybank customer with salary crediting</li>
                  <li>- Property in high-demand areas (Klang Valley, Penang, JB)</li>
                  <li>- Low existing debt commitments (DSR below 50%)</li>
                  <li>- Employed with established company or government</li>
                  <li>- Maybank Premier or Maybank Privilege customer</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5">
                <h3 className="font-semibold text-red-800 mb-3">May Face Challenges</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>- Self-employed less than 2 years</li>
                  <li>- Properties in less popular areas</li>
                  <li>- DSR above 70%</li>
                  <li>- Recent late payments on CCRIS</li>
                  <li>- Foreigners without valid employment pass or PR</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Comparison Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Maybank vs Other Banks Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Bank</th>
                    <th className="text-left p-3 font-semibold">Rate</th>
                    <th className="text-left p-3 font-semibold">Lock-in</th>
                    <th className="text-left p-3 font-semibold">Islamic</th>
                    <th className="text-left p-3 font-semibold">Special</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-50 border-b">
                    <td className="p-3 font-semibold">
                      <span className="text-yellow-600">★ </span>Maybank
                    </td>
                    <td className="p-3 text-yellow-700 font-semibold">4.35%</td>
                    <td className="p-3">3-5 years</td>
                    <td className="p-3"><Check className="w-4 h-4 text-green-600 inline" /> Yes</td>
                    <td className="p-3 text-sm font-medium text-yellow-700">HouzKey / M2Own</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <Link href="/cimb-refinance-home-loan" className="text-primary-600 hover:underline">CIMB</Link>
                    </td>
                    <td className="p-3 font-semibold">4.35%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3"><Check className="w-4 h-4 text-green-600 inline" /> Yes</td>
                    <td className="p-3 text-sm text-gray-500">—</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <Link href="/public-bank-refinance-home-loan" className="text-primary-600 hover:underline">Public Bank</Link>
                    </td>
                    <td className="p-3 font-semibold">4.22%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3"><Check className="w-4 h-4 text-green-600 inline" /> Yes</td>
                    <td className="p-3 text-sm text-gray-500">—</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <Link href="/bank-islam-refinance-home-loan" className="text-primary-600 hover:underline">Bank Islam</Link>
                    </td>
                    <td className="p-3 font-semibold text-green-600">3.80%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3"><Check className="w-4 h-4 text-green-600 inline" /> Only</td>
                    <td className="p-3 text-sm text-gray-500">—</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <Link href="/standard-chartered-refinance-home-loan" className="text-primary-600 hover:underline">StanChart</Link>
                    </td>
                    <td className="p-3 font-semibold">3.90%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3"><X className="w-4 h-4 text-gray-400 inline" /> No</td>
                    <td className="p-3 text-sm font-medium text-teal-700">Cashback</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Rates as of February {currentYear}. Subject to change based on credit profile.{" "}
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              <Link href="/rhb-refinance-home-loan" className="text-primary-600 hover:underline">RHB</Link>, {" "}
              <Link href="/hong-leong-refinance-home-loan" className="text-primary-600 hover:underline">Hong Leong</Link>, {" "}
              <Link href="/ambank-refinance-home-loan" className="text-primary-600 hover:underline">AmBank</Link>
            </p>
          </section>

          {/* Maybank HouzKey / M2Own Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Maybank HouzKey & M2Own: Rent-to-Own Alternatives
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-3">HouzKey (Rent-to-Own)</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Maybank buys the property and rents it to you. You can exercise your option to purchase at a pre-agreed price within the rental period.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    No down payment required (0% deposit)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Try before you buy — live in the property first
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Part of rent contributes to purchase price
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mb-3">
                  <strong>Best for:</strong> First-time buyers who can&apos;t afford a large down payment or don&apos;t qualify for traditional financing.
                </p>
                <Link href="/maybank-houzkey" className="inline-flex items-center gap-1 text-sm text-yellow-700 font-medium hover:text-yellow-800">
                  Full HouzKey Guide →
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">M2Own (My 2nd Home)</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Similar rent-to-own concept designed for those looking at a second property or who want to upgrade from their current home.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Available for second property purchases
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Flexible purchase option within rental period
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Test the neighbourhood before committing
                  </li>
                </ul>
                <p className="text-xs text-gray-500">
                  <strong>Note:</strong> HouzKey and M2Own are for new purchases, not refinancing existing loans. If you&apos;re looking to refinance, use Maybank&apos;s standard MaxiHome or Islamic home financing products instead.
                </p>
              </div>
            </div>
          </section>

          {/* Hidden Costs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Hidden Costs & Fees to Watch
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Early Settlement Penalty</h3>
                  <p className="text-gray-600">
                    {bank.earlySettlement} of outstanding balance if settled within {bank.lockIn}-year lock-in period.
                    On a RM400,000 loan, this could be RM8,000-12,000.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Fees</h3>
                  <p className="text-gray-600">
                    Typically {SITE_CONFIG.costs.legalFeesText}. Some promotional packages may absorb this cost.
                    Always confirm with your loan officer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Valuation Fee</h3>
                  <p className="text-gray-600">
                    {SITE_CONFIG.costs.valuationFeesText} depending on property value.
                    Required for bank to assess current market value.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Stamp Duty</h3>
                  <p className="text-gray-600">
                    {SITE_CONFIG.costs.stampDutyText} of loan amount. {SITE_CONFIG.costs.stampDutyNote}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">MRTA/MLTA Insurance</h3>
                  <p className="text-gray-600">
                    While optional, many banks strongly encourage this. Can add RM5,000-20,000 to your loan amount
                    depending on coverage. Compare standalone policies for potentially better rates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Time Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How Fast is Maybank Refinance Processing?
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-200"></div>

              <div className="space-y-6">
                {[
                  { step: "Document Submission", time: "Day 1", desc: "Submit complete application with all required documents" },
                  { step: "Initial Assessment", time: "1-3 days", desc: "Bank reviews application and checks CCRIS/CTOS" },
                  { step: "Property Valuation", time: "1-2 weeks", desc: "Appointed valuer inspects and values your property" },
                  { step: "Credit Approval", time: "2-4 weeks", desc: "Underwriting team reviews and approves loan" },
                  { step: "Letter of Offer", time: "3-5 weeks", desc: "Receive and sign loan offer letter" },
                  { step: "Legal Documentation", time: "4-8 weeks", desc: "Lawyer prepares and processes loan documents" },
                  { step: "Disbursement", time: "6-10 weeks", desc: "Funds released, old loan settled, refinance complete" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 ml-4">
                    <div className="relative">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm -ml-4">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 -mt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-semibold text-yellow-700">{item.time}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{item.step}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> To speed up processing, ensure all documents are complete and certified copies ready.
                Existing Maybank customers with salary crediting may experience faster approval times.
              </p>
            </div>
          </section>

          {/* Maybank Refinancing Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Maybank Refinancing Process (6 Steps)
            </h2>
            <div className="bg-yellow-50 rounded-lg p-3 text-center mb-6 border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Timeline:</strong> Typically 2-3 months from application to disbursement
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Check Eligibility & Calculate Savings",
                  desc: "Use our DSR calculator to check if you qualify and our refinance calculator to estimate your monthly savings. Factor in any early settlement penalty from your current bank.",
                },
                {
                  step: 2,
                  title: "Prepare & Submit Documents",
                  desc: "IC, salary slips (3 months), bank statements (6 months), EA form, existing loan statement, and property documents. Apply at any Maybank branch, via Maybank2u, or through our free comparison service.",
                },
                {
                  step: 3,
                  title: "Credit Assessment & Property Valuation",
                  desc: "Maybank runs credit checks (CCRIS/CTOS) and arranges property valuation by an appointed valuer. Takes 1-3 weeks. Existing Maybank customers may get faster processing.",
                },
                {
                  step: 4,
                  title: "Loan Approval & Letter of Offer",
                  desc: "Maybank issues Letter of Offer within 2-4 weeks. Carefully review the rates, lock-in period (3-5 years), fees, and all terms before accepting.",
                },
                {
                  step: 5,
                  title: "Legal Documentation",
                  desc: "Appointed lawyer prepares loan agreement and handles mortgage documentation including discharge of charge from your current bank. Takes 3-5 weeks.",
                },
                {
                  step: 6,
                  title: "Disbursement & Settlement",
                  desc: "Maybank settles your existing bank loan directly. Cash-out amount (if any) is credited to your Maybank account. Refinance complete!",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
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

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Compare Other Banks
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/cimb-refinance-home-loan"
                className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <h3 className="font-semibold text-red-900">CIMB Refinance</h3>
                <p className="text-sm text-red-700">Compare CIMB rates and features</p>
              </Link>
              <Link
                href="/public-bank-refinance-home-loan"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Public Bank Refinance</h3>
                <p className="text-sm text-blue-700">Compare Public Bank rates and features</p>
              </Link>
              <Link
                href="/rhb-refinance-home-loan"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-purple-900">RHB Refinance</h3>
                <p className="text-sm text-purple-700">Compare RHB rates and features</p>
              </Link>
              <Link
                href="/calculator"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">Refinance Calculator</h3>
                <p className="text-sm text-primary-700">Calculate your potential savings</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Why Use a Broker */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Use a Broker Instead of Applying Direct?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Direct to Maybank</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Through Our Specialists</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 text-gray-600">One bank only</td><td className="p-3 text-gray-700 font-medium">Compare 15+ banks</td></tr>
                <tr className="border-b"><td className="p-3 text-gray-600">Standard approval process</td><td className="p-3 text-gray-700 font-medium">Higher approval rate</td></tr>
                <tr className="border-b"><td className="p-3 text-gray-600">You handle all paperwork</td><td className="p-3 text-gray-700 font-medium">We manage everything</td></tr>
                <tr className="border-b"><td className="p-3 text-gray-600">Limited rate negotiation</td><td className="p-3 text-gray-700 font-medium">Access to special rates</td></tr>
                <tr><td className="p-3 text-gray-600">If rejected, start over</td><td className="p-3 text-gray-700 font-medium">We match you to right bank</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Our service is 100% free</strong> — banks pay us, not you.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get Free Multi-Bank Comparison
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with Maybank?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Get a free quote and compare with other banks in 24 hours.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4 bg-white text-yellow-700 hover:bg-yellow-50"
          >
            Get Free Quote
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
                  <X className="w-6 h-6" />
                </button>
              </div>
              <LeadForm variant="modal" source="maybank-refinance" lang="en" showAllFields={true} />
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
            headline: `Maybank Refinance Home Loan ${currentYear} - Rates, Review & Calculator`,
            description: `Complete guide to Maybank home loan refinancing. Current rates from ${bank.rateFrom}, honest review, eligibility requirements, and comparison with other banks.`,
            datePublished: "2025-12-01",
            dateModified: "2026-02-15",
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

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Compare Maybank rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
