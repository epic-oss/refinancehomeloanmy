"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import DebtConsolidationLeadForm from "@/components/DebtConsolidationLeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  Home,
  Wallet,
  CreditCard,
  Shield,
  Scale,
  HelpCircle,
  Calculator,
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

const comparisonData = [
  {
    option: "Cash-Out Refinance",
    rate: "3.5-4.5%",
    maxAmount: "Up to 90% equity",
    approvalTime: "6-10 weeks",
    creditImpact: "None",
    bestFor: "Property owners with equity",
    highlight: true,
  },
  {
    option: "Personal Loan",
    rate: "6-12%",
    maxAmount: "RM50k-150k",
    approvalTime: "1-3 days",
    creditImpact: "Hard inquiry",
    bestFor: "Fast cash, no property",
    highlight: false,
  },
  {
    option: "Balance Transfer",
    rate: "0-6% promo",
    maxAmount: "Credit limit",
    approvalTime: "1-2 weeks",
    creditImpact: "None",
    bestFor: "Credit card debt only",
    highlight: false,
  },
  {
    option: "AKPK DMP",
    rate: "0% (negotiated)",
    maxAmount: "All debts",
    approvalTime: "2-4 weeks",
    creditImpact: "Negative",
    bestFor: "Severe hardship",
    highlight: false,
  },
  {
    option: "Debt Settlement",
    rate: "Varies",
    maxAmount: "Negotiated",
    approvalTime: "Months",
    creditImpact: "Severe negative",
    bestFor: "Last resort",
    highlight: false,
  },
];

const balanceTransferBanks = [
  { name: "Maybank", promoRate: "0% for 12 months", revertRate: "17.5%", fee: "3-5%" },
  { name: "CIMB", promoRate: "0% for 6 months", revertRate: "18%", fee: "3%" },
  { name: "Public Bank", promoRate: "0% for 12 months", revertRate: "18%", fee: "3.5%" },
  { name: "Hong Leong", promoRate: "0% for 12 months", revertRate: "17.5%", fee: "3%" },
  { name: "RHB", promoRate: "0% for 6 months", revertRate: "18%", fee: "4%" },
];

const faqs = [
  {
    question: "What is the best debt consolidation option in Malaysia?",
    answer: "Cash-out refinancing is typically the best option if you own property with equity. It offers the lowest interest rates (3.5-4.5%) compared to personal loans (6-12%) or credit cards (18%). However, the best option depends on your situation: if you need money urgently, a personal loan is faster. If you only have credit card debt, balance transfer promos can work. If you're in severe financial distress, AKPK is a lifeline.",
  },
  {
    question: "Is AKPK a good option for debt consolidation?",
    answer: "AKPK (Agensi Kaunseling dan Pengurusan Kredit) is excellent if you're genuinely struggling to make payments. They can negotiate 0% interest and reduced payments with your creditors. However, enrollment affects your CCRIS record (marked as 'special attention'), making it harder to get new credit for years. Choose AKPK if you truly can't manage payments, not just to get lower rates.",
  },
  {
    question: "Can I consolidate debt without affecting my credit score?",
    answer: "Yes, with cash-out refinancing or balance transfer. Cash-out refinancing doesn't affect your credit score because you're refinancing an existing mortgage. Balance transfers also don't impact score if done within existing credit limits. Personal loans cause a temporary dip from the credit inquiry. AKPK and debt settlement will negatively impact your credit for several years.",
  },
  {
    question: "Which banks offer debt consolidation loans in Malaysia?",
    answer: "For cash-out refinancing: Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, UOB, OCBC, and Standard Chartered. For personal loans: most major banks plus licensed moneylenders. For balance transfers: Maybank, CIMB, Public Bank, Hong Leong, RHB, and Citibank offer competitive promo rates.",
  },
  {
    question: "What is the cheapest way to consolidate debt?",
    answer: "The cheapest options ranked: (1) Balance transfer at 0% promo rate (but temporary), (2) AKPK DMP at negotiated 0% (but affects credit), (3) Cash-out refinancing at 3.5-4.5% (best long-term if you own property), (4) Personal loan at 6-12%. Cash-out refinancing offers the best combination of low rates without credit impact.",
  },
];

export default function DebtConsolidationOptionsPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 mb-4">
            <Scale className="w-5 h-5" />
            <span className="text-sm">Compare All Options</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Debt Consolidation Options in Malaysia {currentYear}
          </h1>
          <p className="text-lg text-green-100 mb-6">
            Struggling with multiple debts? Here are all your options to consolidate and simplify.
            Find the best fit for your situation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleOpenForm}
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-all hover:scale-105"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/debt-consolidation-calculator"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-500 transition-all border border-green-400"
            >
              <Calculator className="w-5 h-5" />
              Calculate Savings
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-green-600">5</p>
              <p className="text-sm text-gray-600">Options Compared</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">0-18%</p>
              <p className="text-sm text-gray-600">Interest Range</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">Find</p>
              <p className="text-sm text-gray-600">Your Best Fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Comparison: All Debt Consolidation Options
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Option</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Interest Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Max Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Approval</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Credit Impact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.option}
                      className={`border-t border-gray-200 ${row.highlight ? "bg-green-50" : index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {row.highlight && <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>}
                        {row.option}
                      </td>
                      <td className={`px-4 py-3 text-sm ${row.highlight ? "text-green-700 font-semibold" : "text-gray-600"}`}>
                        {row.rate}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{row.maxAmount}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{row.approvalTime}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          row.creditImpact === "None" ? "bg-green-100 text-green-700" :
                          row.creditImpact === "Hard inquiry" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {row.creditImpact}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Cash-out refinancing highlighted as best overall option for property owners</p>
          </section>

          {/* Option 1: Cash-Out Refinance */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Cash-Out Refinance (Best for Property Owners)</h2>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 text-green-700 font-semibold mb-3">
                <Home className="w-5 h-5" />
                Recommended Option
              </div>
              <p className="text-gray-700 mb-4">
                Cash-out refinancing lets you refinance your home loan for more than you currently owe, and receive the
                difference as cash. Use this cash to pay off all high-interest debts in one go.
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
                <li>Your property is valued by the bank</li>
                <li>You can borrow up to 90% of property value</li>
                <li>New loan pays off your old mortgage + gives you extra cash</li>
                <li>Use the cash to clear all high-interest debts</li>
              </ol>

              <h4 className="font-semibold text-gray-900 mb-2">Current Interest Rates:</h4>
              <p className="text-gray-700 mb-4">
                Most banks offer <strong className="text-green-700">3.5% to 4.5% p.a.</strong> for cash-out refinancing.
                Compare this to credit cards at 18% or personal loans at 8-12%.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lowest interest rate (3.5-4.5%)</li>
                    <li>• Large amounts available (based on equity)</li>
                    <li>• No credit score impact</li>
                    <li>• One simple monthly payment</li>
                    <li>• Tax-deductible interest (in some cases)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Requires property ownership</li>
                    <li>• Longer approval process (6-10 weeks)</li>
                    <li>• Legal and valuation fees apply</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Who Should Choose This:</h4>
                <p className="text-gray-700 text-sm">
                  Property owners with at least 20% equity who want the lowest possible rate and can wait 6-10 weeks for approval.
                  Ideal for consolidating large debts (RM50,000+).
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/cash-out-calculator"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Check Your Cash-Out Amount
              </Link>
            </div>
          </section>

          {/* Mid-page CTA after cash-out section */}
          <div className="my-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Property Owner? Cash-Out is Your Best Option
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Calculate how much you can access from your property equity and start consolidating today.
            </p>
            <Link
              href="/cash-out-refinance-malaysia"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get Cash-Out Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Option 2: Personal Loan */}
          <section className="mb-12 mt-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Personal Loan</h2>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 text-orange-700 font-semibold mb-3">
                <Wallet className="w-5 h-5" />
                Fast Option for Non-Property Owners
              </div>
              <p className="text-gray-700 mb-4">
                A personal loan is an unsecured loan you can use to pay off multiple debts. Since there&apos;s no collateral,
                rates are higher than cash-out refinancing but approval is much faster.
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
                <li>Apply with income documents</li>
                <li>Get approved in 1-3 days</li>
                <li>Receive lump sum to pay off all debts</li>
                <li>Repay over 1-7 years at fixed rate</li>
              </ol>

              <h4 className="font-semibold text-gray-900 mb-2">Interest Rates:</h4>
              <p className="text-gray-700 mb-4">
                Typically <strong className="text-orange-700">6% to 12% p.a.</strong> depending on your credit profile and bank.
                Still much better than credit card rates.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fast approval (1-3 days)</li>
                    <li>• No property required</li>
                    <li>• Fixed monthly payment</li>
                    <li>• Available from many banks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Higher rates than secured loans</li>
                    <li>• Hard inquiry affects credit</li>
                    <li>• Max amount limited (RM50k-150k)</li>
                    <li>• Requires good credit score</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-2">Who Should Choose This:</h4>
                <p className="text-gray-700 text-sm">
                  Non-property owners who need funds quickly and have a good credit score. Also suitable for smaller debt amounts
                  where cash-out refinancing wouldn&apos;t be cost-effective.
                </p>
              </div>
            </div>
          </section>

          {/* Option 3: Balance Transfer */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Balance Transfer</h2>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
                <CreditCard className="w-5 h-5" />
                For Credit Card Debt Only
              </div>
              <p className="text-gray-700 mb-4">
                Balance transfer lets you move credit card debt to a new card with 0% promotional interest for a limited period.
                Good for short-term relief, but requires discipline to pay off before promo ends.
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
                <li>Apply for balance transfer card/facility</li>
                <li>Bank pays off your existing credit card debt</li>
                <li>You pay 0% interest for promotional period (6-12 months)</li>
                <li>Must pay off before rate reverts to 17-18%</li>
              </ol>

              <h4 className="font-semibold text-gray-900 mb-2">Banks Offering Balance Transfer:</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-3 py-2 text-left">Bank</th>
                      <th className="px-3 py-2 text-left">Promo Rate</th>
                      <th className="px-3 py-2 text-left">Revert Rate</th>
                      <th className="px-3 py-2 text-left">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {balanceTransferBanks.map((bank) => (
                      <tr key={bank.name} className="border-t border-blue-100">
                        <td className="px-3 py-2 font-medium">{bank.name}</td>
                        <td className="px-3 py-2 text-green-600">{bank.promoRate}</td>
                        <td className="px-3 py-2 text-red-600">{bank.revertRate}</td>
                        <td className="px-3 py-2">{bank.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Warning: Revert Rates!</h4>
                    <p className="text-sm text-amber-700">
                      If you don&apos;t pay off the full balance before the promo ends, the rate jumps to 17-18%.
                      Also, there&apos;s usually a 3-5% upfront fee on the transferred amount.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 0% interest during promo</li>
                    <li>• No collateral needed</li>
                    <li>• Quick approval</li>
                    <li>• No credit score impact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Only for credit card debt</li>
                    <li>• Limited to credit limit</li>
                    <li>• High revert rate (17-18%)</li>
                    <li>• Upfront fees apply (3-5%)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Who Should Choose This:</h4>
                <p className="text-gray-700 text-sm">
                  Those with credit card debt only who are confident they can pay off the full amount within 6-12 months.
                  Not suitable if you can&apos;t guarantee full repayment before promo ends.
                </p>
              </div>
            </div>
          </section>

          {/* Option 4: AKPK */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h2 className="text-2xl font-bold text-gray-900">AKPK Debt Management Programme (DMP)</h2>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 text-purple-700 font-semibold mb-3">
                <Shield className="w-5 h-5" />
                For Severe Financial Hardship
              </div>
              <p className="text-gray-700 mb-4">
                AKPK (Agensi Kaunseling dan Pengurusan Kredit) is a government agency under BNM that helps Malaysians
                in financial distress. They can negotiate with creditors to reduce or eliminate interest on your behalf.
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
                <li>Contact AKPK for free counseling</li>
                <li>They assess your financial situation</li>
                <li>AKPK negotiates with your creditors</li>
                <li>You make one monthly payment to AKPK</li>
                <li>AKPK distributes to creditors</li>
              </ol>

              <h4 className="font-semibold text-gray-900 mb-2">What AKPK Can Negotiate:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Reduced or 0% interest rates</li>
                <li>Waived late payment fees</li>
                <li>Extended repayment period</li>
                <li>Lower monthly payments</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 0% interest possible</li>
                    <li>• All debts covered</li>
                    <li>• Free service</li>
                    <li>• Professional counseling</li>
                    <li>• Legal protection from creditors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Affects CCRIS record</li>
                    <li>• Can&apos;t get new credit during program</li>
                    <li>• Strict compliance required</li>
                    <li>• Takes years to complete</li>
                    <li>• Credit impact lasts after completion</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">How to Apply:</h4>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li>1. Call AKPK at 1800-88-2575 (toll-free)</li>
                  <li>2. Visit any AKPK branch for counseling</li>
                  <li>3. Bring IC, salary slips, and debt statements</li>
                </ol>
                <a
                  href="https://www.akpk.org.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-800 font-medium mt-2 text-sm"
                >
                  Visit AKPK Website <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">Who Should Choose This:</h4>
                <p className="text-gray-700 text-sm">
                  Those who genuinely cannot afford their current debt payments and are at risk of default.
                  Do NOT choose AKPK just to get lower rates - the credit impact is significant. Choose this if you&apos;re
                  truly in financial distress and other options aren&apos;t available.
                </p>
              </div>
            </div>
          </section>

          {/* Option 5: Debt Settlement */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <h2 className="text-2xl font-bold text-gray-900">Debt Settlement / Negotiation (Last Resort)</h2>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 text-red-700 font-semibold mb-3">
                <AlertTriangle className="w-5 h-5" />
                Last Resort Only
              </div>
              <p className="text-gray-700 mb-4">
                Debt settlement involves negotiating with creditors to accept a lump sum payment that&apos;s less than what you owe.
                This severely damages your credit and should only be considered when all other options have failed.
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
                <li>Stop making payments (damages credit)</li>
                <li>Save money for lump sum offer</li>
                <li>Negotiate with creditors (or hire agency)</li>
                <li>Creditor accepts reduced amount to close account</li>
              </ol>

              <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-800 mb-2">Risks and Consequences:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Severe credit score damage (can take 7+ years to recover)</li>
                  <li>• May face legal action from creditors</li>
                  <li>• Forgiven debt may be taxable income</li>
                  <li>• Collection calls and harassment</li>
                  <li>• Debt settlement companies charge high fees (15-25%)</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Can reduce total debt owed</li>
                    <li>• Faster than full repayment</li>
                    <li>• Option when truly broke</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Severe credit damage</li>
                    <li>• Tax implications</li>
                    <li>• Legal risks</li>
                    <li>• High fees if using company</li>
                    <li>• Stressful process</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-2">Who Should Choose This:</h4>
                <p className="text-gray-700 text-sm">
                  Only those who have exhausted all other options, have no assets, and cannot afford AKPK payments.
                  This is truly a last resort before bankruptcy. Consider AKPK first - it offers similar benefits
                  without the severe credit damage.
                </p>
              </div>
            </div>
          </section>

          {/* Which Option Decision Helper */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-green-600" />
              Which Option is Right for You?
            </h2>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-6">Answer these questions to find your best option:</p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Do you own a property with equity?</p>
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="w-5 h-5" />
                    <span>Yes → <strong>Cash-Out Refinance</strong> (Best rates at 3.5-4.5%)</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">No property, but need fast cash?</p>
                  <div className="flex items-center gap-2 text-orange-700">
                    <Check className="w-5 h-5" />
                    <span>→ <strong>Personal Loan</strong> (Fast approval, 6-12% rate)</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Only credit card debt, can pay off in 6-12 months?</p>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Check className="w-5 h-5" />
                    <span>→ <strong>Balance Transfer</strong> (0% promo rate)</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Can&apos;t afford any payments, in severe hardship?</p>
                  <div className="flex items-center gap-2 text-purple-700">
                    <Check className="w-5 h-5" />
                    <span>→ <strong>AKPK DMP</strong> (Free counseling, negotiated rates)</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">All options exhausted, truly broke?</p>
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertTriangle className="w-5 h-5" />
                    <span>→ <strong>Debt Settlement</strong> (Last resort only)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <div className="my-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <Calculator className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              How Much Can You Save?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Use our calculator to see your potential savings from debt consolidation.
            </p>
            <Link
              href="/debt-consolidation-calculator"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Calculate My Savings
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-green-600" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/debt-consolidation-malaysia"
                className="block p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border border-green-200"
              >
                <TrendingDown className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-green-800 mb-2">Debt Consolidation Guide</h3>
                <p className="text-sm text-green-700">Complete guide to consolidating debt in Malaysia</p>
              </Link>
              <Link
                href="/cash-out-refinance-malaysia"
                className="block p-6 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors border border-secondary-200"
              >
                <Home className="w-8 h-8 text-secondary-600 mb-3" />
                <h3 className="font-semibold text-secondary-800 mb-2">Cash Out Refinance</h3>
                <p className="text-sm text-secondary-700">Access your home equity at low rates</p>
              </Link>
              <Link
                href="/debt-consolidation-calculator"
                className="block p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
              >
                <Calculator className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-blue-800 mb-2">Savings Calculator</h3>
                <p className="text-sm text-blue-700">Calculate your potential savings</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* Final CTA Section */}
      <section className="bg-green-700 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Option? Get Free Expert Advice
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our specialists can assess your situation and recommend the best debt consolidation option for you.
          </p>
          <button
            onClick={handleOpenForm}
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get Free Assessment
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
              <DebtConsolidationLeadForm variant="modal" source="debt-consolidation-options" />
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
            "headline": `Debt Consolidation Options Malaysia ${currentYear} - Compare All Your Choices`,
            "description": "Compare all debt consolidation options in Malaysia including cash-out refinance, personal loans, balance transfer, AKPK, and debt settlement.",
            "author": {
              "@type": "Organization",
              "name": "RefinanceHomeLoanMY"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RefinanceHomeLoanMY"
            },
            "dateModified": new Date().toISOString(),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <StickyMobileCTA
        onCtaClick={handleOpenForm}
        text="Compare your options"
        buttonText="Get Assessment"
      />
    </>
  );
}
