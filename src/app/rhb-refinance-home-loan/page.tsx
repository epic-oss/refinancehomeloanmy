"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Check, X, AlertTriangle, FileText } from "lucide-react";

const faqs = [
  {
    question: "What is RHB refinancing home loan rate in 2026?",
    answer: "RHB's refinance rates start from 4.10% p.a. as of February 2026. The actual rate depends on your credit profile, loan amount, property type, and whether you're an existing RHB customer. RHB uses a Base Rate (BR) system set by Bank Negara Malaysia. Their My1 Home Loan product is most popular for refinancing.",
  },
  {
    question: "What is RHB My1 Home Loan for refinancing?",
    answer: "RHB My1 is their flagship home loan product that offers flexible repayment options for refinancing. Key features include the ability to reduce your loan tenure or monthly payments, a redraw facility for extra payments made, salary crediting benefits, and payment holiday options in certain situations. It's one of the most flexible home loan products in Malaysia.",
  },
  {
    question: "Does RHB have a lock-in period for refinancing?",
    answer: "Yes, RHB has a 3-year lock-in period for refinancing. If you fully settle or refinance to another bank within this period, you'll incur an early settlement penalty of 2-3% of the outstanding loan amount. For example, on a RM300,000 balance, the penalty could be RM6,000-RM9,000. After 3 years, you can refinance freely without any penalty.",
  },
  {
    question: "How long does RHB refinance approval take?",
    answer: "RHB refinance approval typically takes 2-4 weeks from complete document submission. The entire process from application to disbursement takes approximately 6-10 weeks, including: credit check (1-3 days), property valuation (1-2 weeks), underwriting approval (2-4 weeks), legal documentation (3-5 weeks), and final disbursement. Existing RHB customers may get faster processing.",
  },
  {
    question: "Can I refinance from Maybank or CIMB to RHB?",
    answer: "Yes, you can refinance from any bank including Maybank, CIMB, Public Bank, UOB, or Hong Leong to RHB. RHB will settle your existing loan and create a new loan at RHB's rates. Ensure your current lock-in period has ended first. A broker can help compare if switching to RHB's 4.10% saves money after factoring in all refinancing costs (legal fees, stamp duty, valuation).",
  },
  {
    question: "What is the minimum income for RHB refinancing?",
    answer: "RHB requires a minimum gross income of RM3,000 per month for home loan refinancing. This applies to both salaried employees and self-employed applicants. Higher income (above RM6,000) may qualify you for better rates. Professionals like doctors, lawyers, and accountants may get preferential terms and higher approval chances with RHB.",
  },
  {
    question: "Does RHB offer Islamic home financing?",
    answer: "Yes, RHB offers Islamic home financing through RHB Islamic Bank. Their Shariah-compliant product is based on the Tawarruq (Commodity Murabahah) concept and offers competitive profit rates for refinancing. Both conventional and Islamic products are available, giving borrowers flexibility to choose based on their preference.",
  },
  {
    question: "What documents are needed for RHB refinance?",
    answer: "Salaried employees need: MyKad (IC), latest 3 months payslips, latest 6 months bank statements showing salary credit, EA form or tax return, existing loan statement, and property documents (S&P agreement, title). Self-employed applicants need: SSM registration, 2 years tax returns (Form B), 6 months business bank statements, and business profile.",
  },
];

