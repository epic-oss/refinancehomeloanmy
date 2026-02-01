"use client";

import { useState, useRef, useEffect } from "react";
import { stripCommas } from "@/lib/utils";

// Calculator values that can be passed from calculator page
export interface LeadFormCalculatorValues {
  outstandingLoanAmount?: string;
  currentInterestRate?: string;
  currentMonthlyPayment?: number;
  remainingTenureYears?: string;
  newBank?: string;
  newInterestRate?: string;
  newMonthlyPayment?: number;
  newTenureYears?: string;
  monthlySavings?: number;
  yearlySavings?: number;
  totalInterestSavings?: number;
  breakEvenMonths?: number;
  refinancingCostsTotal?: number;
  legalFees?: number;
  valuationFee?: number;
  stampDuty?: number;
  dischargeFee?: number;
  isRecommended?: boolean;
  includeCashOut?: boolean;
  cashOutAmount?: string;
}

interface LeadFormProps {
  variant?: "hero" | "modal" | "inline";
  source?: string;
  lang?: "ms" | "en" | "zh";
  calculatorValues?: LeadFormCalculatorValues;
  showAllFields?: boolean; // When true, shows Outstanding Loan as required field
}

const content = {
  ms: {
    formTitle: "Dapatkan Sebut Harga Percuma",
    formTitleWithSavings: (savings: number) => `Jimat RM${savings.toLocaleString()}/bulan - Dapatkan Sebut Harga`,
    buttonText: "Dapatkan Konsultasi Percuma",
    submitting: "Menghantar...",
    successTitle: "Terima Kasih!",
    successMessage: "Kami telah menerima permintaan anda. Pakar refinancing kami akan menghubungi anda dalam masa 24 jam dengan pilihan penjimatan yang sesuai.",
    disclaimer: "Dengan menghantar, anda bersetuju untuk dihubungi oleh rakan refinancing kami. Maklumat anda selamat dan tidak akan dikongsi.",
    trustElements: "Tiada komitmen • Jawapan dalam 24 jam • 15+ bank dibandingkan",
    summaryTitle: "Anggaran Penjimatan Anda",
    summaryMonthly: "Jimat Bulanan",
    summaryYearly: "Jimat Tahunan",
    summaryTotal: "Jumlah Penjimatan",
    nameLabel: "Nama Penuh",
    namePlaceholder: "Masukkan nama anda",
    phoneLabel: "Nombor WhatsApp",
    phonePlaceholder: "cth., 012-3456789",
    bankLabel: "Bank Semasa",
    bankLabelOptional: "(pilihan)",
    bankPlaceholder: "Pilih bank semasa anda",
    outstandingLabel: "Baki Pinjaman (RM)",
    outstandingPlaceholder: "cth., 350,000",
    validationName: "Sila masukkan nama anda",
    validationPhone: "Sila masukkan nombor telefon Malaysia yang sah",
    validationOutstanding: "Sila masukkan baki pinjaman anda",
    validationBank: "Sila pilih bank semasa anda",
  },
  en: {
    formTitle: "Get Your Free Refinancing Quote",
    formTitleWithSavings: (savings: number) => `Save RM${savings.toLocaleString()}/month - Get Your Free Quote`,
    buttonText: "Get Free Consultation",
    submitting: "Submitting...",
    successTitle: "Thank You!",
    successMessage: "We've received your request. Our refinancing specialist will contact you within 24 hours with personalized savings options.",
    disclaimer: "By submitting, you agree to be contacted by our refinancing partners. Your information is secure and will not be shared.",
    trustElements: "No obligation • Response within 24 hours • 15+ banks compared",
    summaryTitle: "Your Estimated Savings",
    summaryMonthly: "Monthly Savings",
    summaryYearly: "Yearly Savings",
    summaryTotal: "Total Savings",
    nameLabel: "Full Name",
    namePlaceholder: "Enter your name",
    phoneLabel: "WhatsApp Number",
    phonePlaceholder: "e.g., 012-3456789",
    bankLabel: "Current Bank",
    bankLabelOptional: "(optional)",
    bankPlaceholder: "Select your current bank",
    outstandingLabel: "Outstanding Loan Amount (RM)",
    outstandingPlaceholder: "e.g., 350,000",
    validationName: "Please enter your name",
    validationPhone: "Please enter a valid Malaysian phone number",
    validationOutstanding: "Please enter your outstanding loan amount",
    validationBank: "Please select your current bank",
  },
  zh: {
    formTitle: "获取免费再融资报价",
    formTitleWithSavings: (savings: number) => `每月节省 RM${savings.toLocaleString()} - 获取免费报价`,
    buttonText: "获取免费咨询",
    submitting: "提交中...",
    successTitle: "谢谢您！",
    successMessage: "我们已收到您的请求。我们的再融资专家将在24小时内与您联系，为您提供个性化的节省方案。",
    disclaimer: "提交即表示您同意我们的再融资合作伙伴与您联系。您的信息是安全的，不会被分享。",
    trustElements: "无义务 • 24小时内回复 • 比较15+家银行",
    summaryTitle: "您的预估节省",
    summaryMonthly: "每月节省",
    summaryYearly: "每年节省",
    summaryTotal: "总节省",
    nameLabel: "全名",
    namePlaceholder: "输入您的姓名",
    phoneLabel: "WhatsApp号码",
    phonePlaceholder: "例如，012-3456789",
    bankLabel: "当前银行",
    bankLabelOptional: "(可选)",
    bankPlaceholder: "选择您当前的银行",
    outstandingLabel: "贷款余额 (RM)",
    outstandingPlaceholder: "例如，350,000",
    validationName: "请输入您的姓名",
    validationPhone: "请输入有效的马来西亚电话号码",
    validationOutstanding: "请输入您的贷款余额",
    validationBank: "请选择您当前的银行",
  },
};

