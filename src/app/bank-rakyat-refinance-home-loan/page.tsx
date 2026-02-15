"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getBanksSortedByRate } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  FileText,
  AlertTriangle,
  Shield,
  Building2,
  Users,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

// Bank Rakyat specific data
const bankRakyat = {
  name: "Bank Rakyat",
  rateFrom: "4.20%",
  maxLTV: 90,
  maxTenure: 35,
  minLoan: 50000,
  maxLoan: 5000000,
  lockIn: 3,
  earlySettlement: "3% of outstanding",
  processingFee: "Waived (promotional)",
  bestFor: "Government servants & cooperative members",
  type: "Islamic (Syariah Compliant)",
};

// Get competitor banks for comparison
const allBanks = getBanksSortedByRate();
const competitors = allBanks
  .filter((b) => ["Maybank", "CIMB", "Public Bank", "RHB"].includes(b.name))
  .slice(0, 4);

const faqs = [
  {
    question: "Is Bank Rakyat good for refinancing?",
    answer:
      "Bank Rakyat is excellent for government servants and cooperative members who prefer Islamic financing. They offer competitive rates starting from 4.20%, salary deduction option for easy payment, and are generally more flexible with Bumiputera applicants. However, they only offer Islamic financing - no conventional options available.",
  },
  {
    question: "What is Bank Rakyat home loan interest rate?",
    answer:
      "Bank Rakyat home loan rates start from 4.20% p.a. for Islamic financing (Pembiayaan Rumah-i). The actual rate depends on your profile, employment type, and whether you are a cooperative member. Government servants and Bank Rakyat members typically get better rates.",
  },
  {
    question: "Can non-Bumiputera apply for Bank Rakyat loan?",
    answer:
      "Yes, Bank Rakyat accepts applications from all Malaysians regardless of race. While they are traditionally popular among Bumiputera customers, non-Bumiputera applicants are welcome. Approval depends on standard criteria like income, credit score, and DSR rather than ethnicity.",
  },
  {
    question: "Is Bank Rakyat Islamic or conventional?",
    answer:
      "Bank Rakyat only offers Islamic financing products. All their home loans are Syariah-compliant, based on concepts like Tawarruq (commodity Murabahah). They do not have conventional loan options. This makes them suitable for customers who specifically want Islamic financing.",
  },
  {
    question: "What is Bank Rakyat refinancing processing time?",
    answer:
      "Bank Rakyat refinancing typically takes 6-10 weeks from application to disbursement. Processing may be faster for government servants using salary deduction, as income verification is simpler. Allow extra time compared to larger banks as they have fewer branches.",
  },
  {
    question: "Can government servants get better rates at Bank Rakyat?",
    answer:
      "Yes, government servants often receive preferential treatment at Bank Rakyat including better rates, higher approval chances, and the convenient salary deduction option (potongan gaji). Civil servants are a key customer segment for Bank Rakyat.",
  },
  {
    question: "What is Bank Rakyat maximum loan amount?",
    answer:
      "Bank Rakyat offers home financing up to RM5 million, with maximum margin of 90% of property value. The actual approved amount depends on your income, DSR, and the property valuation. Government servants may qualify for higher amounts.",
  },
  {
    question: "How to apply for Bank Rakyat refinancing?",
    answer:
      "You can apply for Bank Rakyat refinancing by visiting any Bank Rakyat branch, calling their hotline, or applying through their website. Government servants can also apply through their HR department for salary deduction arrangement. Bring IC, payslips, bank statements, and property documents.",
  },
];

const documents = [
  "MyKad (IC) - front and back copy",
  "Latest 3 months payslips",
  "Latest 3 months bank statements",
  "Employment confirmation letter",
  "Current loan statement from existing bank",
  "Property Sale & Purchase Agreement (SPA)",
  "Property title (Grant/Strata)",
  "EA Form / BE Form (tax)",
];

