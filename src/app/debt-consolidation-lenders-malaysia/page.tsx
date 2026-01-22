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
  Building2,
  Shield,
  AlertTriangle,
  Star,
  Clock,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  ExternalLink,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

const bankLenders = [
  {
    bank: "Maybank",
    products: "Cash-out, Personal Loan",
    ratesFrom: "3.65%",
    bestFor: "Existing Maybank customers",
    features: ["Largest branch network", "Fast processing for existing customers", "Flexible cash-out terms"],
    href: "/maybank-refinance-home-loan",
  },
  {
    bank: "Public Bank",
    products: "Cash-out, Personal Loan",
    ratesFrom: "3.68%",
    bestFor: "Salaried employees",
    features: ["Competitive rates", "Strong for salary earners", "Good customer service"],
    href: "/public-bank-refinance-home-loan",
  },
  {
    bank: "CIMB",
    products: "Cash-out, Personal Loan",
    ratesFrom: "3.70%",
    bestFor: "High loan amounts",
    features: ["Higher loan limits", "Quick approval", "Good for large consolidations"],
    href: "/cimb-refinance-home-loan",
  },
  {
    bank: "Hong Leong",
    products: "Cash-out, Personal Loan",
    ratesFrom: "3.72%",
    bestFor: "First-time refinancers",
    features: ["New customer incentives", "Flexible terms", "Good promotions"],
    href: "/hong-leong-refinance-home-loan",
  },
  {
    bank: "RHB",
    products: "Cash-out, Personal Loan",
    ratesFrom: "3.75%",
    bestFor: "Flexible approval criteria",
    features: ["More lenient approval", "Good for self-employed", "Flexible income assessment"],
    href: "/rhb-refinance-home-loan",
  },
  {
    bank: "AmBank",
    products: "Cash-out, Personal Loan",
    ratesFrom: "3.78%",
    bestFor: "Quick processing",
    features: ["Fast turnaround", "Good communication", "Efficient processing"],
    href: "/ambank-refinance-home-loan",
  },
];

const lenderTypes = [
  {
    type: "Conventional Banks",
    icon: Building2,
    description: "Major banks like Maybank, CIMB, Public Bank offer both cash-out refinancing and personal loans.",
    pros: ["Regulated by BNM", "Competitive rates", "Multiple product options"],
    cons: ["Stricter approval criteria", "Longer processing times for cash-out"],
    color: "blue",
  },
  {
    type: "Islamic Banks",
    icon: Landmark,
    description: "Bank Islam, MBSB, and Islamic windows of conventional banks offer Shariah-compliant financing.",
    pros: ["Shariah-compliant", "Similar rates to conventional", "No riba (interest)"],
    cons: ["Limited product variety", "May have different terms"],
    color: "green",
  },
  {
    type: "AKPK (Government)",
    icon: Shield,
    description: "Agensi Kaunseling dan Pengurusan Kredit - free government debt management program.",
    pros: ["Free service", "0% interest freeze", "Professional counseling"],
    cons: ["Affects credit score", "Can't get new credit during program", "Takes years to complete"],
    color: "purple",
  },
];

const faqs = [
  {
    question: "Which bank is best for debt consolidation in Malaysia?",
    answer: "It depends on your situation. For cash-out refinance (lowest rates), Maybank, Public Bank, and CIMB typically offer the best rates starting from 3.65-3.70%. For personal loans without property, Hong Leong and Maybank often have competitive rates. RHB and AmBank are known to be more flexible with approval criteria.",
  },
  {
    question: "Are there debt consolidation companies in Malaysia?",
    answer: "Malaysia doesn't have dedicated debt consolidation companies like the US. Instead, you consolidate debt through: (1) Banks - via cash-out refinance or personal loans, (2) AKPK - government debt management program, (3) Licensed moneylenders - for smaller amounts. Always avoid unlicensed lenders (Ah Long).",
  },
  {
    question: "Can I consolidate debt with bad credit in Malaysia?",
    answer: "Yes, but options are limited. For property owners, banks focus more on property equity than credit score for cash-out refinance. RHB and AmBank are known to be more flexible. If credit is very poor, AKPK is an option - they negotiate with creditors on your behalf. Avoid unlicensed moneylenders at all costs.",
  },
  {
    question: "How do I choose a debt consolidation lender?",
    answer: "Consider: (1) Interest rates - cash-out refinance is cheapest at 3.5-4.5%, (2) Your eligibility - do you have property? Good credit?, (3) Processing time - personal loans are faster, (4) Total cost - include fees and charges, (5) Customer service - read reviews. We recommend applying to 2-3 banks simultaneously.",
  },
  {
    question: "Is it safe to use online debt consolidation services?",
    answer: "Be cautious. Legitimate services like bank websites and AKPK are safe. However, beware of scams claiming to offer debt consolidation. Never pay upfront fees, never give out your banking passwords, and verify any company is registered with BNM. When in doubt, go directly to your bank or AKPK.",
  },
];

