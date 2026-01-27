"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getBanksSortedByRate } from "@/lib/constants";
import { BankRatesTable } from "@/components/content/BankRatesTable";
import { CostsTable } from "@/components/content/CostsTable";
import { EligibilityCard } from "@/components/content/EligibilityCard";
import { DocumentsList } from "@/components/content/DocumentsList";
import { LastUpdated } from "@/components/content/LastUpdated";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight } from "lucide-react";

const { currentYear } = SITE_CONFIG;

const topBanks = getBanksSortedByRate().slice(0, 3);

const faqs = [
  {
    question: "Which bank is best for home loan refinancing in Malaysia?",
    answer:
      "The best bank depends on your profile. Currently, Maybank, Public Bank, and CIMB offer the most competitive rates starting from 3.65%. However, the best choice depends on factors like your loan amount, property location, and credit profile. Government servants often get better rates from Bank Rakyat, while professionals may benefit from HSBC's preferential packages.",
  },
  {
    question: "How much can I save by refinancing my home loan?",
    answer:
      "Savings depend on your current rate vs new rate, loan amount, and remaining tenure. Reducing your rate by 0.5% on a RM500,000 loan can save approximately RM200-250 per month, or RM60,000+ over the remaining loan tenure. Use our calculator to see your exact potential savings.",
  },
  {
    question: "What is the minimum loan amount for refinancing?",
    answer:
      "Most banks require a minimum loan amount of RM100,000-150,000 for refinancing to be worthwhile after considering processing costs. Some banks may have higher minimums of RM150,000-200,000 for preferential rates.",
  },
  {
    question: "How long does the refinancing process take?",
    answer:
      "The typical refinancing process takes 1-3 months from application to disbursement. This includes loan application (1-2 weeks), property valuation (1-2 weeks), loan approval (2-4 weeks), and legal documentation (2-4 weeks). Having complete documents ready can speed up the process.",
  },
  {
    question: "Can I refinance with the same bank?",
    answer:
      "Yes, you can refinance with your existing bank. This is called internal refinancing or loan restructuring. While it may involve less paperwork, you might get better rates from competing banks. In fact, switching banks often gets you better rates as they compete for your business.",
  },
  {
    question: "What is the lock-in period for refinancing?",
    answer:
      "Most refinancing packages have a 3-5 year lock-in period. If you settle the loan early or refinance again during this period, you'll pay a penalty of 2-3% of the outstanding loan amount. Some banks offer packages with shorter lock-in periods or no lock-in at slightly higher rates.",
  },
  {
    question: "Is refinancing worth it in 2026?",
    answer:
      "Refinancing is worth it if: (1) your current rate is 0.5% or more higher than available rates, (2) you have more than 10 years remaining on your loan, (3) your lock-in period has ended, and (4) you have a good credit score. Calculate the break-even point by dividing refinancing costs by monthly savings.",
  },
  {
    question: "Which bank is easiest to get refinancing approved?",
    answer:
      "CIMB and Hong Leong are generally more flexible with approval criteria, especially for self-employed individuals or those with higher DSR. However, approval depends on your specific financial profile. Hong Leong accepts DSR up to 75% while most banks cap at 65-70%.",
  },
  {
    question: "Can I refinance if I have less than 5 years on my current loan?",
    answer:
      "Yes, but it may not be cost-effective due to lock-in penalties and legal fees. Use our Refinance Calculator to check if savings outweigh costs. Generally, refinancing is more beneficial when you have 10+ years remaining on your loan.",
  },
  {
    question: "Do I need to use the same bank for refinancing?",
    answer:
      "No, you can refinance with any bank. In fact, switching banks often gets you better rates as they compete for your business with attractive promotional offers and cashback incentives.",
  },
  {
    question: "What documents do I need for refinancing?",
    answer:
      "You'll need IC, salary slips (3 months), bank statements (6 months), EPF statement, EA/BE form, current loan statement, and property documents (S&P agreement, title deed). Self-employed applicants need business registration and 2 years of tax returns.",
  },
  {
    question: "Can I get cash out when refinancing?",
    answer:
      "Yes, most banks offer cash-out refinancing where you can withdraw up to 80-90% of your property's current market value minus your existing loan. This is useful for renovations, investments, or debt consolidation. Maybank is particularly flexible with cash-out policies.",
  },
];

