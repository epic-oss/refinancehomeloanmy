"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingDown,
  Award,
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  Star,
  Clock,
  AlertCircle,
  DollarSign,
  BarChart3,
  Shield,
  Users,
  Building2,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const currentYear = new Date().getFullYear();

// Main rates comparison data
const ratesData = [
  { bank: "Maybank Islamic", product: "HouzKEY", rate: "2.88%", lockin: "5 years", maxMargin: "100%", type: "Islamic", link: "/maybank-refinance-home-loan" },
  { bank: "Bank Islam", product: "Baiti Home Financing-i", rate: "3.80%", lockin: "3 years", maxMargin: "90%", type: "Islamic", link: "/bank-islam-refinance-home-loan" },
  { bank: "Bank Islam", product: "Wahdah Home Refinancing-i", rate: "3.80%", lockin: "3 years", maxMargin: "90%", type: "Islamic", link: "/bank-islam-refinance-home-loan" },
  { bank: "Al Rajhi Bank", product: "Home Financing-i", rate: "3.90%", lockin: "3 years", maxMargin: "90%", type: "Islamic", link: null },
  { bank: "Standard Chartered", product: "MortgageOne", rate: "3.90%", lockin: "3 years", maxMargin: "90%", type: "Conventional", link: "/standard-chartered-refinance-home-loan" },
  { bank: "Standard Chartered", product: "Saadiq My HomeOne-i", rate: "3.90%", lockin: "3 years", maxMargin: "90%", type: "Islamic", link: "/standard-chartered-refinance-home-loan" },
  { bank: "RHB", product: "First Home Mortgage", rate: "4.10%", lockin: "3 years", maxMargin: "90%", type: "Conventional", link: "/rhb-refinance-home-loan" },
  { bank: "Alliance Bank", product: "Conventional Home Loan", rate: "4.11%", lockin: "3 years", maxMargin: "90%", type: "Conventional", link: null },
  { bank: "Standard Chartered", product: "MortgageOne Zero Cost", rate: "4.20%", lockin: "3 years", maxMargin: "90%", type: "Conventional", link: "/standard-chartered-refinance-home-loan" },
  { bank: "Public Bank", product: "MORE Plan / 5 Home Plan", rate: "4.22%", lockin: "3 years", maxMargin: "90%", type: "Conventional", link: "/public-bank-refinance-home-loan" },
  { bank: "Maybank Islamic", product: "Commodity Murabahah", rate: "4.25%", lockin: "3 years", maxMargin: "90%", type: "Islamic", link: "/maybank-refinance-home-loan" },
  { bank: "HSBC", product: "HomeSmart", rate: "4.30%", lockin: "3 years", maxMargin: "85%", type: "Conventional", link: "/hsbc-refinance-home-loan" },
  { bank: "Maybank", product: "Maxi Home / Flexi", rate: "4.35%", lockin: "3 years", maxMargin: "90%", type: "Conventional", link: "/maybank-refinance-home-loan" },
  { bank: "CIMB", product: "HomeLoan / HomeFlexi", rate: "4.35%", lockin: "3 years", maxMargin: "90%", type: "Both", link: "/cimb-refinance-home-loan" },
  { bank: "Affin Islamic", product: "Home Invest-i", rate: "4.36%", lockin: "3 years", maxMargin: "90%", type: "Islamic", link: null },
  { bank: "Hong Leong", product: "Housing Loan", rate: "4.38%", lockin: "3 years", maxMargin: "90%", type: "Both", link: "/hong-leong-refinance-home-loan" },
  { bank: "AmBank", product: "Home Loan", rate: "4.40%", lockin: "3 years", maxMargin: "90%", type: "Both", link: "/ambank-refinance-home-loan" },
  { bank: "UOB", product: "Home Loan", rate: "4.61%", lockin: "3 years", maxMargin: "95%", type: "Both", link: "/uob-refinance-home-loan" },
];

