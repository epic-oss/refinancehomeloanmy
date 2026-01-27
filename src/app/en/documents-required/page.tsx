"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { EligibilityCard } from "@/components/content/EligibilityCard";
import { LastUpdated } from "@/components/content/LastUpdated";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight } from "lucide-react";

const { currentYear, documents } = SITE_CONFIG;

const propertyDocuments = [
  {
    name: "Property Title / Grant (Geran)",
    description:
      "Document proving property ownership. If the title is still with the bank, request a certified copy.",
    tip: "Ensure the name on the title matches your IC exactly.",
  },
  {
    name: "Sales & Purchase Agreement (S&P)",
    description:
      "Original purchase agreement for the property. Required for ownership verification and transaction history.",
    tip: "Keep the original in a safe place. Prepare copies for the application.",
  },
  {
    name: "Current Loan Statement",
    description:
      "Recent statement showing your outstanding loan balance, interest rate, and current monthly payment.",
    tip: "Request a statement from your current bank, dated within the last month.",
  },
  {
    name: "Quit Rent Receipt (Cukai Tanah)",
    description:
      "Proof of recent land tax payment to the land office.",
    tip: "Ensure there are no arrears. Pay any outstanding amounts first.",
  },
  {
    name: "Assessment/Cukai Taksiran Receipt",
    description:
      "Proof of recent local council assessment tax payment.",
    tip: "Some banks require receipts for the last 2 years.",
  },
];

const additionalDocuments = [
  {
    name: "Commission/Bonus Statements",
    description: "If your income includes regular commission or bonuses.",
    required: "Employees with variable income",
  },
  {
    name: "Rental Income Proof",
    description: "Tenancy agreement and bank statements showing deposits.",
    required: "Property owners with rental income",
  },
  {
    name: "Dividend/Investment Statements",
    description: "Proof of income from investments or share dividends.",
    required: "Investors",
  },
  {
    name: "Spouse's Employment Letter",
    description: "If applying jointly with spouse (joint application).",
    required: "Joint applications",
  },
  {
    name: "ASB/Tabung Haji Statement",
    description: "Proof of savings to strengthen your application.",
    required: "To strengthen application",
  },
];

const tips = [
  {
    title: "Prepare Originals & Copies",
    description:
      "Bring original documents for verification and prepare at least 2 sets of copies.",
  },
  {
    title: "Ensure Documents Are Current",
    description:
      "Payslips and bank statements must be recent (within 3 months). Outdated documents will be rejected.",
  },
  {
    title: "Check Name Consistency",
    description:
      "Ensure names across all documents match your IC exactly. Any differences require supporting documents.",
  },
  {
    title: "High-Quality Scans",
    description:
      "If submitting online, ensure scans are clear and readable. Minimum 300 DPI resolution.",
  },
  {
    title: "Sign All Pages",
    description:
      "Some banks require signatures on every page of important documents.",
  },
  {
    title: "Start Early",
    description:
      "Begin collecting documents 2-4 weeks before applying. Some documents take time to obtain.",
  },
];

const mistakes = [
  {
    mistake: "Incomplete bank statements",
    solution:
      "Include ALL pages, including the first page showing name and account number.",
  },
  {
    mistake: "Payslips without company stamp",
    solution:
      "Request HR to stamp and sign the payslips. Unstamped payslips may be rejected.",
  },
  {
    mistake: "Expired documents",
    solution:
      "Check document dates. Bank statements and payslips must be within 3 months.",
  },
  {
    mistake: "Inconsistent names",
    solution:
      "If names differ (e.g., with/without bin/binti), prepare a statutory declaration.",
  },
  {
    mistake: "No proof of current address",
    solution:
      "Prepare recent utility bill or bank statement showing your current address.",
  },
  {
    mistake: "Incomplete property documents",
    solution:
      "Include ALL pages of S&P agreement and title, not just the first page.",
  },
];

const faqs = [
  {
    question: "How long before applying should I prepare documents?",
    answer:
      "We recommend starting 2-4 weeks before your application. This gives time to obtain documents that may take longer, such as EPF statements or employer confirmation letters.",
  },
  {
    question: "Can I submit documents online?",
    answer:
      "Yes, most banks now accept online submissions via email or their portals. Ensure scans are high quality (300 DPI minimum) and files are in PDF or JPEG format.",
  },
  {
    question: "What happens if my documents are incomplete?",
    answer:
      "Applications with incomplete documents will be delayed or rejected. The bank will request additional documents, which can delay the process by several weeks.",
  },
  {
    question: "Are spouse's documents required?",
    answer:
      "For joint applications, your spouse's financial documents are required. For individual applications, spouse's documents are not needed unless they are a guarantor.",
  },
  {
    question: "What if I'm self-employed for less than 2 years?",
    answer:
      "Most banks require a minimum 2-year business track record. If less, you may need a guarantor or wait until the requirement is met. Some banks are more flexible—consult our specialists.",
  },
];

