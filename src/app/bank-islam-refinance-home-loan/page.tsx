"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Check, X, Clock, FileText, AlertTriangle, Shield } from "lucide-react";

const { currentYear } = SITE_CONFIG;

const bank = {
  name: "Bank Islam",
  rateFrom: "4.10%",
  rateBLR: "4.82%",
  spreadFrom: "-0.72%",
  spreadTo: "-0.32%",
  lockIn: 3,
  earlySettlement: "3% (Year 1), 2% (Year 2), 1% (Year 3)",
  maxTenure: 35,
  maxLTV: 90,
  minLoan: 50000,
  maxLoan: 5000000,
  processingFee: "Nil",
  bestFor: "Borrowers who want 100% Syariah-compliant financing with competitive rates",
};

const faqs = [
  {
    question: "Is Bank Islam good for refinancing?",
    answer: `Bank Islam is a solid choice if you want fully Syariah-compliant financing. Their Baiti Home Financing-i offers competitive rates from ${bank.rateFrom}, though some conventional banks and even Maybank Islamic may offer slightly lower rates. Bank Islam stands out for its pure Islamic banking model — the entire institution operates on Syariah principles, not just individual products.`,
  },
  {
    question: "What is Bank Islam home loan interest rate?",
    answer: `Bank Islam's home financing profit rate starts from ${bank.rateFrom} p.a. for Baiti Home Financing-i. For Baiti Equity (cash out), rates start from 4.50%. Note that Islamic financing uses "profit rate" instead of "interest rate" — the concept is different, but the effective cost to you is comparable and easy to compare with conventional rates.`,
  },
  {
    question: "Can non-Muslims apply for Bank Islam financing?",
    answer: "Yes, absolutely. Bank Islam welcomes applications from both Muslims and non-Muslims. Islamic financing is open to everyone regardless of religion. Many non-Muslims choose Islamic banking for its ethical principles, transparent pricing, and asset-backed transaction structure.",
  },
  {
    question: "What is Baiti Home Financing-i?",
    answer: "Baiti Home Financing-i is Bank Islam's main home financing product based on the Tawarruq (Commodity Murabahah) concept. It's used for property purchases, refinancing, and construction. The bank buys a commodity, sells it to you at a profit (your financing rate), and you pay in instalments. This structure avoids riba (interest) and complies with Syariah principles.",
  },
  {
    question: "Is Bank Islam Syariah compliant?",
    answer: "Yes, Bank Islam is 100% Syariah compliant. Unlike conventional banks that offer Islamic windows or products alongside conventional ones, Bank Islam operates entirely on Islamic banking principles. Every product, process, and investment is supervised by their Syariah Advisory Committee to ensure full compliance.",
  },
  {
    question: "How long does Bank Islam refinancing take?",
    answer: "The full process typically takes 8-12 weeks. This includes application and credit check (1-2 weeks), property valuation (1-2 weeks), approval (2-4 weeks), legal documentation (3-4 weeks), and disbursement (1 week). Using a broker can help streamline the process.",
  },
  {
    question: "Can I cash out with Bank Islam?",
    answer: "Yes, Bank Islam offers cash out through their Baiti Equity Home Financing-i product. You can withdraw up to 80% of your property's current market value (minus existing financing). Rates for equity/cash out start from 4.50%, which is slightly higher than standard refinancing rates.",
  },
  {
    question: "What is the difference between Bank Islam and conventional bank?",
    answer: "The key differences: (1) Bank Islam uses profit rate, not interest — based on asset-backed transactions; (2) No riba (usury) — transactions must involve real assets; (3) Risk sharing — the bank and customer share certain risks; (4) Syariah governance — independent committee ensures compliance; (5) Ethical investing — funds are only placed in halal industries. For the borrower, the monthly payment structure is similar, but the underlying contract and principles differ fundamentally.",
  },
];

