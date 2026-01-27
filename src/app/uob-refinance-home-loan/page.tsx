import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const currentYear = new Date().getFullYear();

// UOB Products data
const uobProducts = [
  {
    name: "UOB Intelligent Home Loan",
    features: [
      "Flexible packages for refinancing",
      "Lower interest rates",
      "Extra cash access via redraw",
      "No processing fees",
      "Up to 95% financing margin",
    ],
    highlight: "Best for Refinancing",
  },
  {
    name: "UOB Flexi Mortgage",
    features: [
      "Linked to current account",
      "Fast-track repayments",
      "Save on interest",
      "Quick cash access when needed",
      "Flexible repayment options",
    ],
    highlight: "Best for Flexibility",
  },
  {
    name: "UOB Home Financing-i (Islamic)",
    features: [
      "Syariah-compliant financing",
      "100% stamp duty waiver for conversion",
      "Competitive profit rates",
      "Available for refinancing",
      "Tawarruq concept",
    ],
    highlight: "Islamic Option",
  },
];

// UOB Rates table data
const uobRates = [
  {
    product: "Intelligent Home Loan",
    rate: "SBR - 3.00%",
    effectiveRate: "~4.61%",
    lockIn: "3 years",
    margin: "Up to 95%",
  },
  {
    product: "Flexi Mortgage",
    rate: "SBR - 2.80%",
    effectiveRate: "~4.81%",
    lockIn: "3 years",
    margin: "Up to 90%",
  },
  {
    product: "Home Financing-i",
    rate: "Based on BFR",
    effectiveRate: "~4.65%",
    lockIn: "3 years",
    margin: "Up to 95%",
  },
];

