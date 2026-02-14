import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const currentYear = new Date().getFullYear();

// HSBC Products data
const hsbcProducts = [
  {
    name: "HSBC HomeSmart",
    features: [
      "Standard home loan / refinancing package",
      "Competitive rates from 4.30%",
      "Up to 85% financing margin",
      "Up to RM50,000 upfront costs waived",
      "Up to 35 years tenure",
    ],
    highlight: "Best for Refinancing",
  },
  {
    name: "HSBC SmartMortgage",
    features: [
      "Current account linked to mortgage",
      "Savings offset your loan interest",
      "Withdraw anytime — full liquidity",
      "Best for those with cash reserves",
      "Significant interest savings over tenure",
    ],
    highlight: "Offset Account",
  },
  {
    name: "HSBC Amanah Home Financing-i",
    features: [
      "Syariah-compliant home financing",
      "Same benefits as conventional products",
      "Competitive profit rates",
      "Up to 85% financing margin",
      "Approved by Syariah Advisory Committee",
    ],
    highlight: "Islamic Option",
  },
];

// HSBC Rates table data
const hsbcRates = [
  {
    product: "HomeSmart",
    effectiveRate: "From 4.30%",
    lockIn: "3 years",
    margin: "Up to 85%",
  },
  {
    product: "SmartMortgage",
    effectiveRate: "From 4.40%",
    lockIn: "3 years",
    margin: "Up to 85%",
  },
  {
    product: "Amanah Home Financing-i",
    effectiveRate: "From 4.35%",
    lockIn: "3 years",
    margin: "Up to 85%",
  },
];

// Costs waived breakdown
const costsWaived = [
  { item: "Legal fees", status: "Waived", savings: "RM2,000 - RM5,000" },
  { item: "Valuation fees", status: "Waived", savings: "RM300 - RM500" },
  { item: "Stamp duty subsidy", status: "Partial", savings: "Up to RM40,000+" },
];

