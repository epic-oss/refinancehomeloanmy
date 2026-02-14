"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Star, TrendingDown, Shield, DollarSign, Zap, Building2, Users, Calculator } from "lucide-react";

const { currentYear } = SITE_CONFIG;

const topLoans = [
  {
    rank: 1,
    product: "Wahdah Home Refinancing-i",
    bank: "Bank Islam",
    rate: "3.80%",
    type: "Islamic",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: "Best Rate",
    badgeColor: "bg-green-500",
    bestFor: "Those wanting lowest rate + Shariah compliant",
    feature: null,
    href: "/bank-islam-refinance-home-loan",
  },
  {
    rank: 2,
    product: "MortgageOne",
    bank: "Standard Chartered",
    rate: "3.90%",
    type: "Conventional",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: "Best Flexi",
    badgeColor: "bg-blue-500",
    bestFor: "Those with cash reserves",
    feature: "Offset account — savings reduce interest",
    href: "/standard-chartered-refinance-home-loan",
  },
  {
    rank: 3,
    product: "Home Financing-i",
    bank: "Al Rajhi",
    rate: "3.90%",
    type: "Islamic",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: null,
    badgeColor: null,
    bestFor: "Islamic financing at low rate",
    feature: null,
    href: null,
  },
  {
    rank: 4,
    product: "First Home Mortgage",
    bank: "RHB",
    rate: "4.10%",
    type: "Conventional",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: null,
    badgeColor: null,
    bestFor: "Fast approval",
    feature: null,
    href: "/rhb-refinance-home-loan",
  },
  {
    rank: 5,
    product: "MORE Plan",
    bank: "Public Bank",
    rate: "4.22%",
    type: "Conventional",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: null,
    badgeColor: null,
    bestFor: "Reliable, large branch network",
    feature: null,
    href: "/public-bank-refinance-home-loan",
  },
  {
    rank: 6,
    product: "HomeSmart",
    bank: "HSBC",
    rate: "4.30%",
    type: "Conventional",
    margin: "Up to 85%",
    lockIn: "3 years",
    badge: "Best Zero Cost",
    badgeColor: "bg-purple-500",
    bestFor: "Those wanting zero entry cost",
    feature: "Up to RM50,000 upfront costs waived",
    href: "/hsbc-refinance-home-loan",
  },
  {
    rank: 7,
    product: "MaxiHome",
    bank: "Maybank",
    rate: "4.35%",
    type: "Conventional",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: "Best for Cash-Out",
    badgeColor: "bg-amber-500",
    bestFor: "Cash-out refinancing, largest branch network",
    feature: null,
    href: "/maybank-refinance-home-loan",
  },
  {
    rank: 8,
    product: "HomeFlexi",
    bank: "CIMB",
    rate: "4.35%",
    type: "Both",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: null,
    badgeColor: null,
    bestFor: "Self-employed, flexible documentation",
    feature: null,
    href: "/cimb-refinance-home-loan",
  },
  {
    rank: 9,
    product: "Housing Loan",
    bank: "Hong Leong",
    rate: "4.38%",
    type: "Both",
    margin: "Up to 90%",
    lockIn: "3 years",
    badge: "Best for High DSR",
    badgeColor: "bg-teal-500",
    bestFor: "Those with high existing debts",
    feature: "Accepts DSR up to 75%",
    href: "/hong-leong-refinance-home-loan",
  },
  {
    rank: 10,
    product: "Home Loan",
    bank: "UOB",
    rate: "4.61%",
    type: "Both",
    margin: "Up to 95%",
    lockIn: "3 years",
    badge: "Highest Margin",
    badgeColor: "bg-rose-500",
    bestFor: "Those needing maximum financing",
    feature: null,
    href: "/uob-refinance-home-loan",
  },
];