export default function DocumentsRequired() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Documents Required for Refinancing in Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300">
            Complete checklist of documents needed for a successful refinancing
            application.
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
              href="/dokumen-refinance-rumah"
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
              Having complete and accurate documentation is crucial for a smooth
              and successful refinancing application. Incomplete documents are
              one of the main reasons for application delays or rejections.
            </p>
            <p className="text-lg text-gray-700">
              In this guide, we provide a comprehensive list of all documents
              required for home loan refinancing in Malaysia, along with tips to
              expedite your application process.
            </p>
          </section>

          {/* Documents for Employed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Documents for Salaried Employees
            </h2>
            <div className="bg-primary-50 rounded-xl p-6 mb-6">
              <ul className="space-y-4">
                {documents.employed.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Payslips - Important Tips
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>3 consecutive months of payslips (most recent)</li>
                  <li>Must have company letterhead and HR/manager signature</li>
                  <li>Name, position, and basic salary must be clearly shown</li>
                  <li>If salary varies, include 6 months of payslips</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Bank Statements - Important Tips
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>6 consecutive months from salary account</li>
                  <li>All pages must be included, including first page</li>
                  <li>Salary credits should be consistent each month</li>
                  <li>Avoid large suspicious withdrawals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Documents for Self-Employed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Documents for Self-Employed Applicants
            </h2>
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <ul className="space-y-4">
                {documents.selfEmployed.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Important Notes for Business Owners
              </h4>
              <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                <li>
                  Minimum 2 years of business track record required by most banks
                </li>
                <li>
                  Both personal AND business bank statements are required
                </li>
                <li>
                  2 years of income tax returns (Form B / Borang B) must be included
                </li>
                <li>
                  For Sdn Bhd companies, also include Form 24 & Form 49
                </li>
              </ul>
            </div>
          </section>

          {/* Property Documents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Property Documents
            </h2>

            <div className="space-y-4">
              {propertyDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {doc.description}
                      </p>
                      <p className="text-sm text-secondary-600 mt-2">
                        <strong>Tip:</strong> {doc.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Documents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Documents (If Applicable)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold border">
                      Document
                    </th>
                    <th className="text-left p-3 font-semibold border">
                      Description
                    </th>
                    <th className="text-left p-3 font-semibold border">
                      Required For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {additionalDocuments.map((doc, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-3 border font-medium">{doc.name}</td>
                      <td className="p-3 border text-sm text-gray-600">
                        {doc.description}
                      </td>
                      <td className="p-3 border text-sm">{doc.required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Document Checklist (Printable)
            </h2>

            <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
              <h3 className="font-semibold text-gray-900 mb-4">
                Salaried Employees:
              </h3>
              <div className="grid md:grid-cols-2 gap-2 mb-6">
                {documents.employed.map((doc, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 rounded"
                    />
                    <span className="text-sm">{doc}</span>
                  </label>
                ))}
              </div>

              <h3 className="font-semibold text-gray-900 mb-4">
                Property Documents:
              </h3>
              <div className="grid md:grid-cols-2 gap-2 mb-6">
                {propertyDocuments.map((doc, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 rounded"
                    />
                    <span className="text-sm">{doc.name}</span>
                  </label>
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center">
                Print this page and tick off documents as you prepare them
              </p>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tips for Preparing Your Documents
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-lg p-4 border border-secondary-200"
                >
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-secondary-700">{tip.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Common Application Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              {mistakes.map((item, index) => (
                <div
                  key={index}
                  className="border border-red-200 rounded-lg overflow-hidden"
                >
                  <div className="bg-red-50 px-4 py-2 border-b border-red-200">
                    <h4 className="font-semibold text-red-800">
                      {item.mistake}
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700">
                      <span className="text-green-600 font-medium">
                        Solution:
                      </span>{" "}
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Eligibility Requirements
            </h2>
            <p className="text-gray-700 mb-4">
              Besides complete documents, ensure you meet the basic eligibility
              requirements:
            </p>
            <EligibilityCard lang="en" />
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
                  Compare rates from 10+ Malaysian banks
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
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help With Your Documents?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our specialists will guide you through the document preparation
            process for a faster approval.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Help</h3>
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
              <LeadForm variant="modal" source="en-documents" lang="en" showAllFields={true} />
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
            headline: `Documents Required for Home Loan Refinancing Malaysia ${currentYear}`,
            description: `Complete checklist of documents needed for home loan refinancing in Malaysia. Requirements for salaried employees and self-employed ${currentYear}.`,
            datePublished: "2026-01-12",
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
