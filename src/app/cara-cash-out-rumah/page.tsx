"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getBanksSortedByRate } from "@/lib/constants";
import CashOutLeadForm, { CashOutLeadFormInitialValues } from "@/components/CashOutLeadForm";
import CashOutCalculatorWidget, { CashOutCalculatorValues } from "@/components/CashOutCalculatorWidget";
import CashOutSocialProof from "@/components/CashOutSocialProof";
import MidPageCTA from "@/components/MidPageCTA";
import BackToTop from "@/components/BackToTop";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  Calculator,
  AlertTriangle,
  Home,
  CreditCard,
  Briefcase,
  Clock,
  FileText,
  TrendingUp,
  AlertCircle,
  Percent,
  Banknote,
  Timer,
  Wrench,
  PiggyBank,
  Landmark,
  HeartPulse,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

// Banks that offer good cash-out options
const cashOutBanks = getBanksSortedByRate().filter(b =>
  ["Maybank", "CIMB", "Public Bank", "RHB", "Hong Leong", "AmBank", "OCBC", "UOB"].includes(b.name)
);

const kegunaanCashOut = [
  {
    icon: Wrench,
    title: "Pengubahsuaian Rumah",
    description: "Tambahkan nilai hartanah dengan renovasi dapur, bilik mandi, atau tambahan ruang.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: CreditCard,
    title: "Bayar Hutang (Debt Consolidation)",
    description: "Gabungkan hutang kad kredit 18% dengan kadar 3.5% dan jimat ribuan ringgit.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: TrendingUp,
    title: "Pelaburan",
    description: "Beli hartanah kedua, saham, atau mulakan perniagaan dengan modal dari ekuiti rumah.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: HeartPulse,
    title: "Kecemasan / Perubatan",
    description: "Akses tunai untuk kos perubatan atau keperluan kecemasan keluarga.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

const prosKonsCashOut = {
  pros: [
    "Kadar faedah rendah (3.5-4.5%) berbanding pinjaman peribadi (6-12%)",
    "Jumlah pinjaman lebih tinggi sehingga ratusan ribu ringgit",
    "Tempoh bayaran panjang (sehingga 35 tahun)",
    "Satu bayaran bulanan sahaja",
    "Boleh guna untuk sebarang tujuan",
  ],
  cons: [
    "Tempoh pemprosesan lama (6-10 minggu)",
    "Kos guaman dan penilaian",
    "Rumah jadi cagaran - risiko jika gagal bayar",
    "Peraturan BNM 10 tahun untuk bahagian cash out",
    "Tidak sesuai untuk keperluan tunai segera",
  ],
};

const langkahProses = [
  { step: 1, title: "Semak Kelayakan", description: "Pastikan DSR tidak melebihi 70% dan ekuiti rumah mencukupi" },
  { step: 2, title: "Bandingkan Bank", description: "Dapatkan sebut harga dari beberapa bank untuk kadar terbaik" },
  { step: 3, title: "Hantar Permohonan", description: "Lengkapkan borang dan serahkan semua dokumen yang diperlukan" },
  { step: 4, title: "Penilaian Hartanah", description: "Bank akan hantar penilai untuk tentukan nilai pasaran rumah anda" },
  { step: 5, title: "Kelulusan Bank", description: "Bank akan semak dan meluluskan permohonan dalam 2-4 minggu" },
  { step: 6, title: "Proses Guaman", description: "Peguam akan sediakan dokumen dan selesaikan proses undang-undang" },
  { step: 7, title: "Pengeluaran Wang", description: "Terima tunai dalam akaun selepas semua proses selesai" },
];

const dokumenDiperlukan = [
  { category: "Peribadi", items: ["Salinan IC", "Slip gaji 3 bulan terkini", "Penyata bank 6 bulan", "Penyata KWSP (jika berkaitan)"] },
  { category: "Hartanah", items: ["Salinan geran/strata title", "Perjanjian jual beli asal", "Cukai tanah terkini", "Bil utiliti terkini"] },
  { category: "Pinjaman Sedia Ada", items: ["Surat tawaran pinjaman asal", "Penyata pinjaman terkini", "Jadual bayaran balik"] },
];

const faqs = [
  {
    question: "Apa itu cash out property / cash out refinance rumah?",
    answer: "Cash out refinance adalah proses meminjam semula (refinance) pinjaman rumah anda dengan jumlah lebih tinggi dari baki tertunggak, dan perbezaannya akan diberikan kepada anda dalam bentuk tunai. Contoh: Rumah bernilai RM500,000, baki pinjaman RM200,000, anda boleh pinjam sehingga RM450,000 (90% LTV) dan terima RM250,000 tunai.",
  },
  {
    question: "Berapa lama proses cash out refinance?",
    answer: "Proses cash out refinance biasanya mengambil masa 6-10 minggu dari tarikh permohonan hingga wang masuk ke akaun anda. Ini termasuk: Penilaian hartanah (1-2 minggu), Kelulusan bank (2-4 minggu), dan Proses guaman (3-4 minggu). Pastikan semua dokumen lengkap untuk mempercepatkan proses.",
  },
  {
    question: "Bolehkah refinance rumah untuk dapat tunai?",
    answer: "Ya, ini adalah tujuan utama cash out refinance. Syaratnya: (1) Rumah anda mempunyai ekuiti positif (nilai pasaran lebih tinggi dari baki pinjaman), (2) Anda memenuhi syarat kelayakan bank (umur, pendapatan, DSR), dan (3) Hartanah anda layak untuk penilaian semula.",
  },
  {
    question: "Apa syarat untuk cash out rumah?",
    answer: "Syarat utama termasuk: Umur 21-65 tahun, pendapatan minimum RM3,000/bulan, DSR tidak melebihi 70%, tiada rekod CCRIS/CTOS yang buruk, hartanah dalam keadaan baik dan mempunyai geran/strata title, serta ekuiti rumah sekurang-kurangnya 10% (untuk mencapai 90% LTV).",
  },
  {
    question: "Apakah peraturan BNM 10 tahun untuk cash out?",
    answer: "Bank Negara Malaysia (BNM) menetapkan bahawa bahagian cash out dalam refinance mempunyai tempoh maksimum 10 tahun. Ini bermakna walaupun pinjaman rumah anda boleh sampai 35 tahun, jumlah cash out perlu dibayar dalam 10 tahun. Sesetengah bank menyusun semula bayaran bulanan untuk mematuhi peraturan ini.",
  },
  {
    question: "Berapa banyak tunai boleh dapat dari cash out?",
    answer: "Jumlah maksimum bergantung pada: Nilai pasaran semasa rumah x 90% (LTV maksimum) - Baki pinjaman sedia ada = Tunai maksimum. Contoh: RM500,000 x 90% - RM200,000 = RM250,000 tunai. Walau bagaimanapun, jumlah sebenar juga bergantung pada pendapatan dan DSR anda.",
  },
];

export default function CaraCashOutRumahPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formInitialValues, setFormInitialValues] = useState<CashOutLeadFormInitialValues | undefined>(undefined);

  // Handler for when user clicks "Get Exact Quote" from calculator
  const handleCalculatorQuote = (values: CashOutCalculatorValues) => {
    setFormInitialValues({
      propertyValue: values.propertyValue,
      outstandingLoan: values.outstandingLoan,
      cashOutNeeded: values.maxCashOut > 0 ? values.maxCashOut.toLocaleString("en-MY") : "",
      calculatedMaxCashout: values.maxCashOut,
      calculatedEquity: values.equity,
    });
    setShowForm(true);
  };

  // Handler for regular CTA clicks (no pre-fill)
  const handleRegularQuote = () => {
    setFormInitialValues(undefined);
    setShowForm(true);
  };

  // Schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Cara Cash Out Rumah Malaysia ${currentYear} - Panduan Lengkap`,
    description: "Panduan lengkap cara cash out rumah di Malaysia. Ketahui cara dapatkan tunai dari ekuiti hartanah, syarat kelayakan, dan bank terbaik.",
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: "RefinanceHomeLoanMY",
    },
    publisher: {
      "@type": "Organization",
      name: "RefinanceHomeLoanMY",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Social Proof Notification */}
      <CashOutSocialProof />

      {/* Hero Section - Conversion Focused */}
      <section className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-secondary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline & Trust Badges */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Dapatkan Sehingga <span className="text-green-400">RM500,000</span> Tunai dari Rumah Anda
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                Tukarkan ekuiti rumah anda kepada tunai untuk renovasi, bayar hutang, atau pelaburan. Kadar serendah 3.65%.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                    <Percent className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white">Sehingga 90% LTV</h3>
                  <p className="text-sm text-gray-300">Dapatkan 90% nilai rumah</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                    <Banknote className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white">RM100k-500k+</h3>
                  <p className="text-sm text-gray-300">Jumlah cash out biasa</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                    <Timer className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white">6-10 Minggu</h3>
                  <p className="text-sm text-gray-300">Masa pemprosesan</p>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-8">
                <a
                  href="#kalkulator-cash-out"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('kalkulator-cash-out')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Kira berapa banyak anda boleh dapat
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div id="quote-form">
              <CashOutLeadForm variant="hero" source="cara-cash-out-rumah-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What is Cash Out */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Apa itu Cash Out Refinance?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cash out refinance adalah cara untuk mendapatkan tunai dari ekuiti rumah anda. Ekuiti adalah perbezaan antara nilai pasaran rumah dan baki pinjaman yang masih tertunggak. Dengan cash out, anda meminjam semula dengan jumlah lebih tinggi dan menerima perbezaannya dalam bentuk tunai.
            </p>

            {/* How it works diagram */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Bagaimana Cash Out Berfungsi</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">RM500,000</div>
                  <p className="text-gray-600">Nilai Pasaran Rumah</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-3xl font-bold text-red-500 mb-2">- RM200,000</div>
                  <p className="text-gray-600">Baki Pinjaman Sedia Ada</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">= RM250,000</div>
                  <p className="text-gray-600">Maksimum Cash Out (90% LTV)</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">
                Formula: (Nilai Rumah × 90%) - Baki Pinjaman = Tunai Maksimum
              </p>
            </div>
          </section>

          {/* Calculator Section */}
          <section id="kalkulator-cash-out" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalkulator Cash Out</h2>
            <p className="text-gray-700 mb-6">
              Gunakan kalkulator di bawah untuk mengira berapa banyak tunai yang anda boleh dapat dari ekuiti rumah anda.
            </p>
            <CashOutCalculatorWidget onGetQuote={handleCalculatorQuote} />
          </section>

          {/* How Much Can You Get */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Berapa Banyak Tunai Boleh Dapat?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Jumlah cash out bergantung kepada <strong>Loan-to-Value (LTV)</strong> ratio - iaitu peratusan nilai hartanah yang bank boleh pinjamkan kepada anda.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">LTV Maksimum Mengikut Hartanah</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 px-4">Jenis Hartanah</th>
                      <th className="py-3 px-4">LTV Maksimum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Hartanah Pertama & Kedua</td>
                      <td className="py-3 px-4 font-semibold text-green-600">90%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Hartanah Ketiga dan seterusnya</td>
                      <td className="py-3 px-4 font-semibold">70%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Hartanah Komersial</td>
                      <td className="py-3 px-4 font-semibold">80-85%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Example Calculations */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Contoh 1: Rumah Pertama</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Nilai rumah: <strong>RM600,000</strong></li>
                  <li>Baki pinjaman: <strong>RM250,000</strong></li>
                  <li>LTV 90%: RM540,000</li>
                  <li className="text-green-600 font-semibold">Cash out: RM290,000</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Contoh 2: Rumah Ketiga</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Nilai rumah: <strong>RM600,000</strong></li>
                  <li>Baki pinjaman: <strong>RM250,000</strong></li>
                  <li>LTV 70%: RM420,000</li>
                  <li className="text-green-600 font-semibold">Cash out: RM170,000</li>
                </ul>
              </div>
            </div>
          </section>

          {/* BNM 10 Year Rule */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Peraturan BNM 10 Tahun untuk Cash Out</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Peraturan Penting dari Bank Negara</h3>
                  <p className="text-amber-800">
                    Mulai 2025, Bank Negara Malaysia (BNM) menetapkan bahawa bahagian cash out dalam refinance mempunyai tempoh pembayaran maksimum <strong>10 tahun</strong>, walaupun pinjaman perumahan utama boleh sehingga 35 tahun.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Impak kepada Peminjam</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Bayaran bulanan untuk bahagian cash out mungkin lebih tinggi</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">DSR (Debt Service Ratio) akan dikira berdasarkan pembayaran 10 tahun</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Sesetengah bank menyusun semula struktur bayaran untuk mematuhi peraturan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Jumlah cash out yang diluluskan mungkin lebih rendah bergantung pada pendapatan</span>
              </li>
            </ul>
          </section>

          {/* Cash Out vs Regular Refinance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cash Out vs Refinance Biasa - Apa Bezanya?</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-4 border">Aspek</th>
                    <th className="py-4 px-4 border">Refinance Biasa</th>
                    <th className="py-4 px-4 border">Cash Out Refinance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border font-medium">Tujuan Utama</td>
                    <td className="py-3 px-4 border">Kadar faedah lebih rendah</td>
                    <td className="py-3 px-4 border">Dapatkan tunai + kadar lebih baik</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">Jumlah Pinjaman</td>
                    <td className="py-3 px-4 border">Sama atau kurang dari baki sedia ada</td>
                    <td className="py-3 px-4 border">Lebih tinggi dari baki sedia ada</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">Terima Tunai</td>
                    <td className="py-3 px-4 border">Tidak</td>
                    <td className="py-3 px-4 border text-green-600 font-semibold">Ya - perbezaan masuk akaun</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">Kadar Faedah</td>
                    <td className="py-3 px-4 border">3.5-4.5%</td>
                    <td className="py-3 px-4 border">3.5-4.5% (sama)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border font-medium">Tempoh Proses</td>
                    <td className="py-3 px-4 border">4-8 minggu</td>
                    <td className="py-3 px-4 border">6-10 minggu</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border font-medium">Tempoh Cash Out</td>
                    <td className="py-3 px-4 border">N/A</td>
                    <td className="py-3 px-4 border">Maksimum 10 tahun (peraturan BNM)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600">
              <strong>Tip:</strong> Jika anda tidak perlukan tunai, refinance biasa mungkin pilihan lebih baik kerana proses lebih cepat dan bayaran bulanan lebih rendah.
            </p>
          </section>

          {/* When is Cash Out Right */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bila Cash Out Sesuai untuk Anda?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {kegunaanCashOut.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="font-semibold text-green-900 mb-2">Paling Popular: Bayar Hutang Kad Kredit</h3>
              <p className="text-green-800">
                Ramai pemohon menggunakan cash out untuk bayar hutang kad kredit (18%) dengan kadar refinance (3.5-4.5%).
                Contoh: Hutang RM50,000 pada 18% = RM9,000/tahun faedah. Dengan cash out 4% = RM2,000/tahun faedah.
                <strong> Penjimatan: RM7,000/tahun!</strong>
              </p>
            </div>
          </section>

          <MidPageCTA onOpenForm={handleRegularQuote} />

          {/* Best Banks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank Terbaik untuk Cash Out {currentYear}</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-4 border">Bank</th>
                    <th className="py-4 px-4 border">Kadar Dari</th>
                    <th className="py-4 px-4 border">LTV Maks</th>
                    <th className="py-4 px-4 border">Lock-in</th>
                    <th className="py-4 px-4 border">Terbaik Untuk</th>
                  </tr>
                </thead>
                <tbody>
                  {cashOutBanks.slice(0, 6).map((bank, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="py-3 px-4 border font-medium">
                        <Link href={`/${bank.name.toLowerCase().replace(" ", "-")}-refinance-home-loan`} className="text-blue-600 hover:underline">
                          {bank.name}
                        </Link>
                      </td>
                      <td className="py-3 px-4 border text-green-600 font-semibold">{bank.rateFrom}</td>
                      <td className="py-3 px-4 border">{bank.maxLTV}%</td>
                      <td className="py-3 px-4 border">{bank.lockIn} tahun</td>
                      <td className="py-3 px-4 border text-sm">{bank.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              * Kadar dikemaskini Januari 2026. Kadar sebenar bergantung pada profil pemohon.
            </p>
          </section>

          {/* Pros and Cons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kelebihan & Keburukan Cash Out Refinance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  Kelebihan
                </h3>
                <ul className="space-y-3">
                  {prosKonsCashOut.pros.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <X className="w-6 h-6" />
                  Keburukan
                </h3>
                <ul className="space-y-3">
                  {prosKonsCashOut.cons.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Documents Required */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Syarat & Dokumen Diperlukan</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {dokumenDiperlukan.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Langkah-Langkah Proses Cash Out</h2>

            <div className="space-y-4">
              {langkahProses.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-blue-800 text-sm">
                <strong>Jumlah masa:</strong> 6-10 minggu dari permohonan hingga wang masuk akaun. Pastikan semua dokumen lengkap untuk mempercepatkan proses.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Panduan Berkaitan</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/cash-out-refinance-malaysia" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Cash Out Refinance Guide (English)</h3>
                <p className="text-gray-600 text-sm">Complete English guide to cash-out refinancing</p>
              </Link>
              <Link href="/penyatuan-hutang-malaysia" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Penyatuan Hutang Malaysia</h3>
                <p className="text-gray-600 text-sm">Panduan gabungkan semua hutang anda</p>
              </Link>
              <Link href="/cara-refinance-rumah" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Cara Refinance Rumah</h3>
                <p className="text-gray-600 text-sm">Panduan lengkap A-Z refinance rumah</p>
              </Link>
              <Link href="/cash-out-calculator" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Kalkulator Cash Out</h3>
                <p className="text-gray-600 text-sm">Kira berapa banyak tunai anda boleh dapat</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Soalan Lazim (FAQ)</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${openFaqIndex === index ? "rotate-90" : ""}`} />
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

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Dapatkan Sebut Harga Cash Out Percuma
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Ketahui berapa banyak tunai yang anda boleh dapat dari ekuiti rumah anda.
              Pakar kami akan hubungi anda dalam 24 jam dengan pilihan terbaik.
            </p>
            <button
              onClick={handleRegularQuote}
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-all hover:scale-105"
            >
              Dapatkan Sebut Harga Percuma
              <ArrowRight className="w-5 h-5" />
            </button>
          </section>
        </div>
      </article>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <CashOutLeadForm
                variant="modal"
                source="cara-cash-out-rumah-modal"
                initialValues={formInitialValues}
              />
            </div>
          </div>
        </div>
      )}

      <BackToTop />
      <StickyMobileCTA
        onCtaClick={handleRegularQuote}
        text="Dapatkan tunai dari ekuiti rumah"
        buttonText="Dapatkan Sebut Harga"
      />
    </>
  );
}
