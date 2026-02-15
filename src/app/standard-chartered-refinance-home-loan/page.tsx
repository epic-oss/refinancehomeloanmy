"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Check, X } from "lucide-react";

// Standard Chartered Products data
const scProducts = [
  {
    name: "Standard Home Loan",
    features: [
      "Competitive fixed & variable rates",
      "Up to 90% financing margin",
      "Up to 35 years tenure",
      "No processing fees for refinancing",
      "Available for residential properties",
    ],
    highlight: "Best for Refinancing",
  },
  {
    name: "MortgageOne (Offset Account)",
    features: [
      "Linked savings offset mortgage interest",
      "Pay interest only on net balance",
      "Full access to savings anytime",
      "Significant interest savings over tenure",
      "Ideal for high cash-flow borrowers",
    ],
    highlight: "Best for Savings",
  },
  {
    name: "Saadiq Home Financing-i",
    features: [
      "Syariah-compliant financing",
      "Based on Musharakah Mutanaqisah concept",
      "Competitive profit rates",
      "Available for refinancing",
      "Approved by Syariah Advisory Committee",
    ],
    highlight: "Islamic Option",
  },
];

// Standard Chartered Rates table data
const scRates = [
  {
    product: "MortgageOne (Offset)",
    rate: "SBR + 1.15%",
    effectiveRate: "3.90%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
  {
    product: "Saadiq My HomeOne-i",
    rate: "SBR + 1.15%",
    effectiveRate: "3.90%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
  {
    product: "MortgageOne Zero Cost",
    rate: "SBR + 1.45%",
    effectiveRate: "4.20%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
];

// Benefits data
const benefits = [
  {
    title: "MortgageOne Offset",
    description: "Link your savings to offset mortgage interest - only pay interest on the net balance.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Premium Banking Perks",
    description: "Access Priority Banking benefits including dedicated relationship manager and exclusive rates.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Expat & Foreigner Friendly",
    description: "One of the most welcoming banks for expats, PR holders, and MM2H participants in Malaysia.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "No Processing Fees",
    description: "Save on upfront costs with waived processing fees for refinancing applications.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "International Network",
    description: "Benefit from Standard Chartered's global presence across 59 markets for cross-border banking.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Flexible Payments",
    description: "Choose from multiple repayment options including partial prepayment without penalty after lock-in.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

// Documents data
const salariedDocs = [
  "IC (MyKad/Passport)",
  "Latest 3 months payslips",
  "Latest 3 months bank statements",
  "EPF statement",
  "Current loan statements",
  "Property documents (S&P, title)",
];

const selfEmployedDocs = [
  "Business registration (SSM)",
  "2 years tax returns (Form B/BE)",
  "6 months bank statements",
  "Business profile",
  "Current loan statements",
  "Property documents",
];

const expatDocs = [
  "Passport with valid visa",
  "Employment pass / MM2H visa",
  "Employment contract",
  "Latest 6 months bank statements",
  "Current loan statements (if any)",
  "Property documents",
];

// FAQs
const faqs = [
  {
    question: "What is Standard Chartered's current refinance rate in 2026?",
    answer: "Standard Chartered's refinance rate starts from 3.90% p.a. as of February 2026 for their MortgageOne and Saadiq My HomeOne-i products. The MortgageOne Zero Cost package is available at 4.20%. Actual rates depend on your credit profile, loan amount, and property type. Standard Chartered uses the SBR (Standardised Base Rate) of 2.75% plus a spread.",
  },
  {
    question: "Can I refinance to Standard Chartered from another bank?",
    answer: "Yes, you can refinance your home loan from any Malaysian bank to Standard Chartered. This is a common process — Standard Chartered will settle your existing loan with your current bank and issue a new loan at their rates. You'll need to meet their eligibility requirements including minimum income of RM5,000/month and DSR below 70%.",
  },
  {
    question: "What is the minimum loan amount for Standard Chartered refinancing?",
    answer: "Standard Chartered requires a minimum loan amount of RM100,000 for refinancing. The minimum property value accepted is RM300,000. There's no published maximum loan amount, but larger loans (above RM500,000) may qualify for better rate negotiations. The maximum financing margin is 90% of the property's market value.",
  },
  {
    question: "Does Standard Chartered allow cash-out refinancing?",
    answer: "Yes, Standard Chartered offers cash-out refinancing where you can access your home equity. You can refinance up to 90% of your property's current market value and receive the difference between the new loan and your outstanding balance as cash. This is useful for renovations, debt consolidation, or investments. Use our cash-out calculator to estimate your amount.",
  },
  {
    question: "What is Standard Chartered's lock-in period for refinancing?",
    answer: "Standard Chartered's refinance loans have a 3-year lock-in period. If you fully settle or refinance to another bank within this period, you'll incur an early settlement penalty of 1.5% to 3% of the outstanding loan amount. After the 3-year lock-in period expires, you can refinance freely without any penalty.",
  },
  {
    question: "Can foreigners refinance with Standard Chartered Malaysia?",
    answer: "Yes, Standard Chartered is one of the most expat-friendly banks in Malaysia. They accept applications from foreigners with valid employment passes, MM2H visa holders, and permanent residents (PR). Foreigners typically receive up to 70-80% financing margin. Standard Chartered's international presence makes them more comfortable with foreign income documentation compared to local banks.",
  },
  {
    question: "How long does Standard Chartered refinancing take?",
    answer: "The entire Standard Chartered refinancing process typically takes 2-3 months from application to disbursement. Breakdown: credit approval (2-4 weeks), property valuation (1-2 weeks), legal documentation (3-5 weeks), and disbursement (1-2 weeks). Priority Banking customers may experience faster processing times.",
  },
  {
    question: "What documents do I need for Standard Chartered refinancing?",
    answer: "Salaried employees need: MyKad/passport, latest 3 months payslips, 3 months bank statements, EPF statement, current loan statements, and property documents. Self-employed applicants need: business registration (SSM), 2 years tax returns, 6 months bank statements, and business profile. Foreigners need their employment pass or MM2H visa in addition to standard documents.",
  },
  {
    question: "Is Standard Chartered refinancing conventional or Islamic?",
    answer: "Standard Chartered offers both conventional and Islamic refinancing. Their conventional product is MortgageOne with an offset account feature starting from 3.90%. Their Islamic option is Saadiq My HomeOne-i, based on the Musharakah Mutanaqisah (diminishing partnership) concept, also starting from 3.90%. Both products offer up to 90% margin and 35-year tenure.",
  },
  {
    question: "What happens if I break the lock-in period?",
    answer: "If you settle or refinance your Standard Chartered loan within the 3-year lock-in period, you'll be charged an early settlement penalty of 1.5% to 3% of the outstanding loan amount. For example, on a RM300,000 outstanding balance, the penalty could be RM4,500 to RM9,000. Always factor this cost into your refinancing calculation. After the lock-in period, there is no penalty.",
  },
];

export default function StandardCharteredRefinanceHomeLoanPage() {
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
            headline: "Standard Chartered Refinance Home Loan Malaysia 2026 – Rates, Review & Guide",
            description: "Complete guide to Standard Chartered home loan refinancing. MortgageOne offset from 3.90%, Saadiq Islamic option, expat-friendly. Compare with other banks.",
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
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
                Standard Chartered Malaysia
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Standard Chartered Refinance Home Loan Malaysia 2026
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-2">
                Premium home financing with MortgageOne offset account
              </p>
              <p className="text-sm text-teal-200 mb-6">Updated: February 2026</p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">3.90%</p>
                  <p className="text-sm text-teal-200">From Rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">90%</p>
                  <p className="text-sm text-teal-200">Max Margin</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">35 Yrs</p>
                  <p className="text-sm text-teal-200">Max Tenure</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">Conv & Islamic</p>
                  <p className="text-sm text-teal-200">Financing Type</p>
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-white text-teal-900 hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Standard Chartered Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "MortgageOne offset account saves interest",
                    "Premium banking perks & dedicated RM",
                    "Expat & foreigner friendly",
                    "No processing fees for refinancing",
                    "Islamic financing (Saadiq) available",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary Box */}
      <section className="py-8 bg-teal-50 border-b border-teal-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Standard Chartered Refinance at a Glance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 bg-teal-50 rounded-lg">
                  <p className="text-2xl font-bold text-teal-700">3.90%</p>
                  <p className="text-xs text-gray-600">From Rate (Conv.)</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">RM300k</p>
                  <p className="text-xs text-gray-600">Min Property Value</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">35 Yrs</p>
                  <p className="text-xs text-gray-600">Max Tenure</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">RM5k</p>
                  <p className="text-xs text-gray-600">Min Income/Month</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">3 Yrs</p>
                  <p className="text-xs text-gray-600">Lock-in (1.5-3%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Home Loan Products
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choose the right Standard Chartered product for your refinancing needs
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {scProducts.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-teal-200 transition-colors">
                  <div className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {product.highlight}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{product.name}</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MortgageOne Explained Section */}
      <section className="py-12 md:py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How MortgageOne Offset Works
            </h2>
            <p className="text-gray-600 text-center mb-8">
              The unique feature that sets Standard Chartered apart from other banks
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Without Offset (Normal Loan)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-semibold">RM500,000</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Savings in Bank</span>
                      <span className="font-semibold">RM100,000</span>
                    </div>
                    <div className="flex justify-between bg-red-50 rounded-lg p-3">
                      <span className="text-red-700">Interest Charged On</span>
                      <span className="font-bold text-red-700">RM500,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">With MortgageOne Offset</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-semibold">RM500,000</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Savings Offset</span>
                      <span className="font-semibold text-green-600">- RM100,000</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span className="text-green-700">Interest Charged On</span>
                      <span className="font-bold text-green-700">RM400,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <p className="text-teal-800 font-medium text-center">
                  With RM100,000 savings offset at 3.90% rate, you save approximately <strong>RM3,900 per year</strong> in interest while keeping full access to your savings.
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  MortgageOne is ideal for borrowers who maintain large cash balances. The higher the savings, the greater the interest savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Refinance Rates 2026
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare rates across Standard Chartered home loan products
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-teal-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Product</th>
                    <th className="px-6 py-4 text-center">Rate</th>
                    <th className="px-6 py-4 text-center">Effective Rate</th>
                    <th className="px-6 py-4 text-center">Lock-in</th>
                    <th className="px-6 py-4 text-center">Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {scRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{rate.product}</td>
                      <td className="px-6 py-4 text-center">{rate.rate}</td>
                      <td className="px-6 py-4 text-center font-semibold text-teal-600">{rate.effectiveRate}</td>
                      <td className="px-6 py-4 text-center">{rate.lockIn}</td>
                      <td className="px-6 py-4 text-center">{rate.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              *SBR = Standardised Base Rate (2.75% as of 2026). Rates subject to change.{" "}
              Need extra cash? <Link href="/cash-out-calculator" className="text-primary-600 hover:underline">Calculate your cash-out amount</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Why Refinance with Standard Chartered?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Key advantages of choosing Standard Chartered for your home loan refinancing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Refinance Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check if you qualify for Standard Chartered home loan refinancing
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Citizenship", value: "Malaysian citizens, PR, foreigners & MM2H" },
                  { label: "Age", value: "21 – 65 years old at loan maturity" },
                  { label: "Minimum Income", value: "RM5,000/month" },
                  { label: "Property Type", value: "Residential — landed, condo/apartment" },
                  { label: "Minimum Loan", value: "RM100,000 (min property value RM300,000)" },
                  { label: "DSR Limit", value: "Up to 70%" },
                  { label: "Max Margin", value: "Up to 90%" },
                  { label: "Existing Loan", value: "Any bank can refinance to Standard Chartered" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Already Premium Customer Box */}
              <div className="mt-6 bg-teal-50 rounded-lg p-4 border border-teal-200">
                <h4 className="font-semibold text-teal-900 mb-2">Already a Premium Customer?</h4>
                <p className="text-sm text-teal-800">
                  Existing Standard Chartered Priority Banking or Premium clients may qualify for preferential rates and faster processing. Contact your relationship manager for exclusive refinancing offers.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link
                  href="/dsr-calculator"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
                >
                  Check your eligibility with our DSR Calculator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Don't Meet RM5k Box */}
            <div className="mt-6 bg-amber-50 rounded-xl shadow-lg p-6 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3">Don&apos;t Meet the RM5,000 Minimum?</h3>
              <p className="text-sm text-amber-800 mb-4">
                Here are alternatives with lower minimum income requirements:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link href="/maybank-refinance-home-loan" className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">Maybank</p>
                  <p className="text-xs text-gray-500">From RM3,000/mo</p>
                </Link>
                <Link href="/cimb-refinance-home-loan" className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">CIMB</p>
                  <p className="text-xs text-gray-500">From RM3,000/mo</p>
                </Link>
                <Link href="/public-bank-refinance-home-loan" className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">Public Bank</p>
                  <p className="text-xs text-gray-500">From RM3,000/mo</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Page CTA */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MidPageCTA onOpenForm={() => setShowForm(true)} />
          </div>
        </div>
      </section>

      {/* Savings Comparison Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How Much Can You Save with Standard Chartered?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Example: refinancing a RM500,000 property with RM300,000 outstanding loan, 30 years remaining
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-red-800">Current Bank (4.50%)</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Outstanding Loan</span><span className="font-semibold">RM300,000</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Interest Rate</span><span className="font-semibold">4.50%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Monthly Payment</span><span className="font-semibold">RM1,520</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-green-800">Standard Chartered (3.90%)</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Refinanced Loan</span><span className="font-semibold">RM300,000</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Interest Rate</span><span className="font-semibold text-green-700">3.90%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Monthly Payment</span><span className="font-semibold text-green-700">RM1,415</span></div>
                </div>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-xl p-6 text-center mb-6">
              <p className="text-sm text-green-800 mb-1">Your Estimated Savings</p>
              <p className="text-3xl font-bold text-green-700 mb-2">RM105/month</p>
              <p className="text-lg font-semibold text-green-700">RM37,800 total over 30 years</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200 mb-6">
              <p className="text-sm text-teal-800 text-center">
                <strong>Note:</strong> With MortgageOne offset, your effective savings could be even higher if you maintain cash in the linked savings account.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Calculate Your Exact Savings <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dsr-calculator"
                className="inline-flex items-center gap-2 bg-white text-teal-700 border border-teal-300 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                Check Your Eligibility (DSR)
              </Link>
              <Link
                href="/cash-out-calculator"
                className="inline-flex items-center gap-2 bg-white text-teal-700 border border-teal-300 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                Calculate Cash-Out
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Comparison Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered vs Other Banks — Refinance Comparison 2026
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare Standard Chartered refinance rates with other major banks
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-900 text-white">
                    <th className="text-left p-3">Bank</th>
                    <th className="text-center p-3">Rate (%)</th>
                    <th className="text-center p-3">Lock-in</th>
                    <th className="text-center p-3">Min Income</th>
                    <th className="text-center p-3">Processing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bank: "Standard Chartered", rate: "3.90", lockin: "3 yrs", income: "RM5,000", processing: "2-4 weeks", highlight: true },
                    { bank: "Maybank", rate: "4.35", lockin: "3-5 yrs", income: "RM3,000", processing: "3-6 weeks", link: "/maybank-refinance-home-loan" },
                    { bank: "CIMB", rate: "4.35", lockin: "3 yrs", income: "RM3,000", processing: "2-4 weeks", link: "/cimb-refinance-home-loan" },
                    { bank: "Public Bank", rate: "4.22", lockin: "3 yrs", income: "RM3,000", processing: "3-5 weeks", link: "/public-bank-refinance-home-loan" },
                    { bank: "RHB", rate: "4.10", lockin: "3 yrs", income: "RM3,000", processing: "2-4 weeks", link: "/rhb-refinance-home-loan" },
                  ].map((b, idx) => (
                    <tr key={idx} className={`border-b ${b.highlight ? "bg-teal-50 font-semibold" : "hover:bg-gray-50"}`}>
                      <td className="p-3">
                        {b.highlight ? (
                          <span className="text-teal-700">★ {b.bank}</span>
                        ) : b.link ? (
                          <Link href={b.link} className="text-primary-600 hover:underline">{b.bank}</Link>
                        ) : (
                          b.bank
                        )}
                      </td>
                      <td className="text-center p-3">{b.rate}</td>
                      <td className="text-center p-3">{b.lockin}</td>
                      <td className="text-center p-3">{b.income}</td>
                      <td className="text-center p-3">{b.processing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              Rates as of February 2026. Subject to change based on credit profile.{" "}
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Documents Required for Standard Chartered Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Prepare these documents before applying
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Salaried Employees</h3>
                <ul className="space-y-2">
                  {salariedDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Self-Employed</h3>
                <ul className="space-y-2">
                  {selfEmployedDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-200">
                <h3 className="font-bold text-gray-900 mb-4">Expats & Foreigners</h3>
                <ul className="space-y-2">
                  {expatDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/en/documents-required"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-2"
              >
                View complete document checklist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How to Apply for Standard Chartered Refinance — Step by Step
            </h2>
            <div className="bg-teal-50 rounded-lg p-3 text-center text-sm text-teal-800 font-medium mb-6 border border-teal-200">
              Typical timeline: 2–3 months from application to disbursement
            </div>

            <div className="space-y-4">
              {[
                { step: 1, title: "Check Eligibility & DSR", desc: "Use our DSR calculator to ensure you qualify. Minimum income RM5,000/month, DSR below 70%.", link: "/dsr-calculator" },
                { step: 2, title: "Gather Documents", desc: "IC/passport, 3 months payslips, 3 months bank statements, EPF, current loan statement, property documents.", link: "/en/documents-required" },
                { step: 3, title: "Submit Application", desc: "Apply through our panel for free multi-bank comparison, or apply directly to Standard Chartered online or at any branch." },
                { step: 4, title: "Valuation & Approval", desc: "Standard Chartered arranges property valuation. Credit assessment and approval takes 2-4 weeks. Priority Banking customers may get faster processing." },
                { step: 5, title: "Letter of Offer & Legal", desc: "Review and sign the Letter of Offer. Complete legal documentation with Standard Chartered's appointed lawyer." },
                { step: 6, title: "Disbursement", desc: "Standard Chartered settles your existing loan with your old bank. New loan begins with lower monthly payments." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl shadow-lg p-6">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium flex-shrink-0 self-center"
                    >
                      Use tool →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Contact for Housing Loan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get in touch with Standard Chartered or our panel of advisors
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Contact Standard Chartered Directly</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Hotline</p>
                      <p className="font-medium">1300-888-888</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">sc.com/my</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Branches</p>
                      <p className="font-medium">Find your nearest branch</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                <h3 className="font-bold text-gray-900 mb-2">Get Free Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our panel of advisors can help compare Standard Chartered with other banks and find the best rate for you.
                </p>
                <ul className="space-y-2 mb-4">
                  {["Compare rates from 15+ banks", "Free eligibility check", "No obligation quote"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Standard Chartered Refinance FAQs
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
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-teal-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with Standard Chartered?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Get a free quote and compare Standard Chartered with other banks — takes 2 minutes.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-teal-900 font-semibold px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors text-lg"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Compare Other Banks
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Maybank Refinance", href: "/maybank-refinance-home-loan", info: "From 4.35% • HouzKey available" },
                { name: "CIMB Refinance", href: "/cimb-refinance-home-loan", info: "From 4.35% • Conventional & Islamic" },
                { name: "RHB Refinance", href: "/rhb-refinance-home-loan", info: "From 4.10% • My1 flexible loan" },
                { name: "UOB Refinance", href: "/uob-refinance-home-loan", info: "From 4.61% • 95% margin" },
                { name: "Public Bank Refinance", href: "/public-bank-refinance-home-loan", info: "From 4.22% • Best stability" },
                { name: "All Bank Rates", href: "/refinance-home-loan-rates-malaysia", info: "14 banks • Full comparison" },
              ].map((b, idx) => (
                <Link
                  key={idx}
                  href={b.href}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                    {b.name}
                  </h3>
                  <p className="text-sm text-gray-600">{b.info}</p>
                </Link>
              ))}
            </div>
          </div>
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
              <LeadForm variant="modal" source="standard-chartered-refinance" lang="en" showAllFields={true} />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Compare StanChart rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
