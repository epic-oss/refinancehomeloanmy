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
  name: "Bank Muamalat",
  rateFrom: "4.15%",
  lockIn: 3,
  earlySettlement: "3% (Year 1), 2% (Year 2), 1% (Year 3)",
  maxTenure: 35,
  maxLTV: 90,
  minLoan: 50000,
  maxLoan: 3000000,
  processingFee: "Nil",
  bestFor: "Borrowers seeking authentic Musharakah Mutanaqisah Islamic financing with low minimum income",
};

const faqs = [
  {
    question: "Is Bank Muamalat good for refinancing?",
    answer: `Bank Muamalat is a solid choice if you want fully Syariah-compliant financing based on the Musharakah Mutanaqisah (diminishing partnership) concept, which many scholars consider more authentically Islamic. Their rates start from ${bank.rateFrom}, and they have a low minimum income requirement of RM2,000. They're especially strong in East Malaysia. However, larger banks like Maybank Islamic may offer slightly lower rates.`,
  },
  {
    question: "What is Bank Muamalat home loan rate?",
    answer: `Bank Muamalat's home financing profit rate starts from ${bank.rateFrom} p.a. for their standard Home Financing-i, and from 4.25% for Smart Home Financing-i. Rates vary based on your income profile, financing amount, and property type. Government servants may qualify for preferential rates.`,
  },
  {
    question: "Can non-Muslims get Bank Muamalat financing?",
    answer: "Yes, Bank Muamalat welcomes applications from both Muslims and non-Muslims. Islamic financing is open to everyone. Many non-Muslims choose Bank Muamalat for its ethical banking principles, transparent pricing structure, and the fairness of the Musharakah Mutanaqisah concept where the bank and customer share ownership.",
  },
  {
    question: "What is Musharakah Mutanaqisah?",
    answer: "Musharakah Mutanaqisah means 'diminishing partnership.' You and the bank co-own the property. You pay monthly rent to the bank for its share, plus gradually buy the bank's portion. Over time, your ownership increases until you own 100%. This is considered by many scholars as one of the most authentically Syariah-compliant home financing structures because it avoids debt-based transactions entirely.",
  },
  {
    question: "Is Bank Muamalat fully Islamic?",
    answer: "Yes, Bank Muamalat is 100% Syariah compliant. Established in 1999, it is Malaysia's second full-fledged Islamic bank (after Bank Islam). Every product, service, and investment complies with Syariah principles. The bank is backed by DRB-HICOM and Khazanah Nasional, providing strong institutional support.",
  },
  {
    question: "How long does Bank Muamalat approval take?",
    answer: "Bank Muamalat financing approval typically takes 3-4 weeks from complete document submission. The full process including valuation and legal documentation takes about 8-12 weeks. Processing may be slightly longer than larger banks due to the smaller branch network, but using a broker can help streamline the timeline.",
  },
  {
    question: "Is Bank Muamalat better than Bank Islam?",
    answer: "Both are fully Islamic banks, but they differ: Bank Muamalat uses Musharakah Mutanaqisah (partnership-based, considered more authentically Islamic by some), while Bank Islam uses Tawarruq (commodity-based). Bank Islam has lower rates (4.10% vs 4.15%) and more branches. Bank Muamalat has lower minimum income (RM2,000 vs RM2,500) and stronger presence in East Malaysia. Choose based on which concept you prefer and which is more accessible in your area.",
  },
  {
    question: "Does Bank Muamalat have branches in Sabah/Sarawak?",
    answer: "Yes, Bank Muamalat has a relatively strong presence in East Malaysia compared to other Islamic banks. They have branches in major towns in Sabah and Sarawak, making them a good option for borrowers in these states who want fully Islamic home financing. Check their website for the nearest branch.",
  },
];