// Lowest by category
const lowestByCategory = [
  { category: "Overall Lowest", bank: "Maybank Islamic HouzKEY", rate: "2.88%", link: "/maybank-refinance-home-loan" },
  { category: "Lowest Standard Refinance", bank: "Bank Islam", rate: "3.80%", link: "/bank-islam-refinance-home-loan" },
  { category: "Lowest Conventional", bank: "Standard Chartered", rate: "3.90%", link: "/standard-chartered-refinance-home-loan" },
  { category: "Best for High Margin (95%)", bank: "UOB", rate: "4.61%", link: "/uob-refinance-home-loan" },
  { category: "Best for Govt Servants", bank: "Bank Rakyat", rate: "~4.20%", link: null },
  { category: "Best for High DSR", bank: "Hong Leong", rate: "4.38%", link: "/hong-leong-refinance-home-loan" },
];

// Rate by loan amount
const rateByLoanAmount = [
  { loanAmount: "RM200,000", bank: "Bank Islam", rate: "3.80%", monthly: "RM1,032" },
  { loanAmount: "RM300,000", bank: "Bank Islam", rate: "3.80%", monthly: "RM1,548" },
  { loanAmount: "RM400,000", bank: "Standard Chartered", rate: "3.90%", monthly: "RM2,108" },
  { loanAmount: "RM500,000", bank: "Standard Chartered", rate: "3.90%", monthly: "RM2,635" },
  { loanAmount: "RM700,000", bank: "Public Bank", rate: "4.22%", monthly: "RM3,810" },
  { loanAmount: "RM1,000,000", bank: "CIMB", rate: "4.35%", monthly: "RM5,548" },
];

// Factors affecting rate
const rateFactors = [
  { icon: DollarSign, title: "Loan Amount", desc: "Higher loan amounts may qualify for better rates due to higher profit potential for the bank." },
  { icon: Building2, title: "Property Type", desc: "Landed properties often get better rates than high-rise condos. Freehold preferred over leasehold." },
  { icon: BarChart3, title: "Your DSR", desc: "Lower Debt Service Ratio means lower risk, which can translate to better rate offers." },
  { icon: Users, title: "Employment Type", desc: "Salaried employees typically get better rates than self-employed applicants." },
  { icon: Shield, title: "Credit Score", desc: "Clean CCRIS and CTOS records can qualify you for the bank's best advertised rates." },
  { icon: Star, title: "Bank Relationship", desc: "Existing customers with salary accounts or credit cards may get preferential rates." },
];

// Tips to get best rate
const bestRateTips = [
  { title: "Compare multiple banks", desc: "Apply to at least 3-5 banks to get competing offers you can negotiate with." },
  { title: "Negotiate the rate", desc: "Rates are not fixed. Banks have room to lower the spread, especially for good profiles." },
  { title: "Bundle products", desc: "Agree to take insurance, credit cards, or salary accounts for a rate discount." },
  { title: "Check for promotions", desc: "Banks run refinancing campaigns with special rates, especially end of quarter." },
  { title: "Use a mortgage broker", desc: "Brokers have access to unpublished rates and can negotiate on your behalf." },
  { title: "Improve your DSR first", desc: "Pay off credit card debt or personal loans before applying to improve your profile." },
];

