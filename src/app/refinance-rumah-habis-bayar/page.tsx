"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  Calculator,
  Clock,
  Home,
  GraduationCap,
  Briefcase,
  CreditCard,
  HeartPulse,
  TrendingUp,
  FileText,
  Building2,
  Shield,
  XCircle,
  DollarSign,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const currentYear = new Date().getFullYear();

// Cash-out amounts table
const cashOutAmounts = [
  { nilaiRumah: "RM300,000", margin: "80%", wangTunai: "RM240,000" },
  { nilaiRumah: "RM400,000", margin: "80%", wangTunai: "RM320,000" },
  { nilaiRumah: "RM500,000", margin: "80%", wangTunai: "RM400,000" },
  { nilaiRumah: "RM700,000", margin: "80%", wangTunai: "RM560,000" },
  { nilaiRumah: "RM1,000,000", margin: "80%", wangTunai: "RM800,000" },
];

// Popular uses for cash-out
const kegunaanPopular = [
  { icon: Home, title: "Renovasi Rumah", desc: "Baik pulih, ubahsuai, atau tingkatkan nilai rumah anda." },
  { icon: GraduationCap, title: "Pendidikan Anak", desc: "Biayai pengajian dalam atau luar negara dengan kadar rendah." },
  { icon: Briefcase, title: "Modal Perniagaan", desc: "Mulakan atau kembangkan perniagaan dengan modal dari ekuiti rumah." },
  { icon: CreditCard, title: "Gabungkan Hutang", desc: "Satukan hutang kad kredit dan pinjaman peribadi dengan kadar lebih rendah." },
  { icon: HeartPulse, title: "Kecemasan Perubatan", desc: "Tampung kos perubatan yang tidak dijangka." },
  { icon: TrendingUp, title: "Pelaburan", desc: "Laburkan wang dalam aset lain untuk menjana pulangan." },
];

// Bank comparison
const bankComparison = [
  { bank: "Bank Islam", kadar: "3.80%", margin: "80%", terbaikUntuk: "Pembiayaan Islamik", link: "/bank-islam-refinance-home-loan" },
  { bank: "Standard Chartered", kadar: "3.90%", margin: "85%", terbaikUntuk: "Pendapatan tinggi", link: "/standard-chartered-refinance-home-loan" },
  { bank: "Public Bank", kadar: "4.22%", margin: "80%", terbaikUntuk: "Kadar kompetitif", link: "/public-bank-refinance-home-loan" },
  { bank: "Maybank", kadar: "4.35%", margin: "90%", terbaikUntuk: "Margin tinggi", link: "/maybank-refinance-home-loan" },
  { bank: "CIMB", kadar: "4.35%", margin: "85%", terbaikUntuk: "Proses cepat", link: "/cimb-refinance-home-loan" },
  { bank: "Hong Leong", kadar: "4.38%", margin: "85%", terbaikUntuk: "DSR tinggi", link: "/hong-leong-refinance-home-loan" },
];

// Refinance costs
const kosRefinance = [
  { kos: "Yuran guaman", anggaran: "RM2,000 - RM5,000" },
  { kos: "Duti setem", anggaran: "~0.5% daripada pinjaman" },
  { kos: "Yuran penilaian", anggaran: "RM300 - RM500" },
];

// Process steps
const prosesSteps = [
  { step: 1, title: "Semak kelayakan DSR", desc: "Kira nisbah khidmat hutang anda untuk pastikan di bawah 70%.", duration: "1 hari" },
  { step: 2, title: "Dapatkan penilaian nilai rumah", desc: "Anggaran nilai pasaran semasa rumah anda.", duration: "1-2 hari" },
  { step: 3, title: "Pilih bank dengan kadar terbaik", desc: "Bandingkan kadar dari beberapa bank atau gunakan broker.", duration: "1-3 hari" },
  { step: 4, title: "Hantar permohonan", desc: "Lengkapkan borang dan hantar semua dokumen yang diperlukan.", duration: "1 hari" },
  { step: 5, title: "Bank buat penilaian (valuation)", desc: "Bank akan hantar penilai untuk tentukan nilai sebenar rumah.", duration: "1-2 minggu" },
  { step: 6, title: "Kelulusan & dokumentasi legal", desc: "Setelah diluluskan, peguam sediakan dokumen perjanjian.", duration: "2-3 minggu" },
  { step: 7, title: "Wang dikeluarkan ke akaun anda", desc: "Wang tunai dimasukkan ke akaun bank anda selepas semua selesai.", duration: "3-5 hari" },
];