// Benefits data
const benefits = [
  {
    title: "No Processing Fees",
    description: "Save on upfront costs with waived processing fees for refinancing applications.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Higher Margin (95%)",
    description: "Get up to 95% financing margin including MRTA - higher than most banks.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Stamp Duty Waiver",
    description: "100% stamp duty waiver when converting to Islamic Home Financing-i.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Redraw Facility",
    description: "Access extra cash anytime through the redraw facility on your home loan.",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Flexible Payments",
    description: "Choose weekly or fortnightly payment options to reduce interest faster.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Open to Foreigners",
    description: "UOB welcomes applications from foreigners and permanent residents.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// Bank comparison data
const bankComparison = [
  { bank: "UOB", rate: "4.61%", margin: "95%", lockIn: "3 years", fee: "Waived", foreigners: "Yes", link: "#" },
  { bank: "Maybank", rate: "4.50%", margin: "90%", lockIn: "3 years", fee: "~RM200", foreigners: "Limited", link: "/maybank-refinance-home-loan" },
  { bank: "CIMB", rate: "4.55%", margin: "90%", lockIn: "3 years", fee: "Waived", foreigners: "Yes", link: "/cimb-refinance-home-loan" },
  { bank: "Public Bank", rate: "4.45%", margin: "90%", lockIn: "3 years", fee: "~RM200", foreigners: "No", link: "/public-bank-refinance-home-loan" },
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

// Application steps
const applicationSteps = [
  { step: 1, title: "Check Eligibility", description: "Use our DSR calculator to check if you qualify", link: "/dsr-calculator" },
  { step: 2, title: "Gather Documents", description: "Prepare all required documents", link: "/en/documents-required" },
  { step: 3, title: "Submit Application", description: "Apply online or through our panel" },
  { step: 4, title: "Property Valuation", description: "UOB arranges property valuation" },
  { step: 5, title: "Loan Approval", description: "Approval within 2-4 weeks" },
  { step: 6, title: "Legal Documentation", description: "Sign loan agreement with lawyer" },
  { step: 7, title: "Disbursement", description: "Loan disbursed to settle existing loan" },
];

// FAQs
const faqs = [
  {
    question: "What is UOB Intelligent Home Loan?",
    answer: "UOB Intelligent Home Loan is a flexible home financing package designed for both new purchases and refinancing. It offers competitive rates starting from 4.61% (SBR-3.00%), up to 95% financing margin, no processing fees, and a redraw facility to access extra cash when needed.",
  },
  {
    question: "What is UOB Flexi Mortgage interest rate?",
    answer: "UOB Flexi Mortgage offers rates from approximately 4.81% (SBR-2.80%). The Flexi Mortgage is linked to your current account, allowing you to save on interest by depositing extra funds and withdraw when needed, making it ideal for those with variable income.",
  },
  {
    question: "Can foreigners apply for UOB housing loan?",
    answer: "Yes, UOB accepts home loan applications from foreigners and permanent residents (PR) in Malaysia. However, the margin and requirements may differ. Foreigners typically get up to 70-80% margin compared to 90-95% for Malaysians. Additional documents like work permit and employment pass are required.",
  },
  {
    question: "What is UOB refinance lock-in period?",
    answer: "UOB refinance loans typically have a 3-year lock-in period. If you fully settle or refinance to another bank within this period, you may incur an early settlement penalty of around 2-3% of the outstanding loan amount.",
  },
  {
    question: "How long does UOB refinance approval take?",
    answer: "UOB refinance approval typically takes 2-4 weeks from complete document submission. The timeline includes credit assessment, property valuation, and internal approval. The entire process from application to disbursement usually takes 2-3 months.",
  },
  {
    question: "Can I refinance from Maybank to UOB?",
    answer: "Yes, you can refinance from any bank including Maybank, CIMB, Public Bank, or others to UOB. The process involves UOB settling your existing loan and creating a new loan facility. You may benefit from UOB's higher margin (95%) and waived processing fees.",
  },
  {
    question: "What is UOB housing loan processing fee?",
    answer: "UOB typically waives the processing fee for refinancing applications, saving you approximately RM200-500 compared to other banks. However, you'll still need to pay legal fees, stamp duty, and valuation fees which are standard across all banks.",
  },
  {
    question: "Does UOB offer Islamic home financing?",
    answer: "Yes, UOB offers Home Financing-i which is a Syariah-compliant Islamic home loan based on the Tawarruq concept. It offers competitive profit rates (~4.65%), up to 95% margin, and 100% stamp duty waiver when converting from conventional to Islamic financing.",
  },
  {
    question: "What is UOB maximum loan margin?",
    answer: "UOB offers up to 95% financing margin including MRTA for the Intelligent Home Loan and Home Financing-i products. This is higher than most banks that cap at 90%. The Flexi Mortgage offers up to 90% margin. Actual margin depends on property type, location, and borrower profile.",
  },
  {
    question: "How to check UOB loan eligibility?",
    answer: "You can check your UOB loan eligibility by: 1) Using our DSR calculator to ensure your debt-to-income ratio is within 70%, 2) Confirming you meet the minimum income of RM5,000/month, 3) Ensuring you're aged 21-65, 4) Having a clean credit record (CCRIS/CTOS). Our advisors can do a free preliminary assessment.",
  },
];

export default function UOBRefinanceHomeLoanPage() {
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
                UOB Malaysia
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                UOB Refinance Home Loan Malaysia {currentYear}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                Refinance with UOB - Intelligent Home Loan
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">4.61%</p>
                  <p className="text-sm text-blue-200">From Rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-sm text-blue-200">Max Margin</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">3 Yrs</p>
                  <p className="text-sm text-blue-200">Lock-in</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">Waived</p>
                  <p className="text-sm text-blue-200">Processing Fee</p>
                </div>
              </div>

              <Link
                href="#quote-form"
                className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">UOB Highlights</h3>
                <ul className="space-y-3">
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
                    <span>Up to 95% margin including MRTA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Redraw facility for cash access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open to foreigners & PR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Islamic financing available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UOB Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              UOB Home Loan Products
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choose the right UOB home loan product for your refinancing needs
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {uobProducts.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-blue-200 transition-colors">
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
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

      {/* UOB Rates Table Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              UOB Refinance Rates {currentYear}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare rates across UOB home loan products
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Product</th>
                    <th className="px-6 py-4 text-center">Rate</th>
                    <th className="px-6 py-4 text-center">Effective Rate</th>
                    <th className="px-6 py-4 text-center">Lock-in</th>
                    <th className="px-6 py-4 text-center">Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {uobRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{rate.product}</td>
                      <td className="px-6 py-4 text-center">{rate.rate}</td>
                      <td className="px-6 py-4 text-center font-semibold text-blue-600">{rate.effectiveRate}</td>
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
              Why Refinance with UOB?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Key advantages of choosing UOB for your home loan refinancing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              UOB Refinance Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check if you qualify for UOB home loan refinancing
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Citizenship</p>
                      <p className="text-sm text-gray-600">Malaysian citizens, PR, or foreigners</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Age</p>
                      <p className="text-sm text-gray-600">21 - 65 years old</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Minimum Income</p>
                      <p className="text-sm text-gray-600">RM5,000/month</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Property Type</p>
                      <p className="text-sm text-gray-600">Residential properties only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">DSR Limit</p>
                      <p className="text-sm text-gray-600">Up to 70% (check with <Link href="/dsr-calculator" className="text-blue-600 hover:underline">DSR calculator</Link>)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Existing Loan</p>
                      <p className="text-sm text-gray-600">Any bank can refinance to UOB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link
                  href="/dsr-calculator"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Check your eligibility with our DSR Calculator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
              UOB vs Other Banks
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare UOB refinance rates with other major banks
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
                    <tr key={idx} className={`hover:bg-gray-50 ${idx === 0 ? "bg-blue-50" : ""}`}>
                      <td className="px-4 py-4 font-medium text-gray-900">
                        {idx === 0 && <span className="text-blue-600">★ </span>}
                        {bank.bank}
                      </td>
                      <td className="px-4 py-4 text-center">{bank.rate}</td>
                      <td className="px-4 py-4 text-center">{bank.margin}</td>
                      <td className="px-4 py-4 text-center">{bank.lockIn}</td>
                      <td className="px-4 py-4 text-center">{bank.fee}</td>
                      <td className="px-4 py-4 text-center">{bank.foreigners}</td>
                      <td className="px-4 py-4 text-center">
                        {bank.link !== "#" ? (
                          <Link href={bank.link} className="text-blue-600 hover:text-blue-700 font-medium">
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
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Documents Required for UOB Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Prepare these documents before applying
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
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
              How to Apply for UOB Refinance
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Simple step-by-step process to refinance your home loan
            </p>

            <div className="space-y-4">
              {applicationSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {step.link && (
                    <Link
                      href={step.link}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex-shrink-0"
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
              UOB Housing Loan Calculator
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Estimate your monthly repayments with UOB rates
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Example Calculation</h3>
                <p className="text-sm text-gray-500">Based on UOB Intelligent Home Loan rate of 4.61%</p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                  <p className="text-xl font-bold text-gray-900">RM500,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                  <p className="text-xl font-bold text-gray-900">4.61%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Tenure</p>
                  <p className="text-xl font-bold text-gray-900">30 years</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-blue-600 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-blue-600">~RM2,570</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
              UOB Contact for Housing Loan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get in touch with UOB or our panel of advisors
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Contact UOB Directly</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Hotline</p>
                      <p className="font-medium">1-800-88-8822</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">UOBHome@uob.com.my</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Get Free Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our panel of advisors can help compare UOB with other banks and find the best rate for you.
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
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
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
              UOB Refinance FAQs
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
      <section id="quote-form" className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              Get UOB Refinance Quote
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare UOB with other banks - free assessment
            </p>
            <LeadForm variant="hero" source="uob-refinance" showAllFields={true} />
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
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                  Maybank Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.50% • Up to 90% margin
                </p>
              </Link>

              <Link
                href="/cimb-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                  CIMB Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.55% • No processing fee
                </p>
              </Link>

              <Link
                href="/public-bank-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                  Public Bank Refinance
                </h3>
                <p className="text-sm text-gray-600">
                  From 4.45% • Best rates
                </p>
              </Link>

              <Link
                href="/en/best-refinance-banks"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
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
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
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
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
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
