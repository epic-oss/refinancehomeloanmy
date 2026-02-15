"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LeadForm, { LeadFormCalculatorValues } from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumberWithCommas, stripCommas } from "@/lib/utils";

const { currentYear, costs } = SITE_CONFIG;

const pageTitle = `Refinance Home Loan Calculator Malaysia ${currentYear} | Calculate Your Savings`;

const allBankRates = [
  { name: "Bank Islam", slug: "bank-islam", rate: "3.80%", type: "Islamic", bestFor: "Lowest rate" },
  { name: "Standard Chartered", slug: "standard-chartered", rate: "3.90%", type: "Conventional", bestFor: "Offset account" },
  { name: "Al Rajhi", slug: "al-rajhi", rate: "3.90%", type: "Islamic", bestFor: "Low rate Islamic", link: "/best-refinance-home-loan-malaysia" },
  { name: "RHB", slug: "rhb", rate: "4.10%", type: "Conventional", bestFor: "Fast approval" },
  { name: "Public Bank", slug: "public-bank", rate: "4.22%", type: "Conventional", bestFor: "Reliable" },
  { name: "Bank Rakyat", slug: "bank-rakyat", rate: "4.20%", type: "Islamic", bestFor: "Govt servants" },
  { name: "Bank Muamalat", slug: "bank-muamalat", rate: "4.25%", type: "Islamic", bestFor: "Musharakah" },
  { name: "HSBC", slug: "hsbc", rate: "4.30%", type: "Conventional", bestFor: "RM50k costs waived" },
  { name: "Maybank", slug: "maybank", rate: "4.35%", type: "Conventional", bestFor: "Largest network" },
  { name: "CIMB", slug: "cimb", rate: "4.35%", type: "Both", bestFor: "Self-employed" },
  { name: "Hong Leong", slug: "hong-leong", rate: "4.38%", type: "Both", bestFor: "High DSR (75%)" },
  { name: "AmBank", slug: "ambank", rate: "4.40%", type: "Both", bestFor: "Flexible" },
  { name: "OCBC", slug: "ocbc", rate: "4.05%", type: "Both", bestFor: "International" },
  { name: "UOB", slug: "uob", rate: "4.61%", type: "Both", bestFor: "95% margin" },
];

const calculatorFaqs = [
  {
    question: "How accurate is this refinance calculator?",
    answer:
      "This calculator provides a good estimate based on standard amortization formulas used by Malaysian banks. Actual rates and savings may vary depending on your credit profile, property type, location, and the bank's current promotions. For an exact quote, submit your details and our specialists will provide personalized options from multiple banks.",
  },
  {
    question: "What interest rate should I use for comparison?",
    answer:
      "Check your latest bank statement or loan agreement for your current interest rate. Most Malaysian home loans are on Base Rate (BR) or Base Lending Rate (BLR) plus a spread. If you're unsure, use 4.5-5% as a rough estimate for loans taken before 2022. For the new rate, use 3.85% as a realistic benchmark — the best available rates start from 3.80% (Bank Islam) to 3.90% (Standard Chartered).",
  },
  {
    question: "How much can I realistically save by refinancing?",
    answer:
      "Most borrowers save RM150-500 per month depending on loan amount and rate difference. For a RM400,000 loan with a 0.75% rate reduction and 20 years remaining, you could save approximately RM200/month or RM48,000 over the loan tenure. Larger loans and bigger rate gaps mean more savings.",
  },
  {
    question: "Are there any hidden costs in refinancing?",
    answer: `Refinancing costs include legal fees (${costs.legalFeesText}), valuation fees (${costs.valuationFeesText}), stamp duty (0.5% of loan amount), and discharge fees (RM200-500). Total costs typically range from RM3,000-8,000. However, many banks offer packages that cover or reimburse these costs. HSBC waives up to RM50,000 in costs, and Standard Chartered offers zero entry cost packages.`,
  },
  {
    question: "What's the minimum savings that makes refinancing worthwhile?",
    answer:
      "Generally, a difference of 0.5% or more in interest rates makes refinancing worthwhile, especially if you have more than 10 years remaining on your loan. The key metric is the break-even period — if you can recover refinancing costs within 3 years through monthly savings, it's usually a good move.",
  },
  {
    question: "Should I refinance if I have less than 10 years left?",
    answer:
      "It depends on the numbers. With less than 10 years remaining, the total savings are smaller because there's less time to benefit. Calculate your break-even period — if it's less than half your remaining tenure, refinancing can still be worth it. For example, with 8 years left and a break-even of 2 years, you still get 6 years of savings.",
  },
  {
    question: "Can I refinance if my property value has dropped?",
    answer:
      "Yes, but it may affect your loan-to-value (LTV) ratio. If your property value has dropped significantly, you may need to bring in cash to cover the difference, or accept a smaller loan amount. Get a valuation done first to understand your current LTV position before applying.",
  },
  {
    question: "What documents do I need to refinance?",
    answer:
      "You'll need IC, salary slips (3 months), bank statements (6 months), EPF statement, EA/BE form, current loan statement, and property documents (S&P agreement, title deed). Self-employed applicants need business registration and 2 years of tax returns. See our complete checklist for details.",
  },
  {
    question: "Can I get cash out when refinancing?",
    answer:
      "Yes, most banks offer cash-out refinancing where you can withdraw up to 80-90% of your property's current market value minus your existing loan balance. This is useful for renovations, investments, education, or debt consolidation. Use our cash-out calculator to see how much you can extract.",
  },
  {
    question: "How long does the refinancing process take?",
    answer:
      "The typical refinancing process takes 1-3 months from application to disbursement. This includes loan application (1-2 weeks), property valuation (1-2 weeks), loan approval (2-4 weeks), and legal documentation (2-4 weeks). Having complete documents ready can speed up the process significantly.",
  },
];

