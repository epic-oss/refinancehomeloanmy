import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const currentYear = new Date().getFullYear();

// How it works steps
const howItWorksSteps = [
  {
    step: 1,
    title: "Choose Property",
    description: "Browse available properties from the HouzKEY partner developer list",
  },
  {
    step: 2,
    title: "Apply Online",
    description: "Submit your application through the m2own portal",
  },
  {
    step: 3,
    title: "Maybank Buys Property",
    description: "Upon approval, Maybank purchases the property on your behalf",
  },
  {
    step: 4,
    title: "Start Renting",
    description: "Move in and pay monthly rent to Maybank for up to 5 years",
  },
  {
    step: 5,
    title: "Build Toward Ownership",
    description: "Your monthly rent contributes toward eventual purchase",
  },
  {
    step: 6,
    title: "Convert or Exit",
    description: "After rental period, choose to buy the property or exit the scheme",
  },
];

// Pros data
const pros = [
  {
    title: "Zero Downpayment",
    description: "No need for 10% downpayment - start with just the option fee",
  },
  {
    title: "100% Financing",
    description: "Maybank finances the entire property purchase price",
  },
  {
    title: "Lower Initial Payments",
    description: "Monthly rent during first 5 years is typically lower than loan instalments",
  },
  {
    title: "Time to Save",
    description: "Live in your home while saving for eventual purchase",
  },
  {
    title: "Syariah Compliant",
    description: "Based on Islamic financing principles (Ijarah Muntahiyah Bi Tamlik)",
  },
  {
    title: "Exit Option",
    description: "Flexibility to exit if circumstances change without selling property",
  },
  {
    title: "No Loan Rejection Risk",
    description: "Maybank owns the property, so no traditional loan approval needed",
  },
];

// Cons data
const cons = [
  {
    title: "Limited Property Selection",
    description: "Only properties from HouzKEY partner developers available",
  },
  {
    title: "Higher Total Cost",
    description: "Overall cost typically higher than traditional home loan",
  },
  {
    title: "No Ownership During Rental",
    description: "You don\u0027t own the property until conversion - Maybank does",
  },
  {
    title: "Non-Refundable Option Fee",
    description: "5% option fee is lost if you choose to exit without buying",
  },
  {
    title: "Conversion Deadline",
    description: "Must decide to convert within the specified timeframe",
  },
  {
    title: "New Properties Only",
    description: "Mainly for new or under-construction properties from developers",
  },
];

// Comparison table data
const comparisonData = [
  { feature: "Downpayment", houzkey: "0%", traditional: "10% minimum" },
  { feature: "Monthly Payment (initial)", houzkey: "Lower", traditional: "Standard" },
  { feature: "Total Cost Over Tenure", houzkey: "Higher", traditional: "Lower" },
  { feature: "Property Choice", houzkey: "Limited list only", traditional: "Any property" },
  { feature: "Ownership Status", houzkey: "After rental period", traditional: "Immediate" },
  { feature: "Exit Flexibility", houzkey: "Can exit (lose option fee)", traditional: "Must sell property" },
  { feature: "Best For", houzkey: "No savings for downpayment", traditional: "Have savings ready" },
];

// Who should consider
const goodFor = [
  "First-time buyers without savings for downpayment",
  "Young professionals just starting their career",
  "Those who want to try before you buy",
  "People with variable or unstable income",
  "Those who may relocate in near future",
];

const notIdealFor = [
  "Those with 10%+ downpayment savings ready",
  "Property investors (rental yield restrictions apply)",
  "Those wanting a specific property not on the list",
  "People who want immediate full ownership",
  "Those looking for subsale or auction properties",
];

// Application steps
const applicationSteps = [
  { step: 1, title: "Visit m2own Portal", description: "Go to maybank2own.com.my" },
  { step: 2, title: "Browse Properties", description: "View available HouzKEY properties" },
  { step: 3, title: "Check Eligibility", description: "Use the online eligibility checker" },
  { step: 4, title: "Submit Application", description: "Fill in application form and upload documents" },
  { step: 5, title: "Document Verification", description: "Maybank reviews your application" },
  { step: 6, title: "Approval & Signing", description: "Sign agreement and pay option fee" },
];