// Benefits data
const benefits = [
  {
    title: "Up to RM50k Costs Waived",
    description: "Legal fees, valuation fees, and stamp duty subsidy — significant upfront savings that most banks don't offer.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "SmartMortgage Offset",
    description: "Link your current account to offset mortgage interest. Only pay interest on the net balance — keep full access to your cash.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "International Bank Stability",
    description: "HSBC is one of the world's largest banking groups, offering stability, strong governance, and a trusted global reputation.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Expat & Foreigner Friendly",
    description: "One of the most welcoming banks for expats, PR holders, and MM2H participants in Malaysia. Familiar with foreign income documentation.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Premier Banking Perks",
    description: "High-value customers enjoy HSBC Premier benefits including dedicated relationship manager and exclusive preferential rates.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Conventional & Islamic",
    description: "Both conventional (HomeSmart) and Syariah-compliant (Amanah) financing options available with similar benefits.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

// Bank comparison data
const bankComparison = [
  { bank: "HSBC", rate: "4.30%", minIncome: "RM8,000", margin: "85%", costsWaived: "Up to RM50k", foreigners: "Yes", offset: "SmartMortgage", bestFor: "Cost savings", link: "#" },
  { bank: "Standard Chartered", rate: "3.90%", minIncome: "RM8,000", margin: "90%", costsWaived: "Varies", foreigners: "Yes", offset: "MortgageOne", bestFor: "Lowest rate", link: "/standard-chartered-refinance-home-loan" },
  { bank: "UOB", rate: "4.61%", minIncome: "RM5,000", margin: "95%", costsWaived: "Varies", foreigners: "Yes", offset: "Flexi", bestFor: "High margin", link: "/uob-refinance-home-loan" },
];

// Documents data
const salariedDocs = [
  "IC (MyKad) / Passport",
  "Latest 3 months payslips",
  "Latest EA form",
  "6 months bank statements",
  "Current loan statements",
  "Property documents (S&P, title)",
];

const selfEmployedDocs = [
  "Business registration (SSM)",
  "2 years audited accounts",
  "2 years tax returns (Form B/BE)",
  "6 months bank statements",
  "Business profile",
  "Property documents",
];

const expatDocs = [
  "Passport with valid visa",
  "Employment pass / work permit",
  "Employment contract",
  "Latest 6 months bank statements",
  "Current loan statements (if any)",
  "Property documents",
];

// Application steps
const applicationSteps = [
  { step: 1, title: "Check Eligibility", description: "Use our DSR calculator to check if you qualify for HSBC", link: "/dsr-calculator" },
  { step: 2, title: "Gather Documents", description: "Prepare all required documents based on your employment type", link: "/en/documents-required" },
  { step: 3, title: "Apply Online or Visit Branch", description: "Submit application via hsbc.com.my or visit any HSBC branch" },
  { step: 4, title: "Property Valuation", description: "HSBC arranges an independent property valuation" },
  { step: 5, title: "Loan Approval", description: "Approval typically within 2-4 weeks" },
  { step: 6, title: "Legal Documentation", description: "Sign loan agreement with appointed lawyer" },
  { step: 7, title: "Disbursement", description: "Loan disbursed to settle your existing loan" },
];

// Who should consider
const goodFor = [
  "High income earners (RM8,000+/month)",
  "Those who want upfront costs waived (up to RM50k)",
  "Expats and foreigners working in Malaysia",
  "Customers with cash reserves (SmartMortgage offset)",
  "HSBC Premier existing customers",
];

const notIdealFor = [
  "Income below RM8,000/month",
  "Those needing high margin (90%+)",
  "Those seeking the absolute lowest rates",
  "Average income earners seeking basic refinancing",
];

// FAQs
const faqs = [
  {
    question: "Is HSBC good for home loan refinancing in Malaysia?",
    answer: "Yes, HSBC is a strong option for refinancing, especially if you earn above RM8,000/month. Their key advantage is waiving up to RM50,000 in upfront costs (legal fees, valuation, stamp duty subsidy), which can offset the slightly higher rate compared to some competitors. The SmartMortgage offset feature is also valuable for those with large cash reserves.",
  },
  {
    question: "What is HSBC home loan interest rate?",
    answer: `HSBC home loan rates in ${currentYear} start from 4.30% for HomeSmart, 4.40% for SmartMortgage (offset account), and 4.35% for Amanah Home Financing-i (Islamic). Actual rates depend on your income, loan amount, and credit profile. HSBC Premier customers may access preferential rates.`,
  },
  {
    question: "What is the minimum salary for HSBC home loan?",
    answer: "HSBC requires a minimum income of RM8,000 per month for home loan applications. This is higher than most Malaysian banks (which typically require RM3,000-5,000). However, this threshold comes with premium banking benefits. If you don\u2019t meet this requirement, consider Maybank (RM3,000), CIMB (RM3,000), or Public Bank (RM3,000).",
  },
  {
    question: "Can foreigners get HSBC home loan in Malaysia?",
    answer: "Yes, HSBC is one of the most expat-friendly banks in Malaysia. They accept applications from foreigners with valid employment pass, work permits, and MM2H visa holders. Foreigners typically get up to 70-80% margin. HSBC\u2019s international presence makes them very comfortable handling foreign income documentation.",
  },
  {
    question: "What is HSBC SmartMortgage?",
    answer: "SmartMortgage is HSBC\u2019s offset mortgage product. It links your current account to your home loan so you only pay interest on the net balance (loan minus account balance). For example, with a RM500,000 loan and RM100,000 in your account, you only pay interest on RM400,000. You retain full access to your money anytime.",
  },
  {
    question: "Does HSBC waive refinancing costs?",
    answer: "Yes, HSBC can waive up to RM50,000 in upfront refinancing costs. This includes legal fees, valuation fees, and a stamp duty subsidy. This is one of HSBC\u2019s biggest advantages and can save you significant money compared to other banks. Terms apply and amounts depend on loan size and eligibility.",
  },
  {
    question: "Does HSBC offer Islamic home financing?",
    answer: "Yes, HSBC offers Amanah Home Financing-i which is their Syariah-compliant home financing option. It offers competitive profit rates from 4.35%, up to 85% margin, and is approved by HSBC\u2019s Syariah Advisory Committee. It provides the same core benefits as conventional products.",
  },
  {
    question: "How long does HSBC refinancing approval take?",
    answer: "HSBC refinancing typically takes 2-4 weeks for loan approval after submitting a complete application. The entire process from application to disbursement takes approximately 6-10 weeks, including property valuation, legal documentation, and fund transfer.",
  },
];

export default function HSBCRefinanceHomeLoanPage() {
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `HSBC Refinance Home Loan Malaysia ${currentYear}`,
    description: "HSBC home loan refinancing Malaysia. HomeSmart package, competitive rates from 4.30%, up to RM50,000 upfront costs waived.",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
    author: {
      "@type": "Organization",
      name: "RefinanceHomeLoanMY",
    },
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
                HSBC Malaysia
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                HSBC Refinance Home Loan Malaysia {currentYear}
              </h1>
              <p className="text-lg md:text-xl text-red-100 mb-6">
                HomeSmart package with up to RM50,000 upfront costs waived
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">4.30%</p>
                  <p className="text-sm text-red-200">From Rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-red-200">Max Margin</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">35 Yrs</p>
                  <p className="text-sm text-red-200">Max Tenure</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">RM50k</p>
                  <p className="text-sm text-red-200">Costs Waived</p>
                </div>
              </div>

              <Link
                href="#quote-form"
                className="inline-block bg-white text-red-900 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">HSBC Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "Up to RM50,000 upfront costs waived",
                    "SmartMortgage offset account saves interest",
                    "Premier banking perks for high-value customers",
                    "Expat & foreigner friendly",
                    "Conventional & Islamic financing available",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HSBC Home Loan Products
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choose the right HSBC product for your refinancing needs
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {hsbcProducts.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-red-200 transition-colors">
                  <div className="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {product.highlight}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{product.name}</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HSBC Refinance Rates {currentYear}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare rates across HSBC home loan products
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-red-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Product</th>
                    <th className="px-6 py-4 text-center">Effective Rate</th>
                    <th className="px-6 py-4 text-center">Lock-in</th>
                    <th className="px-6 py-4 text-center">Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {hsbcRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{rate.product}</td>
                      <td className="px-6 py-4 text-center font-semibold text-red-600">{rate.effectiveRate}</td>
                      <td className="px-6 py-4 text-center">{rate.lockIn}</td>
                      <td className="px-6 py-4 text-center">{rate.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Rates as of February {currentYear}. Subject to change based on credit profile and loan amount.
            </p>
          </div>
        </div>
      </section>

      {/* RM50k Costs Waived Section */}
      <section className="py-12 md:py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Up to RM50,000 Upfront Costs Waived
            </h2>
            <p className="text-gray-600 text-center mb-8">
              HSBC&apos;s key differentiator — save thousands on refinancing costs
            </p>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Cost Item</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-right font-semibold text-gray-900">Estimated Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {costsWaived.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-gray-700">{row.item}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${row.status === "Waived" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-green-600">{row.savings}</td>
                    </tr>
                  ))}
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Total Potential Savings</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-right font-bold text-green-700 text-lg">Up to RM50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-sm text-amber-800">
                <strong>Terms apply.</strong> Costs waived are subject to loan amount, eligibility criteria, and HSBC&apos;s prevailing terms and conditions. Contact us for the latest promotional details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Why Refinance with HSBC?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Key advantages of choosing HSBC for your home loan refinancing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HSBC Refinance Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check if you qualify for HSBC home loan refinancing
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Citizenship</p>
                      <p className="text-sm text-gray-600">Malaysian citizens, PR, foreigners & expats</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Age</p>
                      <p className="text-sm text-gray-600">21 - 65 years old</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Minimum Income</p>
                      <p className="text-sm text-gray-600"><strong>RM8,000/month</strong> (higher than most banks)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Employment</p>
                      <p className="text-sm text-gray-600">Professionals, executives, business owners</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">DSR Limit</p>
                      <p className="text-sm text-gray-600">Up to 70% (check with <Link href="/dsr-calculator" className="text-red-600 hover:underline">DSR calculator</Link>)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Credit Record</p>
                      <p className="text-sm text-gray-600">Good CCRIS/CTOS record required</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Already an HSBC Premier Customer?</h4>
                <p className="text-sm text-red-800">
                  Existing HSBC Premier clients may qualify for preferential rates, higher margin, and faster processing. Contact your relationship manager for exclusive refinancing offers.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link
                  href="/dsr-calculator"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                >
                  Check your eligibility with our DSR Calculator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Don't Meet RM8k Box */}
            <div className="mt-6 bg-amber-50 rounded-xl shadow-lg p-6 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3">Don&apos;t Meet the RM8,000 Minimum?</h3>
              <p className="text-sm text-amber-800 mb-4">
                HSBC&apos;s higher income requirement isn&apos;t for everyone. Here are alternatives with lower minimums:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link href="/maybank-refinance-home-loan" className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">Maybank</p>
                  <p className="text-xs text-gray-500">From RM3,000/mo</p>
                </Link>
                <Link href="/cimb-refinance-home-loan" className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">CIMB</p>
                  <p className="text-xs text-gray-500">From RM3,000/mo</p>
                </Link>
                <Link href="/public-bank-refinance-home-loan" className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">Public Bank</p>
                  <p className="text-xs text-gray-500">From RM3,000/mo</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSBC vs Other Premium Banks */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HSBC vs Other Premium Banks
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare HSBC with other premium banking options for refinancing
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-4 text-left">Feature</th>
                    {bankComparison.map((bank, idx) => (
                      <th key={idx} className={`px-4 py-4 text-center ${idx === 0 ? "bg-red-50" : ""}`}>
                        {bank.bank}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Rate</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center font-semibold ${idx === 0 ? "bg-red-50/50 text-red-600" : ""}`}>{bank.rate}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Min Income</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center ${idx === 0 ? "bg-red-50/50" : ""}`}>{bank.minIncome}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Margin</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center ${idx === 0 ? "bg-red-50/50" : ""}`}>{bank.margin}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Costs Waived</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center ${idx === 0 ? "bg-red-50/50 font-semibold text-green-600" : ""}`}>{bank.costsWaived}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Foreigners</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center ${idx === 0 ? "bg-red-50/50" : ""}`}>{bank.foreigners}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Offset Account</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center ${idx === 0 ? "bg-red-50/50" : ""}`}>{bank.offset}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Best For</td>
                    {bankComparison.map((bank, idx) => (
                      <td key={idx} className={`px-4 py-3 text-center font-medium ${idx === 0 ? "bg-red-50/50 text-red-700" : "text-gray-700"}`}>{bank.bestFor}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              {bankComparison.filter(b => b.link !== "#").map((bank, idx) => (
                <Link
                  key={idx}
                  href={bank.link}
                  className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center gap-1"
                >
                  {bank.bank} details
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Documents Required for HSBC Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Prepare these documents before applying
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Salaried Employees
                </h3>
                <ul className="space-y-2">
                  {salariedDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Self-Employed
                </h3>
                <ul className="space-y-2">
                  {selfEmployedDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Expats & Foreigners
                </h3>
                <ul className="space-y-2">
                  {expatDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/en/documents-required"
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-2"
              >
                View complete document checklist
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How to Apply for HSBC Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Step-by-step process to refinance your home loan with HSBC
            </p>

            <div className="space-y-4">
              {applicationSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {step.link && (
                    <Link
                      href={step.link}
                      className="text-red-600 hover:text-red-700 text-sm font-medium flex-shrink-0"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HSBC Contact for Housing Loan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get in touch with HSBC or our panel of advisors
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Contact HSBC Directly</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Hotline</p>
                      <p className="font-medium">1300-88-1388</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">hsbc.com.my/mortgages</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Premier Banking</p>
                      <p className="font-medium">Dedicated hotline for high-value customers</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Branches</p>
                      <p className="font-medium">Major cities across Malaysia</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-bold text-gray-900 mb-2">Get Free Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our panel of advisors can help compare HSBC with other banks and find the best rate for you.
                </p>
                <ul className="space-y-2 mb-4">
                  {["Compare rates from 15+ banks", "Free eligibility check", "No obligation quote"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#quote-form"
                  className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider HSBC */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Who Should Consider HSBC?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
                <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Good For
                </h3>
                <ul className="space-y-3">
                  {goodFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200">
                <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Not Ideal For
                </h3>
                <ul className="space-y-3">
                  {notIdealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use a Broker Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Why Use a Broker Instead of Going Direct?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Our service is 100% free — here&apos;s what you get
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Apply Direct</th>
                    <th className="px-6 py-4 text-center bg-green-50">Through Us</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: "Banks compared", direct: "1 bank", broker: "15+ banks" },
                    { feature: "Rate negotiation", direct: "You negotiate", broker: "We negotiate for you" },
                    { feature: "Application handling", direct: "You do everything", broker: "We handle paperwork" },
                    { feature: "Processing time", direct: "Standard", broker: "Often faster" },
                    { feature: "Access to unpublished rates", direct: "No", broker: "Yes" },
                    { feature: "Cost", direct: "Free", broker: "Free" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-3 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-3 text-center text-gray-600">{row.direct}</td>
                      <td className="px-6 py-3 text-center bg-green-50/50 font-medium text-green-700">{row.broker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              HSBC Refinance FAQs
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
      <section id="quote-form" className="py-12 md:py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              Get HSBC Refinancing Quote
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare HSBC with other premium banks — free assessment
            </p>
            <LeadForm variant="hero" source="hsbc-refinance" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Compare Other Banks
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/standard-chartered-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  Standard Chartered Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 3.90% • MortgageOne offset
                </p>
              </Link>

              <Link
                href="/uob-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  UOB Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.61% • Up to 95% margin
                </p>
              </Link>

              <Link
                href="/maybank-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  Maybank Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.35% • Up to 90% margin
                </p>
              </Link>

              <Link
                href="/refinance-home-loan-rates-malaysia"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  All Refinance Rates
                </h3>
                <p className="text-sm text-gray-600">
                  Compare 15+ banks side by side
                </p>
              </Link>

              <Link
                href="/en/best-refinance-banks"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  Best Refinance Banks
                </h3>
                <p className="text-sm text-gray-600">
                  Compare all banks in Malaysia
                </p>
              </Link>

              <Link
                href="/calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  Refinance Calculator
                </h3>
                <p className="text-sm text-gray-600">
                  Calculate your savings
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