const refinancingSteps = [
  {
    step: 1,
    title: "Compare Bank Rates",
    description:
      "Research and compare refinancing rates from multiple banks. Consider factors beyond just the interest rate, such as lock-in period, processing fees, and customer service reputation.",
  },
  {
    step: 2,
    title: "Check Your Eligibility",
    description:
      "Ensure you meet the basic requirements: age 21-65, minimum income, good credit score (above 650), and property must be completed. Most banks also require you to have owned the property for at least 1 year.",
  },
  {
    step: 3,
    title: "Gather Required Documents",
    description:
      "Prepare all necessary documents including IC, payslips (3 months), bank statements (6 months), EPF statement, current loan statement, and property documents (S&P agreement, title).",
  },
  {
    step: 4,
    title: "Submit Your Application",
    description:
      "Submit your refinancing application to your chosen bank(s). You can apply to multiple banks simultaneously to compare actual offers. Our service can help you apply to multiple banks at once.",
  },
  {
    step: 5,
    title: "Property Valuation",
    description:
      "The bank will arrange for a property valuation by an approved valuer. The valuation determines your Loan-to-Value (LTV) ratio and maximum loan amount. Valuation typically costs RM300-500.",
  },
  {
    step: 6,
    title: "Loan Approval & Offer",
    description:
      "Once approved, the bank will issue a Letter of Offer detailing the loan amount, interest rate, tenure, and terms. Review carefully before accepting. You have 7-14 days to accept.",
  },
  {
    step: 7,
    title: "Legal Process & Disbursement",
    description:
      "Appoint a lawyer to handle the legal documentation. The new bank will settle your existing loan and disburse any cash-out amount. Start making payments to your new bank from the following month.",
  },
];

const bankHighlights = [
  {
    rank: 1,
    name: "Maybank",
    slug: "maybank",
    rate: topBanks[0]?.rateFrom || "3.65%",
    pros: [
      "Lowest base rate in the market",
      "Largest branch network in Malaysia",
      "Fast approval process (5-7 working days)",
      "Flexible tenure up to 35 years",
      "Special packages for government servants",
    ],
    cons: [
      "5-year lock-in period",
      "Strict documentation requirements",
      "Higher rates for non-prime properties",
    ],
    bestFor: "First-time refinancers seeking stability and lowest rates",
  },
  {
    rank: 2,
    name: "Public Bank",
    slug: "public-bank",
    rate: topBanks[1]?.rateFrom || "3.70%",
    pros: [
      "Competitive rates for all property types",
      "Excellent customer service reputation",
      "Flexible repayment options",
      "Lower legal fees through panel lawyers",
      "Good rates for high-rise properties",
    ],
    cons: [
      "Longer processing time (2-3 weeks)",
      "Conservative LTV for older properties",
      "Limited online application features",
    ],
    bestFor: "Borrowers prioritizing service quality and reliability",
  },
  {
    rank: 3,
    name: "CIMB",
    slug: "cimb",
    rate: topBanks[2]?.rateFrom || "3.75%",
    pros: [
      "Quick online application process",
      "Cashback promotions available",
      "Good rates for properties above RM500k",
      "Shorter 3-year lock-in option available",
      "Excellent mobile banking app",
    ],
    cons: [
      "Higher rates for smaller loan amounts",
      "Additional fees for certain features",
      "Stricter income verification",
    ],
    bestFor: "Tech-savvy borrowers who prefer digital banking",
  },
  {
    rank: 4,
    name: "Hong Leong",
    slug: "hong-leong",
    rate: "3.98%",
    pros: [
      "Higher DSR ceiling than most banks (up to 75%)",
      "Competitive rates for existing customers",
      "Good flexi-loan options with redraw facility",
      "Flexible for borrowers with higher debt commitments",
    ],
    cons: [
      "Longer lock-in period (3 years)",
      "Stricter property valuation requirements",
      "Slower processing than competitors",
    ],
    bestFor: "Borrowers with higher DSR who need flexibility",
  },
  {
    rank: 5,
    name: "RHB",
    slug: "rhb",
    rate: "3.95%",
    pros: [
      "Faster processing time (2-3 weeks average)",
      "Competitive cashback promotions",
      "Good for salaried employees",
      "My1 Home Loan offers payment flexibility",
    ],
    cons: [
      "Less flexible for self-employed",
      "Standard DSR limits (up to 70%)",
      "Fewer flexi options than competitors",
    ],
    bestFor: "Those who need fast approval and processing",
  },
  {
    rank: 6,
    name: "AmBank",
    slug: "ambank",
    rate: "3.95%",
    pros: [
      "Frequent promotional rates and cashback offers",
      "Accepts wider income sources",
      "Good for those seeking upfront rebates",
      "HomeLink product with flexible features",
    ],
    cons: [
      "Lower maximum margin (up to 85%)",
      "Variable promotion availability",
      "Stricter property requirements",
    ],
    bestFor: "Those seeking promotional rates and cashback offers",
  },
];