// FAQs
const faqs = [
  {
    question: "What is Maybank HouzKEY?",
    answer: "Maybank HouzKEY is a rent-to-own home ownership scheme by Maybank Islamic. Instead of taking a traditional home loan, Maybank purchases the property and rents it to you for up to 5 years. After the rental period, you have the option to convert to full ownership. It is designed for those who cannot afford the 10% downpayment required for traditional loans.",
  },
  {
    question: "Who is eligible for HouzKEY Maybank?",
    answer: "To be eligible for HouzKEY, you must be: a Malaysian citizen, aged 18-70 years old, earning minimum RM3,000 per month, a first or second home buyer, and have a good credit record (CCRIS/CTOS). Additionally, the property must be from HouzKEY partner developers list.",
  },
  {
    question: "What is the interest rate for HouzKEY?",
    answer: "HouzKEY uses rental rates rather than interest rates (being an Islamic product). The rental rate is approximately 5% per annum, which is variable and may change. This translates to monthly rent payments during the rental period. The exact rate depends on the property and current market conditions.",
  },
  {
    question: "Can I cancel HouzKEY?",
    answer: "Yes, you can exit HouzKEY before completing the full tenure. However, the 5% option fee you paid upfront is non-refundable and will be forfeited. This gives you flexibility to leave if circumstances change, but there is a financial cost to exiting early.",
  },
  {
    question: "How do I contact Maybank HouzKEY?",
    answer: "You can contact Maybank HouzKEY through: the m2own portal at maybank2own.com.my, hotline 1-300-88-6688, email houzkey@maybank.com, or visit any Maybank branch. The m2own portal also has live chat support during business hours.",
  },
  {
    question: "What happens after 5 years of HouzKEY?",
    answer: "After the 5-year rental period, you have the option to: 1) Convert to full ownership by taking a home loan for the remaining balance, or 2) Exit the scheme (forfeiting the option fee). If you choose to buy, the 5% option fee you paid is credited toward the purchase price.",
  },
  {
    question: "Is HouzKEY Syariah compliant?",
    answer: "Yes, HouzKEY is fully Syariah compliant. It is operated by Maybank Islamic using the Ijarah Muntahiyah Bi Tamlik (IMBT) concept, which is a lease ending with ownership transfer. This makes it suitable for customers who prefer Islamic financing products.",
  },
  {
    question: "What properties are available under HouzKEY?",
    answer: "HouzKEY properties are limited to partner developers including EcoWorld, IOI Properties, Mah Sing, and others. Available locations include Klang Valley, Penang, and Johor. The selection includes mainly new launches and under-construction properties. You can view the full list on the m2own portal.",
  },
  {
    question: "How much salary to buy a 300k house?",
    answer: "For a RM300,000 property under HouzKEY, you would need approximately RM3,000-4,000 monthly income to qualify for the rental payments (around RM1,500/month). For a traditional loan with 10% downpayment, you would need similar income plus RM30,000 saved. Use our eligibility calculator for accurate estimates.",
  },
  {
    question: "Is rent-to-own cheaper than buying?",
    answer: "Generally, no. Rent-to-own (HouzKEY) typically costs more in total compared to a traditional home loan because you are paying for the flexibility of zero downpayment and exit options. However, it is more affordable initially since you do not need the 10% downpayment, making homeownership accessible to those without savings.",
  },
  {
    question: "Can I refinance after HouzKEY?",
    answer: "Yes, after converting your HouzKEY to full ownership (taking the home loan), you can refinance to another bank after the lock-in period ends (typically 3-5 years). Many HouzKEY graduates refinance to get better rates. Check our refinancing calculator to see potential savings.",
  },
  {
    question: "What is the option fee for HouzKEY?",
    answer: "The HouzKEY option fee is approximately 5% of the property price, paid upfront. For a RM500,000 property, that is RM25,000. If you complete the purchase, this amount is credited toward your purchase price. If you exit early, this fee is non-refundable. It is essentially your commitment deposit.",
  },
];

