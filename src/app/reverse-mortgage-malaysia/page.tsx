"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  Home,
  DollarSign,
  CheckCircle,
  XCircle,
  ArrowRight,
  Calculator,
  FileText,
  Building2,
  Users,
  Clock,
  Shield,
  TrendingUp,
  HelpCircle,
  MapPin,
  Calendar,
  Banknote,
  Info,
} from "lucide-react";

const currentYear = new Date().getFullYear();

const faqs = [
  {
    question: "Is reverse mortgage available in Malaysia?",
    answer:
      "Yes, reverse mortgage is available in Malaysia through Skim Saraan Bercagar (SSB) offered by Cagamas Berhad, the National Mortgage Corporation. SSB allows homeowners aged 55 and above with fully-paid homes to receive monthly tax-free income without selling their property. An Islamic version (SSB-i) is also available.",
  },
  {
    question: "What is Skim Saraan Bercagar (SSB)?",
    answer:
      "Skim Saraan Bercagar (SSB) is Malaysia's reverse mortgage scheme operated by Cagamas Berhad. It allows senior citizens (55+) who own fully-paid residential properties in selected areas (Klang Valley, Johor Bahru, Penang Island) to receive monthly income payments. The loan is only repaid when the borrower passes away, sells the property, or moves out permanently.",
  },
  {
    question: "What is the biggest problem with reverse mortgage?",
    answer:
      "The main concerns with reverse mortgage include: (1) Accumulated interest reduces equity over time, leaving less for heirs; (2) Limited availability - SSB only covers Klang Valley, JB, and Penang; (3) Property must be fully paid with no existing loan; (4) Monthly payouts may be lower than expected depending on age and property value; (5) If you need a large lump sum, SSB only provides monthly payments.",
  },
  {
    question: "How much can a 70 year old borrow on a reverse mortgage?",
    answer:
      "The monthly payout from SSB depends on your age and property value. Generally, older applicants receive higher monthly payments since the expected payout period is shorter. For a 70-year-old with a property valued at RM500,000, monthly payouts could range from RM1,500-RM2,500. Contact Cagamas directly for an accurate calculation based on your specific situation.",
  },
  {
    question: "Which bank is best for reverse mortgage in Malaysia?",
    answer:
      "Reverse mortgage (SSB) in Malaysia is only available through Cagamas Berhad, not regular banks. However, RHB Bank is a settlement partner for SSB. If you're looking for alternatives to unlock home equity, major banks like Maybank, CIMB, Public Bank, and Hong Leong offer cash-out refinancing which provides lump sum payments.",
  },
  {
    question: "How to apply for SSB Cagamas?",
    answer:
      "To apply for Skim Saraan Bercagar: (1) Contact Cagamas directly or visit their website; (2) Ensure you meet eligibility - aged 55+, own fully-paid residential property in eligible areas; (3) Submit required documents including IC, property title, and proof of ownership; (4) Property valuation will be conducted; (5) If approved, you'll receive monthly payments. The process typically takes 4-8 weeks.",
  },
  {
    question: "What are the SSB eligibility requirements?",
    answer:
      "SSB requirements include: (1) Malaysian citizen aged 55 years or above; (2) Own a fully-paid residential property (no outstanding mortgage); (3) Property located in Klang Valley, Johor Bahru, or Penang Island; (4) Property must be in good condition with valid title; (5) Minimum property value requirements apply; (6) Must be the sole owner or joint owner with spouse.",
  },
  {
    question: "Is SSB Syariah compliant?",
    answer:
      "Yes, Cagamas offers SSB-i, the Islamic/Syariah-compliant version of Skim Saraan Bercagar. SSB-i is structured according to Islamic financing principles and has been approved by Syariah advisors. Muslim homeowners can choose SSB-i to receive monthly income while ensuring compliance with Islamic finance requirements.",
  },
  {
    question: "Can retirees get cash-out refinancing instead?",
    answer:
      "Yes, retirees can qualify for cash-out refinancing if they have verifiable income (pension, EPF withdrawals, rental income). Unlike SSB, cash-out refinancing provides a lump sum, works on properties with existing loans, and is available nationwide. It's a good alternative for those under 55, outside SSB coverage areas, or who prefer lump sum over monthly payments.",
  },
  {
    question: "What happens to my property after SSB reverse mortgage?",
    answer:
      "With SSB, you continue to own and live in your property. The loan is only settled when: (1) You pass away - heirs can repay the loan to keep the property or sell it; (2) You sell the property voluntarily; (3) You permanently move out. Any remaining equity after loan settlement goes to you or your heirs.",
  },
];