const situationTable = [
  { situation: "Want lowest rate", loan: "Bank Islam Wahdah 3.80%", why: "Consistently lowest rate in market", href: "/bank-islam-refinance-home-loan" },
  { situation: "Want zero upfront cost", loan: "HSBC HomeSmart", why: "Up to RM50k costs waived", href: "/hsbc-refinance-home-loan" },
  { situation: "Have cash savings", loan: "SC MortgageOne", why: "Offset feature saves interest", href: "/standard-chartered-refinance-home-loan" },
  { situation: "Need high margin (90%+)", loan: "UOB Home Loan", why: "Up to 95% margin", href: "/uob-refinance-home-loan" },
  { situation: "Self-employed", loan: "CIMB HomeFlexi", why: "Flexible income docs", href: "/cimb-refinance-home-loan" },
  { situation: "High DSR (65-75%)", loan: "Hong Leong", why: "Accepts up to 75% DSR", href: "/hong-leong-refinance-home-loan" },
  { situation: "Government servant", loan: "Bank Rakyat", why: "Priority processing", href: "/bank-rakyat-refinance-home-loan" },
  { situation: "Want Islamic financing", loan: "Bank Islam Wahdah", why: "Lowest Islamic rate", href: "/bank-islam-refinance-home-loan" },
  { situation: "Cash-out refinance", loan: "Maybank MaxiHome", why: "High margin + large network", href: "/maybank-refinance-home-loan" },
  { situation: "Fast approval needed", loan: "RHB First Home", why: "2-3 weeks processing", href: "/rhb-refinance-home-loan" },
  { situation: "Expat / Foreigner", loan: "SC / HSBC", why: "International bank friendly", href: "/standard-chartered-refinance-home-loan" },
];

const faqs = [
  {
    question: "What is the best refinance home loan in Malaysia 2026?",
    answer: "The best refinance home loan depends on your needs. Bank Islam Wahdah offers the lowest rate at 3.80% (Islamic). For conventional loans, Standard Chartered MortgageOne offers 3.90% with an offset account feature. HSBC HomeSmart is best if you want zero upfront costs (up to RM50k waived).",
  },
  {
    question: "Which bank has the lowest refinancing rate?",
    answer: "Bank Islam offers the lowest standard refinancing rate at 3.80% through their Wahdah Home Refinancing-i product. For conventional loans, Standard Chartered MortgageOne starts from 3.90%. Rates are subject to your credit profile and loan amount.",
  },
  {
    question: "Is flexi loan better than term loan for refinancing?",
    answer: "Flexi loans are better if you plan to make extra payments or have variable income, as they calculate interest daily and allow redraw. Term loans offer slightly lower rates with fixed monthly payments. Choose flexi if you want flexibility, term if you want the lowest possible rate.",
  },
  {
    question: "Should I choose Islamic or conventional refinancing?",
    answer: "Both offer competitive rates — Islamic from 3.80%, conventional from 3.90%. Islamic financing uses profit-sharing concepts instead of interest and is Shariah-compliant. The choice is largely personal/religious preference, as costs and monthly payments are similar.",
  },
  {
    question: "How much can I save by refinancing my home loan?",
    answer: "Savings depend on the rate difference and remaining tenure. For example, refinancing a RM500,000 loan from 4.75% to 3.90% saves approximately RM235/month or RM56,400 over 20 years. Use our calculator for your exact savings.",
  },
  {
    question: "What is the best loan for cash-out refinancing?",
    answer: "Maybank MaxiHome is best for cash-out refinancing, offering up to 90% margin with a large branch network for easy processing. UOB offers even higher margin at 95% including MRTA. For cash-out on fully-paid properties, most banks offer up to 80-90% of current market value.",
  },
  {
    question: "Which bank is best for self-employed refinancing?",
    answer: "CIMB HomeFlexi is most flexible for self-employed borrowers, accepting various income documentation. Hong Leong also accommodates higher DSR ratios (up to 75%), which helps self-employed individuals with variable income.",
  },
  {
    question: "Are there zero cost refinancing packages in Malaysia?",
    answer: "Yes. HSBC HomeSmart waives up to RM50,000 in upfront costs (legal fees, valuation, stamp duty). Standard Chartered also offers zero entry cost packages for qualifying loans. These typically require higher minimum loan amounts.",
  },
  {
    question: "How do I compare refinancing loans effectively?",
    answer: "Compare: (1) effective interest rate (not just advertised rate), (2) lock-in period and penalties, (3) total cost including fees, (4) special features like flexi/offset, (5) margin offered. Use our calculator to see the full picture including break-even point.",
  },
  {
    question: "When is the best time to refinance my home loan?",
    answer: "Refinance when: your lock-in period has ended, current rates are 0.5%+ lower than your rate, you have 10+ years remaining, and your credit score is good. With 2026 rates at 3.80-4.61%, if you're paying above 4.5%, refinancing likely saves money.",
  },
];