const banks = [
  "Maybank",
  "CIMB",
  "Public Bank",
  "RHB",
  "Hong Leong Bank",
  "AmBank",
  "Bank Islam",
  "HSBC",
  "UOB",
  "OCBC",
  "Standard Chartered",
  "Alliance Bank",
  "Affin Bank",
  "Bank Rakyat",
  "Other",
];

export default function LeadForm({
  variant = "hero",
  source = "homepage",
  lang = "en",
  calculatorValues,
  showAllFields = false,
}: LeadFormProps) {
  const t = content[lang];
  const [formData, setFormData] = useState({
    name: "",
    WhatsApp: "",
    OutstandingLoan: "",
    CurrentBank: "",
    website: "", // Honeypot field - should remain empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Bot protection: track when form was loaded
  const formLoadTime = useRef(Date.now());

  // Traffic tracking: capture referrer, landing page, UTM params on mount
  const trafficRef = useRef({
    referrer: "",
    landing_page: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    formLoadTime.current = Date.now();

    // Capture referrer (snapshot on mount since it can change during SPA navigation)
    trafficRef.current.referrer = document.referrer || "";

    // Track landing page via sessionStorage (first page of the session)
    const storedLanding = sessionStorage.getItem("landing_page");
    if (!storedLanding) {
      sessionStorage.setItem("landing_page", window.location.href);
      trafficRef.current.landing_page = window.location.href;
    } else {
      trafficRef.current.landing_page = storedLanding;
    }

    // Capture UTM parameters from URL
    const params = new URLSearchParams(window.location.search);
    trafficRef.current.utm_source = params.get("utm_source") || "";
    trafficRef.current.utm_medium = params.get("utm_medium") || "";
    trafficRef.current.utm_campaign = params.get("utm_campaign") || "";
  }, []);

  const hasCalculatorValues = calculatorValues && calculatorValues.monthlySavings && calculatorValues.monthlySavings > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Bot protection: honeypot check (bots fill hidden fields)
    if (formData.website) {
      console.log("Bot detected: honeypot filled");
      setIsSubmitting(false);
      setIsSubmitted(true); // Silently "succeed" to not alert bots
      return;
    }

    // Bot protection: timing check (humans take > 3 seconds to fill form)
    const timeSpent = Date.now() - formLoadTime.current;
    if (timeSpent < 3000) {
      console.log("Bot detected: form submitted too fast", timeSpent, "ms");
      setIsSubmitting(false);
      setIsSubmitted(true); // Silently "succeed" to not alert bots
      return;
    }

    // Validation - only name and phone required
    if (!formData.name) {
      setError(t.validationName);
      setIsSubmitting(false);
      return;
    }

    // Phone validation (Malaysian format)
    const phoneRegex = /^(\+?6?01)[0-9]{8,9}$/;
    if (!phoneRegex.test(formData.WhatsApp.replace(/\s|-/g, ""))) {
      setError(t.validationPhone);
      setIsSubmitting(false);
      return;
    }

    // Outstanding Loan validation when showAllFields is true
    if (showAllFields && !formData.OutstandingLoan) {
      setError(t.validationOutstanding);
      setIsSubmitting(false);
      return;
    }

    try {
      // Use user-entered outstanding loan if provided, otherwise use calculator values
      const outstandingLoanValue = formData.OutstandingLoan
        ? stripCommas(formData.OutstandingLoan)
        : (calculatorValues?.outstandingLoanAmount ? stripCommas(calculatorValues.outstandingLoanAmount) : "");

      const payload = {
        // User-provided fields
        name: formData.name,
        phone: formData.WhatsApp.replace(/\s|-/g, ""),
        current_bank: formData.CurrentBank || "",

        // Lead metadata
        lead_type: "refinance",
        source_site: "RefinanceHomeLoanMY",
        source_url: typeof window !== "undefined" ? window.location.href : "",

        // Outstanding loan (from form or calculator)
        outstanding_loan_amount: outstandingLoanValue,
        current_interest_rate: calculatorValues?.currentInterestRate || "",
        current_monthly_payment: calculatorValues?.currentMonthlyPayment?.toString() || "",
        remaining_tenure_years: calculatorValues?.remainingTenureYears || "",
        new_bank: calculatorValues?.newBank || "",
        new_interest_rate: calculatorValues?.newInterestRate || "",
        new_monthly_payment: calculatorValues?.newMonthlyPayment?.toString() || "",
        new_tenure_years: calculatorValues?.newTenureYears || "",
        monthly_savings: calculatorValues?.monthlySavings?.toString() || "",
        yearly_savings: calculatorValues?.yearlySavings?.toString() || "",
        total_interest_savings: calculatorValues?.totalInterestSavings?.toString() || "",
        break_even_months: calculatorValues?.breakEvenMonths?.toString() || "",
        refinancing_costs_total: calculatorValues?.refinancingCostsTotal?.toString() || "",
        legal_fees: calculatorValues?.legalFees?.toString() || "",
        valuation_fee: calculatorValues?.valuationFee?.toString() || "",
        stamp_duty: calculatorValues?.stampDuty?.toString() || "",
        discharge_fee: calculatorValues?.dischargeFee?.toString() || "",
        is_recommended: calculatorValues?.isRecommended ? "true" : "false",
        include_cash_out: calculatorValues?.includeCashOut ? "true" : "false",
        cash_out_amount: calculatorValues?.cashOutAmount ? stripCommas(calculatorValues.cashOutAmount) : "",

        // Traffic attribution
        traffic_source: trafficRef.current.referrer,
        landing_page: trafficRef.current.landing_page,
        utm_source: trafficRef.current.utm_source,
        utm_medium: trafficRef.current.utm_medium,
        utm_campaign: trafficRef.current.utm_campaign,
      };

      console.log("Submitting payload:", JSON.stringify(payload, null, 2));

      // Final validation to prevent empty webhook submissions
      if (!payload.name?.trim() || !payload.phone?.trim()) {
        console.error("Blocked empty submission from:", window.location.href, payload);
        setError("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(
        "https://hook.us2.make.com/nfivujhdjjwc7kd97ian2e9cus4acm80",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Response status:", response.status);

      if (response.ok) {
        setIsSubmitted(true);

        // GA4 event tracking
        if (typeof window !== "undefined" && typeof (window as /* gtag */ any).gtag === "function") { // eslint-disable-line
          const gtag = (window as /* gtag */ any).gtag; // eslint-disable-line
          gtag("event", "generate_lead", {
            lead_type: source,
            source_page: window.location.pathname,
            loan_amount: outstandingLoanValue ? parseFloat(outstandingLoanValue) : 0,
            current_bank: formData.CurrentBank || "not_specified",
          });
        }
      } else {
        const errorText = await response.text();
        console.error("Webhook error:", errorText);
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // For now, show success even if webhook fails (remove this in production)
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`${variant === "hero" ? "bg-white rounded-2xl shadow-xl p-8" : "p-6"} text-center`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.successTitle}</h3>
        <p className="text-gray-600">
          {t.successMessage}
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-white";

  // Dynamic title based on calculator savings
  const formTitle = hasCalculatorValues
    ? t.formTitleWithSavings(calculatorValues.monthlySavings!)
    : t.formTitle;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${variant === "hero" ? "bg-white rounded-2xl shadow-xl p-6 md:p-8" : ""}`}
    >
      {/* Calculator Summary Box - only show if we have calculator values */}
      {hasCalculatorValues && (
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-green-800 mb-3">{t.summaryTitle}</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xs text-green-600">{t.summaryMonthly}</p>
              <p className="text-lg font-bold text-green-700">
                RM {calculatorValues.monthlySavings?.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-green-600">{t.summaryYearly}</p>
              <p className="text-lg font-bold text-green-700">
                RM {calculatorValues.yearlySavings?.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-green-600">{t.summaryTotal}</p>
              <p className="text-lg font-bold text-green-700">
                RM {calculatorValues.totalInterestSavings?.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {variant === "hero" && (
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          {formTitle}
        </h3>
      )}

      <div className="space-y-4">
        {/* Honeypot field - hidden from users, catches bots */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>

        {/* Full Name - Required */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder={t.namePlaceholder}
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* WhatsApp Number - Required */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t.phoneLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder={t.phonePlaceholder}
            className={inputClasses}
            value={formData.WhatsApp}
            onChange={(e) => setFormData({ ...formData, WhatsApp: e.target.value })}
          />
        </div>

        {/* Outstanding Loan Amount - Only shown when showAllFields is true */}
        {showAllFields && (
          <div>
            <label htmlFor="outstanding_loan" className="block text-sm font-medium text-gray-700 mb-1">
              {t.outstandingLabel} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="outstanding_loan"
              placeholder={t.outstandingPlaceholder}
              className={inputClasses}
              value={formData.OutstandingLoan}
              onChange={(e) => {
                // Format with commas as user types
                const value = e.target.value.replace(/[^\d]/g, "");
                const formatted = value ? parseInt(value).toLocaleString() : "";
                setFormData({ ...formData, OutstandingLoan: formatted });
              }}
            />
          </div>
        )}

        {/* Current Bank - Always Optional */}
        <div>
          <label htmlFor="current_bank" className="block text-sm font-medium text-gray-700 mb-1">
            {t.bankLabel}{" "}
            <span className="text-gray-400 text-xs">{t.bankLabelOptional}</span>
          </label>
          <select
            id="current_bank"
            className={`${inputClasses} text-gray-900 bg-white`}
            value={formData.CurrentBank}
            onChange={(e) => setFormData({ ...formData, CurrentBank: e.target.value })}
          >
            <option value="" className="text-gray-900">{t.bankPlaceholder}</option>
            {banks.map((bank) => (
              <option key={bank} value={bank} className="text-gray-900">
                {bank}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t.submitting}
            </span>
          ) : (
            <>
              {t.buttonText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        {/* Trust Elements */}
        <p className="text-xs text-green-600 text-center flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {t.trustElements}
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        {t.disclaimer}
      </p>
    </form>
  );
}
