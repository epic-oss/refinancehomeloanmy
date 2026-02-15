import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const currentYear = new Date().getFullYear();

// OCBC Products data
const ocbcProducts = [
  {
    name: "OCBC Home Loan",
    features: [
      "Standard refinancing package",
      "Competitive rates from 4.05%",
      "Up to 90% financing margin",
      "Tenure up to 35 years",
      "Flexible repayment options",
    ],
    highlight: "Conventional",
  },
  {
    name: "OCBC Home Loan-i (Islamic)",
    features: [
      "Syariah-compliant financing",
      "Based on Commodity Murabahah",
      "Rates from 4.15%",
      "Same margin and tenure as conventional",
      "Open to Muslims and non-Muslims",
    ],
    highlight: "Islamic Option",
  },
];

// OCBC Rates table data
const ocbcRates = [
  {
    product: "Home Loan",
    rate: "From 4.05%",
    lockIn: "3 years",
    margin: "Up to 90%",
    type: "Conventional",
  },
  {
    product: "Home Loan-i",
    rate: "From 4.15%",
    lockIn: "3 years",
    margin: "Up to 90%",
    type: "Islamic",
  },
];

// Benefits data
const benefits = [
  {
    title: "International Bank Stability",
    description: "Singapore-headquartered OCBC is one of Asia's most established banking groups with over 90 years of history.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Strong Digital Platform",
    description: "OCBC's digital banking platform lets you manage your home loan online with ease — from application tracking to payments.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Singapore-Connected",
    description: "Ideal for customers with Singapore ties — cross-border banking experience and regional expertise.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Conventional & Islamic",
    description: "Choose between conventional home loan or Syariah-compliant Home Loan-i based on your preference.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Competitive for Professionals",
    description: "OCBC offers preferential rates and packages for professionals and high-income earners.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Multi-Currency Capabilities",
    description: "Useful for borrowers with income or assets in multiple currencies, especially SGD and USD.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// Bank comparison data
const bankComparison = [
  { bank: "OCBC", rate: "4.05%", minIncome: "RM5,000", margin: "90%", foreigners: "Yes", bestFor: "Professionals", link: "#" },
  { bank: "Maybank", rate: "3.88%", minIncome: "RM3,000", margin: "90%", foreigners: "Limited", bestFor: "General", link: "/maybank-refinance-home-loan" },
  { bank: "UOB", rate: "4.61%", minIncome: "RM5,000", margin: "95%", foreigners: "Yes", bestFor: "High margin", link: "/uob-refinance-home-loan" },
  { bank: "Standard Chartered", rate: "4.10%", minIncome: "RM8,000", margin: "90%", foreigners: "Yes", bestFor: "High earners", link: "/standard-chartered-refinance-home-loan" },
];

// Documents data
const salariedDocs = [
  "IC (MyKad) / Passport",
  "Latest 3 months payslips",
  "Latest EA form / tax return",
  "6 months bank statements",
  "Current loan statement",
  "Property documents (S&P, title)",
];

const selfEmployedDocs = [
  "Business registration (SSM)",
  "2 years audited accounts",
  "2 years tax returns (Form B/BE)",
  "6 months bank statements",
  "Current loan statement",
  "Property documents",
];

// Application steps
const applicationSteps = [
  { step: 1, title: "Check Eligibility", description: "Use our DSR calculator to check if you qualify", link: "/dsr-calculator" },
  { step: 2, title: "Gather Documents", description: "Prepare all required documents for your application" },
  { step: 3, title: "Apply Online or Visit Branch", description: "Submit via OCBC website or nearest branch" },
  { step: 4, title: "Property Valuation", description: "OCBC arranges professional property valuation" },
  { step: 5, title: "Loan Approval", description: "Approval within 2-4 weeks from complete submission" },
  { step: 6, title: "Legal Documentation", description: "Sign loan agreement with appointed lawyer" },
  { step: 7, title: "Disbursement", description: "OCBC settles existing loan. New loan begins" },
];

// FAQs
const faqs = [
  {
    question: "Is OCBC good for home loan refinancing?",
    answer: "OCBC is a strong choice for professionals and higher-income borrowers looking for competitive rates with international bank reliability. Their rates start from 4.05%, which is competitive among foreign banks in Malaysia. They're particularly good if you have Singapore connections or prefer a bank with strong digital capabilities. However, local banks like Maybank and Public Bank may offer lower rates for general applicants.",
  },
  {
    question: "What is OCBC home loan interest rate Malaysia?",
    answer: `OCBC's home loan rate in ${currentYear} starts from 4.05% p.a. for conventional home loans and from 4.15% for Islamic Home Loan-i. Actual rates depend on your income, loan amount, property type, and overall credit profile. Professionals and high-income earners may qualify for more competitive rates.`,
  },
  {
    question: "Can foreigners apply for OCBC home loan?",
    answer: "Yes, OCBC accepts home loan applications from foreigners on a case-by-case basis. As a Singapore-headquartered international bank, OCBC has more experience handling foreign applicants than most local banks. However, foreigners typically get a lower margin (60-70% vs 90% for Malaysians) and may need to provide additional documentation like work permits and employment passes.",
  },
  {
    question: "Does OCBC offer Islamic home financing?",
    answer: "Yes, OCBC offers Home Loan-i which is a Syariah-compliant Islamic home financing product based on Commodity Murabahah. Rates start from 4.15% with the same margin and tenure as conventional products. It's available to both Muslims and non-Muslims.",
  },
  {
    question: "What is OCBC minimum salary for home loan?",
    answer: "OCBC requires a minimum income of RM5,000 per month for home loan applications. This is higher than local banks like Maybank (RM3,000) but in line with other foreign banks like UOB. Higher income generally leads to better rates and a higher approved loan amount.",
  },
  {
    question: "How long does OCBC refinancing approval take?",
    answer: "OCBC refinance approval typically takes 2-4 weeks from complete document submission. The full process from application to disbursement usually takes 8-12 weeks, including property valuation and legal documentation. Using a broker can help expedite the process.",
  },
  {
    question: "Can I refinance from Maybank to OCBC?",
    answer: "Yes, you can refinance from any bank — including Maybank, CIMB, Public Bank, or others — to OCBC. The process involves OCBC settling your existing loan and creating a new facility. Make sure OCBC's rate is meaningfully lower than your current rate to justify the refinancing costs.",
  },
  {
    question: "Is OCBC better than local Malaysian banks?",
    answer: "It depends on your profile. OCBC excels for professionals, high-income earners, those with Singapore ties, and foreigners. Local banks like Maybank and Public Bank typically offer lower starting rates and broader branch networks. The best approach is to compare multiple banks — which is exactly what a broker does for you, for free.",
  },
];

export default function OCBCRefinanceHomeLoanPage() {
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
      <section className="bg-gradient-to-br from-red-800 to-red-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
                OCBC Malaysia
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                OCBC Refinance Home Loan Malaysia {currentYear}
              </h1>
              <p className="text-lg md:text-xl text-red-100 mb-6">
                International bank reliability with competitive rates
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">4.05%</p>
                  <p className="text-sm text-red-200">From Rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">90%</p>
                  <p className="text-sm text-red-200">Max Margin</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">35 Yrs</p>
                  <p className="text-sm text-red-200">Max Tenure</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">Conv.</p>
                  <p className="text-sm text-red-200">& Islamic</p>
                </div>
              </div>

              <Link
                href="#quote-form"
                className="inline-block bg-white text-red-800 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">OCBC Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "Singapore-based international bank",
                    "Competitive rates from 4.05%",
                    "Strong digital banking platform",
                    "Open to foreigners & PR",
                    "Both conventional and Islamic options",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
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

      {/* OCBC Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              OCBC Home Loan Products
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choose between conventional or Islamic financing for your refinance
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {ocbcProducts.map((product, idx) => (
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

      {/* OCBC Rates Table */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              OCBC Refinance Rates {currentYear}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare rates across OCBC home loan products
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-red-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Product</th>
                    <th className="px-6 py-4 text-center">Rate</th>
                    <th className="px-6 py-4 text-center">Lock-in</th>
                    <th className="px-6 py-4 text-center">Margin</th>
                    <th className="px-6 py-4 text-center">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ocbcRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{rate.product}</td>
                      <td className="px-6 py-4 text-center font-semibold text-red-700">{rate.rate}</td>
                      <td className="px-6 py-4 text-center">{rate.lockIn}</td>
                      <td className="px-6 py-4 text-center">{rate.margin}</td>
                      <td className="px-6 py-4 text-center">{rate.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Compare all 14 banks&apos; rates →</Link>{" "}
              *Rates are indicative and subject to change. Actual rates depend on borrower profile.{" "}
              Need extra cash? <Link href="/cash-out-calculator" className="text-primary-600 hover:underline">Calculate your cash-out amount</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Why Refinance with OCBC?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Key advantages of choosing OCBC for your home loan refinancing
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

      {/* Honest Review Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Is OCBC Good for Refinancing? Honest Review
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>International bank stability</strong> — backed by one of Asia&apos;s strongest banking groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Strong digital platform</strong> — convenient online loan management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Good for Singapore-connected</strong> — cross-border banking expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Both conventional and Islamic</strong> — choose what suits you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Competitive for professionals</strong> — preferential rates for high earners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Multi-currency capabilities</strong> — useful for cross-border income</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cons
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>Higher minimum income (RM5,000)</strong> — not accessible for lower earners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>Fewer branches</strong> — smaller network than local banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>Less flexible for lower income</strong> — stricter criteria than Maybank/CIMB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>Stricter approval criteria</strong> — higher bar for underwriting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="font-semibold text-red-800 mb-1">Best For:</p>
              <p className="text-gray-700">
                Professionals, executives, and high-income earners who value international bank reliability
                and strong digital banking. Especially good if you have Singapore connections or multi-currency income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              OCBC Refinance Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check if you qualify for OCBC home loan refinancing
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { label: "Citizenship", value: "Malaysian citizens, PR, or foreigners (case-by-case)" },
                    { label: "Age", value: "21 - 65 years old" },
                    { label: "Minimum Income", value: "RM5,000/month" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    { label: "DSR Limit", value: "Up to 70%", link: "/dsr-calculator", linkText: "DSR calculator" },
                    { label: "Credit Record", value: "Clean CCRIS/CTOS record" },
                    { label: "Preferred Profiles", value: "Professionals and executives" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-600">
                          {item.value}
                          {item.link && (
                            <> (check with <Link href={item.link} className="text-red-600 hover:underline">{item.linkText}</Link>)</>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Comparison Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              OCBC vs Other Banks
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare OCBC refinance rates with other banks
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-4 text-left">Bank</th>
                    <th className="px-4 py-4 text-center">Rate</th>
                    <th className="px-4 py-4 text-center">Min Income</th>
                    <th className="px-4 py-4 text-center">Margin</th>
                    <th className="px-4 py-4 text-center">Foreigners</th>
                    <th className="px-4 py-4 text-center">Best For</th>
                    <th className="px-4 py-4 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bankComparison.map((b, idx) => (
                    <tr key={idx} className={`hover:bg-gray-50 ${idx === 0 ? "bg-red-50" : ""}`}>
                      <td className="px-4 py-4 font-medium text-gray-900">
                        {idx === 0 && <span className="text-red-600">★ </span>}
                        {b.bank}
                      </td>
                      <td className="px-4 py-4 text-center font-semibold">{b.rate}</td>
                      <td className="px-4 py-4 text-center">{b.minIncome}</td>
                      <td className="px-4 py-4 text-center">{b.margin}</td>
                      <td className="px-4 py-4 text-center">{b.foreigners}</td>
                      <td className="px-4 py-4 text-center text-sm">{b.bestFor}</td>
                      <td className="px-4 py-4 text-center">
                        {b.link !== "#" ? (
                          <Link href={b.link} className="text-red-600 hover:text-red-700 font-medium">
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
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-2"
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Documents Required for OCBC Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Prepare these documents before applying
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  For Salaried Employees
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
                  For Self-Employed
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

      {/* Application Steps */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How to Apply for OCBC Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Simple step-by-step process to refinance your home loan
            </p>

            <div className="space-y-4">
              {applicationSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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

      {/* Calculator Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              OCBC Home Loan Calculator
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Estimate your monthly repayments with OCBC rates
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Example Calculation</h3>
                <p className="text-sm text-gray-500">Based on OCBC Home Loan rate of 4.05%</p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                  <p className="text-xl font-bold text-gray-900">RM500,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                  <p className="text-xl font-bold text-gray-900">4.05%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Tenure</p>
                  <p className="text-xl font-bold text-gray-900">30 years</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-red-600 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-red-700">~RM2,399</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              OCBC Contact for Home Loan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get in touch with OCBC or our panel of advisors
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Contact OCBC Directly</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Hotline</p>
                      <p className="font-medium">1300-88-5000</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">ocbc.com.my</p>
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
                  Our panel of advisors can help compare OCBC with other banks and find the best rate for you.
                </p>
                <ul className="space-y-2 mb-4">
                  {["Compare rates from 15+ banks", "Free eligibility check", "No obligation quote"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#quote-form"
                  className="inline-block w-full text-center bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use a Broker */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Why Use a Broker Instead of Applying Direct?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Direct to OCBC</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Through Our Specialists</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3 text-gray-600">One bank only</td><td className="p-3 text-gray-700 font-medium">Compare 15+ banks</td></tr>
                  <tr className="border-b"><td className="p-3 text-gray-600">Standard approval process</td><td className="p-3 text-gray-700 font-medium">Higher approval rate</td></tr>
                  <tr className="border-b"><td className="p-3 text-gray-600">You handle all paperwork</td><td className="p-3 text-gray-700 font-medium">We manage everything</td></tr>
                  <tr className="border-b"><td className="p-3 text-gray-600">Limited rate negotiation</td><td className="p-3 text-gray-700 font-medium">Access to special rates</td></tr>
                  <tr><td className="p-3 text-gray-600">If rejected, start over</td><td className="p-3 text-gray-700 font-medium">We match you to right bank</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              <strong>Our service is 100% free</strong> — banks pay us, not you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              OCBC Refinance FAQs
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
              Get OCBC Refinancing Quote
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare OCBC with other banks — free assessment
            </p>
            <LeadForm variant="hero" source="ocbc-refinance" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Compare Other Banks
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                href="/standard-chartered-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  Standard Chartered
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.10% • For high earners
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
