"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Check, X } from "lucide-react";

const faqs = [
  {
    question: "What is UOB refinance home loan rate in 2026?",
    answer: "UOB's Intelligent Home Loan offers a refinance rate from 4.61% p.a. (SBR - 3.00%) in 2026. The Flexi Mortgage starts from 4.81%, and the Islamic Home Financing-i starts from approximately 4.65%. Actual rates depend on your credit profile, loan amount, and property type. UOB uses the Standardised Base Rate (SBR) system set by Bank Negara Malaysia.",
  },
  {
    question: "Can foreigners apply for UOB housing loan in Malaysia?",
    answer: "Yes, UOB is one of the few Malaysian banks that actively accepts home loan applications from foreigners and permanent residents (PR). Foreigners typically get up to 70-80% financing margin compared to 90-95% for Malaysian citizens. Additional documents like work permit, employment pass, and passport are required. UOB's Singapore heritage makes them more foreigner-friendly than most local banks.",
  },
  {
    question: "What is UOB's maximum loan margin for refinancing?",
    answer: "UOB offers up to 95% financing margin including MRTA for the Intelligent Home Loan and Home Financing-i products — one of the highest in Malaysia. Most other banks cap at 90%. The Flexi Mortgage offers up to 90% margin. Actual margin depends on property type, location, borrower profile, and existing commitments.",
  },
  {
    question: "Does UOB charge processing fees for refinancing?",
    answer: "No, UOB typically waives the processing fee for refinancing applications, saving you approximately RM200-500 compared to banks like Maybank or Public Bank that charge standard processing fees. However, you'll still need to budget for legal fees (0.4-1% of loan), stamp duty (0.5%), and valuation fee (RM200-RM1,500).",
  },
  {
    question: "How long does UOB refinance approval take?",
    answer: "UOB refinance approval typically takes 2-4 weeks from complete document submission. The entire process from application to disbursement usually takes 2-3 months. This includes: document verification (3-5 days), credit assessment (1-2 weeks), property valuation (1-2 weeks), approval (1-2 weeks), legal documentation (3-5 weeks), and disbursement.",
  },
  {
    question: "Does UOB offer Islamic home financing for refinancing?",
    answer: "Yes, UOB offers Home Financing-i, a Syariah-compliant Islamic home loan based on the Tawarruq (Commodity Murabahah) concept. It offers competitive profit rates from approximately 4.65%, up to 95% margin, and a 100% stamp duty waiver when converting from conventional to Islamic financing — a significant saving that other banks rarely offer.",
  },
  {
    question: "Can I refinance from Maybank or CIMB to UOB?",
    answer: "Yes, you can refinance from any bank including Maybank, CIMB, Public Bank, RHB, or Hong Leong to UOB. UOB will settle your existing loan and create a new loan facility. Ensure your current lock-in period has ended to avoid early settlement penalties (typically 2-3% of outstanding balance). A broker can help calculate if switching to UOB saves money after all costs.",
  },
  {
    question: "What is UOB redraw facility and how does it work?",
    answer: "UOB's redraw facility allows you to access extra payments you've made above your minimum monthly instalment. For example, if you paid RM500 extra per month for 12 months, you could redraw up to RM6,000 when needed — without applying for a new loan. This is available on the Intelligent Home Loan and provides flexibility for emergencies or opportunities.",
  },
];

export default function UOBRefinanceHomeLoanPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "UOB Refinance Home Loan Malaysia 2026 – Rates, Review & Guide",
            description: "Complete guide to UOB home loan refinancing. Rates from 4.61%, 95% margin, waived processing fees, Islamic financing available.",
            datePublished: "2025-12-01",
            dateModified: "2026-02-15",
            author: { "@type": "Organization", name: "RefinanceHomeLoanMY" },
            publisher: { "@type": "Organization", name: "RefinanceHomeLoanMY", url: "https://refinancehomeloanmy.com" },
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
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
            UOB Malaysia
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            UOB Refinance Home Loan Malaysia 2026
          </h1>
          <p className="text-lg text-blue-100 mb-2">
            Complete guide to UOB refinancing — 95% margin, waived processing fees, redraw facility & Islamic option.
          </p>
          <p className="text-sm text-blue-200 mb-6">Updated: February 2026</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Quick Summary Box */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-4">UOB Refinance at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">4.61%</p>
                <p className="text-xs text-gray-600">Rate From</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">95%</p>
                <p className="text-xs text-gray-600">Max Margin</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">35 Yrs</p>
                <p className="text-xs text-gray-600">Max Tenure</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">RM3k</p>
                <p className="text-xs text-gray-600">Min Income</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">3 Yrs</p>
                <p className="text-xs text-gray-600">Lock-in</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-700">Waived</p>
                <p className="text-xs text-gray-600">Processing Fee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* UOB Products Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              UOB Home Loan Products for Refinancing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Intelligent Home Loan",
                  highlight: "Best for Refinancing",
                  rate: "4.61%",
                  features: ["Flexible refinancing packages", "Up to 95% margin incl. MRTA", "Redraw facility for cash access", "No processing fees"],
                },
                {
                  name: "Flexi Mortgage",
                  highlight: "Best for Flexibility",
                  rate: "4.81%",
                  features: ["Linked to current account", "Save on interest daily", "Quick cash access anytime", "Weekly/fortnightly payments"],
                },
                {
                  name: "Home Financing-i",
                  highlight: "Islamic Option",
                  rate: "4.65%",
                  features: ["Syariah-compliant (Tawarruq)", "100% stamp duty waiver", "Up to 95% margin", "Competitive profit rates"],
                },
              ].map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-blue-200 transition-colors">
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {product.highlight}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3">From {product.rate}</p>
                  <ul className="space-y-2">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              *SBR = Standardised Base Rate (3.61% as of 2026). Rates subject to change.
            </p>
          </section>

          {/* Example Savings Calculation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How Much Can You Save with UOB Refinancing?
            </h2>
            <p className="text-gray-600 mb-6">
              Example: RM500,000 property, RM300,000 outstanding loan, 30 years remaining tenure.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-red-800">Your Current Loan</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Interest Rate</span><span className="font-semibold">5.10%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Monthly Payment</span><span className="font-semibold">RM1,633</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Total Interest (30yr)</span><span className="font-semibold">RM287,880</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-green-800">Refinance with UOB</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Interest Rate</span><span className="font-semibold text-green-700">4.61%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Monthly Payment</span><span className="font-semibold text-green-700">RM1,541</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Total Interest (30yr)</span><span className="font-semibold text-green-700">RM254,760</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-xl p-6 text-center">
              <p className="text-sm text-green-800 mb-1">Your Estimated Savings</p>
              <p className="text-3xl font-bold text-green-700 mb-2">RM92/month</p>
              <p className="text-lg font-semibold text-green-700">RM33,120 total over 30 years</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Link href="/calculator" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Calculate Your Savings <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dsr-calculator" className="inline-flex items-center gap-2 bg-white border border-blue-300 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Check Your DSR
              </Link>
              <Link href="/cash-out-calculator" className="inline-flex items-center gap-2 bg-white border border-blue-300 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Calculate Cash-Out
              </Link>
            </div>
          </section>

          {/* Why UOB Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Is UOB Good for Refinancing? Honest Review
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> UOB Advantages
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>95% financing margin</strong> — highest among major banks, including MRTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Waived processing fees</strong> — save RM200-500 upfront vs other banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Redraw facility</strong> — access extra payments anytime. <Link href="/cash-out-calculator" className="text-primary-600 hover:underline">Calculate cash-out</Link></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Open to foreigners</strong> — one of few banks welcoming foreign applicants &amp; PRs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> Things to Consider
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Higher starting rate</strong> — 4.61% vs 3.80-4.35% at some competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>3-year lock-in</strong> — standard early exit penalty of 2-3%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Smaller branch network</strong> — fewer branches than Maybank, CIMB, Public Bank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Niche positioning</strong> — best for high-margin or foreigner needs, not lowest rate</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-semibold text-blue-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                Borrowers who need the highest financing margin (95%), foreigners/PRs looking for a welcoming bank, or those who value the redraw facility and waived processing fees. Ideal if margin and flexibility matter more than getting the absolute lowest interest rate.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              UOB Refinance Eligibility Requirements
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Age", value: "21 – 65 years old" },
                  { label: "Citizenship", value: "Malaysian citizens, PR, or foreigners" },
                  { label: "Min Income", value: "RM3,000/month (salaried & self-employed)" },
                  { label: "Loan Type", value: "Conventional & Islamic (Tawarruq)" },
                  { label: "Property", value: "Residential — landed & non-landed" },
                  { label: "DSR Limit", value: "Up to 70%" },
                  { label: "Max Margin", value: "Up to 95% (incl. MRTA)" },
                  { label: "Existing Loan", value: "Any bank can refinance to UOB" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t text-center">
                <Link href="/dsr-calculator" className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                  Check your eligibility with our DSR Calculator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Bank Comparison Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              UOB vs Other Banks — Refinance Comparison 2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left p-3">Bank</th>
                    <th className="text-center p-3">Rate (%)</th>
                    <th className="text-center p-3">Islamic</th>
                    <th className="text-center p-3">Lock-in</th>
                    <th className="text-center p-3">Max Margin</th>
                    <th className="text-center p-3">Foreigners</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bank: "UOB", rate: "4.61", islamic: "Yes", lockin: "3 yrs", margin: "95%", foreigners: "Yes", highlight: true },
                    { bank: "RHB", rate: "4.10", islamic: "Yes", lockin: "3 yrs", margin: "90%", foreigners: "Limited", link: "/rhb-refinance-home-loan" },
                    { bank: "Public Bank", rate: "4.22", islamic: "Yes", lockin: "3 yrs", margin: "90%", foreigners: "No", link: "/public-bank-refinance-home-loan" },
                    { bank: "CIMB", rate: "4.35", islamic: "Yes", lockin: "3 yrs", margin: "90%", foreigners: "Yes", link: "/cimb-refinance-home-loan" },
                    { bank: "Maybank", rate: "4.35", islamic: "Yes", lockin: "3-5 yrs", margin: "90%", foreigners: "Selected", link: "/maybank-refinance-home-loan" },
                  ].map((b, idx) => (
                    <tr key={idx} className={`border-b ${b.highlight ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                      <td className="p-3">
                        {b.highlight ? (
                          <span className="text-blue-700">★ {b.bank}</span>
                        ) : b.link ? (
                          <Link href={b.link} className="text-primary-600 hover:underline">{b.bank}</Link>
                        ) : (
                          b.bank
                        )}
                      </td>
                      <td className="text-center p-3">{b.rate}</td>
                      <td className="text-center p-3">{b.islamic}</td>
                      <td className="text-center p-3">{b.lockin}</td>
                      <td className="text-center p-3">{b.margin}</td>
                      <td className="text-center p-3">{b.foreigners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Rates are indicative and subject to change.{" "}
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>
            </p>
          </section>

          {/* Application Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Apply for UOB Refinance — Step by Step
            </h2>
            <div className="bg-blue-50 rounded-lg p-3 text-center text-sm text-blue-800 font-medium mb-6">
              Typical timeline: 2–3 months from application to disbursement
            </div>
            <div className="space-y-4">
              {[
                { step: 1, title: "Check Eligibility & DSR", desc: "Use our DSR calculator to ensure you qualify. Minimum income RM3,000/month, DSR below 70%.", link: "/dsr-calculator" },
                { step: 2, title: "Gather Documents", desc: "IC, latest 3 months payslips, 3 months bank statements, EPF statement, current loan statement, property documents (S&P, title)." },
                { step: 3, title: "Submit Application", desc: "Apply through our panel for free multi-bank comparison, or apply directly to UOB online or at any branch." },
                { step: 4, title: "Valuation & Approval", desc: "UOB arranges property valuation. Credit assessment and approval decision takes 2-4 weeks from complete submission." },
                { step: 5, title: "Sign Loan Agreement", desc: "Review and sign the Letter of Offer. Complete legal documentation with UOB's appointed lawyer." },
                { step: 6, title: "Disbursement", desc: "UOB settles your existing loan with your old bank. New loan begins with lower monthly payments." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex-shrink-0 self-center">
                      Use tool →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              UOB Refinance Home Loan — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openFaqIndex === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

          {/* Compare Other Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Other Banks</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "RHB Refinance", href: "/rhb-refinance-home-loan", rate: "4.10%", note: "My1 flexible loan" },
                { name: "Maybank Refinance", href: "/maybank-refinance-home-loan", rate: "4.35%", note: "HouzKey available" },
                { name: "CIMB Refinance", href: "/cimb-refinance-home-loan", rate: "4.35%", note: "Conventional & Islamic" },
                { name: "Public Bank Refinance", href: "/public-bank-refinance-home-loan", rate: "4.22%", note: "Lowest mainstream rate" },
                { name: "Standard Chartered", href: "/standard-chartered-refinance-home-loan", rate: "3.90%", note: "Premium banking" },
                { name: "All Bank Rates", href: "/refinance-home-loan-rates-malaysia", rate: "14 banks", note: "Full comparison" },
              ].map((b, idx) => (
                <Link key={idx} href={b.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{b.name}</h3>
                  <p className="text-sm text-gray-600">From {b.rate} • {b.note}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Refinance with UOB?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote and compare UOB with other banks — takes 2 minutes.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
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
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <LeadForm variant="modal" source="uob-refinance" lang="en" showAllFields={true} />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Compare UOB rates"
        buttonText="Get Free Quote"
      />
    </>
  );
}