export default function CalculatorPage() {
  const [currentLoanAmount, setCurrentLoanAmount] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [remainingYears, setRemainingYears] = useState("");
  const [newRate, setNewRate] = useState("3.85");
  const [result, setResult] = useState<{
    currentMonthly: number;
    newMonthly: number;
    monthlySavings: number;
    yearlySavings: number;
    totalSavings: number;
    breakEvenMonths: number;
  } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState<LeadFormCalculatorValues | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const handleOpenForm = () => {
    if (result) {
      setCalculatorValues({
        outstandingLoanAmount: currentLoanAmount,
        currentInterestRate: currentRate,
        currentMonthlyPayment: result.currentMonthly,
        remainingTenureYears: remainingYears,
        newInterestRate: newRate,
        newMonthlyPayment: result.newMonthly,
        monthlySavings: result.monthlySavings,
        yearlySavings: result.yearlySavings,
        totalInterestSavings: result.totalSavings,
        breakEvenMonths: result.breakEvenMonths,
        refinancingCostsTotal: 5000,
        isRecommended: result.monthlySavings > 100,
      });
    }
    setShowForm(true);
  };

  const calculateSavings = () => {
    const principal = parseFloat(stripCommas(currentLoanAmount));
    const currentRateNum = parseFloat(currentRate);
    const newRateNum = parseFloat(newRate);
    const years = parseFloat(remainingYears);

    if (!principal || principal < 50000) {
      alert("Please enter a valid loan amount (minimum RM 50,000)");
      return;
    }
    if (!currentRateNum || currentRateNum < 1 || currentRateNum > 15) {
      alert("Please enter a valid current interest rate (1-15%)");
      return;
    }
    if (!years || years < 1 || years > 35) {
      alert("Please enter valid remaining years (1-35)");
      return;
    }

    const monthlyCurrentRate = currentRateNum / 100 / 12;
    const monthlyNewRate = newRateNum / 100 / 12;
    const totalMonths = years * 12;

    const currentMonthly =
      (principal * monthlyCurrentRate * Math.pow(1 + monthlyCurrentRate, totalMonths)) /
      (Math.pow(1 + monthlyCurrentRate, totalMonths) - 1);

    const newMonthly =
      (principal * monthlyNewRate * Math.pow(1 + monthlyNewRate, totalMonths)) /
      (Math.pow(1 + monthlyNewRate, totalMonths) - 1);

    const monthlySavings = currentMonthly - newMonthly;
    const yearlySavings = monthlySavings * 12;
    const totalSavings = monthlySavings * totalMonths;

    const estimatedCost = 5000;
    const breakEvenMonths = Math.ceil(estimatedCost / monthlySavings);

    setResult({
      currentMonthly: Math.round(currentMonthly),
      newMonthly: Math.round(newMonthly),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      totalSavings: Math.round(totalSavings - estimatedCost),
      breakEvenMonths: breakEvenMonths > 0 ? breakEvenMonths : 0,
    });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calculatorFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refinance Home Loan Calculator Malaysia {currentYear}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Calculate your potential savings by refinancing your home loan. See how much you could save monthly and over your loan tenure.
            </p>
            <p className="text-gray-400">
              Compare rates from 14 banks. Instant results. 100% free.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Calculate Your Savings</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Outstanding Loan Amount (RM)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 400,000"
                  value={currentLoanAmount}
                  onChange={(e) => {
                    const formatted = formatNumberWithCommas(e.target.value);
                    setCurrentLoanAmount(formatted);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g., 4.75"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Remaining Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 20"
                  min="1"
                  max="35"
                  value={remainingYears}
                  onChange={(e) => setRemainingYears(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Interest Rate (%)
                </label>
                <select
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="3.65">3.65% (Best available rate)</option>
                  <option value="3.85">3.85% (Excellent rate)</option>
                  <option value="4.00">4.00% (Good rate)</option>
                  <option value="4.15">4.15% (Average rate)</option>
                  <option value="4.35">4.35% (Standard rate)</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateSavings}
              className="w-full btn-primary py-4 text-lg mt-8"
            >
              Calculate My Savings
            </button>

            {/* Results */}
            {result && (
              <div className="mt-8">
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl p-6 text-white text-center mb-6">
                  <p className="text-sm uppercase tracking-wide mb-2">Your Monthly Savings</p>
                  <p className="text-5xl font-bold">RM {result.monthlySavings.toLocaleString()}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Current Monthly</p>
                    <p className="text-lg font-bold text-gray-900">RM {result.currentMonthly.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">New Monthly</p>
                    <p className="text-lg font-bold text-secondary-600">RM {result.newMonthly.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Yearly Savings</p>
                    <p className="text-lg font-bold text-secondary-600">RM {result.yearlySavings.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Total Savings</p>
                    <p className="text-lg font-bold text-secondary-600">RM {result.totalSavings.toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4 flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Break-even Period</span>
                  </div>
                  <span className="font-bold text-primary-800">{result.breakEvenMonths} months</span>
                </div>

                <button
                  onClick={handleOpenForm}
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Your Personalized Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <LeadForm variant="modal" source="calculator" calculatorValues={calculatorValues} showAllFields={true} />
            </div>
          </div>
        </div>
      )}

      {/* How to Use This Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Calculator</h2>
          <p className="text-gray-700 mb-6">
            Follow these 7 simple steps to calculate your potential refinancing savings. You&apos;ll need your current loan statement handy for accurate results.
          </p>
          <div className="space-y-4">
            {[
              { step: 1, title: "Enter your outstanding loan amount", desc: "Check your latest bank statement for the current outstanding balance. This is the amount you still owe, not the original loan amount." },
              { step: 2, title: "Enter your current interest rate", desc: "Found on your loan agreement or bank statement. Most Malaysian home loans are on Base Rate (BR) + spread. If unsure, use 4.5-5% as an estimate for older loans." },
              { step: 3, title: "Enter remaining tenure in years", desc: "How many years are left on your current home loan. If your loan was 30 years and you've paid 10 years, enter 20." },
              { step: 4, title: "Select a new interest rate", desc: "Choose from the dropdown or use 3.85% as a realistic benchmark. The best available rates currently start from 3.80% (Bank Islam) and 3.90% (Standard Chartered)." },
              { step: 5, title: "Click \"Calculate My Savings\"", desc: "The calculator will instantly compute your monthly payment under both scenarios and show the difference." },
              { step: 6, title: "Review your savings breakdown", desc: "See monthly savings, yearly savings, and total savings over remaining tenure. The total savings figure already deducts estimated refinancing costs of RM5,000." },
              { step: 7, title: "Check break-even period", desc: "This tells you how many months it takes for your savings to exceed refinancing costs. A break-even under 36 months is generally considered good." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Your Results */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Your Results</h2>
          <p className="text-gray-700 mb-6">
            Here&apos;s what each number in your results means and how to interpret them for your refinancing decision.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2">Monthly Savings</h3>
              <p className="text-sm text-gray-600">The difference between your current monthly payment and the new monthly payment after refinancing. This is extra money in your pocket every month. Most successful refinancers save RM150-500 per month.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2">Yearly Savings</h3>
              <p className="text-sm text-gray-600">Monthly savings multiplied by 12. This gives you a better perspective on the annual impact. For example, RM250/month savings = RM3,000/year that you can use for investments, education, or other financial goals.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2">Total Interest Savings</h3>
              <p className="text-sm text-gray-600">The total amount saved over the remaining loan tenure, minus estimated refinancing costs (RM5,000). This is the true bottom-line savings from refinancing. On a RM400,000 loan with 20 years remaining, this can easily exceed RM40,000.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2">Break-even Period</h3>
              <p className="text-sm text-gray-600">Refinancing costs (estimated RM5,000) divided by monthly savings = number of months to recover your costs. After the break-even point, every month is pure savings. A break-even period under 36 months is considered excellent.</p>
            </div>
            <div className="bg-primary-50 rounded-xl border-2 border-primary-200 p-6">
              <h3 className="font-bold text-primary-900 mb-2">Is Refinancing Worth It?</h3>
              <p className="text-sm text-gray-700">Generally yes if your break-even period is less than 3 years AND you have more than 10 years remaining on your loan. If your monthly savings exceed RM150, it&apos;s almost always worth refinancing once your lock-in period has ended.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Rates Table - All 14 Banks */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Current Refinancing Rates — All 14 Banks ({currentYear})
          </h2>
          <p className="text-gray-700 mb-6">
            Compare refinancing rates from all major banks in Malaysia. Use these rates when selecting the &quot;New Interest Rate&quot; in the calculator above. For detailed reviews of each bank, click the bank name.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="text-left py-3 px-4 font-semibold">Bank</th>
                  <th className="text-left py-3 px-4 font-semibold">Rate From</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allBankRates.map((bank, index) => (
                  <tr key={index} className={`hover:bg-gray-50 ${index % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                    <td className="py-3 px-4">
                      <Link
                        href={bank.link || `/${bank.slug}-refinance-home-loan`}
                        className="font-medium text-primary-600 hover:underline"
                      >
                        {bank.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 font-semibold text-secondary-600">{bank.rate}</td>
                    <td className="py-3 px-4 text-gray-600">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        bank.type === "Islamic" ? "bg-green-100 text-green-700" :
                        bank.type === "Conventional" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {bank.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{bank.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            * Rates are indicative and subject to change based on Bank Negara&apos;s OPR and individual bank policies. See the{" "}
            <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline">full rates comparison</Link> for more details.
          </p>
        </div>
      </section>

      {/* Refinancing Costs Breakdown */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refinancing Costs Breakdown</h2>
          <p className="text-gray-700 mb-6">
            Before refinancing, factor in these one-time costs. The calculator already deducts an estimated RM5,000 from your total savings, but actual costs vary.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">Legal fees</td>
                  <td className="py-3 px-4 text-gray-700">RM2,000 - RM5,000</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Depends on loan amount</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Valuation fees</td>
                  <td className="py-3 px-4 text-gray-700">RM300 - RM1,000</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Property size dependent</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">Stamp duty</td>
                  <td className="py-3 px-4 text-gray-700">0.5% of loan</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Government fee</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Discharge fee</td>
                  <td className="py-3 px-4 text-gray-700">RM200 - RM500</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Current bank charges</td>
                </tr>
                <tr className="bg-primary-50">
                  <td className="py-3 px-4 font-bold text-gray-900">Total estimate</td>
                  <td className="py-3 px-4 font-bold text-gray-900">RM3,000 - RM8,000</td>
                  <td className="py-3 px-4 text-sm font-medium text-primary-700">Some banks waive fees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Cost-saving tip:</strong>{" "}
              <Link href="/hsbc-refinance-home-loan" className="text-primary-600 hover:underline">HSBC</Link> waives up to RM50,000 in upfront costs.{" "}
              <Link href="/standard-chartered-refinance-home-loan" className="text-primary-600 hover:underline">Standard Chartered</Link> offers zero entry cost packages.
              Many banks also offer cashback promotions that can offset these costs.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculations */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Calculations</h2>
          <p className="text-gray-700 mb-6">
            Here are three real scenarios to help you understand when refinancing makes financial sense — and when it doesn&apos;t.
          </p>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-green-50 rounded-xl border-2 border-green-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">EXAMPLE 1</span>
                <h3 className="font-bold text-gray-900">RM300,000 Loan — 15 Years Remaining</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current rate:</span>
                    <span className="font-medium">4.75%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current monthly:</span>
                    <span className="font-medium">RM2,336</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New rate:</span>
                    <span className="font-medium text-green-600">3.85%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New monthly:</span>
                    <span className="font-medium text-green-600">RM2,197</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Monthly savings</p>
                  <p className="font-bold text-green-600">RM139</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Break-even</p>
                  <p className="font-bold text-gray-900">36 months</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Total savings</p>
                  <p className="font-bold text-green-600">RM20,020</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-green-700">Verdict: Worth refinancing — savings recover costs within 3 years with 12 years of pure savings after.</p>
            </div>

            {/* Example 2 */}
            <div className="bg-green-50 rounded-xl border-2 border-green-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">EXAMPLE 2</span>
                <h3 className="font-bold text-gray-900">RM500,000 Loan — 20 Years Remaining</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current rate:</span>
                    <span className="font-medium">4.50%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current monthly:</span>
                    <span className="font-medium">RM3,163</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New rate:</span>
                    <span className="font-medium text-green-600">3.90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New monthly:</span>
                    <span className="font-medium text-green-600">RM2,993</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Monthly savings</p>
                  <p className="font-bold text-green-600">RM170</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Break-even</p>
                  <p className="font-bold text-gray-900">30 months</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Total savings</p>
                  <p className="font-bold text-green-600">RM35,800</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-green-700">Verdict: Worth refinancing — longer tenure means more years of savings, totalling RM35,800+.</p>
            </div>

            {/* Example 3 */}
            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">EXAMPLE 3</span>
                <h3 className="font-bold text-gray-900">RM200,000 Loan — 5 Years Remaining</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current rate:</span>
                    <span className="font-medium">4.50%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current monthly:</span>
                    <span className="font-medium">RM3,728</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New rate:</span>
                    <span className="font-medium">3.90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">New monthly:</span>
                    <span className="font-medium">RM3,673</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Monthly savings</p>
                  <p className="font-bold text-red-600">RM55</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Break-even</p>
                  <p className="font-bold text-red-600">91 months</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500">Total savings</p>
                  <p className="font-bold text-red-600">-RM1,700</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-red-700">Verdict: Not worth it — break-even period (91 months) exceeds remaining tenure (60 months). You&apos;d lose money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When Refinancing Makes Sense */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When Refinancing Makes Sense</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Refinance If
              </h3>
              <ul className="space-y-3">
                {[
                  "Rate difference is more than 0.5%",
                  "Remaining tenure is more than 10 years",
                  "Break-even period is under 3 years",
                  "Lock-in period has ended",
                  "Your credit score has improved since original loan",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Don&apos;t Refinance If
              </h3>
              <ul className="space-y-3">
                {[
                  "Less than 5 years remaining on loan",
                  "Rate difference is less than 0.3%",
                  "Still in lock-in period (2-3% penalty applies)",
                  "Planning to sell property soon",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Not sure?</strong> Check your{" "}
              <Link href="/dsr-calculator" className="text-primary-600 hover:underline">DSR eligibility</Link> first, then{" "}
              <Link href="/en/best-refinance-banks" className="text-primary-600 hover:underline">compare banks</Link> to find the best fit for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Your Refinance Rate */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Affects Your Refinance Rate?</h2>
          <p className="text-gray-700 mb-6">
            Not everyone gets the advertised rate. Here are the 6 factors banks consider when determining your actual refinancing rate.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Loan Amount",
                desc: "Higher loan amounts (RM500k+) often qualify for better rates. Banks are more willing to offer discounts on larger loans as they earn more interest overall.",
              },
              {
                title: "DSR (Debt Service Ratio)",
                desc: "Lower DSR = better rates. Most banks cap at 65-70% DSR, but Hong Leong accepts up to 75%.",
                link: { text: "Check your DSR", href: "/dsr-calculator" },
              },
              {
                title: "Property Type",
                desc: "Landed properties and high-rise in prime locations typically get better rates than apartments or properties in rural areas.",
              },
              {
                title: "Employment Type",
                desc: "Salaried employees generally get better rates than self-employed. Government servants can access special rates from Bank Rakyat and LPPSA.",
              },
              {
                title: "Credit Score",
                desc: "Your CCRIS and CTOS record directly impacts your rate. Late payments or defaults in the past 12 months can result in higher rates or rejection.",
              },
              {
                title: "Bank Relationship",
                desc: "Existing customers with salary accounts, credit cards, or other products with a bank may qualify for preferential rates or faster approval.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{idx + 1}. {item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href} className="text-primary-600 hover:underline">
                        {item.link.text} &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Like What You See in the Calculator?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get exact quotes from multiple banks — our specialists compare offers and find the best deal for your profile. Free, no obligation.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-full hover:bg-primary-50 transition-all hover:scale-105 text-lg"
          >
            Get Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {calculatorFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
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
        </div>
      </section>

      {/* Next Steps After Calculating */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps After Calculating</h2>
          <p className="text-gray-700 mb-6">
            Now that you know your potential savings, here&apos;s what to do next based on your results.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="block text-left bg-primary-50 rounded-xl p-6 hover:bg-primary-100 transition-colors border-2 border-primary-200 group"
            >
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-3">1</div>
              <h3 className="font-semibold text-primary-900 mb-2 group-hover:text-primary-700">
                Get a Free Consultation
              </h3>
              <p className="text-sm text-gray-600">
                If savings look good, get exact quotes from multiple banks
              </p>
            </button>

            <Link
              href="/dsr-calculator"
              className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 group"
            >
              <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mb-3">2</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">
                Check DSR Eligibility
              </h3>
              <p className="text-sm text-gray-600">
                Make sure your debt ratio qualifies for refinancing
              </p>
            </Link>

            <Link
              href="/en/best-refinance-banks"
              className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 group"
            >
              <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mb-3">3</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">
                Compare Banks in Detail
              </h3>
              <p className="text-sm text-gray-600">
                See pros, cons, and detailed reviews of 14 banks
              </p>
            </Link>

            <Link
              href="/en/documents-required"
              className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 group"
            >
              <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mb-3">4</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">
                Prepare Documents
              </h3>
              <p className="text-sm text-gray-600">
                Complete checklist of what you need for your application
              </p>
            </Link>

            <Link
              href="/cash-out-calculator"
              className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 group"
            >
              <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mb-3">5</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">
                Calculate Cash Out
              </h3>
              <p className="text-sm text-gray-600">
                See how much equity you can extract from your property
              </p>
            </Link>

            <Link
              href="/refinance-home-loan-rates-malaysia"
              className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 group"
            >
              <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mb-3">6</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">
                View Latest Rates
              </h3>
              <p className="text-sm text-gray-600">
                See updated rates from all banks, refreshed monthly
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our calculator gives you an estimate. Get exact quotes from Malaysia&apos;s top banks today — it&apos;s free and takes only 2 minutes.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quotes
          </button>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Refinance Home Loan Calculator Malaysia ${currentYear}`,
            description: `Refinance home loan calculator Malaysia ${currentYear}. Calculate monthly savings, total interest saved, and break-even period. Compare rates from 14 banks. Free instant results.`,
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

      <StickyMobileCTA onCtaClick={() => setShowForm(true)} />
    </>
  );
}