export default function MaybankHouzKeyPage() {
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
      <section className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
              Maybank Islamic
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Maybank HouzKEY Malaysia {currentYear}
            </h1>
            <p className="text-lg md:text-xl text-yellow-100 mb-2">
              Rent-to-Own Guide
            </p>
            <p className="text-xl md:text-2xl font-semibold mb-6">
              Own a Home with Zero Downpayment
            </p>
            <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
              Maybank HouzKEY lets you rent-to-own with 100% financing - no downpayment required
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-yellow-200">Financing</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">0%</p>
                <p className="text-sm text-yellow-200">Downpayment</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">Lower</p>
                <p className="text-sm text-yellow-200">Initial Payments</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">Syariah</p>
                <p className="text-sm text-yellow-200">Compliant</p>
              </div>
            </div>

            <Link
              href="#eligibility"
              className="inline-block bg-white text-yellow-600 hover:bg-yellow-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* What is HouzKEY Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              What is Maybank HouzKEY?
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    <strong>Maybank HouzKEY</strong> is a rent-to-own home ownership scheme by Maybank Islamic.
                    It&apos;s designed for Malaysians who want to own a home but can&apos;t afford the traditional 10% downpayment.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Instead of you taking a loan, Maybank purchases the property and rents it to you for up to 5 years.
                    After the rental period, you have the option to convert to full ownership.
                  </p>
                  <p className="text-gray-600">
                    The scheme is available through the <strong>m2own</strong> platform, where you can browse
                    available properties from partner developers.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">100% financing - no downpayment needed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Rent the property with option to buy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Lower monthly payments during first 5 years</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">After rental period, convert to full ownership</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Syariah compliant (Islamic financing)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How HouzKEY Works Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How HouzKEY Works
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Simple step-by-step process to own your home
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howItWorksSteps.map((item) => (
                <div key={item.step} className="bg-white rounded-xl shadow-lg p-6 relative">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HouzKEY Eligibility
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Check if you qualify for Maybank HouzKEY
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Citizenship</p>
                      <p className="text-sm text-gray-600">Malaysian citizens only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Age</p>
                      <p className="text-sm text-gray-600">18 - 70 years old</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Minimum Income</p>
                      <p className="text-sm text-gray-600">RM3,000/month</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Home Buyer Status</p>
                      <p className="text-sm text-gray-600">First or second home buyers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Credit Record</p>
                      <p className="text-sm text-gray-600">Good CCRIS/CTOS history</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Property Requirement</p>
                      <p className="text-sm text-gray-600">Must be from HouzKEY partner developers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link
                  href="/home-loan-eligibility-calculator"
                  className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center gap-2"
                >
                  Check your eligibility with our calculator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rate & Costs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Maybank HouzKEY Interest Rate & Costs
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Understanding the financial aspects of HouzKEY
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Costs Breakdown</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-start">
                    <span className="text-gray-600">Rental Rate</span>
                    <span className="font-medium text-gray-900">~5% p.a. (variable)</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="text-gray-600">Option Fee</span>
                    <span className="font-medium text-gray-900">~5% of property price</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="text-gray-600">Downpayment</span>
                    <span className="font-medium text-green-600">Not required</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="text-gray-600">Stamp Duty (during rental)</span>
                    <span className="font-medium text-green-600">Not applicable</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="text-gray-600">Legal Fees (at conversion)</span>
                    <span className="font-medium text-gray-900">Applicable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl border-2 border-yellow-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Example Calculation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Price</span>
                    <span className="font-bold text-gray-900">RM500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Option Fee (5%)</span>
                    <span className="font-medium text-gray-900">RM25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Est. Monthly Rent</span>
                    <span className="font-bold text-yellow-600">~RM2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rental Period</span>
                    <span className="font-medium text-gray-900">Up to 5 years</span>
                  </div>
                  <hr className="my-2" />
                  <p className="text-sm text-gray-600">
                    After 5 years, you can convert to full ownership or exit the scheme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HouzKEY Pros and Cons
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Weigh the advantages and disadvantages before deciding
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pros
                </h3>
                <div className="space-y-4">
                  {pros.map((pro, idx) => (
                    <div key={idx} className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-1">{pro.title}</h4>
                      <p className="text-sm text-gray-600">{pro.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Cons
                </h3>
                <div className="space-y-4">
                  {cons.map((con, idx) => (
                    <div key={idx} className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <h4 className="font-medium text-gray-900 mb-1">{con.title}</h4>
                      <p className="text-sm text-gray-600">{con.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HouzKEY vs Traditional Home Loan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Side-by-side comparison to help you decide
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center bg-yellow-50">HouzKEY (Rent-to-Own)</th>
                    <th className="px-6 py-4 text-center">Traditional Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-yellow-50/50">{row.houzkey}</td>
                      <td className="px-6 py-4 text-center">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Who Should Consider HouzKEY?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Is HouzKEY the right choice for you?
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Good For
                </h3>
                <ul className="space-y-3">
                  {goodFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                  </svg>
                  Not Ideal For
                </h3>
                <ul className="space-y-3">
                  {notIdealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property List Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              HouzKEY Property List & Projects
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Available properties from partner developers
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Available Locations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Klang Valley (Selangor, KL)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Penang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Johor</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Partner Developers</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">EcoWorld</li>
                    <li className="text-gray-600">IOI Properties</li>
                    <li className="text-gray-600">Mah Sing</li>
                    <li className="text-gray-600">And more...</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-gray-600 mb-4">
                  To view available properties and check current listings, visit the official m2own portal.
                </p>
                <a
                  href="https://maybank2own.com.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Browse Properties on m2own
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              How to Apply for HouzKEY
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Step-by-step application guide
            </p>

            <div className="space-y-4">
              {applicationSteps.map((item) => (
                <div key={item.step} className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
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
              Maybank HouzKEY Contact
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get in touch with Maybank HouzKEY team
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Portal</p>
                  <p className="font-medium">maybank2own.com.my</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Hotline</p>
                  <p className="font-medium">1-300-88-6688</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">houzkey@maybank.com</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Branch</p>
                  <p className="font-medium">Any Maybank branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Already Own a Home Section */}
      <section className="py-12 md:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Already Own a Home?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              If you already own property, HouzKEY isn&apos;t for you. But you could still save money by refinancing your existing home loan to get better rates.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold">RM300-700</p>
                <p className="text-sm text-primary-200">Potential monthly savings</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold">Lower</p>
                <p className="text-sm text-primary-200">Interest rates available</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold">Free</p>
                <p className="text-sm text-primary-200">Rate comparison</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/maybank-refinance-home-loan"
                className="inline-block bg-white text-primary-600 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Maybank Refinancing
              </Link>
              <Link
                href="/en/best-refinance-banks"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Compare All Banks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
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
      <section className="py-12 md:py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Not sure if HouzKEY or traditional loan is right for you? Get free advice from our experts.
            </p>
            <LeadForm variant="hero" source="houzkey-info" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Related Guides & Tools
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/maybank-refinance-home-loan"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-2">
                  Maybank Refinance Home Loan
                </h3>
                <p className="text-sm text-gray-600">
                  Refinancing options for existing homeowners
                </p>
              </Link>

              <Link
                href="/home-loan-eligibility-calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-2">
                  Eligibility Calculator
                </h3>
                <p className="text-sm text-gray-600">
                  Check how much home loan you can get
                </p>
              </Link>

              <Link
                href="/en/best-refinance-banks"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-2">
                  Best Refinance Banks
                </h3>
                <p className="text-sm text-gray-600">
                  Compare refinancing rates from all banks
                </p>
              </Link>

              <Link
                href="/dsr-calculator"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-2">
                  DSR Calculator
                </h3>
                <p className="text-sm text-gray-600">
                  Check your debt service ratio
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
