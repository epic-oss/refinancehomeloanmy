"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  FileText,
  Clock,
  Users,
  ShieldCheck,
  HelpCircle,
  ChevronDown
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

const rejectionReasons = [
  {
    title: "High DSR (Debt Service Ratio)",
    description: "Your monthly debt payments exceed 60-70% of your income. Banks see this as too risky.",
    icon: "📊",
  },
  {
    title: "Poor CCRIS/CTOS Record",
    description: "Late payments, defaults, or too many active credit facilities affect your credit standing.",
    icon: "📋",
  },
  {
    title: "Insufficient Income Documentation",
    description: "Banks couldn't verify your income properly. Common for commission-based or irregular income.",
    icon: "📄",
  },
  {
    title: "Unstable Employment",
    description: "Job hopping, probation period, or less than 6 months with current employer raises red flags.",
    icon: "💼",
  },
  {
    title: "Property Issues",
    description: "Low valuation, problematic title, leasehold with short remaining years, or location concerns.",
    icon: "🏠",
  },
  {
    title: "Too Many Existing Loans",
    description: "Multiple car loans, personal loans, or credit cards max out your borrowing capacity.",
    icon: "💳",
  },
  {
    title: "Self-Employed Without Proper Documents",
    description: "Missing business registration, tax returns, or audited accounts for self-employed applicants.",
    icon: "📑",
  },
  {
    title: "Age Near Retirement",
    description: "Loan tenure limited if you're close to 65-70 years old, affecting affordability calculations.",
    icon: "👴",
  },
];

const nextSteps = [
  {
    step: 1,
    title: "Request the Rejection Reason",
    description: "Banks are required to provide a reason for rejection. Call or visit your branch to get specific feedback. This helps you know exactly what to fix.",
  },
  {
    step: 2,
    title: "Check Your CCRIS/CTOS Report",
    description: "Get your credit report from Bank Negara (CCRIS) and CTOS. Look for errors, late payments, or accounts you forgot about. Dispute any inaccuracies.",
  },
  {
    step: 3,
    title: "Calculate Your DSR",
    description: "Use our DSR Calculator to see your current debt ratio. If it's above 60%, work on reducing debts before reapplying.",
    link: "/dsr-calculator",
    linkText: "Use DSR Calculator →",
  },
  {
    step: 4,
    title: "Wait Before Reapplying to Same Bank",
    description: "Wait 3-6 months before applying to the same bank. Use this time to improve your profile. Multiple rejections look bad on your record.",
  },
  {
    step: 5,
    title: "Try a Different Bank",
    description: "Different banks have different DSR requirements and risk appetites. Hong Leong accepts up to 75% DSR while Public Bank caps at 60-65%.",
  },
  {
    step: 6,
    title: "Work With a Mortgage Broker",
    description: "Brokers know which banks approve specific situations. They can match your profile to the right bank, improving your approval chances significantly.",
  },
];

const brokerBenefits = [
  {
    title: "Know Which Banks Approve Tough Cases",
    description: "Brokers work with all major banks and know their internal approval criteria that aren't publicly available.",
  },
  {
    title: "Higher Approval Rate Than Direct Application",
    description: "Proper packaging and bank matching leads to significantly higher success rates for challenging profiles.",
  },
  {
    title: "No Upfront Cost to You",
    description: "Brokers are paid by the bank upon successful disbursement. You pay nothing for their service.",
  },
  {
    title: "Handle All Paperwork",
    description: "From document preparation to bank liaison, brokers manage the entire process so you don't have to.",
  },
  {
    title: "Match You to the Right Bank",
    description: "Based on your specific profile, income type, and property, they recommend banks most likely to approve.",
  },
];

const toughCases = [
  "High DSR (60-80%)",
  "Self-employed / Business owners",
  "Commission-based income",
  "Previous loan rejections",
  "Multiple existing loans",
  "Near retirement age (55-65)",
  "Irregular income patterns",
  "Recent job changes",
];

const bankComparison = [
  { bank: "Hong Leong", maxDSR: "75%", selfEmployed: "Flexible", notes: "Best for high DSR cases", slug: "hong-leong" },
  { bank: "CIMB", maxDSR: "70%", selfEmployed: "Flexible", notes: "Good for business owners", slug: "cimb" },
  { bank: "Maybank", maxDSR: "70%", selfEmployed: "Standard", notes: "Largest bank, most options", slug: "maybank" },
  { bank: "Public Bank", maxDSR: "60-65%", selfEmployed: "Strict", notes: "Lowest rates but strict criteria", slug: "public-bank" },
  { bank: "RHB", maxDSR: "70%", selfEmployed: "Standard", notes: "Fast processing times", slug: "rhb" },
  { bank: "AmBank", maxDSR: "70%", selfEmployed: "Flexible", notes: "Good cashback promotions", slug: "ambank" },
];