export default function ReverseMortgagePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <Home className="w-4 h-4" />
              <span>Retirement & Home Equity Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Reverse Mortgage Malaysia {currentYear} -{" "}
              <span className="text-secondary-400">What You Need to Know</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Yes, reverse mortgage is available in Malaysia through{" "}
              <strong className="text-white">Skim Saraan Bercagar (SSB)</strong>{" "}
              by Cagamas. Learn how it works, eligibility requirements, and
              compare with cash-out refinancing to find the best option for you.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What is Reverse Mortgage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is a Reverse Mortgage?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A reverse mortgage is a type of loan that allows senior homeowners
              to convert their home equity into cash without selling their
              property or making monthly payments. The loan is repaid when the
              homeowner sells the property, moves out permanently, or passes
              away.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Reverse Mortgage Works
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    1. Own Your Home
                  </h4>
                  <p className="text-sm text-gray-600">
                    Senior homeowner (55+) with a fully paid residential
                    property
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2. Receive Monthly Income
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get tax-free monthly payments based on property value and
                    age
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    3. Repay Later
                  </h4>
                  <p className="text-sm text-gray-600">
                    No monthly repayments - loan settled when you sell, move, or
                    pass away
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is It Available in Malaysia - YES */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Is Reverse Mortgage Available in Malaysia?
                </h2>
                <p className="text-lg text-green-700 font-medium">
                  Yes! Through Skim Saraan Bercagar (SSB) by Cagamas Berhad
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Skim Saraan Bercagar (SSB)
                  </h3>
                  <p className="text-gray-600">
                    Malaysia's Official Reverse Mortgage Scheme
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Operated by <strong>Cagamas Berhad</strong> (National
                        Mortgage Corporation)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        For homeowners aged <strong>55 years and above</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Provides <strong>monthly tax-free income</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>No repayment</strong> until you sell/pass away
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>SSB-i</strong> (Islamic version) available
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Eligibility Requirements:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>Malaysian citizen, 55 years or older</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <Home className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Fully-paid residential property (no mortgage)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Property in: Klang Valley, Johor Bahru, or Penang Island
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <FileText className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>Valid property title and good condition</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>Sole owner or joint owner with spouse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-800 font-medium">
                    RHB Bank Partnership
                  </p>
                  <p className="text-blue-700 text-sm">
                    RHB Bank is a settlement partner for SSB, facilitating the
                    monthly payment disbursements to eligible homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSB How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How Skim Saraan Bercagar (SSB) Works
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  step: 1,
                  title: "Check Your Eligibility",
                  description:
                    "Confirm you're 55+, own a fully-paid residential property in Klang Valley, JB, or Penang Island.",
                  icon: CheckCircle,
                },
                {
                  step: 2,
                  title: "Apply to Cagamas",
                  description:
                    "Contact Cagamas directly or through their website. Submit IC, property documents, and proof of ownership.",
                  icon: FileText,
                },
                {
                  step: 3,
                  title: "Property Valuation",
                  description:
                    "Cagamas will arrange for your property to be valued. This determines your monthly payout amount.",
                  icon: Home,
                },
                {
                  step: 4,
                  title: "Receive Monthly Income",
                  description:
                    "Once approved, you'll receive tax-free monthly payments directly to your bank account. Choose conventional or SSB-i (Islamic).",
                  icon: Banknote,
                },
                {
                  step: 5,
                  title: "Continue Living in Your Home",
                  description:
                    "You retain ownership and can live in your home for life. No monthly repayments required.",
                  icon: Shield,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-600">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-primary-600" />
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Important Considerations
              </h3>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>
                  • <strong>Limited coverage:</strong> Only properties in Klang
                  Valley, Johor Bahru, and Penang Island are eligible
                </li>
                <li>
                  • <strong>Fully paid only:</strong> Property must have no
                  existing mortgage or loan
                </li>
                <li>
                  • <strong>Equity reduction:</strong> Interest accumulates over
                  time, reducing the equity left for heirs
                </li>
                <li>
                  • <strong>Monthly payments only:</strong> SSB provides monthly
                  income, not lump sum payouts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SSB vs Cash-Out Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SSB vs Cash-Out Refinancing: Which is Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both options let you access your home equity, but they work
              differently. Compare to find the best fit for your situation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold bg-primary-50">
                      SSB (Skim Saraan Bercagar)
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold bg-secondary-50">
                      Cash-Out Refinancing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Provider
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      Cagamas only
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      All major banks
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Age Requirement
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      55+ years
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      18-70 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Property Requirement
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      Must be fully paid
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      Can have existing loan
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Coverage Area
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      KL, JB, Penang only
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50 text-green-700 font-medium">
                      Nationwide
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Payout Type
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      Monthly income
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      Lump sum
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Repayment
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      When you pass/sell
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      Monthly installments
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Max Amount
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      Based on age/property
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50 text-green-700 font-medium">
                      Up to 90% LTV
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Islamic Option
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      Yes (SSB-i)
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      Yes (at Islamic banks)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Best For
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-primary-50">
                      Seniors wanting monthly income
                    </td>
                    <td className="border border-gray-200 px-4 py-3 bg-secondary-50">
                      Anyone needing lump sum cash
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* When to Choose Each */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Choose SSB If You:
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Are 55 years or older</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Have a fully-paid home in KL, JB, or Penang</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Want regular monthly income for retirement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Don't want to make monthly loan payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Plan to stay in your home for life</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
                <h3 className="font-bold text-secondary-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Choose Cash-Out Refinancing If You:
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Are under 55 years old</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Property is outside KL, JB, or Penang</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Need a large lump sum (not monthly payments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Still have an existing mortgage to pay off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Can afford monthly repayments from income</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cash-Out Refinancing Alternative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary-100 px-4 py-2 rounded-full text-secondary-700 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Alternative Option
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cash-Out Refinancing: The Flexible Alternative
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you don't qualify for SSB or prefer a lump sum payment,
              cash-out refinancing is available at all major Malaysian banks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Benefits of Cash-Out Refinancing:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Available at Maybank, CIMB, Public Bank, RHB, Hong Leong, and more",
                    "Works nationwide - not limited to specific areas",
                    "Get up to 90% of property value as lump sum",
                    "Can refinance properties with existing loans",
                    "Lower interest rates (3.5-4.5%) than personal loans",
                    "Flexible use - renovation, education, debt payoff, investment",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Example Cash-Out Calculation:
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Property Value</span>
                    <span className="font-semibold">RM 500,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Outstanding Loan</span>
                    <span className="font-semibold">RM 150,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Max New Loan (90%)</span>
                    <span className="font-semibold">RM 450,000</span>
                  </div>
                  <div className="flex justify-between py-2 bg-green-100 rounded-lg px-3">
                    <span className="font-medium text-green-800">
                      Potential Cash Out
                    </span>
                    <span className="font-bold text-green-600">RM 300,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/cash-out-refinance-malaysia"
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Learn About Cash-Out Refinancing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/cash-out-calculator"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Cash-Out
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banks That Offer Cash-Out */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Banks That Offer Cash-Out Refinancing
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            If SSB doesn't fit your needs, these banks offer cash-out
            refinancing nationwide
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Maybank",
                highlight: "Up to 90% LTV",
                link: "/maybank-refinance-home-loan",
              },
              {
                name: "CIMB",
                highlight: "Flexible for retirees",
                link: "/cimb-refinance-home-loan",
              },
              {
                name: "Public Bank",
                highlight: "Competitive rates",
                link: "/public-bank-refinance-home-loan",
              },
              {
                name: "Hong Leong",
                highlight: "Higher age limit",
                link: "/hong-leong-refinance-home-loan",
              },
            ].map((bank, index) => (
              <Link
                key={index}
                href={bank.link}
                className="bg-white hover:bg-gray-50 rounded-xl p-6 text-center transition-colors group shadow-sm"
              >
                <Building2 className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {bank.name}
                </h3>
                <p className="text-sm text-secondary-600 font-medium">
                  {bank.highlight}
                </p>
                <span className="text-sm text-primary-600 mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/en/best-refinance-banks"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
            >
              Compare All Banks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
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
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Need Help Choosing the Right Option?
              </h2>
              <p className="text-gray-300 mb-6">
                Whether SSB or cash-out refinancing is better for you depends on
                your age, location, property status, and financial goals. Get
                free expert advice to find the right solution.
              </p>
              <ul className="space-y-3">
                {[
                  "Free consultation with refinancing expert",
                  "Compare SSB vs cash-out options",
                  "Help with eligibility assessment",
                  "No obligation to proceed",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <LeadForm
                variant="hero"
                source="reverse-mortgage"
                lang="en"
                showAllFields={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Related Guides
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Cash-Out Refinancing Guide",
                description:
                  "Complete guide to cash-out refinancing in Malaysia",
                link: "/cash-out-refinance-malaysia",
              },
              {
                title: "Refinance Fully Paid Home",
                description: "Options for homes with no outstanding loan",
                link: "/refinance-rumah-habis-bayar",
              },
              {
                title: "DSR Calculator",
                description: "Check if you qualify for refinancing",
                link: "/dsr-calculator",
              },
              {
                title: "Best Refinancing Banks",
                description: "Compare rates from all major banks",
                link: "/en/best-refinance-banks",
              },
            ].map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                <span className="text-primary-600 text-sm font-medium inline-flex items-center gap-1">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
              <LeadForm
                variant="modal"
                source="reverse-mortgage-modal"
                lang="en"
                showAllFields={true}
              />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Unlock Home Equity"
        buttonText="Get Free Quote"
      />
    </>
  );
}
