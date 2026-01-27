"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getBanksSortedByRate } from "@/lib/constants";
import { BankRatesTable } from "@/components/content/BankRatesTable";
import { CostsTable } from "@/components/content/CostsTable";
import { LastUpdated } from "@/components/content/LastUpdated";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight } from "lucide-react";

const { currentYear } = SITE_CONFIG;

// Helper function to calculate monthly payment
const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  years: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
};

const faqs = [
  {
    question: "How accurate is this refinancing calculation?",
    answer:
      "These calculations provide a good estimate based on standard loan formulas. Actual rates may vary depending on your credit profile, property type, and bank promotions. For exact figures, request a personalized quote from our specialists.",
  },
  {
    question: "What interest rate should I use for calculations?",
    answer:
      "Use your current effective interest rate found on your bank statement (not the advertised rate). For new rate estimates, the best available rates currently start from 3.65% for qualified borrowers.",
  },
  {
    question: "How do I calculate break-even point?",
    answer:
      "Break-even = Total Refinancing Costs ÷ Monthly Savings. For example, if costs are RM6,000 and monthly savings are RM300, break-even is 20 months. Refinancing is worthwhile if you'll keep the loan longer than the break-even period.",
  },
  {
    question: "Should I refinance to shorten my tenure?",
    answer:
      "Shortening tenure increases monthly payments but dramatically reduces total interest paid. It's ideal if your income has increased and you want to be debt-free faster. Use our calculator to compare scenarios.",
  },
  {
    question: "What's the difference between effective rate and advertised rate?",
    answer:
      "Banks advertise their lowest rates, but your actual rate depends on your credit profile. Effective rate = Base Rate + Spread. Always ask for the actual rate you'll receive based on your profile before deciding.",
  },
];