export default function DebtConsolidationLendersPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-purple-200 mb-4">
            <Building2 className="w-5 h-5" />
            <span className="text-sm">Lender Comparison</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Debt Consolidation Lenders Malaysia {currentYear} - Compare Banks & Financial Institutions
          </h1>
          <p className="text-lg text-purple-100 mb-2">
            Find the right lender for your debt consolidation. We compare 10+ Malaysian banks
            to help you find the best match for your situation.
          </p>
          <p className="text-sm text-purple-200 mb-6">
            Updated: {SITE_CONFIG.lastUpdatedEn}
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-50 transition-all hover:scale-105"
            >
              Get Matched with a Lender
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/debt-consolidation-options"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-500 transition-all border border-purple-400"
            >
              Compare Options First
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs text-purple-200">Banks Compared</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">3.65%</p>
              <p className="text-xs text-purple-200">Rates From</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">Free</p>
              <p className="text-xs text-purple-200">Matching Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Types of Lenders */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Types of Debt Consolidation Lenders in Malaysia
            </h2>

            <div className="space-y-6">
              {lenderTypes.map((lender) => (
                <div
                  key={lender.type}
                  className={`bg-${lender.color}-50 border border-${lender.color}-200 rounded-xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-${lender.color}-600 rounded-full flex items-center justify-center`}>
                      <lender.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{lender.type}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{lender.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Pros
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {lender.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Cons
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {lender.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <X className="w-3 h-3 text-red-600 mt-1 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top Banks for Debt Consolidation {currentYear}
            </h2>

            <p className="text-gray-700 mb-6">
              Here are the major banks offering debt consolidation products in Malaysia, ranked by typical interest rates:
            </p>

            <div className="space-y-4">
              {bankLenders.map((bank, index) => (
                <div
                  key={bank.bank}
                  className={`border rounded-xl p-6 ${
                    index === 0 ? "border-purple-300 bg-purple-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {index === 0 && (
                          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">TOP PICK</span>
                        )}
                        <h3 className="text-lg font-bold text-gray-900">{bank.bank}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Products:</strong> {bank.products}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Best for:</strong> {bank.bestFor}
                      </p>
                      <ul className="text-sm text-gray-600 flex flex-wrap gap-2 mt-2">
                        {bank.features.map((feature) => (
                          <li
                            key={feature}
                            className="bg-gray-100 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-gray-500">Rates from</p>
                      <p className="text-2xl font-bold text-purple-600">{bank.ratesFrom}</p>
                      <Link
                        href={bank.href}
                        className="inline-flex items-center gap-1 text-purple-600 hover:underline text-sm mt-2"
                      >
                        View Details <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4">
              * Rates shown are for cash-out refinance. Personal loan rates are typically 6-12%. Actual rates depend on credit profile.
            </p>
          </section>

          {/* Mid-page CTA */}
          <div className="my-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Not Sure Which Lender to Choose?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Let us match you with the best lender for your situation. Free, no-obligation consultation.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get Matched Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Choose the Right Lender
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compare Interest Rates</h3>
                <p className="text-gray-700 text-sm">
                  Cash-out refinance offers the lowest rates (3.5-4.5%), followed by personal loans (6-12%).
                  Even a 1% difference can save thousands over the loan tenure.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Check Processing Time</h3>
                <p className="text-gray-700 text-sm">
                  Need fast cash? Personal loans can be approved in 1-3 days. Cash-out refinance takes
                  6-10 weeks but offers better rates.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Look at Total Cost</h3>
                <p className="text-gray-700 text-sm">
                  Don&apos;t just compare interest rates. Check processing fees, legal fees, stamp duty,
                  and any penalties. Get the full cost breakdown before deciding.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Read Reviews & Reputation</h3>
                <p className="text-gray-700 text-sm">
                  Check customer reviews for processing efficiency and customer service. Some banks
                  are known for better communication and faster processing.
                </p>
              </div>
            </div>
          </section>

          {/* Which Lender for You */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Which Lender is Best for You?
            </h2>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-green-600" />
                  Large Debt (RM200k+)
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Banks with strong cash-out refinance products: <strong>Maybank, Public Bank, CIMB</strong>.
                  Cash-out allows you to access property equity at the lowest rates.
                </p>
                <Link href="/cash-out-refinance-malaysia" className="text-purple-600 hover:underline text-sm">
                  Learn about cash-out refinance →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-orange-600" />
                  Small Debt (Under RM100k), No Property
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Personal loan specialists: <strong>Hong Leong, Maybank, Public Bank</strong>.
                  Fast approval, no collateral needed.
                </p>
                <Link href="/personal-loan-debt-consolidation" className="text-purple-600 hover:underline text-sm">
                  Learn about personal loans →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-yellow-600" />
                  Bad Credit History
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  More flexible banks: <strong>RHB, AmBank</strong>. If you have property, focus on equity value.
                  If credit is very poor, consider <strong>AKPK</strong>.
                </p>
                <Link href="/debt-consolidation-options#akpk" className="text-purple-600 hover:underline text-sm">
                  Learn about AKPK →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-blue-600" />
                  Self-Employed / Commission Income
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Banks that accept varied income: <strong>RHB, Hong Leong, AmBank</strong>.
                  Provide 2 years of tax returns and consistent bank statements.
                </p>
              </div>
            </div>
          </section>

          {/* Warning Section */}
          <section className="mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Avoid These Lenders
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Unlicensed Moneylenders (Ah Long)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    NEVER borrow from unlicensed moneylenders. They charge exorbitant interest (often 300%+ annually),
                    use illegal collection tactics, and can destroy your life.
                  </p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Offers that seem too good to be true
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      No proper documentation or contracts
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Requests for IC/passport to be held
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      ATM card or internet banking access requested
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Signs of Predatory Lending</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Upfront fees before approval
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Guaranteed approval regardless of credit
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Pressure to sign quickly without reading
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Not registered with Bank Negara Malaysia
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>How to verify a lender:</strong> Check the{" "}
                    <a
                      href="https://www.bnm.gov.my/financial-institutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      Bank Negara Malaysia website
                    </a>{" "}
                    for a list of licensed financial institutions. If a company isn&apos;t listed, avoid them.
                  </p>
                </div>
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
                <p className="text-sm text-green-700">Lowest rates for property owners</p>
              </Link>
              <Link
                href="/personal-loan-debt-consolidation"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="font-semibold text-orange-900">Personal Loan for Debt Consolidation</h3>
                <p className="text-sm text-orange-700">Fast option, no property required</p>
              </Link>
              <Link
                href="/debt-consolidation-calculator"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Debt Consolidation Calculator</h3>
                <p className="text-sm text-blue-700">Calculate your potential savings</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find the Best Lender for Your Debt Consolidation
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get matched with the right lender based on your situation. Free consultation, no obligation.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get Matched with a Lender
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
              <DebtConsolidationLeadForm variant="modal" source="debt-consolidation-lenders" />
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
            headline: `Debt Consolidation Lenders Malaysia ${currentYear} - Compare Banks & Financial Institutions`,
            description: "Find the best debt consolidation lenders in Malaysia. Compare banks, interest rates, and loan options. Get matched with the right lender for your situation.",
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
        text="Find the right lender"
        buttonText="Get Matched"
      />
    </>
  );
}
