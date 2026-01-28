import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const currentYear = new Date().getFullYear();

// Standard Chartered Products data
const scProducts = [
  {
    name: "Standard Home Loan",
    features: [
      "Competitive fixed & variable rates",
      "Up to 90% financing margin",
      "Up to 35 years tenure",
      "No processing fees for refinancing",
      "Available for residential properties",
    ],
    highlight: "Best for Refinancing",
  },
  {
    name: "MortgageOne (Offset Account)",
    features: [
      "Linked savings offset mortgage interest",
      "Pay interest only on net balance",
      "Full access to savings anytime",
      "Significant interest savings over tenure",
      "Ideal for high cash-flow borrowers",
    ],
    highlight: "Best for Savings",
  },
  {
    name: "Saadiq Home Financing-i",
    features: [
      "Syariah-compliant financing",
      "Based on Musharakah Mutanaqisah concept",
      "Competitive profit rates",
      "Available for refinancing",
      "Approved by Syariah Advisory Committee",
    ],
    highlight: "Islamic Option",
  },
];

// Standard Chartered Rates table data
const scRates = [
  {
    product: "Standard Home Loan",
    rate: "SBR - 2.10%",
    effectiveRate: "~4.10%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
  {
    product: "MortgageOne (Offset)",
    rate: "SBR - 1.80%",
    effectiveRate: "~4.40%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
  {
    product: "Saadiq Home Financing-i",
    rate: "Based on BFR",
    effectiveRate: "~4.25%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
];

// Benefits data
const benefits = [
  {
    title: "MortgageOne Offset",
    description: "Link your savings to offset mortgage interest - only pay interest on the net balance.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Premium Banking Perks",
    description: "Access Priority Banking benefits including dedicated relationship manager and exclusive rates.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Expat & Foreigner Friendly",
    description: "One of the most welcoming banks for expats, PR holders, and MM2H participants in Malaysia.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "No Processing Fees",
    description: "Save on upfront costs with waived processing fees for refinancing applications.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "International Network",
    description: "Benefit from Standard Chartered&apos;s global presence across 59 markets for cross-border banking.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Flexible Payments",
    description: "Choose from multiple repayment options including partial prepayment without penalty after lock-in.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

// Bank comparison data
const bankComparison = [
  { bank: "Standard Chartered", rate: "4.10%", margin: "90%", lockIn: "3 years", fee: "Waived", foreigners: "Yes", link: "#" },
  { bank: "Maybank", rate: "3.88%", margin: "90%", lockIn: "3 years", fee: "~RM200", foreigners: "Limited", link: "/maybank-refinance-home-loan" },
  { bank: "UOB", rate: "4.61%", margin: "95%", lockIn: "3 years", fee: "Waived", foreigners: "Yes", link: "/uob-refinance-home-loan" },
  { bank: "Public Bank", rate: "3.85%", margin: "90%", lockIn: "3 years", fee: "~RM200", foreigners: "No", link: "/public-bank-refinance-home-loan" },
];

// Documents data
const salariedDocs = [
  "IC (MyKad/Passport)",
  "Latest 3 months payslips",
  "Latest 3 months bank statements",
  "EPF statement",
  "Current loan statements",
  "Property documents (S&P, title)",
];

const selfEmployedDocs = [
  "Business registration (SSM)",
  "2 years tax returns (Form B/BE)",
  "6 months bank statements",
  "Business profile",
  "Current loan statements",
  "Property documents",
];

const expatDocs = [
  "Passport with valid visa",
  "Employment pass / MM2H visa",
  "Employment contract",
  "Latest 6 months bank statements",
  "Current loan statements (if any)",
  "Property documents",
];

// Application steps
const applicationSteps = [
  { step: 1, title: "Check Eligibility", description: "Use our DSR calculator to check if you qualify", link: "/dsr-calculator" },
  { step: 2, title: "Gather Documents", description: "Prepare all required documents", link: "/en/documents-required" },
  { step: 3, title: "Submit Application", description: "Apply online or through our panel" },
  { step: 4, title: "Property Valuation", description: "Standard Chartered arranges property valuation" },
  { step: 5, title: "Loan Approval", description: "Approval within 2-4 weeks" },
  { step: 6, title: "Legal Documentation", description: "Sign loan agreement with lawyer" },
  { step: 7, title: "Disbursement", description: "Loan disbursed to settle existing loan" },
];

// FAQs
const faqs = [
  {
    question: "What is Standard Chartered MortgageOne?",
    answer: "MortgageOne is Standard Chartered\u2019s unique offset mortgage product. It links your savings account to your home loan, so you only pay interest on the net balance (loan minus savings). For example, if your loan is RM500,000 and you have RM100,000 in savings, you only pay interest on RM400,000. You retain full access to your savings anytime.",
  },
  {
    question: "What is the minimum income for Standard Chartered home loan?",
    answer: "Standard Chartered requires a minimum income of RM8,000 per month for home loan applications. This is higher than most banks (which typically require RM3,000-5,000). However, the higher threshold comes with premium banking benefits including dedicated relationship manager and potentially better rates.",
  },
  {
    question: "Can foreigners apply for Standard Chartered home loan in Malaysia?",
    answer: "Yes, Standard Chartered is one of the most expat-friendly banks in Malaysia. They accept applications from foreigners with valid employment pass, MM2H visa holders, and permanent residents. Foreigners typically get up to 70-80% margin. Standard Chartered\u2019s international presence makes them more comfortable with foreign income documentation.",
  },
  {
    question: "How does MortgageOne save money compared to normal home loan?",
    answer: "MortgageOne saves money by offsetting your savings against your loan balance for interest calculation. If you maintain RM100,000 in savings against a RM500,000 loan at 4.40%, you save approximately RM4,400 per year in interest. The more savings you maintain, the more you save. This is especially beneficial for high-income earners who keep large cash balances.",
  },
  {
    question: "What is Standard Chartered refinance lock-in period?",
    answer: "Standard Chartered refinance loans typically have a 3-year lock-in period. If you fully settle or refinance to another bank within this period, you may incur an early settlement penalty of around 2-3% of the outstanding loan amount. After the lock-in period, you can refinance freely without penalty.",
  },
  {
    question: "Is Standard Chartered MortgageOne rate higher than normal home loan?",
    answer: "Yes, MortgageOne has a slightly higher rate (~4.40%) compared to the standard home loan (~4.10%). However, if you maintain significant savings in the offset account, the effective interest you pay can be much lower than a standard loan. MortgageOne is most cost-effective if you consistently keep at least 20% of your loan amount in savings.",
  },
  {
    question: "Does Standard Chartered offer Islamic home financing?",
    answer: "Yes, Standard Chartered offers Saadiq Home Financing-i which is Syariah-compliant Islamic home financing based on the Musharakah Mutanaqisah (diminishing partnership) concept. It offers competitive profit rates (~4.25%), up to 90% margin, and is approved by Standard Chartered\u2019s Syariah Advisory Committee.",
  },
  {
    question: "What if I don\u2019t meet the RM8,000 minimum income?",
    answer: "If you don\u2019t meet Standard Chartered\u2019s RM8,000 minimum income requirement, consider banks with lower thresholds: Maybank and CIMB (RM3,000), Public Bank (RM3,000), or UOB (RM5,000). You can also apply jointly with a spouse or co-borrower to meet the income requirement. Our advisors can help match you with the right bank.",
  },
];

export default function StandardCharteredRefinanceHomeLoanPage() {
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
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
                Standard Chartered Malaysia
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Standard Chartered Refinance Home Loan Malaysia {currentYear}
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-6">
                Premium home financing with MortgageOne offset account
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">4.10%</p>
                  <p className="text-sm text-teal-200">From Rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">90%</p>
                  <p className="text-sm text-teal-200">Max Margin</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">35 Yrs</p>
                  <p className="text-sm text-teal-200">Max Tenure</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">Conv & Islamic</p>
                  <p className="text-sm text-teal-200">Financing Type</p>
                </div>
              </div>

              <Link
                href="#quote-form"
                className="inline-block bg-white text-teal-900 hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Standard Chartered Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>MortgageOne offset account saves interest</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium banking perks & dedicated RM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expat & foreigner friendly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No processing fees for refinancing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Islamic financing (Saadiq) available</span>
                  </li>
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
              Standard Chartered Home Loan Products
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choose the right Standard Chartered product for your refinancing needs
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {scProducts.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-teal-200 transition-colors">
                  <div className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
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

      {/* MortgageOne Explained Section */}
      <section className="py-12 md:py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How MortgageOne Offset Works
            </h2>
            <p className="text-gray-600 text-center mb-8">
              The unique feature that sets Standard Chartered apart from other banks
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Without Offset (Normal Loan)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-semibold">RM500,000</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Savings in Bank</span>
                      <span className="font-semibold">RM100,000</span>
                    </div>
                    <div className="flex justify-between bg-red-50 rounded-lg p-3">
                      <span className="text-red-700">Interest Charged On</span>
                      <span className="font-bold text-red-700">RM500,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">With MortgageOne Offset</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-semibold">RM500,000</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Savings Offset</span>
                      <span className="font-semibold text-green-600">- RM100,000</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span className="text-green-700">Interest Charged On</span>
                      <span className="font-bold text-green-700">RM400,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <p className="text-teal-800 font-medium text-center">
                  With RM100,000 savings offset at 4.40% rate, you save approximately <strong>RM4,400 per year</strong> in interest while keeping full access to your savings.
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  MortgageOne is ideal for borrowers who maintain large cash balances. The higher the savings, the greater the interest savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Refinance Rates {currentYear}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare rates across Standard Chartered home loan products
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-teal-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Product</th>
                    <th className="px-6 py-4 text-center">Rate</th>
                    <th className="px-6 py-4 text-center">Effective Rate</th>
                    <th className="px-6 py-4 text-center">Lock-in</th>
                    <th className="px-6 py-4 text-center">Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {scRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{rate.product}</td>
                      <td className="px-6 py-4 text-center">{rate.rate}</td>
                      <td className="px-6 py-4 text-center font-semibold text-teal-600">{rate.effectiveRate}</td>
                      <td className="px-6 py-4 text-center">{rate.lockIn}</td>
                      <td className="px-6 py-4 text-center">{rate.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              *SBR = Standardised Base Rate. Rates subject to change. Current SBR: 3.61% (as of {currentYear})
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Why Refinance with Standard Chartered?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Key advantages of choosing Standard Chartered for your home loan refinancing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Standard Chartered Refinance Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check if you qualify for Standard Chartered home loan refinancing
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Citizenship</p>
                      <p className="text-sm text-gray-600">Malaysian citizens, PR, foreigners & MM2H</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Property Type</p>
                      <p className="text-sm text-gray-600">Residential properties only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">DSR Limit</p>
                      <p className="text-sm text-gray-600">Up to 70% (check with <Link href="/dsr-calculator" className="text-teal-600 hover:underline">DSR calculator</Link>)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Existing Loan</p>
                      <p className="text-sm text-gray-600">Any bank can refinance to Standard Chartered</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Already Premium Customer Box */}
              <div className="mt-6 bg-teal-50 rounded-lg p-4 border border-teal-200">
                <h4 className="font-semibold text-teal-900 mb-2">Already a Premium Customer?</h4>
                <p className="text-sm text-teal-800">
                  Existing Standard Chartered Priority Banking or Premium clients may qualify for preferential rates and faster processing. Contact your relationship manager for exclusive refinancing offers.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link
                  href="/dsr-calculator"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
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
                Standard Chartered&apos;s higher income requirement isn&apos;t for everyone. Here are alternatives with lower minimums:
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

      {/* Bank Comparison Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered vs Other Banks
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare Standard Chartered refinance rates with other major banks
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-4 text-left">Bank</th>
                    <th className="px-4 py-4 text-center">Rate</th>
                    <th className="px-4 py-4 text-center">Margin</th>
                    <th className="px-4 py-4 text-center">Lock-in</th>
                    <th className="px-4 py-4 text-center">Fee</th>
                    <th className="px-4 py-4 text-center">Foreigners</th>
                    <th className="px-4 py-4 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bankComparison.map((bank, idx) => (
                    <tr key={idx} className={`hover:bg-gray-50 ${idx === 0 ? "bg-teal-50" : ""}`}>
                      <td className="px-4 py-4 font-medium text-gray-900">
                        {idx === 0 && <span className="text-teal-600">★ </span>}
                        {bank.bank}
                      </td>
                      <td className="px-4 py-4 text-center">{bank.rate}</td>
                      <td className="px-4 py-4 text-center">{bank.margin}</td>
                      <td className="px-4 py-4 text-center">{bank.lockIn}</td>
                      <td className="px-4 py-4 text-center">{bank.fee}</td>
                      <td className="px-4 py-4 text-center">{bank.foreigners}</td>
                      <td className="px-4 py-4 text-center">
                        {bank.link !== "#" ? (
                          <Link href={bank.link} className="text-teal-600 hover:text-teal-700 font-medium">
                            View
                          </Link>
                        ) : (
                          <span className="text-gray-400">Current</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/en/best-refinance-banks"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-2"
              >
                Compare all banks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Documents Required for Standard Chartered Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Prepare these documents before applying
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-2"
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
              How to Apply for Standard Chartered Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Simple step-by-step process to refinance your home loan
            </p>

            <div className="space-y-4">
              {applicationSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {step.link && (
                    <Link
                      href={step.link}
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium flex-shrink-0"
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

      {/* Calculator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Housing Loan Calculator
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Estimate your monthly repayments with Standard Chartered rates
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Example Calculation</h3>
                <p className="text-sm text-gray-500">Based on Standard Chartered Standard Home Loan rate of 4.10%</p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                  <p className="text-xl font-bold text-gray-900">RM500,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                  <p className="text-xl font-bold text-gray-900">4.10%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Tenure</p>
                  <p className="text-xl font-bold text-gray-900">30 years</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-teal-600 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-teal-600">~RM2,418</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Use Full Calculator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Standard Chartered Contact for Housing Loan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get in touch with Standard Chartered or our panel of advisors
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Contact Standard Chartered Directly</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Hotline</p>
                      <p className="font-medium">1300-888-888</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">sc.com/my</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Branches</p>
                      <p className="font-medium">Find your nearest branch</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                <h3 className="font-bold text-gray-900 mb-2">Get Free Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our panel of advisors can help compare Standard Chartered with other banks and find the best rate for you.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compare rates from 15+ banks
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free eligibility check
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No obligation quote
                  </li>
                </ul>
                <Link
                  href="#quote-form"
                  className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Standard Chartered Refinance FAQs
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
      <section id="quote-form" className="py-12 md:py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              Get Standard Chartered Refinance Quote
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare Standard Chartered with other banks - free assessment
            </p>
            <LeadForm variant="hero" source="standard-chartered-refinance" showAllFields={true} />
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
                href="/maybank-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                  Maybank Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 3.88% • Up to 90% margin
                </p>
              </Link>

              <Link
                href="/uob-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                  UOB Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.61% • Up to 95% margin
                </p>
              </Link>

              <Link
                href="/public-bank-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                  Public Bank Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 3.85% • Best rates
                </p>
              </Link>

              <Link
                href="/en/best-refinance-banks"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                  Best Refinance Banks
                </h3>
                <p className="text-sm text-gray-600">
                  Compare all banks in Malaysia
                </p>
              </Link>

              <Link
                href="/dsr-calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                  DSR Calculator
                </h3>
                <p className="text-sm text-gray-600">
                  Check your loan eligibility
                </p>
              </Link>

              <Link
                href="/calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
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