const faqs = [
  {
    question: "What should I do if my home loan is rejected?",
    answer: "First, request the specific rejection reason from the bank. Then check your CCRIS/CTOS report for issues, calculate your DSR, and wait 3-6 months before reapplying to the same bank. Consider trying a different bank with more flexible criteria or working with a mortgage broker who specializes in tough cases.",
  },
  {
    question: "What happens if you get denied a home loan?",
    answer: "A home loan rejection is recorded in your CCRIS report and stays visible for 12 months. Multiple rejections can make future applications harder as banks see you as higher risk. However, one rejection won't significantly damage your profile if you take steps to improve before reapplying.",
  },
  {
    question: "Can I apply for a home loan again after rejection?",
    answer: "Yes, you can reapply. For the same bank, wait 3-6 months and address the rejection reason first. You can apply to a different bank immediately, but only if the rejection wasn't due to fundamental issues like bad credit history or excessive debt.",
  },
  {
    question: "How long should I wait before reapplying for a home loan?",
    answer: "Wait at least 3-6 months before reapplying to the same bank. This gives you time to improve your profile (reduce debt, save more, fix credit issues). You can apply to a different bank sooner if the rejection reason doesn't apply to their criteria.",
  },
  {
    question: "Does loan rejection affect my CTOS score?",
    answer: "The rejection itself doesn't directly lower your CTOS score, but the credit inquiry from the application is recorded. Multiple inquiries in a short period can slightly impact your score. More importantly, the rejection appears in your CCRIS report for 12 months.",
  },
  {
    question: "Can I apply to multiple banks at the same time?",
    answer: "You can, but it's not recommended. Multiple simultaneous applications create multiple credit inquiries, which can look desperate to banks. It's better to apply strategically to 1-2 banks that best match your profile, or use a broker who can submit to multiple banks with a single inquiry.",
  },
  {
    question: "What documents do I need to reapply for a home loan?",
    answer: "You'll need updated documents: latest 3-month salary slips, 6-month bank statements, updated EA form or tax returns, current loan statements showing reduced balances, and any documents that address the original rejection reason (e.g., employment confirmation letter if stability was the issue).",
  },
  {
    question: "How can I improve my DSR to get approved?",
    answer: "To lower your DSR: pay off or reduce credit card balances, settle small personal loans, extend car loan tenure to reduce monthly payments, increase your income (side job, overtime), or add a co-borrower with income. Even small reductions can make the difference between approval and rejection.",
  },
  {
    question: "Will a mortgage broker guarantee my loan approval?",
    answer: "No broker can guarantee approval, but they significantly improve your chances. Brokers know bank-specific criteria, can package your application optimally, and will only submit to banks likely to approve. Their success rate is typically much higher than direct applications for challenging profiles.",
  },
  {
    question: "Is it better to go directly to bank or use a broker?",
    answer: "For straightforward cases (stable job, low DSR, clean credit), direct application is fine. For challenging situations (self-employed, high DSR, previous rejections), a broker is highly recommended. Brokers cost you nothing and can save you from multiple rejections that hurt your credit profile.",
  },
];

