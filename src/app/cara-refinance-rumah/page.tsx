"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, getBanksSortedByRate } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  Calculator,
  FileText,
  Home,
  Clock,
  TrendingDown,
  Percent,
  Banknote,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Building2,
  CreditCard,
  Briefcase,
  Shield,
  Scale,
} from "lucide-react";

const { currentYear, lastUpdated } = SITE_CONFIG;

// Get top banks sorted by rate
const topBanks = getBanksSortedByRate().slice(0, 6);

const bilaMasaRefinance = [
  {
    icon: TrendingDown,
    title: "Kadar Faedah Turun",
    description: "Jika kadar pasaran turun 0.5% atau lebih dari kadar semasa anda, masa untuk pertimbangkan refinance.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Clock,
    title: "Lock-in Tamat",
    description: "Tempoh lock-in biasanya 3-5 tahun. Selepas tamat, anda boleh refinance tanpa penalti.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Banknote,
    title: "Perlukan Tunai",
    description: "Cash out refinance membolehkan anda dapatkan tunai dari ekuiti rumah untuk pelbagai keperluan.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: CreditCard,
    title: "Gabungkan Hutang",
    description: "Gabungkan hutang kad kredit (18%) dengan refinance (3.5%) untuk jimat ribuan ringgit.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

const syaratKelayakan = [
  { syarat: "Umur", keperluan: "21-65 tahun (70 tahun dengan syarat)", icon: "👤" },
  { syarat: "Pendapatan Minimum", keperluan: "RM3,000/bulan (gaji) atau RM5,000 (perniagaan)", icon: "💰" },
  { syarat: "DSR (Debt Service Ratio)", keperluan: "Tidak melebihi 70%", icon: "📊" },
  { syarat: "Tempoh Bekerja", keperluan: "6 bulan (bergaji) atau 2 tahun (berniaga)", icon: "💼" },
  { syarat: "Rekod Kredit", keperluan: "Tiada rekod buruk dalam CCRIS/CTOS", icon: "✅" },
  { syarat: "Hartanah", keperluan: "Ada geran/strata title, keadaan baik", icon: "🏠" },
];

const langkahRefinance = [
  {
    step: 1,
    title: "Semak Kelayakan",
    description: "Kira DSR anda untuk pastikan tidak melebihi 70%. Semak baki pinjaman dan nilai semasa rumah.",
    duration: "1 hari",
  },
  {
    step: 2,
    title: "Bandingkan Bank",
    description: "Dapatkan sebut harga dari beberapa bank. Bandingkan kadar, lock-in, dan ciri-ciri pinjaman.",
    duration: "1-2 minggu",
  },
  {
    step: 3,
    title: "Kumpul Dokumen",
    description: "Sediakan semua dokumen yang diperlukan termasuk slip gaji, penyata bank, dan dokumen hartanah.",
    duration: "1-3 hari",
  },
  {
    step: 4,
    title: "Hantar Permohonan",
    description: "Lengkapkan borang permohonan dan serahkan semua dokumen kepada bank pilihan.",
    duration: "1 hari",
  },
  {
    step: 5,
    title: "Penilaian Hartanah",
    description: "Bank akan hantar penilai untuk tentukan nilai pasaran semasa rumah anda.",
    duration: "1-2 minggu",
  },
  {
    step: 6,
    title: "Kelulusan Bank",
    description: "Bank akan proses permohonan dan keluarkan surat tawaran jika lulus.",
    duration: "2-4 minggu",
  },
  {
    step: 7,
    title: "Tandatangan Perjanjian",
    description: "Tandatangan dokumen pinjaman di hadapan peguam. Proses caveat dan discharge.",
    duration: "2-4 minggu",
  },
  {
    step: 8,
    title: "Pengeluaran Wang",
    description: "Bank baharu akan bayar bank lama. Baki (jika cash out) masuk akaun anda.",
    duration: "1-2 minggu",
  },
];

const dokumenDiperlukan = [
  {
    category: "Dokumen Peribadi",
    icon: FileText,
    items: [
      "Salinan MyKad (depan & belakang)",
      "Slip gaji 3 bulan terkini",
      "Penyata bank 6 bulan",
      "Penyata KWSP (jika berkaitan)",
      "Borang EA/BE (pekerja bergaji)",
    ],
  },
  {
    category: "Dokumen Hartanah",
    icon: Home,
    items: [
      "Salinan geran/strata title",
      "Perjanjian jual beli (SPA) asal",
      "Cukai tanah & cukai pintu terkini",
      "Bil utiliti terbaru (TNB/Air)",
      "Pelan rumah (jika ada)",
    ],
  },
  {
    category: "Dokumen Pinjaman Sedia Ada",
    icon: Building2,
    items: [
      "Surat tawaran pinjaman asal",
      "Penyata pinjaman terkini",
      "Jadual bayaran balik",
      "Resit bayaran 6 bulan (jika ada)",
    ],
  },
];

const kosRefinance = [
  { item: "Yuran Guaman", anggaran: "RM2,000 - RM5,000", nota: "Bergantung pada jumlah pinjaman" },
  { item: "Yuran Penilaian", anggaran: "RM500 - RM1,500", nota: "Bergantung pada nilai hartanah" },
  { item: "Duti Setem", anggaran: "0.5% jumlah pinjaman", nota: "Mungkin dikecualikan" },
  { item: "MRTA/MLTA", anggaran: "RM5,000 - RM20,000", nota: "Pilihan, bukan wajib" },
];

const lppSaSection = {
  pros: [
    "Kadar bank konvensional lebih rendah dari LPPSA (biasanya)",
    "Boleh dapatkan cash out dari ekuiti",
    "Lebih banyak pilihan bank",
    "Proses mungkin lebih cepat",
  ],
  cons: [
    "Kehilangan faedah pinjaman kerajaan",
    "Kadar floating (boleh naik turun)",
    "Kos guaman untuk discharge LPPSA",
    "Tidak boleh kembali ke LPPSA selepas refinance",
  ],
};

const tipsLulus = [
  {
    title: "Rendahkan DSR",
    description: "Bayar sebahagian hutang kad kredit atau pinjaman kereta untuk rendahkan DSR di bawah 70%.",
  },
  {
    title: "Bersihkan Rekod CCRIS",
    description: "Pastikan tiada bayaran lewat dalam 12 bulan terakhir. Selesaikan sebarang hutang tertunggak.",
  },
  {
    title: "Lengkapkan Dokumen",
    description: "Dokumen tidak lengkap adalah sebab utama kelewatan. Sediakan semua sebelum memohon.",
  },
  {
    title: "Pilih Bank yang Sesuai",
    description: "Setiap bank ada kriteria berbeza. RHB dan AmBank lebih fleksibel untuk kes kurang standard.",
  },
  {
    title: "Pertimbangkan Co-Borrower",
    description: "Tambah pasangan atau ahli keluarga sebagai co-borrower untuk tingkatkan pendapatan gabungan.",
  },
];

const faqs = [
  {
    question: "Berapa lama proses refinance rumah?",
    answer: "Proses refinance rumah biasanya mengambil masa 1-3 bulan (4-12 minggu) dari permohonan hingga pengeluaran wang. Ini termasuk penilaian hartanah (1-2 minggu), kelulusan bank (2-4 minggu), dan proses guaman (2-4 minggu). Tempoh sebenar bergantung kepada kelengkapan dokumen dan bank yang dipilih.",
  },
  {
    question: "Bolehkah refinance rumah yang belum habis bayar?",
    answer: "Ya, anda boleh refinance rumah walaupun masih ada baki pinjaman. Ini adalah tujuan utama refinancing - menggantikan pinjaman sedia ada dengan pinjaman baharu (biasanya dengan kadar lebih rendah). Bank baharu akan bayar baki kepada bank lama, dan anda mula bayar bank baharu.",
  },
  {
    question: "Apa beza refinance dan cash out?",
    answer: "Refinance biasa: Tukar bank untuk kadar lebih rendah, jumlah pinjaman sama/kurang dari baki sedia ada. Cash out: Pinjam lebih dari baki sedia ada dan terima perbezaan dalam bentuk tunai. Contoh: Baki RM200k, refinance ke RM300k, terima RM100k tunai.",
  },
  {
    question: "Berapa kos refinance rumah?",
    answer: `Kos refinance termasuk: Yuran guaman (RM2,000-5,000), Yuran penilaian (RM500-1,500), Duti setem (0.5% jumlah pinjaman - mungkin dikecualikan), dan MRTA (pilihan). Banyak bank menawarkan pakej yang menampung sebahagian atau semua kos ini.`,
  },
  {
    question: "Bolehkah refinance rumah loan kerajaan (LPPSA)?",
    answer: "Ya, anda boleh refinance dari LPPSA ke bank konvensional. Walau bagaimanapun, perlu pertimbangkan: (1) Anda tidak boleh kembali ke LPPSA selepas refinance, (2) Kadar bank mungkin lebih rendah atau lebih tinggi bergantung pada pasaran, (3) Kos discharge LPPSA. Bandingkan dengan teliti sebelum membuat keputusan.",
  },
  {
    question: "Bila waktu terbaik untuk refinance?",
    answer: "Waktu terbaik untuk refinance: (1) Tempoh lock-in telah tamat (3-5 tahun), (2) Kadar pasaran lebih rendah 0.5%+ dari kadar semasa, (3) Baki pinjaman masih besar, (4) Tempoh pinjaman masih panjang (10+ tahun), (5) Profil kewangan anda telah bertambah baik.",
  },
  {
    question: "Adakah refinance sesuai untuk semua orang?",
    answer: "Tidak semestinya. Refinance mungkin tidak sesuai jika: (1) Lock-in masih aktif (ada penalti), (2) Baki pinjaman kecil (kos > penjimatan), (3) Tempoh tinggal kurang 2-3 tahun, (4) Kadar semasa sudah rendah. Gunakan kalkulator kami untuk kira sama ada penjimatan melebihi kos.",
  },
];

export default function CaraRefinanceRumahPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Cara Refinance Rumah Malaysia ${currentYear} - Panduan Lengkap A-Z`,
    description: "Panduan lengkap cara refinance rumah di Malaysia. Langkah demi langkah, syarat kelayakan, dokumen diperlukan, dan tips untuk lulus permohonan.",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Panduan Lengkap <span className="text-secondary-400">Cara Refinance</span> Rumah Malaysia {currentYear}
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                Jimat sehingga RM500+ sebulan dengan refinance ke kadar lebih rendah. Panduan langkah demi langkah dari A hingga Z.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-secondary-400">3.65%</div>
                  <p className="text-sm text-gray-300">Kadar Terendah</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-secondary-400">RM500+</div>
                  <p className="text-sm text-gray-300">Jimat/Bulan</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-secondary-400">10+</div>
                  <p className="text-sm text-gray-300">Bank Pilihan</p>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-8">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Kira penjimatan anda dengan kalkulator percuma
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div id="quote-form">
              <LeadForm variant="hero" source="cara-refinance-rumah-hero" lang="ms" showAllFields={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What is Refinance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Apa itu Refinance Rumah?</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Refinance rumah</strong> bermaksud memindahkan pinjaman perumahan sedia ada ke bank lain (atau bank sama) dengan terma baharu - biasanya untuk mendapatkan kadar faedah lebih rendah, menukar struktur pinjaman, atau mengeluarkan tunai dari ekuiti rumah.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Apabila anda refinance, bank baharu akan bayar baki pinjaman kepada bank lama, dan anda mula membuat bayaran bulanan kepada bank baharu dengan kadar dan terma yang baru.
            </p>

            {/* Why Refinance */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kenapa Orang Refinance?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Dapatkan kadar faedah lebih rendah</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Kurangkan bayaran bulanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Dapatkan tunai dari ekuiti (cash out)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Gabungkan hutang dengan kadar rendah</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Tukar dari floating ke fixed rate</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Pendekkan atau panjangkan tempoh pinjaman</span>
                </div>
              </div>
            </div>
          </section>

          {/* When to Refinance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bila Anda Patut Refinance?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {bilaMasaRefinance.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800">
                  <strong>Penting:</strong> Jangan refinance jika tempoh lock-in masih aktif - penalti biasanya 2-3% dari baki pinjaman!
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Syarat Kelayakan Refinance Rumah</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {syaratKelayakan.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.syarat}</h3>
                  <p className="text-gray-600 text-sm">{item.keperluan}</p>
                </div>
              ))}
            </div>

            {/* DSR Explanation */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Memahami DSR (Debt Service Ratio)</h3>
              <p className="text-gray-700 mb-4">
                DSR mengukur peratusan pendapatan bulanan anda yang digunakan untuk membayar hutang. Bank biasanya memerlukan DSR tidak melebihi 70%.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-mono text-center text-lg">
                  DSR = (Semua Bayaran Hutang Bulanan ÷ Pendapatan Bersih) × 100%
                </p>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Contoh: Pendapatan RM8,000, bayaran hutang RM4,000 = DSR 50% ✓
              </p>
              <Link href="/dsr-calculator" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4">
                Kira DSR anda dengan kalkulator percuma
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Step by Step Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Langkah-Langkah Refinance Rumah</h2>

            <div className="space-y-4">
              {langkahRefinance.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">{step.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800">
                <strong>Jumlah masa keseluruhan:</strong> 4-12 minggu bergantung kepada kelengkapan dokumen dan bank yang dipilih.
              </p>
            </div>
          </section>

          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Documents Required */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dokumen Diperlukan untuk Refinance</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {dokumenDiperlukan.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Link
              href="/dokumen-refinance-rumah"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-6"
            >
              Lihat senarai lengkap dokumen dengan penerangan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Best Banks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank Terbaik untuk Refinance {currentYear}</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-4 border">Bank</th>
                    <th className="py-4 px-4 border">Kadar Dari</th>
                    <th className="py-4 px-4 border">Lock-in</th>
                    <th className="py-4 px-4 border">Terbaik Untuk</th>
                  </tr>
                </thead>
                <tbody>
                  {topBanks.map((bank, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="py-3 px-4 border font-medium">
                        <Link href={`/${bank.name.toLowerCase().replace(" ", "-")}-refinance-home-loan`} className="text-blue-600 hover:underline">
                          {bank.name}
                        </Link>
                      </td>
                      <td className="py-3 px-4 border text-green-600 font-semibold">{bank.rateFrom}</td>
                      <td className="py-3 px-4 border">{bank.lockIn} tahun</td>
                      <td className="py-3 px-4 border text-sm">{bank.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link
              href="/bank-terbaik-refinance-rumah"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-4"
            >
              Lihat perbandingan penuh semua bank
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Refinance Costs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kos Refinance Rumah</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-4 border">Jenis Kos</th>
                    <th className="py-4 px-4 border">Anggaran</th>
                    <th className="py-4 px-4 border">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {kosRefinance.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="py-3 px-4 border font-medium">{item.item}</td>
                      <td className="py-3 px-4 border">{item.anggaran}</td>
                      <td className="py-3 px-4 border text-sm text-gray-600">{item.nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <p className="text-blue-800">
                <strong>Tip:</strong> Banyak bank menawarkan pakej &quot;zero entry cost&quot; yang menanggung yuran guaman dan penilaian.
                Tanyakan semasa mendapatkan sebut harga.
              </p>
            </div>
          </section>

          {/* LPPSA Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cara Refinance Rumah LPPSA ke Bank</h2>

            <p className="text-lg text-gray-700 mb-6">
              Jika anda penjawat awam dengan pinjaman LPPSA (Lembaga Pembiayaan Perumahan Sektor Awam), anda boleh memilih untuk refinance ke bank konvensional. Ini keputusan besar yang perlu dipertimbangkan dengan teliti.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Kelebihan Refinance dari LPPSA
                </h3>
                <ul className="space-y-3">
                  {lppSaSection.pros.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Keburukan Refinance dari LPPSA
                </h3>
                <ul className="space-y-3">
                  {lppSaSection.cons.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-amber-800">
                  <strong>Amaran:</strong> Setelah refinance dari LPPSA ke bank, anda TIDAK BOLEH kembali ke LPPSA.
                  Pastikan anda yakin dengan keputusan ini.
                </p>
              </div>
            </div>
          </section>

          {/* Tips to Get Approved */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips Lulus Permohonan Refinance</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tipsLulus.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Panduan Berkaitan</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/bank-terbaik-refinance-rumah" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Bank Terbaik Refinance Rumah</h3>
                <p className="text-gray-600 text-sm">Perbandingan lengkap kadar semua bank</p>
              </Link>
              <Link href="/cara-cash-out-rumah" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Cara Cash Out Rumah</h3>
                <p className="text-gray-600 text-sm">Panduan dapatkan tunai dari ekuiti rumah</p>
              </Link>
              <Link href="/kelebihan-keburukan-refinance-rumah" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Kelebihan & Keburukan Refinance</h3>
                <p className="text-gray-600 text-sm">Pros dan cons refinance rumah</p>
              </Link>
              <Link href="/dokumen-refinance-rumah" className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-blue-600">Dokumen Diperlukan</h3>
                <p className="text-gray-600 text-sm">Senarai lengkap dengan penerangan</p>
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
          <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Semak Kelayakan Refinance Anda
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Dapatkan sebut harga percuma dari bank-bank terbaik Malaysia.
              Pakar kami akan hubungi anda dalam 24 jam.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-full hover:bg-primary-50 transition-all hover:scale-105"
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
              <LeadForm variant="modal" source="cara-refinance-rumah-modal" lang="ms" showAllFields={true} />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Semak kelayakan refinance"
        buttonText="Dapatkan Sebut Harga"
      />
    </>
  );
}