const applicationSteps = [
  {
    step: 1,
    title: "Check Your Eligibility",
    desc: "Use our calculator to estimate savings and check if you meet Bank Rakyat requirements.",
  },
  {
    step: 2,
    title: "Gather Documents",
    desc: "Prepare IC, payslips, bank statements, employment letter, and property documents.",
  },
  {
    step: 3,
    title: "Visit Branch or Apply Online",
    desc: "Submit application at any Bank Rakyat branch or through their website.",
  },
  {
    step: 4,
    title: "Property Valuation",
    desc: "Bank Rakyat arranges professional property valuation.",
  },
  {
    step: 5,
    title: "Review Financing Offer",
    desc: "Carefully review the Letter of Offer including profit rate and terms.",
  },
  {
    step: 6,
    title: "Legal Documentation",
    desc: "Complete Syariah-compliant loan documentation with appointed lawyer.",
  },
  {
    step: 7,
    title: "Disbursement",
    desc: "Bank Rakyat settles your existing loan. New financing begins.",
  },
];

const processingTimeline = [
  { step: "Document Submission", time: "Day 1", desc: "Submit complete application package" },
  { step: "Credit Check", time: "1-3 days", desc: "CCRIS/CTOS verification" },
  { step: "Property Valuation", time: "1-2 weeks", desc: "Professional property assessment" },
  { step: "Credit Approval", time: "2-4 weeks", desc: "Syariah committee and credit approval" },
  { step: "Letter of Offer", time: "3-5 weeks", desc: "Review and sign financing offer" },
  { step: "Legal Process", time: "4-8 weeks", desc: "Islamic documentation with lawyers" },
  { step: "Disbursement", time: "6-10 weeks", desc: "Financing disbursed, refinance completed" },
];