// FAQs
const faqs = [
  {
    question: "What is the best refinance rate in Malaysia 2026?",
    answer: "The best refinance rate in Malaysia as of February 2026 is 2.88% from Maybank Islamic HouzKEY, though this is a rent-to-own product with restrictions. For standard refinancing, Bank Islam offers 3.80% and Standard Chartered offers 3.90%.",
  },
  {
    question: "What is the current SBR rate in Malaysia?",
    answer: "The Standardised Base Rate (SBR) in Malaysia is currently 2.75% as of February 2026. All banks use the same SBR set by Bank Negara Malaysia. Your refinance rate equals the SBR plus the bank's spread (margin).",
  },
  {
    question: "Which bank offers lowest home loan interest rate?",
    answer: "For standard home loan refinancing, Bank Islam offers the lowest rate at 3.80%, followed by Standard Chartered at 3.90% and Al Rajhi Bank at 3.90%. Maybank Islamic HouzKEY offers 2.88% but operates as a rent-to-own program.",
  },
  {
    question: "Are refinance rates negotiable?",
    answer: "Yes, refinance rates are negotiable in Malaysia. Banks advertise a range (e.g., 3.90% to 4.50%) and the actual rate depends on your profile. You can negotiate by comparing offers from multiple banks, having a good credit score, or bundling products like insurance.",
  },
  {
    question: "What is a good refinance rate in Malaysia?",
    answer: "As of 2026, a good refinance rate in Malaysia is anything below 4.00%. Rates between 3.80% to 4.20% are considered competitive. If you're currently paying above 4.50%, refinancing at any of these rates will result in significant savings.",
  },
  {
    question: "How often do refinance rates change?",
    answer: "Refinance rates in Malaysia change when Bank Negara adjusts the Overnight Policy Rate (OPR), which is reviewed 6 times a year. Banks may also adjust their spreads independently. The OPR has been stable at 2.75% since 2023.",
  },
  {
    question: "Fixed or variable rate for refinancing?",
    answer: "Most Malaysian refinance products use variable rates tied to the SBR. Fixed rate packages are available but usually come at a higher rate (0.3-0.5% more). Variable rates are recommended when OPR is expected to stay stable or decrease.",
  },
  {
    question: "Can I get a lower rate than advertised?",
    answer: "Yes. Advertised rates are usually the minimum available for the best profiles. However, during promotional periods or through a mortgage broker, you may access special rates. Negotiating with competing offers from other banks is also effective.",
  },
  {
    question: "What affects my refinance interest rate?",
    answer: "Your refinance rate depends on: loan amount (higher = potentially better), property type and location, Debt Service Ratio (DSR), employment type, credit history (CCRIS/CTOS), and your relationship with the bank.",
  },
  {
    question: "Will refinance rates go up in 2026?",
    answer: "Bank Negara Malaysia is expected to maintain the OPR at 2.75% throughout 2026, meaning refinance rates should remain stable. However, global economic conditions could influence rate decisions. It's a good time to lock in current rates.",
  },
];

// People Also Ask
const peopleAlsoAsk = [
  {
    question: "What is the current rate for refinancing your home in Malaysia?",
    answer: "Refinancing rates in Malaysia range from 2.88% to 4.50% as of February 2026. Standard refinance rates are 3.80% to 4.35%. The lowest standard rate is Bank Islam at 3.80%.",
  },
  {
    question: "Is it worth refinancing a home loan?",
    answer: "Yes, if you can get a rate at least 0.5% lower than your current rate and have more than 10 years remaining. Typical savings are RM200-500 per month.",
  },
  {
    question: "Which bank has the lowest interest rate for housing loans in Malaysia?",
    answer: "Maybank Islamic HouzKEY offers 2.88% but has restrictions (rent-to-own). For standard refinancing, Bank Islam offers 3.80% and Standard Chartered offers 3.90%.",
  },
  {
    question: "Which bank gives 7% interest on a home loan?",
    answer: "No major Malaysian bank offers 7% on home loans. Current rates range from 2.88% to 4.50%. If you're paying 7%, you should refinance immediately as you could save thousands per month.",
  },
];