export default function RHBRefinancePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "RHB Refinance Home Loan Malaysia 2026 – Rates, Review & Guide",
            description: "Complete guide to RHB home loan refinancing. Rates from 4.10%, My1 Home Loan flexible features, honest review, and comparison with other banks.",
            datePublished: "2025-12-01",
            dateModified: "2026-02-15",
            author: { "@type": "Organization", name: "RefinanceHomeLoanMY" },
            publisher: { "@type": "Organization", name: "RefinanceHomeLoanMY", url: "https://refinancehomeloanmy.com" },
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
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
            RHB Bank Malaysia
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            RHB Refinance Home Loan Malaysia 2026
          </h1>
          <p className="text-lg text-purple-100 mb-2">
            Complete guide to RHB refinancing — My1 Home Loan, flexible repayments, competitive rates & honest review.
          </p>
          <p className="text-sm text-purple-200 mb-6">Updated: February 2026</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors text-lg"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Quick Summary Box */}
      <section className="py-8 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-4">RHB Refinance at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">4.10%</p>
                <p className="text-xs text-gray-600">Rate From</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">90%</p>
                <p className="text-xs text-gray-600">Max LTV</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">35 Yrs</p>
                <p className="text-xs text-gray-600">Max Tenure</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">RM3k</p>
                <p className="text-xs text-gray-600">Min Income</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-700">3 Yrs</p>
                <p className="text-xs text-gray-600">Lock-in</p>
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
              RHB Refinance Interest Rates 2026
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Rate From</p>
                  <p className="text-3xl font-bold text-purple-700">4.10%</p>
                  <p className="text-xs text-gray-500">p.a.</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Lock-in Period</p>
                  <p className="text-3xl font-bold text-gray-700">3 Years</p>
                  <p className="text-xs text-gray-500">Standard</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Max Tenure</p>
                  <p className="text-3xl font-bold text-gray-700">35 Years</p>
                  <p className="text-xs text-gray-500">or until age 70</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Loan Details</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Min Loan: RM100,000</li>
                  <li>Max Loan: Up to property value</li>
                  <li>Max Tenure: 35 years</li>
                  <li>Max LTV: 90%</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Fees & Penalties</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Processing Fee: ~0.1% or waived</li>
                  <li>Lock-in Period: 3 years</li>
                  <li>Early Settlement: 2-3% penalty</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              Rates subject to change.{" "}
              Need extra cash? <Link href="/cash-out-calculator" className="text-primary-600 hover:underline">Calculate your cash-out amount</Link>.
            </p>
          </section>

          {/* Example Savings Calculation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How Much Can You Save with RHB Refinancing?
            </h2>
            <p className="text-gray-600 mb-6">
              Example: RM500,000 property, RM300,000 outstanding loan, 30 years remaining tenure.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-red-800">Your Current Loan</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Interest Rate</span><span className="font-semibold">5.00%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Monthly Payment</span><span className="font-semibold">RM1,610</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Total Interest (30yr)</span><span className="font-semibold">RM279,600</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-green-800">Refinance with RHB</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Interest Rate</span><span className="font-semibold text-green-700">4.10%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Monthly Payment</span><span className="font-semibold text-green-700">RM1,451</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Total Interest (30yr)</span><span className="font-semibold text-green-700">RM222,360</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-xl p-6 text-center">
              <p className="text-sm text-green-800 mb-1">Your Estimated Savings</p>
              <p className="text-3xl font-bold text-green-700 mb-2">RM159/month</p>
              <p className="text-lg font-semibold text-green-700">RM57,240 total over 30 years</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Link href="/calculator" className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Calculate Your Savings <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dsr-calculator" className="inline-flex items-center gap-2 bg-white border border-purple-300 text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                Check Your DSR
              </Link>
              <Link href="/cash-out-calculator" className="inline-flex items-center gap-2 bg-white border border-purple-300 text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                Calculate Cash-Out
              </Link>
            </div>
          </section>

          {/* Honest Review Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Is RHB Good for Refinancing? Honest Review
            </h2>
            <p className="text-gray-700 mb-6">
              RHB Bank is Malaysia&apos;s fourth-largest bank with a strong focus on retail banking.
              They&apos;re known for flexible home loan products and competitive rates. Here&apos;s our honest assessment:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> RHB Advantages
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Competitive rate (4.10%)</strong> — lower than CIMB (4.35%) and Maybank (4.35%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>My1 Home Loan flexibility</strong> — adjust payments, redraw facility, salary benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Good for professionals</strong> — doctors, lawyers, accountants get preferential terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Redraw facility</strong> — access extra payments when needed. <Link href="/cash-out-calculator" className="text-primary-600 hover:underline">Calculate cash-out</Link></span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> Things to Consider
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Not the absolute lowest</strong> — Bank Islam (3.80%) and StanChart (3.90%) are lower</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Smaller branch network</strong> — fewer branches than Maybank, CIMB, Public Bank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>3-year lock-in</strong> — standard penalty of 2-3% for early settlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Processing variability</strong> — speed can vary by branch and loan officer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="font-semibold text-purple-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                Borrowers who value payment flexibility and competitive rates. RHB is ideal for professionals
                who appreciate personalized service, those who may want to make extra payments occasionally
                (redraw facility), and existing RHB customers who can leverage relationship banking for better terms.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              RHB Refinance Eligibility Requirements
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Age", value: "21 – 65 years old" },
                  { label: "Citizenship", value: "Malaysian citizens & permanent residents" },
                  { label: "Min Income", value: "RM3,000/month (salaried & self-employed)" },
                  { label: "Loan Type", value: "Conventional & Islamic (Tawarruq)" },
                  { label: "Property", value: "Residential — landed & non-landed" },
                  { label: "DSR Limit", value: "Up to 70%" },
                  { label: "Max LTV", value: "Up to 90%" },
                  { label: "Existing Loan", value: "Any bank can refinance to RHB" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">Higher Approval Chances With:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <p>- Professionals (doctors, lawyers, accountants)</p>
                  <p>- Income above RM6,000/month</p>
                  <p>- Existing RHB customer with good track record</p>
                  <p>- Property in established residential areas</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t text-center">
                <Link href="/dsr-calculator" className="text-purple-600 hover:underline font-medium inline-flex items-center gap-1">
                  Check your eligibility with our DSR Calculator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Bank Comparison Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              RHB vs Other Banks — Refinance Comparison 2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-purple-800 text-white">
                    <th className="text-left p-3">Bank</th>
                    <th className="text-center p-3">Rate (%)</th>
                    <th className="text-center p-3">Islamic</th>
                    <th className="text-center p-3">Lock-in</th>
                    <th className="text-center p-3">Max LTV</th>
                    <th className="text-center p-3">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bank: "RHB", rate: "4.10", islamic: "Yes", lockin: "3 yrs", ltv: "90%", bestFor: "Flexible payments", highlight: true },
                    { bank: "Bank Islam", rate: "3.80", islamic: "Yes", lockin: "3 yrs", ltv: "90%", bestFor: "Lowest rate", link: "/bank-islam-home-financing" },
                    { bank: "Public Bank", rate: "4.22", islamic: "Yes", lockin: "3 yrs", ltv: "90%", bestFor: "Stability", link: "/public-bank-refinance-home-loan" },
                    { bank: "CIMB", rate: "4.35", islamic: "Yes", lockin: "3 yrs", ltv: "90%", bestFor: "FlexiHome", link: "/cimb-refinance-home-loan" },
                    { bank: "Maybank", rate: "4.35", islamic: "Yes", lockin: "3-5 yrs", ltv: "90%", bestFor: "HouzKey", link: "/maybank-refinance-home-loan" },
                  ].map((b, idx) => (
                    <tr key={idx} className={`border-b ${b.highlight ? "bg-purple-50 font-semibold" : "hover:bg-gray-50"}`}>
                      <td className="p-3">
                        {b.highlight ? (
                          <span className="text-purple-700">★ {b.bank}</span>
                        ) : b.link ? (
                          <Link href={b.link} className="text-primary-600 hover:underline">{b.bank}</Link>
                        ) : (
                          b.bank
                        )}
                      </td>
                      <td className="text-center p-3">{b.rate}</td>
                      <td className="text-center p-3">{b.islamic}</td>
                      <td className="text-center p-3">{b.lockin}</td>
                      <td className="text-center p-3">{b.ltv}</td>
                      <td className="text-center p-3 text-xs">{b.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Rates are indicative and subject to change.{" "}
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              <Link href="/hong-leong-refinance-home-loan" className="text-primary-600 hover:underline">Hong Leong</Link>,{" "}
              <Link href="/ambank-refinance-home-loan" className="text-primary-600 hover:underline">AmBank</Link>,{" "}
              <Link href="/uob-refinance-home-loan" className="text-primary-600 hover:underline">UOB</Link>
            </p>
          </section>

          {/* Hidden Costs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              RHB Refinancing — Hidden Costs & Fees to Watch
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Early Settlement Penalty</h3>
                  <p className="text-gray-600">2-3% of outstanding balance during the 3-year lock-in period. On RM300k, that&apos;s RM6,000-RM9,000.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Fees</h3>
                  <p className="text-gray-600">Typically 0.4-1% of loan amount. Ask about RHB&apos;s promotional packages that may subsidize this.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Valuation Fee</h3>
                  <p className="text-gray-600">RM200-RM1,500 depending on property value for professional valuation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Stamp Duty</h3>
                  <p className="text-gray-600">0.5% of loan amount. Exempted for refinancing instruments below RM500,000.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">MRTA Insurance</h3>
                  <p className="text-gray-600">RHB may require or strongly encourage MRTA. Get quotes from multiple insurers for fair pricing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Apply for RHB Refinance — Step by Step
            </h2>
            <div className="bg-purple-50 rounded-lg p-3 text-center text-sm text-purple-800 font-medium mb-6">
              Typical timeline: 6–10 weeks from application to disbursement
            </div>
            <div className="space-y-4">
              {[
                { step: 1, title: "Check Eligibility & DSR", desc: "Use our DSR calculator to ensure you qualify. Minimum income RM3,000/month, DSR below 70%.", link: "/dsr-calculator" },
                { step: 2, title: "Gather Documents", desc: "IC, latest 3 months payslips, 6 months bank statements, EA form/tax return, current loan statement, property documents (S&P, title)." },
                { step: 3, title: "Submit Application", desc: "Apply through our panel for free multi-bank comparison, or directly at any RHB branch or via their mobile app." },
                { step: 4, title: "Valuation & Approval", desc: "RHB arranges property valuation. Credit assessment and underwriting takes 2-4 weeks from complete submission." },
                { step: 5, title: "Sign Loan Agreement", desc: "Review and sign the Letter of Offer. Review My1 features carefully. Complete legal documentation with appointed lawyer." },
                { step: 6, title: "Disbursement", desc: "RHB settles your existing loan with your old bank. New loan begins with lower monthly payments." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link} className="text-purple-600 hover:text-purple-700 text-sm font-medium flex-shrink-0 self-center">
                      Use tool →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Why Use a Broker */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Use a Broker Instead of Applying Direct to RHB?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Direct to RHB</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Through Our Specialists</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3 text-gray-600">One bank only</td><td className="p-3 text-gray-700 font-medium">Compare 15+ banks simultaneously</td></tr>
                  <tr className="border-b"><td className="p-3 text-gray-600">Standard approval process</td><td className="p-3 text-gray-700 font-medium">Higher approval rate</td></tr>
                  <tr className="border-b"><td className="p-3 text-gray-600">You handle all paperwork</td><td className="p-3 text-gray-700 font-medium">We manage everything for you</td></tr>
                  <tr className="border-b"><td className="p-3 text-gray-600">Limited rate negotiation</td><td className="p-3 text-gray-700 font-medium">Access to special rates</td></tr>
                  <tr><td className="p-3 text-gray-600">If rejected, start over</td><td className="p-3 text-gray-700 font-medium">We match you to the right bank</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Our service is 100% free</strong> — banks pay us, not you.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              RHB Refinance Home Loan — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openFaqIndex === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

          {/* Compare Other Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Other Banks</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Maybank Refinance", href: "/maybank-refinance-home-loan", rate: "4.35%", note: "HouzKey available" },
                { name: "CIMB Refinance", href: "/cimb-refinance-home-loan", rate: "4.35%", note: "Conventional & Islamic" },
                { name: "Public Bank Refinance", href: "/public-bank-refinance-home-loan", rate: "4.22%", note: "Best stability" },
                { name: "UOB Refinance", href: "/uob-refinance-home-loan", rate: "4.61%", note: "95% margin" },
                { name: "Standard Chartered", href: "/standard-chartered-refinance-home-loan", rate: "3.90%", note: "Premium banking" },
                { name: "All Bank Rates", href: "/refinance-home-loan-rates-malaysia", rate: "14 banks", note: "Full comparison" },
              ].map((b, idx) => (
                <Link key={idx} href={b.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">{b.name}</h3>
                  <p className="text-sm text-gray-600">From {b.rate} • {b.note}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with RHB?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free quote and compare RHB with other banks in 24 hours.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors text-lg"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
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
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <LeadForm variant="modal" source="rhb-refinance" lang="en" showAllFields={true} />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Compare RHB rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