export default function BankRakyatRefinancePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-lg p-3">
              <Building2 className="w-8 h-8 text-green-700" />
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-300" />
              <span className="text-green-200 text-sm font-medium">100% Islamic Financing</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Bank Rakyat Refinance Home Loan Malaysia {currentYear}
          </h1>
          <p className="text-lg text-green-100 mb-2">
            Complete guide to Bank Rakyat Islamic home financing (Pembiayaan Rumah-i).
            Competitive rates for government servants and cooperative members.
          </p>
          <p className="text-sm text-green-200">Updated: {SITE_CONFIG.lastUpdatedEn}</p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">From {bankRakyat.rateFrom}</p>
              <p className="text-xs text-green-200">Islamic Rate</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">Up to {bankRakyat.maxLTV}%</p>
              <p className="text-xs text-green-200">Margin</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">{bankRakyat.maxTenure} Years</p>
              <p className="text-xs text-green-200">Max Tenure</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">Syariah</p>
              <p className="text-xs text-green-200">Compliant</p>
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="mt-8 inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-all hover:scale-105"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Current Rates Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Rakyat Refinance Rates {currentYear}
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Profit Rate From</p>
                  <p className="text-3xl font-bold text-green-700">{bankRakyat.rateFrom}</p>
                  <p className="text-xs text-gray-500">p.a. (Islamic)</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Max Margin</p>
                  <p className="text-3xl font-bold text-gray-700">{bankRakyat.maxLTV}%</p>
                  <p className="text-xs text-gray-500">of property value</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Financing Type</p>
                  <p className="text-3xl font-bold text-green-600">Tawarruq</p>
                  <p className="text-xs text-gray-500">Syariah Compliant</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Financing Details</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Min Financing: RM{bankRakyat.minLoan.toLocaleString()}</li>
                  <li>Max Financing: RM{bankRakyat.maxLoan.toLocaleString()}</li>
                  <li>Max Tenure: {bankRakyat.maxTenure} years</li>
                  <li>Max Margin: {bankRakyat.maxLTV}%</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Fees & Penalties</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Processing Fee: {bankRakyat.processingFee}</li>
                  <li>Lock-in Period: {bankRakyat.lockIn} years</li>
                  <li>Early Settlement: {bankRakyat.earlySettlement}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Rakyat Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-5 flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">100% Islamic Financing</h3>
                  <p className="text-sm text-gray-600">
                    All products are Syariah-compliant using Tawarruq concept
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-5 flex items-start gap-3">
                <Users className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Government Servant Priority</h3>
                  <p className="text-sm text-gray-600">
                    Better rates and easier approval for civil servants
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-5 flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Salary Deduction Option</h3>
                  <p className="text-sm text-gray-600">
                    Convenient potongan gaji for government staff
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-5 flex items-start gap-3">
                <Building2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cooperative Benefits</h3>
                  <p className="text-sm text-gray-600">
                    Better terms for Bank Rakyat cooperative members
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Link Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculate Your Bank Rakyat Refinance Savings
            </h2>
            <div className="bg-primary-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Use our free calculator to estimate how much you could save by refinancing with
                Bank Rakyat. Compare your current rate against their Islamic financing offers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Open Refinance Calculator
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/cash-out-calculator"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 border border-primary-300 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Calculate Cash-Out Amount
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Honest Review Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Is Bank Rakyat Good for Refinancing? Honest Review
            </h2>

            <p className="text-gray-700 mb-6">
              Bank Rakyat is a cooperative bank with strong focus on government servants and
              Bumiputera customers. They offer exclusively Islamic financing products. Here is our
              honest assessment:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Pros
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Syariah compliant</strong> - All products are 100% Islamic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Good rates for govt staff</strong> - Preferential treatment for civil
                      servants
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Salary deduction</strong> - Easy payment via potongan gaji
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Lower processing fees</strong> - Often waived during promotions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Flexible for Bumiputera</strong> - Generally more accommodating
                    </span>
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
                    <span>
                      <strong>Islamic only</strong> - No conventional loan options available
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Fewer branches</strong> - Smaller network than major banks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Slower processing</strong> - May take longer than Maybank/CIMB
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Limited product flexibility</strong> - Fewer product variations
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="font-semibold text-green-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                Government servants seeking Islamic financing with salary deduction convenience.
                Also good for cooperative members and Bumiputera applicants who prefer a bank that
                understands their needs.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Rakyat Refinance Eligibility
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
                    Age: 18 - 65 years old
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Minimum income: RM2,000/month
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    DSR: Maximum 70%
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Clean credit record (CCRIS/CTOS)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Completed property
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <h3 className="font-semibold text-green-800 mb-3">Higher Approval Chances</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>- Government servants (highest priority)</li>
                  <li>- Bank Rakyat cooperative members</li>
                  <li>- Existing Bank Rakyat customers</li>
                  <li>- Stable employment (2+ years)</li>
                  <li>- Low debt-to-income ratio. <Link href="/dsr-calculator" className="text-primary-600 hover:underline">Check your DSR</Link></li>
                  <li>- Property in established areas</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5">
                <h3 className="font-semibold text-red-800 mb-3">May Face Challenges</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>- Self-employed with irregular income</li>
                  <li>- New employees (less than 6 months)</li>
                  <li>- High existing debt commitments</li>
                  <li>- Properties in rural or less developed areas</li>
                  <li>- Poor credit history</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Documents Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Documents Required for Bank Rakyat Refinancing
            </h2>

            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <FileText className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Government servants: Additional documents may include confirmation letter from
                department and salary deduction authorization form.
              </p>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Rakyat vs Other Banks Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Bank</th>
                    <th className="text-left p-3 font-semibold">Rate From</th>
                    <th className="text-left p-3 font-semibold">Type</th>
                    <th className="text-left p-3 font-semibold">Max Tenure</th>
                    <th className="text-left p-3 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50 border-b">
                    <td className="p-3 font-semibold">Bank Rakyat</td>
                    <td className="p-3 text-green-700 font-semibold">{bankRakyat.rateFrom}</td>
                    <td className="p-3">Islamic Only</td>
                    <td className="p-3">{bankRakyat.maxTenure} years</td>
                    <td className="p-3 text-sm">{bankRakyat.bestFor}</td>
                  </tr>
                  {competitors.map((comp) => (
                    <tr key={comp.name} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <Link
                          href={`/${comp.name.toLowerCase().replace(" ", "-")}-refinance-home-loan`}
                          className="text-primary-600 hover:underline"
                        >
                          {comp.name}
                        </Link>
                      </td>
                      <td className="p-3 font-semibold">{comp.rateFrom}</td>
                      <td className="p-3">Conv & Islamic</td>
                      <td className="p-3">{comp.maxTenure} years</td>
                      <td className="p-3 text-sm">{comp.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Rates are indicative and subject to change. <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              <Link href="/maybank-refinance-home-loan" className="text-primary-600 hover:underline">
                Maybank
              </Link>
              ,{" "}
              <Link href="/cimb-refinance-home-loan" className="text-primary-600 hover:underline">
                CIMB
              </Link>
              ,{" "}
              <Link
                href="/public-bank-refinance-home-loan"
                className="text-primary-600 hover:underline"
              >
                Public Bank
              </Link>
              ,{" "}
              <Link href="/rhb-refinance-home-loan" className="text-primary-600 hover:underline">
                RHB
              </Link>
              ,{" "}
              <Link href="/hong-leong-refinance-home-loan" className="text-primary-600 hover:underline">
                Hong Leong
              </Link>
            </p>
          </section>

          {/* Hidden Costs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hidden Costs & Fees to Watch</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Early Settlement Penalty</h3>
                  <p className="text-gray-600">
                    {bankRakyat.earlySettlement} balance during {bankRakyat.lockIn}-year lock-in
                    period.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Fees</h3>
                  <p className="text-gray-600">
                    {SITE_CONFIG.costs.legalFeesText}. Bank Rakyat may offer subsidized legal fees
                    during promotions.
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
                    {SITE_CONFIG.costs.stampDutyText} of loan amount. {SITE_CONFIG.costs.stampDutyNote}
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Takaful (Islamic Insurance)</h3>
                  <p className="text-gray-600">
                    Bank Rakyat requires Takaful coverage instead of conventional MRTA. Compare
                    quotes to ensure competitive pricing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Time Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Rakyat Refinance Processing Time
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200"></div>

              <div className="space-y-6">
                {processingTimeline.map((item, index) => (
                  <div key={index} className="flex gap-4 ml-4">
                    <div className="relative">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm -ml-4">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 -mt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">{item.time}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{item.step}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> Government servants using salary deduction typically
                experience faster processing as income verification is streamlined through the
                payroll system.
              </p>
            </div>
          </section>

          {/* How to Apply Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Apply for Bank Rakyat Refinancing
            </h2>

            <div className="space-y-4">
              {applicationSteps.map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Other Banks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/maybank-refinance-home-loan"
                className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
              >
                <h3 className="font-semibold text-yellow-900">Maybank Refinance</h3>
                <p className="text-sm text-yellow-700">Compare Maybank rates and features</p>
              </Link>
              <Link
                href="/cimb-refinance-home-loan"
                className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <h3 className="font-semibold text-red-900">CIMB Refinance</h3>
                <p className="text-sm text-red-700">Compare CIMB rates and features</p>
              </Link>
              <Link
                href="/en/best-refinance-banks"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Best Refinance Banks 2026</h3>
                <p className="text-sm text-blue-700">Compare all banks side by side</p>
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

      {/* Bottom CTA */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with Bank Rakyat?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free quote and compare with other banks in 24 hours.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4 bg-white text-green-700 hover:bg-green-50"
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
                <h3 className="text-xl font-bold">Get Your Free Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <LeadForm variant="modal" source="bank-rakyat-refinance" lang="en" showAllFields={true} />
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
            headline: `Bank Rakyat Refinance Home Loan ${currentYear} - Rates, Eligibility & How to Apply`,
            description: `Complete guide to Bank Rakyat Islamic home financing. Rates from ${bankRakyat.rateFrom}, eligibility for government servants, and comparison with other banks.`,
            datePublished: "2026-01-28",
            dateModified: "2026-01-28",
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
        text="Compare Bank Rakyat rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