// Comparison: Refinance vs Personal Loan
const comparisonData = [
  { faktor: "Kadar faedah", refinance: "3.80% - 4.50%", peribadi: "6% - 18%" },
  { faktor: "Jumlah maksimum", refinance: "Sehingga 80% nilai rumah", peribadi: "RM100k - RM200k" },
  { faktor: "Tempoh", refinance: "Sehingga 30 tahun", peribadi: "Sehingga 7 tahun" },
  { faktor: "Ansuran bulanan", refinance: "Lebih rendah", peribadi: "Lebih tinggi" },
  { faktor: "Cagaran", refinance: "Rumah anda", peribadi: "Tiada" },
  { faktor: "Masa kelulusan", refinance: "4-8 minggu", peribadi: "1-2 minggu" },
  { faktor: "Terbaik untuk", refinance: "Jumlah besar", peribadi: "Jumlah kecil, cepat" },
];

// FAQs
const faqs = [
  {
    question: "Bolehkah refinance rumah yang sudah habis bayar?",
    answer: "Ya, boleh. Rumah yang sudah habis bayar mempunyai 100% ekuiti yang boleh digunakan. Anda boleh refinance untuk keluarkan sehingga 80% daripada nilai pasaran semasa rumah sebagai wang tunai.",
  },
  {
    question: "Berapa banyak wang boleh dikeluarkan dari rumah habis bayar?",
    answer: "Anda boleh keluarkan sehingga 80% daripada nilai pasaran semasa rumah. Contoh: jika rumah bernilai RM500,000, anda boleh dapatkan sehingga RM400,000 sebagai wang tunai. Jumlah sebenar bergantung pada penilaian bank dan kelayakan DSR anda.",
  },
  {
    question: "Apakah syarat refinance rumah habis bayar?",
    answer: "Syarat utama: warganegara Malaysia atau PR, umur 21-65 tahun, rumah bebas hutang, pendapatan minimum RM3,000/bulan, DSR bawah 70%, dan rekod kredit yang bersih (CCRIS/CTOS). Rumah mesti mempunyai geran individu atau strata.",
  },
  {
    question: "Bank mana terbaik untuk cash-out refinance?",
    answer: "Bank Islam menawarkan kadar terendah 3.80% untuk pembiayaan Islamik. Standard Chartered menawarkan 3.90% dengan margin sehingga 85%. Maybank menawarkan margin tertinggi sehingga 90%. Pilihan terbaik bergantung pada profil dan keperluan anda.",
  },
  {
    question: "Berapa kadar faedah refinance rumah habis bayar?",
    answer: "Kadar faedah untuk cash-out refinance rumah habis bayar berkisar antara 3.80% hingga 4.50% setahun, bergantung pada bank, jumlah pinjaman, dan profil kredit anda. Ini jauh lebih rendah berbanding pinjaman peribadi (6-18%).",
  },
  {
    question: "Berapa lama proses refinance rumah habis bayar?",
    answer: "Proses keseluruhan mengambil masa 4-8 minggu dari permohonan hingga wang dikeluarkan. Ini termasuk penilaian (1-2 minggu), kelulusan dan dokumentasi legal (2-3 minggu), dan pengeluaran wang (3-5 hari).",
  },
  {
    question: "Apakah dokumen diperlukan?",
    answer: "Dokumen utama: salinan IC, slip gaji 3 bulan (atau Borang BE/B untuk bekerja sendiri), penyata bank 3-6 bulan, geran rumah/hakmilik, dan cukai pintu & tanah terkini. Pekerja sendiri perlu tambah pendaftaran SSM dan profil perniagaan.",
  },
  {
    question: "Bolehkah refinance jika umur lebih 55 tahun?",
    answer: "Ya, boleh. Kebanyakan bank membenarkan sehingga umur 65 tahun, dan sesetengah bank (seperti Hong Leong) membenarkan sehingga 70 tahun. Walau bagaimanapun, tempoh pinjaman mungkin lebih pendek kerana had umur maksimum semasa tamat tempoh.",
  },
  {
    question: "Apakah risiko refinance rumah habis bayar?",
    answer: "Risiko utama: rumah menjadi cagaran bank (jika gagal bayar, rumah boleh dirampas), kos guaman dan duti setem, serta komitmen bulanan baharu. Pastikan anda mampu membayar ansuran dan mempunyai tujuan yang jelas untuk wang tersebut.",
  },
  {
    question: "Refinance atau pinjaman peribadi, mana lebih baik?",
    answer: "Refinance lebih baik untuk jumlah besar (RM100k ke atas) kerana kadar jauh lebih rendah (3.80-4.50% vs 6-18%) dan tempoh lebih panjang. Pinjaman peribadi lebih sesuai untuk jumlah kecil dan keperluan segera kerana proses lebih cepat (1-2 minggu).",
  },
];

export default function RefinanceRumahHabisBayarPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
    headline: `Refinance Rumah Habis Bayar Malaysia ${currentYear}`,
    description:
      "Panduan refinance rumah yang sudah habis bayar di Malaysia. Cara keluarkan ekuiti, syarat kelayakan, dokumen diperlukan.",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
    author: {
      "@type": "Organization",
      name: "RefinanceHomeLoanMY",
    },
  };

  const scrollToForm = () => {
    document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" });
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

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Refinance Rumah Habis Bayar Malaysia {currentYear}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-2">
            Rumah Habis Bayar? Keluarkan Wang Tunai Sekarang
          </p>
          <p className="text-emerald-200 mb-6">
            Gunakan ekuiti rumah anda untuk dapatkan wang tunai dengan kadar faedah rendah
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-4 mt-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-emerald-200">Sehingga</span>
              <p className="text-xl font-bold">80% nilai rumah</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-emerald-200">Kadar dari</span>
              <p className="text-xl font-bold">3.80%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-sm text-emerald-200">Tempoh sehingga</span>
              <p className="text-xl font-bold">30 tahun</p>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
          >
            Semak Kelayakan Percuma
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. Apa Itu Refinance Rumah Habis Bayar? */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Apa Itu Refinance Rumah Habis Bayar?
          </h2>

          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Apabila rumah anda sudah selesai dibayar sepenuhnya, anda mempunyai <strong>100% ekuiti</strong> dalam hartanah tersebut. Ini bermakna seluruh nilai rumah adalah milik anda tanpa sebarang hutang.
            </p>
            <p>
              <strong>Refinance rumah habis bayar</strong> bermaksud anda meminjam semula menggunakan rumah sebagai cagaran. Ini dipanggil <em>cash-out refinance</em> — di mana anda boleh keluarkan sebahagian daripada nilai rumah sebagai wang tunai.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Kadar Faedah Rendah</h3>
              <p className="text-sm text-gray-600">
                Kadar 3.80% - 4.50%, jauh lebih rendah berbanding pinjaman peribadi (6-18%).
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Ansuran Bulanan Rendah</h3>
              <p className="text-sm text-gray-600">
                Tempoh pinjaman sehingga 30 tahun memastikan bayaran bulanan yang selesa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Berapa Banyak Wang Boleh Dikeluarkan? */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Berapa Banyak Wang Boleh Dikeluarkan?
          </h2>
          <p className="text-gray-600 mb-8">
            Kebanyakan bank membenarkan sehingga 80% daripada nilai pasaran semasa rumah anda.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="text-left p-3 font-semibold">Nilai Rumah</th>
                  <th className="text-center p-3 font-semibold">Margin</th>
                  <th className="text-center p-3 font-semibold">Wang Tunai</th>
                </tr>
              </thead>
              <tbody>
                {cashOutAmounts.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">{row.nilaiRumah}</td>
                    <td className="p-3 text-center text-gray-600">{row.margin}</td>
                    <td className="p-3 text-center font-bold text-emerald-600">{row.wangTunai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>Jumlah sebenar bergantung pada penilaian bank dan kelayakan anda.</p>
          </div>

          <div className="mt-6">
            <Link
              href="/cash-out-calculator"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700"
            >
              <Calculator className="w-4 h-4" />
              Kira jumlah wang tunai anda dengan kalkulator kami
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Kegunaan Popular Wang Tunai */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Kegunaan Popular Wang Tunai
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kegunaanPopular.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-emerald-300 transition-colors">
                <item.icon className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/debt-consolidation-malaysia"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700"
            >
              Panduan gabungkan hutang (debt consolidation)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Syarat Kelayakan */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Syarat Kelayakan
          </h2>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              {[
                "Warganegara Malaysia atau Penduduk Tetap (PR)",
                "Umur: 21 - 65 tahun (sehingga 70 tahun untuk sesetengah bank)",
                "Rumah bebas hutang (tiada pinjaman sedia ada)",
                "Geran individu atau strata",
                "Pendapatan minimum: RM3,000/bulan",
                "DSR (Nisbah Khidmat Hutang) bawah 70%",
                "Rekod kredit baik (CCRIS/CTOS bersih)",
              ].map((syarat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{syarat}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/dsr-calculator"
                className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700"
              >
                <Calculator className="w-4 h-4" />
                Semak DSR anda dengan kalkulator DSR
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dokumen Diperlukan */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Dokumen Diperlukan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pekerja Bergaji */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">Pekerja Bergaji</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Salinan IC (depan & belakang)",
                  "Slip gaji 3 bulan terkini",
                  "Penyata bank 3-6 bulan",
                  "Penyata KWSP terkini",
                  "Geran rumah / Hakmilik",
                  "Cukai pintu & cukai tanah terkini",
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bekerja Sendiri */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">Bekerja Sendiri</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Pendaftaran SSM / Lesen perniagaan",
                  "Borang BE/B 2 tahun terkini",
                  "Penyata bank 6 bulan (peribadi & perniagaan)",
                  "Profil perniagaan",
                  "Geran rumah / Hakmilik",
                  "Cukai pintu & cukai tanah terkini",
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/dokumen-refinance-rumah"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700"
            >
              Senarai lengkap dokumen refinance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Proses Refinance */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Proses Refinance Rumah Habis Bayar
          </h2>
          <p className="text-gray-600 mb-8">
            Tempoh keseluruhan proses: <strong>4-8 minggu</strong>
          </p>

          <div className="space-y-4">
            {prosesSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-lg p-5 shadow-sm flex items-start gap-4">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bank Terbaik */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Bank Terbaik untuk Cash-Out Refinance
          </h2>
          <p className="text-gray-600 mb-8">
            Perbandingan bank dengan kadar dan margin terbaik untuk rumah habis bayar.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Bank</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Kadar</th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b">Margin</th>
                  <th className="text-left p-3 font-semibold text-gray-900 border-b hidden sm:table-cell">Terbaik Untuk</th>
                </tr>
              </thead>
              <tbody>
                {bankComparison.map((row, index) => (
                  <tr key={index} className={`border-b hover:bg-gray-50 ${index === 0 ? "bg-green-50/50" : ""}`}>
                    <td className="p-3">
                      <Link href={row.link} className="font-medium text-primary-600 hover:text-primary-700">
                        {row.bank}
                      </Link>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`font-bold ${index === 0 ? "text-green-600" : "text-primary-600"}`}>
                        {row.kadar}
                      </span>
                    </td>
                    <td className="p-3 text-center text-gray-600">{row.margin}</td>
                    <td className="p-3 text-gray-600 hidden sm:table-cell">{row.terbaikUntuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <Link
              href="/refinance-home-loan-rates-malaysia"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700"
            >
              Lihat semua kadar refinance dari 15+ bank
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Kos Refinance */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Kos Refinance
          </h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900 border-b">Kos</th>
                  <th className="text-right p-4 font-semibold text-gray-900 border-b">Anggaran</th>
                </tr>
              </thead>
              <tbody>
                {kosRefinance.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 text-gray-700">{row.kos}</td>
                    <td className="p-4 text-right text-gray-900">{row.anggaran}</td>
                  </tr>
                ))}
                <tr className="bg-emerald-50">
                  <td className="p-4 font-bold text-gray-900">Jumlah anggaran</td>
                  <td className="p-4 text-right font-bold text-emerald-700">RM3,000 - RM8,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                Sesetengah bank menawarkan pakej <strong>tanpa kos (zero entry cost)</strong> di mana yuran guaman dan duti setem ditanggung oleh bank. Tanya kami untuk tawaran terkini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Refinance vs Pinjaman Peribadi */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Refinance vs Pinjaman Peribadi
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b">Faktor</th>
                  <th className="text-center p-3 font-semibold text-emerald-700 border-b bg-emerald-50">Cash-Out Refinance</th>
                  <th className="text-center p-3 font-semibold text-gray-700 border-b">Pinjaman Peribadi</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 font-medium text-gray-900">{row.faktor}</td>
                    <td className="p-3 text-center bg-emerald-50/50 text-gray-700">{row.refinance}</td>
                    <td className="p-3 text-center text-gray-600">{row.peribadi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. Kelebihan & Kekurangan */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Kelebihan & Kekurangan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Kelebihan */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Kelebihan
              </h3>
              <ul className="space-y-3">
                {[
                  "Kadar faedah rendah (jauh lebih murah dari pinjaman peribadi)",
                  "Jumlah pinjaman besar (sehingga 80% nilai rumah)",
                  "Tempoh panjang = ansuran bulanan rendah",
                  "Boleh gabungkan hutang lain",
                  "Tiada had penggunaan wang",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kekurangan */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Kekurangan
              </h3>
              <ul className="space-y-3">
                {[
                  "Rumah jadi cagaran (risiko jika gagal bayar)",
                  "Proses lebih lama (4-8 minggu)",
                  "Kos guaman & duti setem",
                  "Perlu kelayakan DSR",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Soalan Lazim (FAQ) */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Soalan Lazim (FAQ)
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Lead Form Section */}
      <section id="lead-form-section" className="py-12 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Rumah Habis Bayar? Semak Kelayakan Anda
            </h2>
            <p className="text-emerald-100 text-lg">
              Pakar kami akan bantu anda keluarkan ekuiti dengan kadar terbaik
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <LeadForm source="rumah-habis-bayar" lang="ms" showAllFields={true} />
          </div>
        </div>
      </section>

      {/* 15. Related Pages */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Panduan Berkaitan
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/cash-out-refinance-malaysia"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <DollarSign className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-1">
                Cash-Out Refinance
              </h3>
              <p className="text-sm text-gray-600">Panduan lengkap cash-out refinance Malaysia</p>
            </Link>

            <Link
              href="/cash-out-calculator"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <Calculator className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-1">
                Kalkulator Cash-Out
              </h3>
              <p className="text-sm text-gray-600">Kira jumlah wang tunai yang boleh dikeluarkan</p>
            </Link>

            <Link
              href="/cara-cash-out-rumah"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <FileText className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-1">
                Cara Cash-Out Rumah
              </h3>
              <p className="text-sm text-gray-600">Panduan langkah demi langkah dalam BM</p>
            </Link>

            <Link
              href="/best-bank-to-refinance-malaysia"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <Building2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-1">
                Bank Terbaik Refinance
              </h3>
              <p className="text-sm text-gray-600">Perbandingan bank terbaik untuk refinance</p>
            </Link>

            <Link
              href="/dsr-calculator"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <Shield className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-1">
                Kalkulator DSR
              </h3>
              <p className="text-sm text-gray-600">Semak nisbah khidmat hutang anda</p>
            </Link>

            <Link
              href="/debt-consolidation-malaysia"
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <CreditCard className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-1">
                Penyatuan Hutang
              </h3>
              <p className="text-sm text-gray-600">Gabungkan hutang dengan kadar lebih rendah</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        onCtaClick={scrollToForm}
        text="Keluarkan wang tunai dari rumah"
        buttonText="Semak Kelayakan"
      />
    </>
  );
}