export default function RefinanceCalculationExamples() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Home Loan Refinance Calculation Examples Malaysia {currentYear}
          </h1>
          <p className="text-lg text-gray-300">
            See real refinance calculation examples to understand how much you
            could save by refinancing your home loan.
          </p>
          <LastUpdated lang="en" variant="hero" />
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Language Switch */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">
            Also available in:{" "}
            <Link
              href="/contoh-kiraan-refinance-rumah"
              className="text-primary-600 hover:underline font-medium"
            >
              Bahasa Malaysia
            </Link>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Before making the decision to refinance your home loan, it&apos;s
              crucial to understand the actual numbers involved. These
              calculation examples will show you exactly how refinancing
              savings work in real-world scenarios common to Malaysian
              homeowners.
            </p>
            <p className="text-lg text-gray-700">
              All examples use current market rates available in {currentYear}.
              Your actual rate may vary based on your credit profile, property
              type, and the bank you choose.
            </p>
          </section>

          {/* Formula Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding the Refinancing Formula
            </h2>

            <div className="bg-primary-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-primary-900 mb-4">
                Monthly Payment Formula:
              </h3>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-mono text-lg">
                  M = P × [r(1+r)^n] / [(1+r)^n - 1]
                </p>
              </div>
              <div className="mt-4 text-sm text-primary-800 grid md:grid-cols-2 gap-2">
                <p>
                  <strong>M</strong> = Monthly Payment
                </p>
                <p>
                  <strong>P</strong> = Principal (Loan Amount)
                </p>
                <p>
                  <strong>r</strong> = Monthly Interest Rate (Annual Rate ÷ 12)
                </p>
                <p>
                  <strong>n</strong> = Total Number of Months (Years × 12)
                </p>
              </div>
            </div>

            <p className="text-gray-700">
              Don&apos;t worry if this looks complicated—use our{" "}
              <Link href="/calculator" className="text-primary-600 hover:underline">
                free calculator
              </Link>{" "}
              for instant results. The key concept is simple: lower interest
              rate = lower monthly payment = significant savings over time.
            </p>
          </section>

          {/* Example 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Example 1: Refinancing a RM300,000 Loan
            </h2>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">
                  Standard Refinance - Same Tenure
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">
                      BEFORE Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Outstanding Loan: RM300,000</li>
                      <li>Interest Rate: 4.50%</li>
                      <li>Remaining Tenure: 25 years</li>
                      <li className="font-semibold text-red-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(300000, 4.5, 25)
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">
                      AFTER Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Loan Amount: RM300,000</li>
                      <li>New Interest Rate: 3.65%</li>
                      <li>Tenure: 25 years</li>
                      <li className="font-semibold text-green-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(300000, 3.65, 25)
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary-100 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Savings Summary
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-600">Monthly Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          calculateMonthlyPayment(300000, 4.5, 25) -
                            calculateMonthlyPayment(300000, 3.65, 25)
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Yearly Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          (calculateMonthlyPayment(300000, 4.5, 25) -
                            calculateMonthlyPayment(300000, 3.65, 25)) *
                            12
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">25-Year Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          (calculateMonthlyPayment(300000, 4.5, 25) -
                            calculateMonthlyPayment(300000, 3.65, 25)) *
                            300
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Net Savings*</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          (calculateMonthlyPayment(300000, 4.5, 25) -
                            calculateMonthlyPayment(300000, 3.65, 25)) *
                            300 -
                            5000
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    *After deducting estimated refinancing costs of RM5,000
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Example 2: Refinancing a RM500,000 Loan
            </h2>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">
                  Larger Loan = Bigger Savings
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">
                      BEFORE Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Outstanding Loan: RM500,000</li>
                      <li>Interest Rate: 4.75%</li>
                      <li>Remaining Tenure: 20 years</li>
                      <li className="font-semibold text-red-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(500000, 4.75, 20)
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">
                      AFTER Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Loan Amount: RM500,000</li>
                      <li>New Interest Rate: 3.65%</li>
                      <li>Tenure: 20 years</li>
                      <li className="font-semibold text-green-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(500000, 3.65, 20)
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary-100 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Savings Summary
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-600">Monthly Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          calculateMonthlyPayment(500000, 4.75, 20) -
                            calculateMonthlyPayment(500000, 3.65, 20)
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Yearly Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          (calculateMonthlyPayment(500000, 4.75, 20) -
                            calculateMonthlyPayment(500000, 3.65, 20)) *
                            12
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">20-Year Savings</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          (calculateMonthlyPayment(500000, 4.75, 20) -
                            calculateMonthlyPayment(500000, 3.65, 20)) *
                            240
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Net Savings*</p>
                      <p className="text-xl font-bold text-secondary-600">
                        RM
                        {Math.round(
                          (calculateMonthlyPayment(500000, 4.75, 20) -
                            calculateMonthlyPayment(500000, 3.65, 20)) *
                            240 -
                            7000
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    *After deducting estimated refinancing costs of RM7,000
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Example 3: Cash Out */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Example 3: Cash Out Refinancing
            </h2>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">
                  Access Your Home Equity
                </h3>
              </div>
              <div className="p-6">
                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Scenario:</h4>
                  <p className="text-sm text-blue-700">
                    Property value: RM700,000. Outstanding loan: RM350,000.
                    You want to cash out RM100,000 for home renovation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">
                      BEFORE Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Outstanding Loan: RM350,000</li>
                      <li>Interest Rate: 4.50%</li>
                      <li>Remaining Tenure: 22 years</li>
                      <li className="font-semibold text-red-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(350000, 4.5, 22)
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">
                      AFTER Refinancing + Cash Out
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>New Loan: RM450,000 (RM350k + RM100k cash out)</li>
                      <li>New Interest Rate: 3.75%</li>
                      <li>Tenure: 25 years</li>
                      <li className="font-semibold text-green-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(450000, 3.75, 25)
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Analysis:
                  </h4>
                  <p className="text-sm text-yellow-700 mb-2">
                    Monthly payment increases by RM
                    {Math.round(
                      calculateMonthlyPayment(450000, 3.75, 25) -
                        calculateMonthlyPayment(350000, 4.5, 22)
                    ).toLocaleString()}
                    , but you gain access to RM100,000 at mortgage rates (3.75%)
                    instead of:
                  </p>
                  <ul className="text-sm text-yellow-700 list-disc list-inside">
                    <li>Personal loan: 8-15% per year</li>
                    <li>Credit card: 15-18% per year</li>
                  </ul>
                  <p className="text-sm text-yellow-700 mt-2">
                    <strong>Interest saved:</strong> Approximately RM5,000-10,000
                    per year compared to personal loan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example 4: Shorten Tenure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Example 4: Shortening Your Loan Tenure
            </h2>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">
                  Pay More Monthly, Save Massive on Interest
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">
                      BEFORE Refinancing
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Outstanding Loan: RM400,000</li>
                      <li>Interest Rate: 4.50%</li>
                      <li>Remaining Tenure: 25 years</li>
                      <li className="font-semibold text-red-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(400000, 4.5, 25)
                        ).toLocaleString()}
                      </li>
                      <li>Total Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(400000, 4.5, 25) * 300
                        ).toLocaleString()}
                      </li>
                      <li>Total Interest: RM
                        {Math.round(
                          calculateMonthlyPayment(400000, 4.5, 25) * 300 - 400000
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">
                      AFTER Refinancing (15-year tenure)
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Loan Amount: RM400,000</li>
                      <li>New Interest Rate: 3.65%</li>
                      <li>New Tenure: 15 years</li>
                      <li className="font-semibold text-green-700">
                        Monthly Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(400000, 3.65, 15)
                        ).toLocaleString()}
                      </li>
                      <li>Total Payment: RM
                        {Math.round(
                          calculateMonthlyPayment(400000, 3.65, 15) * 180
                        ).toLocaleString()}
                      </li>
                      <li>Total Interest: RM
                        {Math.round(
                          calculateMonthlyPayment(400000, 3.65, 15) * 180 - 400000
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary-100 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Interest Savings:
                  </h4>
                  <p className="text-3xl font-bold text-secondary-600">
                    RM
                    {Math.round(
                      (calculateMonthlyPayment(400000, 4.5, 25) * 300 - 400000) -
                        (calculateMonthlyPayment(400000, 3.65, 15) * 180 - 400000)
                    ).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Monthly payment increases by RM
                    {Math.round(
                      calculateMonthlyPayment(400000, 3.65, 15) -
                        calculateMonthlyPayment(400000, 4.5, 25)
                    ).toLocaleString()}
                    , but you save massively on interest and become debt-free 10
                    years earlier!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Current Bank Rates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Current Bank Rates
            </h2>
            <p className="text-gray-700 mb-4">
              These are the current refinancing rates from major Malaysian banks:
            </p>
            <BankRatesTable limit={5} lang="en" />
          </section>

          {/* Costs Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Refinancing Costs to Factor In
            </h2>
            <CostsTable lang="en" />
            <div className="mt-4 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Break-even Tip:</strong> Divide total costs by monthly
                savings to find your break-even period. Example: RM6,000 costs ÷
                RM300 monthly savings = 20 months to break even.
              </p>
            </div>
          </section>

          {/* Savings Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Savings Comparison Table
            </h2>
            <p className="text-gray-700 mb-4">
              See potential savings at different loan amounts (comparing 4.5%
              old rate vs 3.65% new rate, 25-year tenure):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="text-left p-3 font-semibold border">
                      Loan Amount
                    </th>
                    <th className="text-left p-3 font-semibold border">
                      Monthly Savings
                    </th>
                    <th className="text-left p-3 font-semibold border">
                      Yearly Savings
                    </th>
                    <th className="text-left p-3 font-semibold border">
                      25-Year Savings
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[200000, 300000, 400000, 500000, 600000, 700000, 800000].map(
                    (amount, index) => {
                      const monthlySavings =
                        calculateMonthlyPayment(amount, 4.5, 25) -
                        calculateMonthlyPayment(amount, 3.65, 25);
                      return (
                        <tr
                          key={amount}
                          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="p-3 border font-medium">
                            RM{amount.toLocaleString()}
                          </td>
                          <td className="p-3 border text-secondary-600 font-semibold">
                            RM{Math.round(monthlySavings).toLocaleString()}
                          </td>
                          <td className="p-3 border">
                            RM{Math.round(monthlySavings * 12).toLocaleString()}
                          </td>
                          <td className="p-3 border font-semibold">
                            RM{Math.round(monthlySavings * 300).toLocaleString()}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12 bg-primary-50 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Calculate Your Own Savings
            </h2>
            <p className="text-primary-700 mb-6">
              Use our free calculator to get personalized savings estimates
              based on your actual loan details.
            </p>
            <Link
              href="/calculator"
              className="btn-primary inline-block text-lg px-8 py-3"
            >
              Try the Calculator →
            </Link>
          </section>

          {/* FAQ */}
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

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/en/best-refinance-banks"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Best Banks for Refinancing
                </h3>
                <p className="text-sm text-primary-700">
                  Compare rates from 10+ banks
                </p>
              </Link>
              <Link
                href="/en/pros-cons-refinancing"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Pros & Cons of Refinancing
                </h3>
                <p className="text-sm text-primary-700">
                  Understand the benefits and risks
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Personalized Savings Calculation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our specialists will calculate your exact potential savings and find
            the best rates for your profile.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quote Now
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <LeadForm variant="modal" source="en-calculations" lang="en" />
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

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Home Loan Refinancing Calculation Examples Malaysia ${currentYear}`,
            description: `See real refinancing calculation examples with actual savings. Calculate how much you can save by refinancing your home loan in Malaysia ${currentYear}.`,
            datePublished: "2026-01-05",
            dateModified: "2026-01-21",
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
        text="Save RM500+/month"
        buttonText="Get Free Quote"
      />
    </>
  );
}