export default function HomeLoanRejectedPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-300" />
            <span className="text-yellow-300 font-medium">Don&apos;t Give Up</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Home Loan Rejected in Malaysia? Here&apos;s What To Do
          </h1>
          <p className="text-lg text-red-100 mb-4">
            Getting rejected for a housing loan is frustrating, but it&apos;s not the end.
            Learn why banks reject applications and how to get approved on your next try.
          </p>
          <div className="bg-red-800/50 rounded-lg p-4 mb-6">
            <p className="text-xl font-semibold text-white">
              <span className="text-yellow-300">60%</span> of home loan applications in Malaysia get rejected.
            </p>
            <p className="text-red-200 text-sm mt-1">
              You&apos;re not alone. We specialize in helping tough cases get approved.
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-red-50 transition-all hover:scale-105"
          >
            Get Free Assessment - We Help Tough Cases
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Why Banks Reject Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Banks Reject Home Loans in Malaysia
            </h2>
            <p className="text-gray-700 mb-6">
              Understanding why your loan was rejected is the first step to getting approved.
              Here are the most common reasons banks decline home loan applications:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {rejectionReasons.map((reason, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-400">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{reason.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What To Do Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What To Do If Your Home Loan Is Rejected
            </h2>
            <p className="text-gray-700 mb-6">
              Follow these steps to improve your chances of approval on your next application:
            </p>

            <div className="space-y-4">
              {nextSteps.map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1 text-primary-600 font-medium mt-2 hover:underline"
                      >
                        {item.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How Broker Can Help Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How a Mortgage Broker Can Help
            </h2>
            <p className="text-gray-700 mb-6">
              If you&apos;ve been rejected or have a challenging profile, working with a mortgage broker
              can significantly improve your approval chances:
            </p>

            <div className="space-y-4">
              {brokerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* We Specialize in Tough Cases CTA */}
          <section className="mb-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8" />
              <h2 className="text-2xl font-bold">We Specialize in Tough Cases</h2>
            </div>
            <p className="text-primary-100 mb-6">
              Our refinancing specialists have helped hundreds of Malaysians with challenging profiles
              get approved. We know which banks to approach for each situation.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {toughCases.map((caseType, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-300" />
                  <span>{caseType}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-full hover:bg-primary-50 transition-all"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
          </section>

          {/* Bank Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Comparison: Approval Flexibility
            </h2>
            <p className="text-gray-700 mb-6">
              Different banks have different approval criteria. If one bank rejected you,
              another might approve based on their specific requirements:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold">Bank</th>
                    <th className="text-left p-4 font-semibold">Max DSR</th>
                    <th className="text-left p-4 font-semibold">Self-Employed</th>
                    <th className="text-left p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {bankComparison.map((row, index) => (
                    <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4">
                        <Link
                          href={`/${row.slug}-refinance-home-loan`}
                          className="text-primary-600 hover:underline font-medium"
                        >
                          {row.bank}
                        </Link>
                      </td>
                      <td className="p-4 font-semibold">{row.maxDSR}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          row.selfEmployed === "Flexible"
                            ? "bg-green-100 text-green-700"
                            : row.selfEmployed === "Strict"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {row.selfEmployed}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * DSR limits are guidelines and may vary based on individual circumstances.
              <Link href="/dsr-calculator" className="text-primary-600 hover:underline ml-1">
                Calculate your DSR →
              </Link>
            </p>
          </section>

          {/* Tips to Improve Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Improve Your Approval Chances
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Reduce Your DSR
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Pay off credit card balances</li>
                  <li>• Settle small personal loans</li>
                  <li>• Extend car loan tenure</li>
                  <li>• Add a co-borrower with income</li>
                  <li>• Reduce loan amount requested</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Improve Your Credit
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Pay all bills on time for 6+ months</li>
                  <li>• Reduce credit card utilization to &lt;30%</li>
                  <li>• Dispute errors on CCRIS/CTOS</li>
                  <li>• Don&apos;t close old credit accounts</li>
                  <li>• Avoid new credit applications</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-5">
                <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Strengthen Employment
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wait until probation ends</li>
                  <li>• Stay with current employer 6+ months</li>
                  <li>• Get employment confirmation letter</li>
                  <li>• Document all income sources</li>
                  <li>• Include bonus/commission letters</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Consider Alternatives
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Add a guarantor or co-borrower</li>
                  <li>• Apply for lower loan amount</li>
                  <li>• Consider different property</li>
                  <li>• Use a mortgage broker</li>
                  <li>• Try Islamic financing options</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
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
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/dsr-calculator"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">DSR Calculator</h3>
                <p className="text-sm text-blue-700">Check if your DSR is within limits</p>
              </Link>
              <Link
                href="/en/best-refinance-banks"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <h3 className="font-semibold text-green-900">Best Banks for Refinancing</h3>
                <p className="text-sm text-green-700">Compare bank rates and criteria</p>
              </Link>
              <Link
                href="/debt-consolidation-malaysia"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-purple-900">Debt Consolidation</h3>
                <p className="text-sm text-purple-700">Reduce your debt burden first</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t Let Rejection Stop You
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a free assessment from our specialists who help tough cases get approved.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-red-700 font-semibold px-8 py-4 rounded-full hover:bg-red-50 transition-all text-lg"
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
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Free Assessment</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tell us about your situation and we&apos;ll help you find the right solution.
              </p>
              <LeadForm variant="modal" source="loan-rejected-help" lang="en" showAllFields={true} />
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
            headline: `Home Loan Rejected in Malaysia? Here's What To Do (${currentYear} Guide)`,
            description: "Got rejected for housing loan? Learn why banks reject applications, how to fix common issues, and get expert help to improve your approval chances.",
            datePublished: "2026-01-26",
            dateModified: "2026-01-26",
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
        text="Rejected? We can help"
        buttonText="Free Assessment"
      />
    </>
  );
}