const islamicBankComparison = [
  { name: "Bank Muamalat", rate: "4.15%", concept: "Musharakah", minIncome: "RM2,000", strength: "East Malaysia" },
  { name: "Bank Islam", rate: "4.10%", concept: "Tawarruq", minIncome: "RM2,500", strength: "Largest Islamic" },
  { name: "Maybank Islamic", rate: "3.95%", concept: "Commodity Murabahah", minIncome: "RM3,000", strength: "Branch network" },
  { name: "CIMB Islamic", rate: "4.00%", concept: "Tawarruq", minIncome: "RM3,000", strength: "Flexibility" },
  { name: "Bank Rakyat", rate: "4.20%", concept: "Tawarruq", minIncome: "RM2,000", strength: "Govt servants" },
];

export default function BankMuamalatRefinancePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 to-cyan-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-lg p-2 px-3">
              <span className="text-sky-900 font-bold text-lg">Bank Muamalat</span>
            </div>
            <span className="bg-sky-600/50 text-sky-100 text-xs font-semibold px-3 py-1 rounded-full">
              100% Islamic Bank
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Bank Muamalat Refinance Home Loan Malaysia {currentYear}
          </h1>
          <p className="text-lg text-sky-100 mb-2">
            Complete guide to Bank Muamalat home financing refinance — Musharakah Mutanaqisah concept, honest review, and comparison with other Islamic banks.
          </p>
          <p className="text-sm text-sky-200">
            Updated: January {currentYear}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 bg-white text-sky-900 font-semibold px-6 py-3 rounded-full hover:bg-sky-50 transition-all hover:scale-105"
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
              <div className="bg-sky-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Rate From</p>
                <p className="text-2xl font-bold text-sky-800">{bank.rateFrom}</p>
                <p className="text-xs text-gray-500">Islamic Financing</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Margin</p>
                <p className="text-2xl font-bold text-sky-800">Up to 90%</p>
                <p className="text-xs text-gray-500">of property value</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Tenure</p>
                <p className="text-2xl font-bold text-sky-800">Up to 35 yrs</p>
                <p className="text-xs text-gray-500">or age 65</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Type</p>
                <p className="text-2xl font-bold text-sky-800">100%</p>
                <p className="text-xs text-gray-500">Islamic Bank</p>
              </div>
            </div>
          </section>

          {/* Current Rates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Muamalat Refinance Rates {currentYear}
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-sky-50">
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Product</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Rate</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Lock-in</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Home Financing-i (Musharakah)</td>
                    <td className="p-3 text-sky-800 font-semibold">From 4.15%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3">Up to 90%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Smart Home Financing-i</td>
                    <td className="p-3 text-sky-800 font-semibold">From 4.25%</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3">Up to 90%</td>
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

          {/* Products */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Muamalat Home Financing Products
            </h2>

            <div className="space-y-4">
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-sky-800 mb-2">Home Financing-i (Musharakah Mutanaqisah)</h3>
                <p className="text-sm text-sky-600 mb-3">Diminishing Partnership Concept</p>
                <p className="text-gray-700 mb-3">
                  Bank Muamalat&apos;s flagship product where you and the bank co-own the property.
                  You gradually buy the bank&apos;s share until you own 100% — considered one of the most
                  authentically Syariah-compliant structures available.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" />Up to 90% margin of financing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" />Tenure up to 35 years</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" />You and bank co-own property, gradual ownership transfer</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" />Profit rate from 4.15% p.a.</li>
                </ul>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Smart Home Financing-i</h3>
                <p className="text-sm text-cyan-600 mb-3">Flexible Payment Options</p>
                <p className="text-gray-700 mb-3">
                  Designed for borrowers who need flexible payment arrangements. Step-up or step-down facility
                  lets you adjust payments based on your financial situation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600" />Step-up or step-down payment options</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600" />Good for variable income earners</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600" />Profit rate from 4.25% p.a.</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600" />Flexible tenure options</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What is Musharakah Mutanaqisah */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What is Musharakah Mutanaqisah?
            </h2>
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200 rounded-xl p-6">
              <p className="text-lg font-semibold text-sky-900 mb-4">
                &quot;Diminishing Partnership&quot; — How It Works
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Bank and customer co-own the property</p>
                    <p className="text-sm text-gray-600">E.g., bank owns 90%, you own 10% (your down payment portion)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">You pay monthly rent + buy bank&apos;s share</p>
                    <p className="text-sm text-gray-600">Each payment includes rental for the bank&apos;s portion and purchase of additional ownership</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Your ownership gradually increases</p>
                    <p className="text-sm text-gray-600">Over time, the bank&apos;s share diminishes as yours grows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">At the end, you own 100%</p>
                    <p className="text-sm text-gray-600">Full ownership transfers to you once all payments are completed</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white/60 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <Shield className="w-4 h-4 inline mr-1 text-sky-600" />
                  <strong>Why it matters:</strong> Musharakah Mutanaqisah is considered by many Islamic scholars as more authentically Syariah-compliant
                  than Tawarruq or Commodity Murabahah because it involves genuine asset co-ownership rather than a debt-based commodity transaction.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Link */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculator: Estimate Your Bank Muamalat Refinance Savings
            </h2>
            <div className="bg-primary-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Use our free calculator to estimate how much you could save by refinancing with Bank Muamalat.
                Compare your current rate against Bank Muamalat&apos;s financing starting from {bank.rateFrom}.
              </p>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Calculate Your Savings with Bank Muamalat
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                Compare Bank Muamalat&apos;s rate of {bank.rateFrom} against your current loan
              </p>
            </div>
          </section>

          {/* Honest Review */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Is Bank Muamalat Good for Refinancing? Honest Review
            </h2>

            <p className="text-gray-700 mb-6">
              Bank Muamalat is Malaysia&apos;s second full-fledged Islamic bank, established in 1999.
              Backed by DRB-HICOM and Khazanah Nasional, it operates entirely on Syariah principles
              using the Musharakah Mutanaqisah concept. Here&apos;s our honest assessment:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Pros
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>100% Syariah compliant</strong> — full-fledged Islamic bank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Musharakah Mutanaqisah</strong> — considered more authentically Islamic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Low minimum income (RM2,000)</strong> — accessible to more borrowers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Government servant friendly</strong> — priority processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Strong East Malaysia presence</strong> — branches in Sabah/Sarawak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Takaful integration</strong> — Islamic insurance options available</span>
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
                    <span><strong>Smaller branch network</strong> — fewer branches than bigger banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Slightly higher rates</strong> — than Bank Islam (4.10%) and Maybank Islamic (3.95%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Longer processing times</strong> — may take more time than larger banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Less digital features</strong> — online platform less advanced</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Limited product range</strong> — fewer product variants vs bigger banks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="font-semibold text-sky-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                {bank.bestFor}. Ideal for those who prefer Musharakah Mutanaqisah over Tawarruq,
                government servants, borrowers in East Malaysia, and those with lower incomes who still want fully Islamic financing.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Muamalat Refinance Eligibility
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Basic Requirements</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Malaysian citizen
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Age: 18-65 (or until retirement)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Minimum income: RM2,000/month
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
                  <li>- Income above RM4,000/month</li>
                  <li>- Existing Bank Muamalat customer</li>
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
                  <li>- Properties in rural locations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Muamalat vs Other Islamic Banks
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Bank</th>
                    <th className="text-left p-3 font-semibold">Rate</th>
                    <th className="text-left p-3 font-semibold">Concept</th>
                    <th className="text-left p-3 font-semibold">Min Income</th>
                    <th className="text-left p-3 font-semibold">Strength</th>
                  </tr>
                </thead>
                <tbody>
                  {islamicBankComparison.map((b, i) => (
                    <tr key={i} className={`border-b ${b.name === "Bank Muamalat" ? "bg-sky-50" : "hover:bg-gray-50"}`}>
                      <td className="p-3 font-medium">{b.name}</td>
                      <td className={`p-3 font-semibold ${b.name === "Bank Muamalat" ? "text-sky-800" : ""}`}>{b.rate}</td>
                      <td className="p-3 text-sm">{b.concept}</td>
                      <td className="p-3">{b.minIncome}</td>
                      <td className="p-3 text-sm">{b.strength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Rates are indicative and subject to change. Compare with:{" "}
              <Link href="/bank-islam-refinance-home-loan" className="text-primary-600 hover:underline">Bank Islam</Link>,{" "}
              <Link href="/maybank-refinance-home-loan" className="text-primary-600 hover:underline">Maybank</Link>,{" "}
              <Link href="/bank-rakyat-refinance-home-loan" className="text-primary-600 hover:underline">Bank Rakyat</Link>
            </p>
          </section>

          {/* Documents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Documents Required
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">For Salaried Employees</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />Copy of IC (MyKad)</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />3 months payslips</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />3 months bank statements</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />EPF statement</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />Current loan/financing statement</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />Property documents (S&P, title)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">For Self-Employed</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />All salaried documents above</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />SSM registration</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />2 years tax returns (BE forms)</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />6 months bank statements</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-600" />Business financial statements</li>
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
                    {SITE_CONFIG.costs.legalFeesText}. Ask about any promotional packages.
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
                    Bank Muamalat may require Takaful coverage (Islamic insurance).
                    Compare quotes to ensure fair pricing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Apply for Bank Muamalat Refinance
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sky-200"></div>

              <div className="space-y-6">
                {[
                  { step: "Check Eligibility", time: "Day 1", desc: "Verify income, DSR, and credit status meet requirements." },
                  { step: "Gather Documents", time: "1-3 days", desc: "Prepare IC, payslips, bank statements, and property documents." },
                  { step: "Visit Bank Muamalat Branch", time: "Day 3-5", desc: "Submit application at your nearest Bank Muamalat branch." },
                  { step: "Property Valuation", time: "1-2 weeks", desc: "Bank arranges professional valuation of your property." },
                  { step: "Approval", time: "3-4 weeks", desc: "Credit assessment and Syariah compliance verification." },
                  { step: "Documentation Signing", time: "5-7 weeks", desc: "Review and sign financing agreement with appointed lawyer." },
                  { step: "Disbursement", time: "8-12 weeks", desc: "Bank Muamalat settles your old loan. New financing begins." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 ml-4">
                    <div className="relative">
                      <div className="w-8 h-8 bg-sky-700 rounded-full flex items-center justify-center text-white font-bold text-sm -ml-4">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 -mt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-sky-600" />
                        <span className="text-sm font-semibold text-sky-700">{item.time}</span>
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
              Bank Muamalat Contact
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hotline</p>
                  <p className="text-gray-600">03-2600 5500</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Website</p>
                  <p className="text-gray-600">muamalat.com.my</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Branches</p>
                  <p className="text-gray-600">Nationwide (strong in East Malaysia)</p>
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
                href="/bank-islam-refinance-home-loan"
                className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-semibold text-emerald-900">Bank Islam Refinance</h3>
                <p className="text-sm text-emerald-700">100% Islamic, Tawarruq concept</p>
              </Link>
              <Link
                href="/bank-rakyat-refinance-home-loan"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Bank Rakyat Refinance</h3>
                <p className="text-sm text-blue-700">Islamic financing for cooperative members</p>
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
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Direct to Bank Muamalat</th>
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
      <section className="py-16 bg-sky-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with Bank Muamalat?
          </h2>
          <p className="text-xl text-sky-200 mb-8">
            Get a free quote and compare with other banks in 24 hours.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4 bg-white text-sky-900 hover:bg-sky-50"
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
                <h3 className="text-xl font-bold">Get Bank Muamalat Refinancing Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Compare Islamic financing options — free assessment</p>
              <LeadForm variant="modal" source="bank-muamalat-refinance" lang="en" showAllFields={true} />
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
        text="Compare Bank Muamalat rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