const paaQuestions = [
  {
    question: "What is the best home loan for refinancing in Malaysia?",
    answer: "Bank Islam Wahdah offers the lowest rate at 3.80%. For conventional loans, Standard Chartered MortgageOne offers 3.90% with an offset account feature. The best choice depends on whether you prioritize rate, features, or zero upfront costs.",
  },
  {
    question: "Which bank is best to refinance a mortgage?",
    answer: "Depends on your needs: Bank Islam for lowest rate (3.80%), HSBC for zero costs (up to RM50k waived), UOB for highest margin (95%), and Hong Leong for high DSR cases (up to 75% DSR accepted).",
  },
  {
    question: "Which bank gives 7% interest on a home loan?",
    answer: "No Malaysian bank currently offers 7% on home loans. Current refinancing rates range from 3.80% to 4.61%. If you're paying close to 7%, you should refinance immediately as you could save RM500+ per month.",
  },
  {
    question: "How much salary to buy a 700k house in Malaysia?",
    answer: "Approximately RM10,000-12,000 monthly income to maintain DSR below 70%, depending on existing debts. Use our DSR Calculator to check your exact eligibility based on your current financial commitments.",
  },
];

export default function BestRefinanceHomeLoanPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openPaaIndex, setOpenPaaIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Best Refinance Home Loan Malaysia {currentYear}
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Compare top refinancing packages from 15+ banks — rates, features, and promotions
          </p>
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <span className="bg-blue-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4" /> Rates from 3.80%
            </span>
            <span className="bg-blue-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" /> Zero entry cost deals
            </span>
            <span className="bg-blue-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> 15+ banks compared
            </span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            Get Personalized Recommendation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Answer Box */}
          <section className="mb-12">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Quick Answer: Best Refinance Home Loans {currentYear}
              </h2>
              <p className="text-gray-700 mb-3">
                The best refinance home loan in Malaysia for {currentYear} depends on your needs:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span><strong>Lowest rate:</strong> <Link href="/bank-islam-refinance-home-loan" className="text-blue-600 hover:underline">Bank Islam Wahdah</Link> (3.80%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">•</span>
                  <span><strong>Zero upfront cost:</strong> <Link href="/hsbc-refinance-home-loan" className="text-blue-600 hover:underline">HSBC HomeSmart</Link> (up to RM50k waived)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold mt-0.5">•</span>
                  <span><strong>Highest margin:</strong> <Link href="/uob-refinance-home-loan" className="text-blue-600 hover:underline">UOB Home Loan</Link> (95%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span><strong>Best flexi loan:</strong> <Link href="/standard-chartered-refinance-home-loan" className="text-blue-600 hover:underline">Standard Chartered MortgageOne</Link> (3.90%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">•</span>
                  <span><strong>Best for cash-out:</strong> <Link href="/maybank-refinance-home-loan" className="text-blue-600 hover:underline">Maybank MaxiHome</Link> (90% margin)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                Most Malaysians save RM200-500/month by refinancing to a lower rate.
              </p>
            </div>
          </section>

          {/* Top 10 Best Refinance Home Loans */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 10 Best Refinance Home Loans {currentYear}
            </h2>

            <div className="space-y-6">
              {topLoans.map((loan) => (
                <div key={loan.rank} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold">#{loan.rank}</span>
                      <div>
                        <span className="text-lg font-semibold">{loan.bank} {loan.product}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {loan.badge && (
                        <span className={`${loan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                          <Star className="w-3 h-3" /> {loan.badge}
                        </span>
                      )}
                      <span className="bg-white text-blue-700 px-4 py-1 rounded-full font-bold">
                        {loan.rate}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Type</p>
                        <p className="font-semibold text-gray-900">{loan.type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Margin</p>
                        <p className="font-semibold text-gray-900">{loan.margin}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Lock-in</p>
                        <p className="font-semibold text-gray-900">{loan.lockIn}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Rate</p>
                        <p className="font-semibold text-green-700">{loan.rate}</p>
                      </div>
                    </div>

                    {loan.feature && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 mb-4">
                        <p className="text-sm text-yellow-800">
                          <strong>Special:</strong> {loan.feature}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-blue-600">Best for:</span> {loan.bestFor}
                      </p>
                      {loan.href && (
                        <Link
                          href={loan.href}
                          className="text-sm text-blue-600 hover:underline font-medium flex items-center gap-1"
                        >
                          View details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Best Refinance Loan by Situation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Best Refinance Loan by Situation
            </h2>
            <p className="text-gray-700 mb-6">
              Different loans suit different borrowers. Find the best match for your situation:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left p-4 font-semibold">Your Situation</th>
                    <th className="text-left p-4 font-semibold">Best Loan</th>
                    <th className="text-left p-4 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {situationTable.map((row, idx) => (
                    <tr key={idx} className={`border-b hover:bg-gray-50 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="p-4 font-medium">{row.situation}</td>
                      <td className="p-4">
                        <Link href={row.href} className="text-blue-600 hover:underline font-medium">
                          {row.loan}
                        </Link>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Comparison Table: All Top Loans */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comparison Table: All Top Loans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-3 font-semibold">Loan Product</th>
                    <th className="text-left p-3 font-semibold">Bank</th>
                    <th className="text-left p-3 font-semibold">Rate</th>
                    <th className="text-left p-3 font-semibold">Margin</th>
                    <th className="text-left p-3 font-semibold">Lock-in</th>
                    <th className="text-left p-3 font-semibold">Type</th>
                    <th className="text-left p-3 font-semibold">Special Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {topLoans.map((loan, idx) => (
                    <tr key={idx} className={`border-b ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="p-3 font-medium">
                        {loan.href ? (
                          <Link href={loan.href} className="text-blue-600 hover:underline">{loan.product}</Link>
                        ) : loan.product}
                      </td>
                      <td className="p-3">{loan.bank}</td>
                      <td className="p-3 font-semibold text-green-700">{loan.rate}</td>
                      <td className="p-3">{loan.margin.replace("Up to ", "")}</td>
                      <td className="p-3">{loan.lockIn}</td>
                      <td className="p-3">{loan.type}</td>
                      <td className="p-3 text-gray-600">{loan.feature || loan.badge || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              See full rates from all banks:{" "}
              <Link href="/refinance-home-loan-rates-malaysia" className="text-blue-600 hover:underline">
                Complete Refinance Rates Comparison →
              </Link>
            </p>
          </section>

          {/* Flexi vs Term Loan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Flexi vs Term Loan: Which is Better?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">Flexi Loan</th>
                    <th className="text-left p-4 font-semibold">Term Loan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Extra payments</td>
                    <td className="p-4 text-green-700">Anytime, no penalty</td>
                    <td className="p-4 text-gray-600">May have restrictions</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Redraw facility</td>
                    <td className="p-4 text-green-700">Yes, withdraw extra paid</td>
                    <td className="p-4 text-gray-600">No</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Interest calculation</td>
                    <td className="p-4">Daily rest</td>
                    <td className="p-4">Monthly rest</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Rate</td>
                    <td className="p-4 text-amber-700">Slightly higher</td>
                    <td className="p-4 text-green-700">Slightly lower</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Best for</td>
                    <td className="p-4">Variable income, extra payments</td>
                    <td className="p-4">Fixed payment preference</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <p className="text-sm text-indigo-800">
                <strong>Recommendation:</strong> Choose flexi loan if you anticipate making extra payments or have variable income. The daily interest calculation means any extra payments immediately reduce your interest charges.
              </p>
            </div>
          </section>

          {/* Islamic vs Conventional */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              Islamic vs Conventional: Key Differences
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">Islamic</th>
                    <th className="text-left p-4 font-semibold">Conventional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Concept</td>
                    <td className="p-4">Profit sharing / Murabahah</td>
                    <td className="p-4">Interest-based</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Rate term</td>
                    <td className="p-4">Profit rate</td>
                    <td className="p-4">Interest rate</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Shariah compliant</td>
                    <td className="p-4 text-green-700 font-semibold">Yes</td>
                    <td className="p-4 text-gray-600">No</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Rates</td>
                    <td className="p-4">Competitive (3.80%+)</td>
                    <td className="p-4">Competitive (3.90%+)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Available at</td>
                    <td className="p-4">All major banks</td>
                    <td className="p-4">All major banks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Both Islamic and conventional loans offer similar rates. Islamic financing currently offers the lowest rate (Bank Islam 3.80%). Choose based on personal/religious preference.
              </p>
            </div>
          </section>

          {/* Current Promotions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Current Promotions & Deals
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="font-semibold text-purple-900">HSBC</p>
                    <p className="text-sm text-purple-700">Up to RM50,000 upfront costs waived</p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="font-semibold text-teal-900">Standard Chartered</p>
                    <p className="text-sm text-teal-700">Zero entry cost packages</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="font-semibold text-blue-900">Maybank</p>
                    <p className="text-sm text-blue-700">Cashback promotions for existing customers</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="font-semibold text-red-900">CIMB</p>
                    <p className="text-sm text-red-700">Reduced legal fees for refinancing</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Promotions change frequently. Ask for current deals when applying.
            </p>
          </section>

          {/* CTA - Mid Page */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Not Sure Which Loan is Best?</h2>
              <p className="text-blue-100 mb-6">Our experts compare 15+ banks to find your best deal — free, no obligation</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-all hover:scale-105"
              >
                Get Free Recommendation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Choose the Best Refinance Loan
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Check your current rate vs market rates", desc: "If your rate is 0.5%+ above current rates (3.80-4.61%), refinancing likely saves money." },
                { step: 2, title: "Calculate potential savings", desc: "Use our calculator to see exact monthly and total savings.", link: "/calculator", linkText: "Refinance Calculator" },
                { step: 3, title: "Check your DSR eligibility", desc: "Ensure your debt-to-income ratio qualifies. Most banks cap at 65-70%.", link: "/dsr-calculator", linkText: "DSR Calculator" },
                { step: 4, title: "Decide: Lowest rate vs special features?", desc: "Lowest rate saves most long-term. Features like flexi/offset benefit active repayers." },
                { step: 5, title: "Compare at least 3-5 loans", desc: "Don't just pick the lowest rate. Compare lock-in period, fees, and features." },
                { step: 6, title: "Factor in costs", desc: "Legal fees (RM3,000-8,000), valuation (RM300-500), stamp duty. Some banks waive these." },
                { step: 7, title: "Apply through broker for best rates", desc: "Brokers often negotiate better rates and handle paperwork. Our service is free." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                      {item.link && (
                        <>
                          {" "}
                          <Link href={item.link} className="text-blue-600 hover:underline">
                            {item.linkText} →
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How Much Can You Save */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-600" />
              How Much Can You Save?
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 mb-4 font-medium">Example: Refinancing a RM500,000 loan</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="text-sm text-red-600 font-semibold uppercase mb-1">Current Loan</p>
                  <p className="text-2xl font-bold text-red-800">4.75%</p>
                  <p className="text-sm text-red-600">RM500,000 • 20 years remaining</p>
                  <p className="text-lg font-semibold text-red-700 mt-2">RM3,225/month</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-green-600 font-semibold uppercase mb-1">After Refinancing</p>
                  <p className="text-2xl font-bold text-green-800">3.90%</p>
                  <p className="text-sm text-green-600">RM500,000 • 20 years remaining</p>
                  <p className="text-lg font-semibold text-green-700 mt-2">RM2,990/month</p>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-blue-600">Monthly Savings</p>
                    <p className="text-xl font-bold text-blue-800">RM235</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Yearly Savings</p>
                    <p className="text-xl font-bold text-blue-800">RM2,820</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Total Savings (20 yrs)</p>
                    <p className="text-xl font-bold text-blue-800">RM56,400</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Calculate Your Exact Savings →
                </Link>
              </div>
            </div>
          </section>

          {/* People Also Ask */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              People Also Ask
            </h2>
            <div className="space-y-3">
              {paaQuestions.map((paa, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenPaaIndex(openPaaIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">{paa.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openPaaIndex === index ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openPaaIndex === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{paa.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openFaqIndex === index ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
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

          {/* Lead Form Section */}
          <section className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Not Sure Which Loan is Best?</h2>
                <p className="text-gray-600">Our experts compare 15+ banks to find your best deal — free</p>
              </div>
              <LeadForm variant="inline" source="best-refinance-home-loan" lang="en" showAllFields={true} />
            </div>
          </section>

          {/* Related Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Guides & Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/en/best-refinance-banks" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-900">Best Refinance Banks</h3>
                <p className="text-sm text-blue-700">Compare 15+ bank institutions</p>
              </Link>
              <Link href="/refinance-home-loan-rates-malaysia" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-900">All Refinance Rates</h3>
                <p className="text-sm text-blue-700">Complete rate comparison table</p>
              </Link>
              <Link href="/calculator" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-900">Refinance Calculator</h3>
                <p className="text-sm text-blue-700">Calculate your exact savings</p>
              </Link>
              <Link href="/dsr-calculator" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-900">DSR Calculator</h3>
                <p className="text-sm text-blue-700">Check your eligibility</p>
              </Link>
              <Link href="/en/when-to-refinance" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-900">When to Refinance</h3>
                <p className="text-sm text-blue-700">Timing your refinance right</p>
              </Link>
              <Link href="/cash-out-refinance-malaysia" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-900">Cash-Out Refinance</h3>
                <p className="text-sm text-blue-700">Extract equity from your home</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Your Free Recommendation</h3>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <LeadForm variant="modal" source="best-refinance-home-loan" lang="en" showAllFields={true} />
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
            mainEntity: [...faqs, ...paaQuestions].map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
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
            headline: `Best Refinance Home Loan Malaysia ${currentYear}`,
            description: "Compare the best home loan refinancing packages in Malaysia. Rates from 3.80%, zero entry cost deals, flexi vs term loans.",
            datePublished: "2026-02-15",
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

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Save RM200-500/month"
        buttonText="Get Free Quote"
      />
    </>
  );
}