export default function BestRefinanceBanks() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            6 Best Banks for Refinancing Home Loan Malaysia {currentYear}
          </h1>
          <p className="text-lg text-gray-300">
            Compare the 6 best banks for home loan refinancing in Malaysia.
            Find the best rates, pros, cons & which bank is right for you.
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
              href="/bank-terbaik-refinance-rumah"
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
              Choosing the right bank for your home loan refinancing is one of
              the most important financial decisions you can make. With interest
              rates varying by up to 1% between banks, the right choice could
              save you tens of thousands of ringgit over your loan tenure. In
              Malaysia, more than 10 major banks offer refinancing packages,
              each with different rates, terms, and benefits.
            </p>
            <p className="text-lg text-gray-700">
              In this comprehensive guide, we compare refinancing rates from all
              major Malaysian banks to help you make an informed decision. Our
              data is updated regularly to ensure you have access to the latest
              rates and promotions available in {currentYear}.
            </p>
          </section>

          {/* Bank Rates Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Bank Refinancing Rates Comparison {currentYear}
            </h2>
            <p className="text-gray-700 mb-6">
              Below is our comprehensive comparison of refinancing rates from
              all major banks in Malaysia. Rates are subject to change based on
              Bank Negara&apos;s OPR and individual bank policies.
            </p>
            <BankRatesTable showAll={true} lang="en" />
          </section>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Choose the Best Refinancing Bank
            </h2>
            <p className="text-gray-700 mb-6">
              While interest rate is important, it shouldn&apos;t be your only
              consideration. Here are the key factors to evaluate:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Interest Rates</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Compare the effective rate (BR + spread), not just the
                  advertised rate. A difference of 0.5% can save you RM15,000+
                  over 25 years on a RM300,000 loan. Always ask for the actual
                  rate you&apos;ll receive based on your profile.
                </p>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Lock-in Period</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Most banks have 3-5 year lock-in periods with 2-3% early
                  settlement penalties. If you anticipate refinancing again or
                  selling your property, choose a shorter lock-in period or
                  accept a slightly higher rate for flexibility.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Processing Fees</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Some banks waive processing fees as part of promotions, while
                  others charge RM200-500. Factor in legal fees (0.5-1% of loan),
                  valuation fees (RM300-500), and stamp duty when calculating
                  total refinancing cost.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Customer Service</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Consider the bank&apos;s reputation for service quality,
                  branch accessibility, and digital banking features. You&apos;ll
                  be dealing with them for potentially 20-30 years, so a good
                  banking relationship matters.
                </p>
              </div>
            </div>
          </section>

          {/* Top 6 Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 6 Banks for Refinancing {currentYear}
            </h2>
            <p className="text-gray-700 mb-6">
              Based on our analysis of rates, terms, and customer feedback, here
              are the top 6 banks for home loan refinancing this year:
            </p>

            <div className="space-y-6">
              {bankHighlights.map((bank) => (
                <div
                  key={bank.rank}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <div className="bg-primary-600 text-white px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold">#{bank.rank}</span>
                      <span className="text-xl font-semibold">{bank.name}</span>
                    </div>
                    <span className="bg-white text-primary-600 px-4 py-1 rounded-full font-bold">
                      From {bank.rate}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Advantages
                        </h4>
                        <ul className="space-y-2">
                          {bank.pros.map((pro, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-green-500 mt-1">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <svg
                            className="w-5 h-5"
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
                          Considerations
                        </h4>
                        <ul className="space-y-2">
                          {bank.cons.map((con, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-red-500 mt-1">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <p className="text-sm">
                        <span className="font-semibold text-primary-600">
                          Best for:
                        </span>{" "}
                        <span className="text-gray-600">{bank.bestFor}</span>
                      </p>
                      <Link
                        href={`/${bank.slug}-refinance-home-loan`}
                        className="text-sm text-primary-600 hover:underline font-medium flex items-center gap-1"
                      >
                        Compare {bank.name} rates
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Ranked Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How We Ranked These Banks
            </h2>
            <p className="text-gray-700 mb-6">
              Our ranking methodology considers 5 key factors to give you an objective comparison:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">30%</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interest Rates</h3>
                    <p className="text-sm text-gray-600">Base rate + spread, comparing effective rates across similar loan amounts and tenures.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">25%</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Approval Flexibility</h3>
                    <p className="text-sm text-gray-600"><Link href="/dsr-calculator" className="text-primary-600 hover:underline">DSR</Link> limits, income requirements, acceptance of various employment types, and track record with refinancing applications.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">20%</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Loan Features</h3>
                    <p className="text-sm text-gray-600">Lock-in period, penalty structures, flexi-loan options, and additional features like redraw facilities.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">15%</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Processing Speed</h3>
                    <p className="text-sm text-gray-600">Average time from application to disbursement based on customer feedback and industry data.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">10%</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Experience</h3>
                    <p className="text-sm text-gray-600">Ease of application, <Link href="/en/documents-required" className="text-primary-600 hover:underline">documentation requirements</Link>, and post-approval support.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              *Last updated: January 2026. Rates and policies may change without notice.
            </p>
          </section>

          {/* Best Bank By Situation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Best Bank for Your Situation
            </h2>
            <p className="text-gray-700 mb-6">
              Different banks excel in different areas. Use this quick reference to find the best bank for your specific needs:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="text-left p-4 font-semibold">Your Situation</th>
                    <th className="text-left p-4 font-semibold">Best Bank</th>
                    <th className="text-left p-4 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Lowest interest rate</td>
                    <td className="p-4">
                      <Link href="/public-bank-refinance-home-loan" className="text-primary-600 hover:underline font-medium">Public Bank</Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">Consistently competitive rates, often 0.1-0.2% lower</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-medium"><Link href="/cash-out-refinance-malaysia" className="text-primary-600 hover:underline">Cash-out refinancing</Link></td>
                    <td className="p-4">
                      <Link href="/maybank-refinance-home-loan" className="text-primary-600 hover:underline font-medium">Maybank</Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">Higher margin (up to 90%), flexible cash-out policies</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Self-employed</td>
                    <td className="p-4">
                      <Link href="/cimb-refinance-home-loan" className="text-primary-600 hover:underline font-medium">CIMB</Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">More flexible income assessment, accepts business owners</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-medium">High <Link href="/dsr-calculator" className="text-primary-600 hover:underline">DSR</Link> (60-70%)</td>
                    <td className="p-4">
                      <Link href="/hong-leong-refinance-home-loan" className="text-primary-600 hover:underline font-medium">Hong Leong</Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">Higher DSR ceiling (up to 75%), case-by-case flexibility</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Fast approval needed</td>
                    <td className="p-4">
                      <Link href="/rhb-refinance-home-loan" className="text-primary-600 hover:underline font-medium">RHB</Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">Known for faster processing, ~2-3 weeks average</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-medium">Cashback promotions</td>
                    <td className="p-4">
                      <Link href="/ambank-refinance-home-loan" className="text-primary-600 hover:underline font-medium">AmBank</Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">Frequent promotional offers and upfront cash rebates</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Refinancing Costs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Refinancing Costs to Consider
            </h2>
            <p className="text-gray-700 mb-6">
              Before refinancing, understand all the costs involved. While
              monthly savings can be significant, you need to ensure the savings
              outweigh the upfront costs over your intended holding period.
            </p>
            <CostsTable lang="en" />
            <div className="mt-4 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Tip:</strong> Many banks offer packages that waive or
                reimburse some of these costs. Ask about current promotions when
                comparing offers. Some banks also offer zero-cost refinancing
                packages with slightly higher interest rates.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Eligibility Requirements for Refinancing
            </h2>
            <p className="text-gray-700 mb-6">
              Before applying, ensure you meet the basic eligibility criteria.
              Meeting these requirements doesn&apos;t guarantee approval, but
              failing to meet them will result in rejection.
            </p>
            <EligibilityCard lang="en" />
          </section>

          {/* Step by Step Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Step-by-Step Refinancing Process
            </h2>
            <p className="text-gray-700 mb-6">
              The refinancing process typically takes 1-3 months from
              application to completion. Here&apos;s what to expect at each
              stage:
            </p>

            <div className="space-y-4">
              {refinancingSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Required */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Documents Required for Refinancing
            </h2>
            <p className="text-gray-700 mb-6">
              Having all documents ready before applying will speed up the
              process significantly. Here&apos;s a complete list of what
              you&apos;ll need:
            </p>
            <DocumentsList type="both" lang="en" />
            <p className="text-sm text-gray-500 mt-4">
              <Link
                href="/en/documents-required"
                className="text-primary-600 hover:underline"
              >
                View detailed document requirements →
              </Link>
            </p>
          </section>

          {/* Common Mistakes to Avoid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Common Refinancing Mistakes to Avoid
            </h2>
            <p className="text-gray-700 mb-6">
              Avoid these common pitfalls that can cost you money or delay your refinancing:
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-1">1. Only comparing interest rates</h3>
                <p className="text-sm text-gray-700">A lower rate with higher fees might cost more overall. Calculate the total cost of refinancing including legal fees, valuation, and stamp duty. Use our <Link href="/calculator" className="text-primary-600 hover:underline">calculator</Link> to see the full picture.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-1">2. Ignoring lock-in penalties</h3>
                <p className="text-sm text-gray-700">If you might sell or refinance again within 3-5 years, lock-in penalties (2-3% of outstanding balance) can eat into your savings. Factor this into your decision.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-1">3. Not checking your DSR first</h3>
                <p className="text-sm text-gray-700">Use our <Link href="/dsr-calculator" className="text-primary-600 hover:underline">DSR Calculator</Link> before applying to avoid rejected applications. A rejection can affect your credit score and future applications.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-1">4. Forgetting legal fees</h3>
                <p className="text-sm text-gray-700">Budget RM3,000-8,000 for legal and valuation fees. Some banks offer packages that subsidize these costs, so always ask about current promotions.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-1">5. Applying to too many banks</h3>
                <p className="text-sm text-gray-700">Multiple applications can affect your credit score. Apply to 2-3 banks maximum, or use our free service to compare offers without multiple credit checks.</p>
              </div>
            </div>
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
                href="/calculator"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Refinancing Calculator
                </h3>
                <p className="text-sm text-primary-700">
                  Calculate your potential savings instantly
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
              <Link
                href="/en/when-to-refinance"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  When to Refinance
                </h3>
                <p className="text-sm text-primary-700">
                  Find the best timing for refinancing
                </p>
              </Link>
              <Link
                href="/en/documents-required"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Documents Required
                </h3>
                <p className="text-sm text-primary-700">
                  Complete checklist for your application
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
            Ready to Find the Best Refinancing Rate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our specialists compare offers from multiple banks and find the
            best deal for your situation. It&apos;s free and takes only 2
            minutes.
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
              <LeadForm variant="modal" source="en-best-banks" lang="en" />
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
            headline: `6 Best Banks for Refinancing Home Loan Malaysia ${currentYear}`,
            description:
              "Compare the 6 best banks for home loan refinancing in Malaysia. Maybank, CIMB, Public Bank, RHB, Hong Leong & AmBank - rates, pros, cons & which is best for you.",
            datePublished: "2025-12-01",
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