const islamicBankComparison = [
  { name: "Bank Islam", rate: "4.10%", type: "Islamic", maxMargin: "90%" },
  { name: "Maybank Islamic", rate: "3.95%", type: "Islamic", maxMargin: "90%" },
  { name: "CIMB Islamic", rate: "4.00%", type: "Islamic", maxMargin: "90%" },
  { name: "Bank Rakyat", rate: "4.20%", type: "Islamic", maxMargin: "90%" },
  { name: "RHB Islamic", rate: "4.05%", type: "Islamic", maxMargin: "90%" },
];

export default function BankIslamRefinancePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-lg p-2 px-3">
              <span className="text-emerald-800 font-bold text-lg">Bank Islam</span>
            </div>
            <span className="bg-emerald-600/50 text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full">
              100% Syariah Compliant
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Bank Islam Refinance Home Loan Malaysia {currentYear}
          </h1>
          <p className="text-lg text-emerald-100 mb-2">
            Complete guide to Bank Islam home financing refinance — Syariah-compliant rates, honest review, and comparison with other Islamic banks.
          </p>
          <p className="text-sm text-emerald-200">
            Updated: January {currentYear}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 bg-white text-emerald-800 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition-all hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Key Stats */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Rate From</p>
                <p className="text-2xl font-bold text-emerald-700">{bank.rateFrom}</p>
                <p className="text-xs text-gray-500">Islamic Financing</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Margin</p>
                <p className="text-2xl font-bold text-emerald-700">Up to 90%</p>
                <p className="text-xs text-gray-500">of property value</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Tenure</p>
                <p className="text-2xl font-bold text-emerald-700">Up to 35 yrs</p>
                <p className="text-xs text-gray-500">or age 70</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Type</p>
                <p className="text-2xl font-bold text-emerald-700">100%</p>
                <p className="text-xs text-gray-500">Syariah Compliant</p>
              </div>
            </div>
          </section>

          {/* Current Rates Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Islam Refinance Rates {currentYear}
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Product</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Rate</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Lock-in</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Baiti Home Financing-i</td>
                    <td className="p-3 text-emerald-700 font-semibold">From 4.10%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3">Up to 90%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Baiti Equity (Cash Out)</td>
                    <td className="p-3 text-emerald-700 font-semibold">From 4.50%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3">Up to 80%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Financing Details</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Min Financing: RM{bank.minLoan.toLocaleString()}</li>
                  <li>Max Financing: RM{bank.maxLoan.toLocaleString()}</li>
                  <li>Max Tenure: {bank.maxTenure} years</li>
                  <li>Max Margin: {bank.maxLTV}%</li>
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

          {/* Products Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Islam Home Financing Products
            </h2>

            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Baiti Home Financing-i</h3>
                <p className="text-sm text-emerald-600 mb-3">Based on Tawarruq / Commodity Murabahah</p>
                <p className="text-gray-700 mb-3">
                  Bank Islam&apos;s main home financing product for purchase, refinancing, and construction.
                  Fully Syariah-compliant with no riba (interest) involved.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" />Up to 90% margin of financing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" />Tenure up to 35 years or age 70</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" />For purchase, refinancing, and construction</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" />Profit rate from 4.10% p.a.</li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-teal-800 mb-2">Baiti Equity Home Financing-i</h3>
                <p className="text-sm text-teal-600 mb-3">Cash Out from Existing Property</p>
                <p className="text-gray-700 mb-3">
                  Withdraw equity from your existing property for renovation, education, debt consolidation, or other needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" />Up to 80% of property value</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" />For renovation, education, debt consolidation</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" />Profit rate from 4.50% p.a.</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" />Syariah-compliant cash out option</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Calculator Link */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculator: Estimate Your Bank Islam Refinance Savings
            </h2>
            <div className="bg-primary-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Use our free calculator to estimate how much you could save by refinancing with Bank Islam.
                Compare your current rate against Bank Islam&apos;s Baiti financing starting from {bank.rateFrom}.
              </p>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Calculate Your Savings with Bank Islam
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                Compare Bank Islam&apos;s rate of {bank.rateFrom} against your current loan
              </p>
            </div>
          </section>

          {/* Honest Review Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Is Bank Islam Good for Refinancing? Honest Review
            </h2>

            <p className="text-gray-700 mb-6">
              Bank Islam is Malaysia&apos;s first and largest standalone Islamic bank, established in 1983.
              Unlike conventional banks with Islamic windows, Bank Islam operates entirely on Syariah principles.
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
                    <span><strong>100% Syariah compliant</strong> — entire bank, not just products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>No riba</strong> — profit-based Islamic financing concept</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Competitive rates</strong> — comparable to conventional banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Takaful options</strong> — Islamic insurance available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Government servant friendly</strong> — experienced with public sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Fixed rate options</strong> — predictable payments available</span>
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
                    <span><strong>Slightly higher rates</strong> — than some conventional banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Fewer branches</strong> — smaller network than Maybank/CIMB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Longer processing time</strong> — may take more time than bigger banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Limited product flexibility</strong> — fewer variants vs conventional</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="font-semibold text-emerald-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                {bank.bestFor}. Bank Islam is ideal for borrowers who prioritize Syariah compliance
                and want the assurance that their entire banking relationship — not just a single product — is Islamic.
              </p>
            </div>
          </section>

          {/* Why Choose Islamic Financing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Islamic Home Financing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "No Riba (Interest)", desc: "Profit-based instead of interest-based — transactions involve buying and selling of assets." },
                { title: "Asset-Backed Transaction", desc: "Every financing is backed by a real asset, ensuring transparency and Syariah compliance." },
                { title: "Transparent Pricing", desc: "The profit rate and total cost are disclosed upfront. No hidden charges or compounding surprises." },
                { title: "Ethical Banking Principles", desc: "Funds are only invested in halal industries. No involvement in gambling, alcohol, or harmful activities." },
                { title: "Peace of Mind", desc: "For Muslim borrowers, the assurance that your home financing fully complies with Islamic principles." },
                { title: "Open to Everyone", desc: "Non-Muslims are equally welcome and benefit from the same ethical and transparent banking model." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <Shield className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Islam Refinance Eligibility
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Basic Requirements</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Malaysian citizen or PR
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Age: 18-65 (up to 70 for certain products)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Minimum income: RM2,500/month
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    DSR: Up to 70%
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Clean credit record (CCRIS/CTOS)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Muslims and non-Muslims welcome
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <h3 className="font-semibold text-green-800 mb-3">Higher Approval Chances</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>- Government servants / GLC employees</li>
                  <li>- Income above RM5,000/month</li>
                  <li>- Existing Bank Islam customer with good track record</li>
                  <li>- Property in established residential areas</li>
                  <li>- Low debt-to-income ratio (below 60%)</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5">
                <h3 className="font-semibold text-red-800 mb-3">May Face Challenges</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>- Self-employed with irregular income</li>
                  <li>- New employees (less than 6 months)</li>
                  <li>- High existing debt commitments</li>
                  <li>- Properties in rural or fringe locations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Bank Islam vs Other Islamic Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Islam vs Other Islamic Banks
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Bank</th>
                    <th className="text-left p-3 font-semibold">Rate</th>
                    <th className="text-left p-3 font-semibold">Type</th>
                    <th className="text-left p-3 font-semibold">Max Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {islamicBankComparison.map((b, i) => (
                    <tr key={i} className={`border-b ${b.name === "Bank Islam" ? "bg-emerald-50" : "hover:bg-gray-50"}`}>
                      <td className="p-3 font-medium">{b.name}</td>
                      <td className={`p-3 font-semibold ${b.name === "Bank Islam" ? "text-emerald-700" : ""}`}>{b.rate}</td>
                      <td className="p-3">{b.type}</td>
                      <td className="p-3">{b.maxMargin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Rates are indicative and subject to change. Compare with other banks:{" "}
              <Link href="/maybank-refinance-home-loan" className="text-primary-600 hover:underline">Maybank</Link>,{" "}
              <Link href="/cimb-refinance-home-loan" className="text-primary-600 hover:underline">CIMB</Link>,{" "}
              <Link href="/rhb-refinance-home-loan" className="text-primary-600 hover:underline">RHB</Link>,{" "}
              <Link href="/bank-rakyat-refinance-home-loan" className="text-primary-600 hover:underline">Bank Rakyat</Link>
            </p>
          </section>

          {/* Documents Required */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Documents Required
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">For Salaried Employees</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />Copy of IC (MyKad)</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />3 months payslips</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />3 months bank statements</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />EPF statement</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />Current loan/financing statement</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />Property documents (S&P, title)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">For Self-Employed</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />All salaried documents above</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />SSM registration (Form 9 & 49)</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />2 years tax returns (BE/B form)</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />6 months bank statements</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" />Business financial statements</li>
                </ul>
              </div>
            </div>

            <Link
              href="/dokumen-refinance-rumah"
              className="inline-flex items-center gap-1 text-primary-600 hover:underline font-medium mt-4"
            >
              Full document checklist <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Hidden Costs */}
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
                    {bank.earlySettlement} of outstanding balance during the {bank.lockIn}-year lock-in period.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Fees</h3>
                  <p className="text-gray-600">
                    {SITE_CONFIG.costs.legalFeesText}. Ask about any promotional packages that may subsidize this.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Valuation Fee</h3>
                  <p className="text-gray-600">
                    {SITE_CONFIG.costs.valuationFeesText} for professional property valuation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Stamp Duty</h3>
                  <p className="text-gray-600">
                    {SITE_CONFIG.costs.stampDutyText} of financing amount. {SITE_CONFIG.costs.stampDutyNote}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Takaful / MRTA</h3>
                  <p className="text-gray-600">
                    Bank Islam may require or recommend Takaful coverage (Islamic insurance).
                    Compare Takaful quotes to ensure fair pricing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Apply for Bank Islam Refinance
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

              <div className="space-y-6">
                {[
                  { step: "Check Eligibility", time: "Day 1", desc: "Verify income, DSR, and credit status meet requirements." },
                  { step: "Gather Documents", time: "1-3 days", desc: "Prepare IC, payslips, bank statements, and property documents." },
                  { step: "Apply", time: "Day 3-5", desc: "Visit Bank Islam branch or apply online through their website." },
                  { step: "Property Valuation", time: "1-2 weeks", desc: "Bank Islam arranges professional valuation of your property." },
                  { step: "Approval", time: "2-4 weeks", desc: "Credit assessment and Syariah compliance verification." },
                  { step: "Documentation Signing", time: "4-6 weeks", desc: "Review and sign financing agreement with appointed lawyer." },
                  { step: "Disbursement", time: "6-10 weeks", desc: "Bank Islam settles your old loan. New financing begins." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 ml-4">
                    <div className="relative">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm -ml-4">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 -mt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-700">{item.time}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{item.step}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Islam Contact
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hotline</p>
                  <p className="text-gray-600">03-26900900</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Website</p>
                  <p className="text-gray-600">bankislam.com.my</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Branches</p>
                  <p className="text-gray-600">Nationwide across Malaysia</p>
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
                href="/bank-rakyat-refinance-home-loan"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Bank Rakyat Refinance</h3>
                <p className="text-sm text-blue-700">Islamic financing for cooperative members</p>
              </Link>
              <Link
                href="/maybank-refinance-home-loan"
                className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
              >
                <h3 className="font-semibold text-yellow-900">Maybank Refinance</h3>
                <p className="text-sm text-yellow-700">Compare Maybank Islamic rates</p>
              </Link>
              <Link
                href="/en/best-refinance-banks"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Best Refinance Banks</h3>
                <p className="text-sm text-gray-700">Compare all banks in Malaysia</p>
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
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Direct to Bank Islam</th>
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
      <section className="py-16 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with Bank Islam?
          </h2>
          <p className="text-xl text-emerald-200 mb-8">
            Get a free quote and compare with other banks in 24 hours.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4 bg-white text-emerald-800 hover:bg-emerald-50"
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
                <h3 className="text-xl font-bold">Get Bank Islam Refinancing Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Compare Islamic financing options — free assessment</p>
              <LeadForm variant="modal" source="bank-islam-refinance" lang="en" showAllFields={true} />
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
        text="Compare Bank Islam rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
