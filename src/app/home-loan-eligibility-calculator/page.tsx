"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { formatNumberWithCommas, stripCommas } from "@/lib/utils";

const currentYear = new Date().getFullYear();

// Calculator component
function EligibilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [age, setAge] = useState("");
  const [showCoBorrower, setShowCoBorrower] = useState(false);
  const [coBorrowerIncome, setCoBorrowerIncome] = useState("");
  const [coBorrowerAge, setCoBorrowerAge] = useState("");

  // Existing commitments
  const [carLoan, setCarLoan] = useState("");
  const [personalLoan, setPersonalLoan] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [ptptn, setPtptn] = useState("");
  const [otherLoans, setOtherLoans] = useState("");

  // Loan settings
  const [interestRate, setInterestRate] = useState(4.5);

  const calculations = useMemo(() => {
    const income = parseFloat(stripCommas(monthlyIncome)) || 0;
    const borrowerAge = parseInt(age) || 30;
    const coIncome = showCoBorrower ? (parseFloat(stripCommas(coBorrowerIncome)) || 0) : 0;
    const coAge = showCoBorrower ? (parseInt(coBorrowerAge) || 30) : 99;

    const totalIncome = income + coIncome;

    // Calculate existing debts
    const existingDebts =
      (parseFloat(stripCommas(carLoan)) || 0) +
      (parseFloat(stripCommas(personalLoan)) || 0) +
      (parseFloat(stripCommas(creditCard)) || 0) +
      (parseFloat(stripCommas(ptptn)) || 0) +
      (parseFloat(stripCommas(otherLoans)) || 0);

    // Current DSR
    const currentDSR = totalIncome > 0 ? (existingDebts / totalIncome) * 100 : 0;

    // Max DSR is 70%
    const maxDSR = 70;

    // Max instalment = Income × 70% - Existing debts
    const maxInstalment = Math.max(0, totalIncome * (maxDSR / 100) - existingDebts);

    // Tenure = min(35 years, 70 - youngest borrower age)
    const youngestAge = Math.min(borrowerAge, coAge);
    const maxTenureYears = Math.min(35, Math.max(5, 70 - youngestAge));
    const tenureMonths = maxTenureYears * 12;

    // Calculate max loan using PMT formula
    // PMT = P × [r(1+r)^n] / [(1+r)^n – 1]
    // Rearranged: P = PMT × [(1+r)^n – 1] / [r(1+r)^n]
    const monthlyRate = interestRate / 100 / 12;
    let maxLoan = 0;

    if (monthlyRate > 0 && maxInstalment > 0 && tenureMonths > 0) {
      const factor = Math.pow(1 + monthlyRate, tenureMonths);
      maxLoan = maxInstalment * ((factor - 1) / (monthlyRate * factor));
    }

    // Max property price at 90% margin
    const maxPropertyPrice = maxLoan / 0.9;

    // DSR after new loan
    const dsrAfterLoan = totalIncome > 0 ? ((existingDebts + maxInstalment) / totalIncome) * 100 : 0;

    // Eligibility status
    let status: "excellent" | "moderate" | "difficult" = "excellent";
    if (currentDSR > 50) status = "difficult";
    else if (currentDSR > 30) status = "moderate";

    return {
      totalIncome,
      existingDebts,
      currentDSR,
      maxInstalment,
      maxTenureYears,
      maxLoan,
      maxPropertyPrice,
      dsrAfterLoan,
      status,
    };
  }, [monthlyIncome, age, showCoBorrower, coBorrowerIncome, coBorrowerAge, carLoan, personalLoan, creditCard, ptptn, otherLoans, interestRate]);

  const statusColors = {
    excellent: "bg-green-50 border-green-200 text-green-800",
    moderate: "bg-yellow-50 border-yellow-200 text-yellow-800",
    difficult: "bg-red-50 border-red-200 text-red-800",
  };

  const statusMessages = {
    excellent: "Excellent! Your eligibility looks strong.",
    moderate: "Moderate eligibility. Consider reducing debts.",
    difficult: "May be difficult. High existing debts affecting eligibility.",
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white";

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Gross Income (RM) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., 5,000"
                className={inputClasses}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(formatNumberWithCommas(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Age (years) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 30"
                min="18"
                max="65"
                className={inputClasses}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Co-Borrower Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Add Co-Borrower</h3>
            <button
              type="button"
              onClick={() => setShowCoBorrower(!showCoBorrower)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                showCoBorrower ? "bg-primary-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  showCoBorrower ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {showCoBorrower && (
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Co-Borrower Monthly Income (RM)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 4,000"
                  className={inputClasses}
                  value={coBorrowerIncome}
                  onChange={(e) => setCoBorrowerIncome(formatNumberWithCommas(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Co-Borrower Age (years)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 28"
                  min="18"
                  max="65"
                  className={inputClasses}
                  value={coBorrowerAge}
                  onChange={(e) => setCoBorrowerAge(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Existing Commitments */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Existing Monthly Commitments</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Car Loan (RM)
              </label>
              <input
                type="text"
                placeholder="0"
                className={inputClasses}
                value={carLoan}
                onChange={(e) => setCarLoan(formatNumberWithCommas(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Personal Loan (RM)
              </label>
              <input
                type="text"
                placeholder="0"
                className={inputClasses}
                value={personalLoan}
                onChange={(e) => setPersonalLoan(formatNumberWithCommas(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credit Card Minimum Payment (RM)
              </label>
              <input
                type="text"
                placeholder="0"
                className={inputClasses}
                value={creditCard}
                onChange={(e) => setCreditCard(formatNumberWithCommas(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PTPTN (RM)
              </label>
              <input
                type="text"
                placeholder="0"
                className={inputClasses}
                value={ptptn}
                onChange={(e) => setPtptn(formatNumberWithCommas(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Other Loans (RM)
              </label>
              <input
                type="text"
                placeholder="0"
                className={inputClasses}
                value={otherLoans}
                onChange={(e) => setOtherLoans(formatNumberWithCommas(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Loan Settings */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Loan Settings</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate: <span className="font-bold text-primary-600">{interestRate.toFixed(2)}%</span>
            </label>
            <input
              type="range"
              min="3.5"
              max="6"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>3.5%</span>
              <span>6.0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="lg:sticky lg:top-24 h-fit">
        <div className={`rounded-xl shadow-lg p-6 border-2 ${statusColors[calculations.status]}`}>
          <div className="text-center mb-6">
            <p className="text-sm font-medium mb-1">Your Eligibility Status</p>
            <p className="text-lg font-bold">{statusMessages[calculations.status]}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Your Loan Eligibility</h3>

          <div className="space-y-4">
            <div className="bg-primary-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Maximum Loan Amount</p>
              <p className="text-3xl font-bold text-primary-600">
                RM {calculations.maxLoan.toLocaleString("en-MY", { maximumFractionDigits: 0 })}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Max Monthly Instalment</p>
                <p className="text-xl font-bold text-gray-900">
                  RM {calculations.maxInstalment.toLocaleString("en-MY", { maximumFractionDigits: 0 })}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Max Property Price</p>
                <p className="text-xl font-bold text-gray-900">
                  RM {calculations.maxPropertyPrice.toLocaleString("en-MY", { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-gray-500">at 90% margin</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Loan Tenure</p>
                <p className="text-xl font-bold text-gray-900">{calculations.maxTenureYears} years</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Total Income</p>
                <p className="text-xl font-bold text-gray-900">
                  RM {calculations.totalIncome.toLocaleString("en-MY", { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Your Current DSR</p>
                  <p className={`text-2xl font-bold ${
                    calculations.currentDSR > 50 ? "text-red-600" :
                    calculations.currentDSR > 30 ? "text-yellow-600" : "text-green-600"
                  }`}>
                    {calculations.currentDSR.toFixed(1)}%
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">DSR After New Loan</p>
                  <p className={`text-2xl font-bold ${
                    calculations.dsrAfterLoan > 70 ? "text-red-600" :
                    calculations.dsrAfterLoan > 60 ? "text-yellow-600" : "text-green-600"
                  }`}>
                    {calculations.dsrAfterLoan.toFixed(1)}%
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Banks typically approve up to 70% DSR
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          *Estimates based on standard bank requirements. Actual approval depends on individual assessment.
        </p>
      </div>
    </div>
  );
}

// Salary table data
const salaryTable = [
  { salary: 3000, maxLoan: 150000, maxProperty: 170000, monthlyPayment: 750 },
  { salary: 5000, maxLoan: 280000, maxProperty: 310000, monthlyPayment: 1400 },
  { salary: 8000, maxLoan: 480000, maxProperty: 530000, monthlyPayment: 2400 },
  { salary: 10000, maxLoan: 600000, maxProperty: 670000, monthlyPayment: 3000 },
  { salary: 15000, maxLoan: 900000, maxProperty: 1000000, monthlyPayment: 4500 },
];

// Bank comparison data
const bankComparison = [
  { name: "Maybank", maxDSR: "70%", maxTenure: "35 years", maxAge: 70, maxMargin: "90%", link: "/maybank-refinance-home-loan" },
  { name: "CIMB", maxDSR: "70%", maxTenure: "35 years", maxAge: 70, maxMargin: "90%", link: "/cimb-refinance-home-loan" },
  { name: "Public Bank", maxDSR: "65%", maxTenure: "35 years", maxAge: 65, maxMargin: "90%", link: "/public-bank-refinance-home-loan" },
  { name: "Hong Leong", maxDSR: "75%", maxTenure: "35 years", maxAge: 70, maxMargin: "90%", link: "/hong-leong-refinance-home-loan" },
  { name: "RHB", maxDSR: "70%", maxTenure: "35 years", maxAge: 70, maxMargin: "90%", link: "/rhb-refinance-home-loan" },
  { name: "AmBank", maxDSR: "70%", maxTenure: "35 years", maxAge: 70, maxMargin: "90%", link: "/ambank-refinance-home-loan" },
];

// Income types
const incomeTypes = [
  { type: "Basic salary", percentage: "100%" },
  { type: "Fixed allowances", percentage: "100%" },
  { type: "Overtime", percentage: "50-70%" },
  { type: "Commission", percentage: "50% of 6-month average" },
  { type: "Rental income", percentage: "80%" },
  { type: "Business income", percentage: "Based on tax returns" },
  { type: "Pension", percentage: "100%" },
  { type: "EPF withdrawal", percentage: "Case by case" },
];

// Eligibility factors
const eligibilityFactors = [
  { title: "Age", description: "Affects maximum loan tenure. Younger borrowers get longer tenure.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { title: "Existing Debts", description: "Car loans, credit cards, and personal loans reduce your DSR capacity.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { title: "Credit Score", description: "CCRIS and CTOS reports show payment history to banks.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Employment Stability", description: "Minimum 6 months - 2 years with current employer preferred.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Property Type", description: "Residential properties get better margins than commercial or land.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { title: "Documentation", description: "Complete salary slips, EA forms, and bank statements required.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
];

// Improvement tips
const improvementTips = [
  "Pay off credit card balances in full",
  "Close unused credit card accounts",
  "Add a co-borrower to increase income",
  "Choose longer tenure for lower instalments",
  "Clear small debts first (BNPL, store cards)",
  "Wait until salary increment before applying",
];

// FAQs
const faqs = [
  {
    question: "How much home loan can I get with RM5,000 salary?",
    answer: "With a RM5,000 monthly salary and no existing debts, you can typically qualify for around RM280,000 - RM300,000 home loan. This assumes 70% DSR limit, 4.5% interest rate, and 30-year tenure. Your actual eligibility depends on existing commitments and credit history."
  },
  {
    question: "What is the maximum housing loan in Malaysia?",
    answer: "There's no fixed maximum housing loan amount in Malaysia. It depends on your income, DSR (typically 70% limit), age, and the property value. High-income earners can get loans in the millions. The key constraint is your debt servicing ability, not an arbitrary cap."
  },
  {
    question: "How do Malaysian banks calculate loan eligibility?",
    answer: "Banks use the Debt Service Ratio (DSR) formula: (Total Monthly Debts / Gross Monthly Income) × 100. Most banks allow up to 70% DSR. They also consider: age (affects tenure), credit score (CCRIS/CTOS), employment stability, and income type."
  },
  {
    question: "Can I get a home loan with 70% DSR?",
    answer: "Yes, 70% DSR is the standard maximum for most Malaysian banks. This means your total monthly debt payments (including the new loan) cannot exceed 70% of your gross income. Some banks like Hong Leong allow up to 75% DSR for certain profiles."
  },
  {
    question: "Does age affect home loan eligibility?",
    answer: "Yes, age affects your maximum loan tenure. Banks calculate tenure as the lower of: 35 years OR (70 minus your age). So a 40-year-old gets maximum 30 years tenure. Shorter tenure means higher monthly payments, which affects how much you can borrow."
  },
  {
    question: "How does joint loan increase eligibility?",
    answer: "Joint loans combine both borrowers' incomes, increasing the total income used for DSR calculation. For example, if you earn RM5,000 and your spouse earns RM4,000, banks calculate using RM9,000 combined income. The tenure is based on the younger borrower's age."
  },
  {
    question: "What income documents do banks need?",
    answer: "Banks typically require: latest 3-6 months salary slips, latest EA form (Borang EA), 6 months bank statements showing salary credits, EPF statement, and IC copy. Self-employed need: 2 years tax returns (Form B/BE), business registration, and 6-12 months bank statements."
  },
  {
    question: "Can self-employed get home loans?",
    answer: "Yes, self-employed individuals can get home loans but face stricter requirements. Banks want 2-3 years of business operation, income tax returns, and may apply a 30-50% haircut on declared income. Some banks offer programs specifically for self-employed borrowers."
  },
  {
    question: "How to check CCRIS for loan eligibility?",
    answer: "You can check your CCRIS report at any Bank Negara Malaysia office for free, or online through eCCRIS portal. The report shows your payment history for the past 12 months and outstanding loans. Clean CCRIS (no late payments) improves approval chances."
  },
  {
    question: "What if my loan eligibility is rejected?",
    answer: "If rejected, ask the bank for specific reasons. Common solutions: pay down existing debts, add a co-borrower, try a different bank with higher DSR limits, apply for a lower loan amount, or wait to improve credit score. Our advisors can help identify the best bank for your profile."
  },
];

export default function HomeLoanEligibilityCalculatorPage() {
  const faqSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Home Loan Eligibility Calculator Malaysia {currentYear}
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-6">
              How Much Home Loan Can You Get?
            </p>
            <p className="text-primary-100 mb-8">
              Calculate your maximum loan eligibility based on your salary and Malaysian bank requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">70% DSR limit</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Up to 35 years tenure</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">All major banks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Calculate Your Home Loan Eligibility
            </h2>
            <EligibilityCalculator />
          </div>
        </div>
      </section>

      {/* Salary Table Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Loan Eligibility Based on Salary
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Quick reference for estimated loan amounts at different salary levels
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Monthly Salary</th>
                    <th className="px-6 py-4 text-left">Max Loan (Est.)</th>
                    <th className="px-6 py-4 text-left">Max Property</th>
                    <th className="px-6 py-4 text-left">Monthly Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {salaryTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">RM {row.salary.toLocaleString()}</td>
                      <td className="px-6 py-4">~RM {row.maxLoan.toLocaleString()}</td>
                      <td className="px-6 py-4">~RM {row.maxProperty.toLocaleString()}</td>
                      <td className="px-6 py-4">~RM {row.monthlyPayment.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              *Based on 70% DSR, 4.5% interest, 30-year tenure, no existing debts
            </p>
          </div>
        </div>
      </section>

      {/* How We Calculate Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              How We Calculate Your Eligibility
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">DSR Formula</h3>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  DSR = (Total Debts / Gross Income) × 100
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Banks typically limit DSR to 70%. Lower DSR = higher approval chances.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Max Instalment</h3>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  Max Instalment = Income × 70% - Existing Debts
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  This determines the maximum monthly payment you can afford.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Loan Tenure</h3>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  Tenure = min(35 years, 70 - your age)
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Younger borrowers get longer tenure, meaning lower monthly payments.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Max Loan Amount</h3>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  PMT formula based on instalment, rate, tenure
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Uses standard amortization calculation for fixed-rate loans.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/dsr-calculator"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
              >
                Use our DSR Calculator for detailed analysis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Loan Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Joint Home Loan Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              How adding a co-borrower increases your loan eligibility
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Benefits of Joint Loan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Combined income</strong> = Higher loan amount</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Tenure based on younger borrower</strong> = Longer repayment period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Shared responsibility</strong> = Lower individual risk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Afford better property</strong> = More options available</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Important Considerations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Both parties are equally liable for the full loan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Co-borrower&apos;s debts also affect combined DSR</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Both credit histories are checked</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Relationship changes can complicate matters</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-800">
                  <strong>Tip:</strong> Adding a spouse or family member as co-borrower is the fastest way to increase your loan eligibility if your income alone doesn&apos;t qualify for your desired property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Comparison Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Eligibility by Bank
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Different banks have different eligibility criteria
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left">Bank</th>
                    <th className="px-4 py-4 text-center">Max DSR</th>
                    <th className="px-4 py-4 text-center">Max Tenure</th>
                    <th className="px-4 py-4 text-center">Max Age</th>
                    <th className="px-4 py-4 text-center">Max Margin</th>
                    <th className="px-4 py-4 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bankComparison.map((bank, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium">{bank.name}</td>
                      <td className="px-4 py-4 text-center">{bank.maxDSR}</td>
                      <td className="px-4 py-4 text-center">{bank.maxTenure}</td>
                      <td className="px-4 py-4 text-center">{bank.maxAge}</td>
                      <td className="px-4 py-4 text-center">{bank.maxMargin}</td>
                      <td className="px-4 py-4 text-center">
                        <Link
                          href={bank.link}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Income Types Accepted by Banks
            </h2>
            <p className="text-gray-600 text-center mb-8">
              How banks value different income sources
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {incomeTypes.map((income, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                  <span className="font-medium text-gray-900">{income.type}</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {income.percentage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Factors Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              What Affects Your Loan Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Key factors banks consider when assessing your application
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityFactors.map((factor, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={factor.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{factor.title}</h3>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Improvement Tips Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How to Improve Your Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Practical steps to increase your loan approval chances
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {improvementTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-sm">{idx + 1}</span>
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link
                  href="/home-loan-rejected-malaysia"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                >
                  What to do if your home loan is rejected
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Comparison Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              This Calculator vs DSR Calculator
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Which calculator should you use?
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Eligibility Calculator</th>
                    <th className="px-6 py-4 text-center">DSR Calculator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium">Question it answers</td>
                    <td className="px-6 py-4 text-center">&quot;How much can I borrow?&quot;</td>
                    <td className="px-6 py-4 text-center">&quot;Can I afford this loan?&quot;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Input</td>
                    <td className="px-6 py-4 text-center">Your income & debts</td>
                    <td className="px-6 py-4 text-center">Your income & specific loan</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Output</td>
                    <td className="px-6 py-4 text-center">Maximum loan amount</td>
                    <td className="px-6 py-4 text-center">Your DSR percentage</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Best for</td>
                    <td className="px-6 py-4 text-center">Planning budget</td>
                    <td className="px-6 py-4 text-center">Checking specific loan</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/dsr-calculator"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Try DSR Calculator
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-lg">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              Need Help Getting Approved?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Our experts check your eligibility across 15+ banks to find the best match
            </p>
            <LeadForm variant="hero" source="eligibility-calculator" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Related Calculators & Guides
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/dsr-calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  DSR Calculator
                </h3>
                <p className="text-sm text-gray-600">
                  Check if you can afford a specific loan amount
                </p>
              </Link>

              <Link
                href="/calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  Refinance Calculator
                </h3>
                <p className="text-sm text-gray-600">
                  Calculate potential savings from refinancing
                </p>
              </Link>

              <Link
                href="/home-loan-rejected-malaysia"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  Home Loan Rejected?
                </h3>
                <p className="text-sm text-gray-600">
                  What to do if your loan application is rejected
                </p>
              </Link>

              <Link
                href="/en/best-refinance-banks"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  Best Refinance Banks
                </h3>
                <p className="text-sm text-gray-600">
                  Compare the best banks for refinancing in Malaysia
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