export default function RefinanceRatesPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openPaaIndex, setOpenPaaIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...faqs, ...peopleAlsoAsk].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Refinance Home Loan Rates Malaysia ${currentYear}`,
    description:
      "Compare latest refinance home loan rates in Malaysia. Bank rates from 2.88% to 4.50%. Updated February 2026.",
    datePublished: "2026-01-15",
    dateModified: "2026-02-15",
    author: {
      "@type": "Organization",
      name: "RefinanceHomeLoanMY",
    },
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Refinance Home Loan Rates Malaysia {currentYear}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-6">
            Compare Latest Refinance Home Loan Rates — Updated February 2026
          </p>
          <p className="text-primary-200 mb-2">
            Find the lowest refinancing rates from 15+ Malaysian banks
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-4 mt-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-primary-200">Rates from</span>
              <p className="text-xl font-bold">2.88%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-primary-200">SBR Rate</span>
              <p className="text-xl font-bold">2.75%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-primary-200">Banks Compared</span>
              <p className="text-xl font-bold">15+</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-primary-200">Updated</span>
              <p className="text-xl font-bold">Monthly</p>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
          >
            Get Personalized Rate Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. Quick Answer Box */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-200">
            <div className="flex items-center gap-2 text-primary-600 text-sm font-medium mb-3">
              <Award className="w-4 h-4" />
              QUICK ANSWER
            </div>
            <p className="text-gray-800 leading-relaxed">
              Home loan refinancing rates in Malaysia currently range from <strong>2.88% to 4.50% p.a.</strong> as of February 2026.
              The Standardised Base Rate (SBR) is <strong>2.75%</strong>. The lowest rates are offered by{" "}
              <Link href="/maybank-refinance-home-loan" className="text-primary-600 hover:text-primary-700 font-medium">
                Maybank Islamic HouzKEY (2.88%)
              </Link>,{" "}
              <Link href="/bank-islam-refinance-home-loan" className="text-primary-600 hover:text-primary-700 font-medium">
                Bank Islam (3.80%)
              </Link>, and{" "}
              <Link href="/standard-chartered-refinance-home-loan" className="text-primary-600 hover:text-primary-700 font-medium">
                Standard Chartered (3.90%)
              </Link>.
              Rates depend on your loan amount, tenure, and credit profile.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Rates Comparison Table */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Current Refinance Rates Comparison {currentYear}
          </h2>
          <p className="text-gray-600 mb-8">
            Complete comparison of refinancing rates from all major Malaysian banks, sorted by lowest rate.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">#</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Bank</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b hidden sm:table-cell">Product</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Effective Rate</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b hidden md:table-cell">Lock-in</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b hidden md:table-cell">Max Margin</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Type</th>
                </tr>
              </thead>
              <tbody>
                {ratesData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-gray-50 ${index < 3 ? "bg-green-50/50" : ""}`}
                  >
                    <td className="p-3 text-gray-500 text-sm">{index + 1}</td>
                    <td className="p-3">
                      {row.link ? (
                        <Link href={row.link} className="font-medium text-primary-600 hover:text-primary-700">
                          {row.bank}
                        </Link>
                      ) : (
                        <span className="font-medium text-gray-900">{row.bank}</span>
                      )}
                    </td>
                    <td className="p-3 text-gray-600 text-sm hidden sm:table-cell">{row.product}</td>
                    <td className="p-3 text-center">
                      <span className={`font-bold ${index < 3 ? "text-green-600" : "text-primary-600"}`}>
                        {row.rate}
                      </span>
                    </td>
                    <td className="p-3 text-center text-gray-600 hidden md:table-cell">{row.lockin}</td>
                    <td className="p-3 text-center text-gray-600 hidden md:table-cell">{row.maxMargin}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          row.type === "Islamic"
                            ? "bg-emerald-100 text-emerald-700"
                            : row.type === "Conventional"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Rates as of February 2026. Subject to change. Actual rate depends on credit profile and loan amount.
              Click on any bank name to view detailed review and application guide.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Understanding Refinance Rates */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Understanding Refinance Rates
          </h2>

          {/* SBR */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What is SBR (Standardised Base Rate)?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span><strong>Set by Bank Negara Malaysia</strong> — the central bank determines the SBR as a transparent benchmark for all banks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Currently <strong>2.75%</strong> as of February 2026, unchanged since May 2023.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span><strong>All banks use the same SBR</strong> — the difference in rates comes from each bank&apos;s spread (margin added on top of SBR).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Your rate = <strong>SBR + bank&apos;s spread</strong>. For example, SBR 2.75% + spread 1.15% = 3.90% effective rate.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Expected to <strong>remain at 2.75% throughout 2026</strong> based on current economic outlook.</span>
              </li>
            </ul>
          </div>

          {/* Fixed vs Variable */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Fixed vs Variable Rates
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span><strong>Most Malaysian refinance rates are variable</strong> — tied to SBR, meaning your rate changes when Bank Negara adjusts the OPR.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span><strong>Fixed rate packages are available</strong> but usually come at 0.3-0.5% higher than variable rate equivalents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>With OPR expected to stay stable in 2026, <strong>variable rates are generally recommended</strong> for most refinancers.</span>
              </li>
            </ul>
          </div>

          {/* Effective vs Advertised */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Effective Rate vs Advertised Rate
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <p className="text-sm font-medium text-yellow-800 mb-1">Advertised Rate</p>
                <p className="text-2xl font-bold text-yellow-700">&quot;From 2.88%&quot;</p>
                <p className="text-sm text-yellow-600 mt-1">Best-case scenario for ideal profiles</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-medium text-green-800 mb-1">Effective Rate</p>
                <p className="text-2xl font-bold text-green-700">What you actually pay</p>
                <p className="text-sm text-green-600 mt-1">Depends on your profile and loan details</p>
              </div>
            </div>
            <p className="text-gray-600 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              Always ask for your <strong>effective rate quote</strong> — not just the advertised rate. Request a formal Letter of Offer with the confirmed rate before committing.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Lowest by Category */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Lowest Refinance Rates by Category
          </h2>
          <p className="text-gray-600 mb-8">
            Best rates for different borrower needs and profiles.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lowestByCategory.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-primary-300 transition-colors">
                <p className="text-sm font-medium text-primary-600 mb-2">{item.category}</p>
                <p className="text-lg font-bold text-gray-900 mb-1">{item.bank}</p>
                <p className="text-2xl font-bold text-green-600 mb-3">{item.rate}</p>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium hover:text-primary-700"
                  >
                    View details <ArrowRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">Page coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How Much Can You Save? */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            How Much Can You Save?
          </h2>
          <p className="text-gray-600 mb-8">
            Example savings calculation for a typical Malaysian homeowner.
          </p>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Scenario */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Scenario</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-medium text-gray-900">RM500,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Remaining Tenure</span>
                    <span className="font-medium text-gray-900">20 years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Current Rate</span>
                    <span className="font-medium text-red-600">4.75%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">New Rate</span>
                    <span className="font-medium text-green-600">3.90%</span>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Your Savings</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-green-700">Monthly Savings</p>
                    <p className="text-3xl font-bold text-green-600">RM235</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-green-700">Total Savings (20 years)</p>
                    <p className="text-3xl font-bold text-green-600">RM56,400</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Exact Savings
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Factors Affecting Your Rate */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Factors That Affect Your Rate
          </h2>
          <p className="text-gray-600 mb-8">
            Understanding these factors helps you secure the best possible rate.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rateFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5">
                <factor.icon className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-sm text-gray-600">{factor.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-amber-800 mb-1">About HouzKEY&apos;s 2.88% Rate</p>
                <p className="text-sm text-amber-700">
                  Maybank Islamic HouzKEY at 2.88% is a rent-to-own program with specific restrictions — you don&apos;t own the property outright during the financing period. It&apos;s not a standard refinancing product. For standard refinancing, the lowest rate is Bank Islam at 3.80%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How to Get the Best Rate */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How to Get the Best Refinance Rate
          </h2>

          <div className="space-y-4">
            {bestRateTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-sm flex items-start gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OPR & Rate Outlook */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            OPR & Rate Outlook {currentYear}
          </h2>

          <div className="bg-primary-50 rounded-xl p-6 md:p-8 border border-primary-200">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-medium text-primary-700 mb-1">Current OPR</p>
                <p className="text-3xl font-bold text-primary-800">2.75%</p>
                <p className="text-sm text-primary-600 mt-1">Unchanged since May 2023</p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary-700 mb-1">{currentYear} Outlook</p>
                <p className="text-3xl font-bold text-primary-800">Stable</p>
                <p className="text-sm text-primary-600 mt-1">Expected to remain at 2.75%</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Bank Negara Malaysia is expected to <strong>maintain the OPR throughout 2026</strong> based on stable economic conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Refinance rates should remain <strong>stable unless global conditions change significantly</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>This is a <strong>good time to lock in current rates</strong> before any potential increases.</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/en/when-to-refinance"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Learn more: When is the best time to refinance?
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Calculator CTA */}
      <section className="py-10 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Refinance Rate Calculator
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            See exactly how much you&apos;ll save with current rates. Enter your loan details and compare monthly payments across different rates.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Open Savings Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. People Also Ask */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            People Also Ask
          </h2>

          <div className="space-y-3">
            {peopleAlsoAsk.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenPaaIndex(openPaaIndex === index ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{item.question}</h3>
                  {openPaaIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openPaaIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Rate by Loan Amount */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Rate Comparison by Loan Amount
          </h2>
          <p className="text-gray-600 mb-8">
            Recommended banks and estimated monthly payments based on loan size.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Loan Amount</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Recommended Bank</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Rate</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {rateByLoanAmount.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">{row.loanAmount}</td>
                    <td className="p-3 text-gray-700">{row.bank}</td>
                    <td className="p-3 text-center text-primary-600 font-semibold">{row.rate}</td>
                    <td className="p-3 text-center text-gray-700">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-500 flex items-start gap-2">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            Based on 25-year tenure. Rates may vary by loan amount tier. Use our{" "}
            <Link href="/calculator" className="text-primary-600 hover:text-primary-700 font-medium">
              calculator
            </Link>{" "}
            for exact figures.
          </p>
        </div>
      </section>

      {/* 13. FAQs */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Lead Form Section */}
      <section id="lead-form-section" className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Get Your Personalized Rate Quote
            </h2>
            <p className="text-primary-100 text-lg">
              We compare 15+ banks to find your best rate — free
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <LeadForm source="refinance-rates-page" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* 16. Rate Update Notice */}
      <section className="py-8 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">Last Updated: February 2026</p>
              <p className="text-sm text-amber-700 mt-1">
                Rates change frequently. For the most accurate rate based on your profile, request a{" "}
                <button
                  onClick={scrollToForm}
                  className="text-primary-600 hover:text-primary-700 font-medium underline"
                >
                  personalized quote
                </button>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 17. Related Pages */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/calculator"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <Calculator className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                Savings Calculator
              </h3>
              <p className="text-sm text-gray-600">Calculate how much you can save by refinancing</p>
            </Link>

            <Link
              href="/best-bank-to-refinance-malaysia"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <Award className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                Best Refinance Banks
              </h3>
              <p className="text-sm text-gray-600">Detailed comparison of top banks for refinancing</p>
            </Link>

            <Link
              href="/en/when-to-refinance"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <Clock className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                When to Refinance
              </h3>
              <p className="text-sm text-gray-600">Is now the right time to refinance your home loan?</p>
            </Link>

            <Link
              href="/how-much-can-i-save-refinancing"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <TrendingDown className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                How Much Can I Save?
              </h3>
              <p className="text-sm text-gray-600">Real examples of refinancing savings</p>
            </Link>

            <Link
              href="/maybank-refinance-home-loan"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <Building2 className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                Maybank Refinance
              </h3>
              <p className="text-sm text-gray-600">Complete guide to Maybank home loan refinancing</p>
            </Link>

            <Link
              href="/bank-islam-refinance-home-loan"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <Building2 className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                Bank Islam Refinance
              </h3>
              <p className="text-sm text-gray-600">Lowest standard refinance rate at 3.80%</p>
            </Link>
          </div>

          {/* All Bank Pages */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">All Bank Reviews</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Maybank", link: "/maybank-refinance-home-loan" },
                { name: "CIMB", link: "/cimb-refinance-home-loan" },
                { name: "Public Bank", link: "/public-bank-refinance-home-loan" },
                { name: "RHB", link: "/rhb-refinance-home-loan" },
                { name: "Hong Leong", link: "/hong-leong-refinance-home-loan" },
                { name: "AmBank", link: "/ambank-refinance-home-loan" },
                { name: "Bank Islam", link: "/bank-islam-refinance-home-loan" },
                { name: "OCBC", link: "/ocbc-refinance-home-loan" },
                { name: "UOB", link: "/uob-refinance-home-loan" },
                { name: "Standard Chartered", link: "/standard-chartered-refinance-home-loan" },
                { name: "HSBC", link: "/hsbc-refinance-home-loan" },
              ].map((bank, index) => (
                <Link
                  key={index}
                  href={bank.link}
                  className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  {bank.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        onCtaClick={scrollToForm}
        text="Rates from 2.88%"
        buttonText="Get Free Quote"
      />
    </>
  );
}
