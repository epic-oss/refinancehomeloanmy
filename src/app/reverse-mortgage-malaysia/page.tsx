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
  AlertTriangle,
} from "lucide-react";

const currentYear = new Date().getFullYear();

const faqs = [
  {
    question: "Is reverse mortgage legal in Malaysia?",
    answer:
      "Yes, reverse mortgages are legal in Malaysia, but they are not widely offered by banks. CAGAMAS Berhad previously offered a similar scheme called 'Skim Saraan Bercagar' but it has been discontinued. Most Malaysian banks prefer offering cash-out refinancing as an alternative.",
  },
  {
    question: "What happened to Skim Saraan Bercagar?",
    answer:
      "Skim Saraan Bercagar was launched by CAGAMAS Berhad to help senior citizens unlock their home equity. However, the scheme faced challenges including low uptake, Syariah compliance concerns, and operational difficulties. It has since been discontinued, leaving cash-out refinancing as the main alternative.",
  },
  {
    question: "Can retirees qualify for refinancing in Malaysia?",
    answer:
      "Yes, retirees can qualify for refinancing in Malaysia. Banks accept various forms of income including pension (government or private), EPF withdrawals, rental income, fixed deposit interest, and dividend income. Some banks offer refinancing to applicants up to age 70.",
  },
  {
    question: "What income do banks accept for retired applicants?",
    answer:
      "Malaysian banks accept: government pension, private pension schemes, EPF monthly withdrawals, rental income from investment properties, fixed deposit interest income, dividend income from investments, and business income if still working part-time.",
  },
  {
    question: "Is cash-out refinance Syariah compliant?",
    answer:
      "Yes, Islamic banks in Malaysia offer Syariah-compliant cash-out refinancing products. These are structured using Islamic financing principles like Musharakah Mutanaqisah (diminishing partnership) or Commodity Murabahah, making them suitable for Muslim homeowners.",
  },
  {
    question: "How long does cash-out refinancing take?",
    answer:
      "Cash-out refinancing typically takes 2-4 weeks for approval and another 4-8 weeks for disbursement after signing. The total process usually takes 6-12 weeks from application to receiving your cash. Having complete documents ready can speed up the process.",
  },
  {
    question: "Can I cash out if my house is fully paid?",
    answer:
      "Absolutely! If your house is fully paid, you actually have maximum equity available for cash-out. You can potentially access up to 80-90% of your property value through refinancing. This is one of the best scenarios for cash-out refinancing.",
  },
  {
    question: "What are the risks of cash-out refinancing?",
    answer:
      "The main risks include: monthly repayment obligations (unlike reverse mortgage), potential foreclosure if you can't make payments, longer loan tenure means more total interest paid, and your home is used as collateral. However, with proper planning and affordable repayments, these risks are manageable.",
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
              Want to unlock your home equity in retirement? Learn about reverse
              mortgage options in Malaysia and discover alternatives that might
              work better for you.
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
              A reverse mortgage is a type of loan that allows homeowners
              (typically aged 60+) to convert part of their home equity into
              cash without having to sell their home or make monthly payments.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How It Works (In Other Countries)
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
                    Homeowner (60+) with a fully or mostly paid-off home
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2. Receive Cash
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get lump sum or monthly payments based on home equity
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
                    Loan repaid when you sell, move out, or pass away
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-800">
                <strong>Countries with Reverse Mortgages:</strong> Reverse
                mortgages are popular in the United States (Home Equity
                Conversion Mortgage), Australia, United Kingdom, and Canada
                where they're regulated and widely available through major
                banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is It Available in Malaysia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-10 h-10 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Is Reverse Mortgage Available in Malaysia?
                </h2>
                <p className="text-lg text-amber-700 font-medium">
                  Very Limited / Not Widely Available
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>
                Unlike in Western countries, true reverse mortgages are{" "}
                <strong>not widely available</strong> in Malaysia. Here's what
                you need to know:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Skim Saraan Bercagar - Discontinued
                </h3>
                <p className="text-gray-600">
                  CAGAMAS Berhad (the national mortgage corporation) previously
                  offered "Skim Saraan Bercagar" - a reverse mortgage-like
                  scheme for senior citizens. However, this program has been{" "}
                  <strong>discontinued</strong> due to low uptake and
                  operational challenges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Major Banks Don't Offer It
                </h3>
                <p className="text-gray-600">
                  Maybank, CIMB, Public Bank, RHB, and other major Malaysian
                  banks do <strong>not offer</strong> true reverse mortgage
                  products. They prefer traditional refinancing options
                  instead.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  Why Isn't It Available?
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • <strong>Syariah concerns:</strong> Traditional reverse
                    mortgages have interest accumulation issues that conflict
                    with Islamic banking principles
                  </li>
                  <li>
                    • <strong>Property market differences:</strong> Malaysia's
                    property market dynamics differ from Western markets
                  </li>
                  <li>
                    • <strong>Regulatory framework:</strong> No specific
                    regulations governing reverse mortgages in Malaysia
                  </li>
                  <li>
                    • <strong>Cultural factors:</strong> Strong tradition of
                    passing property to children
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Good News: There's a Better Alternative
              </h3>
              <p className="text-green-700">
                While reverse mortgages aren't available, Malaysian homeowners
                can access their home equity through{" "}
                <strong>cash-out refinancing</strong> - which is widely
                available at all major banks and often provides better terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cash-Out Refinancing Alternative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Recommended Alternative
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Better Alternative: Cash-Out Refinancing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cash-out refinancing lets you unlock your home equity while
              keeping ownership of your home - and it's available at all major
              Malaysian banks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Cash-Out Refinancing Works
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    1
                  </div>
                  <p className="text-sm text-gray-600">
                    Get your property valued
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    2
                  </div>
                  <p className="text-sm text-gray-600">
                    Refinance for higher amount (up to 90% LTV)
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    3
                  </div>
                  <p className="text-sm text-gray-600">
                    Pay off existing loan
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    4
                  </div>
                  <p className="text-sm text-gray-600">
                    Receive the cash difference
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Reverse Mortgage vs Cash-Out Refinancing
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                      Reverse Mortgage
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold bg-green-50">
                      Cash-Out Refinance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Availability in MY
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">
                      Very Limited
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 bg-green-50 font-medium">
                      All Major Banks
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Age Requirement
                    </td>
                    <td className="border border-gray-200 px-4 py-3">60+</td>
                    <td className="border border-gray-200 px-4 py-3 bg-green-50">
                      18-70
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Monthly Payments
                    </td>
                    <td className="border border-gray-200 px-4 py-3">No</td>
                    <td className="border border-gray-200 px-4 py-3 bg-green-50">
                      Yes (can be affordable)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Interest Rate
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Higher (5-7%)
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 bg-green-50 font-medium">
                      Lower (3.5-4.5%)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Max Cash Access
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Up to 50% equity
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 bg-green-50 font-medium">
                      Up to 90% LTV
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Keep Home Ownership
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 bg-green-50">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Islamic Option
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">
                      Limited
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 bg-green-50 font-medium">
                      Available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Link
                href="/cash-out-refinance-malaysia"
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Learn More About Cash-Out Refinancing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Who Should Consider Cash-Out Refinancing?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Retirees",
                description:
                  "Supplement your pension or EPF withdrawals with a lump sum or monthly income from your home equity",
              },
              {
                icon: Home,
                title: "Home Renovations",
                description:
                  "Fund major repairs, upgrades, or accessibility modifications to your home",
              },
              {
                icon: Shield,
                title: "Medical Expenses",
                description:
                  "Cover unexpected healthcare costs or long-term medical treatments",
              },
              {
                icon: FileText,
                title: "Children's Education",
                description:
                  "Fund university fees or overseas education for children or grandchildren",
              },
              {
                icon: DollarSign,
                title: "Debt Consolidation",
                description:
                  "Pay off high-interest credit cards and personal loans at lower mortgage rates",
              },
              {
                icon: TrendingUp,
                title: "Investment Capital",
                description:
                  "Access capital for business opportunities or investment diversification",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <item.icon className="w-10 h-10 text-secondary-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Eligibility for Cash-Out Refinancing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Basic Requirements
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>
                      Property with equity (ideally 30%+ already paid off)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Age 18-70 (varies by bank)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Good credit history (CCRIS/CTOS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Proof of income to service new loan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Accepted Income (For Retirees)
                </h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Government or private pension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>EPF monthly withdrawals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Rental income from properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Fixed deposit / dividend income</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/dsr-calculator"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Check Your DSR Eligibility
              </Link>
              <Link
                href="/en/documents-required"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FileText className="w-5 h-5" />
                Documents Required
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Can You Get */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              How Much Cash Can You Get?
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Example Calculation
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Property Market Value</span>
                  <span className="font-semibold text-gray-900">
                    RM 500,000
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Outstanding Loan</span>
                  <span className="font-semibold text-gray-900">
                    RM 200,000
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">
                    Your Equity (Value - Loan)
                  </span>
                  <span className="font-semibold text-secondary-600">
                    RM 300,000
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Max New Loan (90% LTV)</span>
                  <span className="font-semibold text-gray-900">
                    RM 450,000
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                  <span className="text-green-800 font-medium">
                    Potential Cash Out
                  </span>
                  <span className="font-bold text-2xl text-green-600">
                    RM 250,000
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Actual amount depends on bank approval, DSR, and other
                factors. This is an illustrative example only.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/cash-out-calculator"
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Cash-Out Amount
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banks That Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Banks That Offer Cash-Out Refinancing
          </h2>

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
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-center transition-colors group"
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

      {/* Step by Step */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Step-by-Step: How to Get Cash from Your Home Equity
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Check Your Home Equity",
                  description:
                    "Get an estimate of your property's current market value minus your outstanding loan. You need at least 20-30% equity to qualify.",
                  link: null,
                },
                {
                  step: 2,
                  title: "Calculate Your DSR",
                  description:
                    "Ensure your Debt Service Ratio is below 70%. Include all existing loans and the new monthly payment.",
                  link: "/dsr-calculator",
                  linkText: "Use DSR Calculator",
                },
                {
                  step: 3,
                  title: "Gather Required Documents",
                  description:
                    "Prepare IC, income proof (pension/EPF statements), property documents, and existing loan statements.",
                  link: "/en/documents-required",
                  linkText: "See Document Checklist",
                },
                {
                  step: 4,
                  title: "Compare Bank Offers",
                  description:
                    "Different banks have different rates and terms. Some are more flexible with retirees or certain property types.",
                  link: "/en/best-refinance-banks",
                  linkText: "Compare Banks",
                },
                {
                  step: 5,
                  title: "Apply with the Right Bank",
                  description:
                    "Submit your application with complete documents. We can help match you with the best bank for your profile.",
                  link: null,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-600">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
                      >
                        {item.linkText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
                Want to Unlock Your Home Equity?
              </h2>
              <p className="text-gray-300 mb-6">
                Get expert advice on the best option for your situation. Our
                specialists will help you understand your options and find the
                right bank for your profile.
              </p>
              <ul className="space-y-3">
                {[
                  "Free consultation with refinancing expert",
                  "Compare offers from 15+ banks",
                  "No obligation to proceed",
                  "Help with document preparation",
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
                description: "Complete guide to cash-out refinancing in Malaysia",
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
