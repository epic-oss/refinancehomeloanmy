"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  Calculator,
  FileText,
  Clock,
  Building2,
  Shield,
  Banknote,
  Users,
  TrendingDown,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  Landmark,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

const faqs = [
  {
    question: "Bolehkah penjawat awam refinance LPPSA ke bank?",
    answer: "Ya, penjawat awam boleh refinance pinjaman LPPSA ke mana-mana bank komersial. Anda tidak terikat dengan LPPSA sepanjang hayat pinjaman. Namun, pastikan kadar bank lebih rendah dari 4.0% LPPSA dan faham risiko kadar berubah (floating rate) sebelum membuat keputusan.",
  },
  {
    question: "Apa kelebihan refinance LPPSA ke bank?",
    answer: "Kelebihan utama termasuk: kadar faedah berpotensi lebih rendah (serendah 3.85%), boleh cash out ekuiti rumah, tempoh pinjaman lebih fleksibel (sehingga 35 tahun), proses kelulusan lebih cepat, dan boleh gabungkan hutang lain. Anda juga tidak lagi bergantung pada potongan gaji automatik.",
  },
  {
    question: "Apa kekurangan tukar LPPSA ke bank?",
    answer: "Kekurangan termasuk: kadar bank adalah floating rate (boleh naik), ada lock-in period 3-5 tahun dengan penalti, margin pembiayaan hanya 90% (vs LPPSA 100%), dan anda perlu bayar kos refinance seperti yuran guaman, valuation, dan stamp duty. Jika kadar bank naik, ansuran anda akan meningkat.",
  },
  {
    question: "Berapa kadar faedah LPPSA sekarang?",
    answer: "Kadar faedah LPPSA adalah 4.0% setahun (fixed rate). Kadar ini tetap sepanjang tempoh pinjaman dan tidak berubah mengikut pasaran. Ini bermakna ansuran bulanan anda sentiasa sama dari awal hingga akhir.",
  },
  {
    question: "Bank mana terbaik untuk refinance dari LPPSA?",
    answer: "Public Bank (3.85%), Maybank (3.88%), dan RHB (3.95%) antara pilihan terbaik untuk refinance dari LPPSA. Bank Rakyat juga popular kerana menawarkan pembiayaan Islamik. Pilihan terbaik bergantung pada profil kredit, DSR, dan keperluan anda.",
  },
  {
    question: "Bolehkah cash out bila refinance LPPSA?",
    answer: "Ya, salah satu kelebihan utama refinance LPPSA ke bank ialah boleh cash out. Jika nilai rumah anda meningkat, anda boleh keluarkan ekuiti sehingga 90% nilai pasaran (tolak baki pinjaman). Contoh: rumah nilai RM500,000, baki RM300,000 — boleh cash out sehingga RM150,000.",
  },
  {
    question: "Berapa lama proses refinance LPPSA ke bank?",
    answer: "Proses penuh biasanya mengambil masa 2-3 bulan. Ini termasuk: permohonan dan kelulusan bank (2-4 minggu), proses guaman (4-6 minggu), dan full settlement LPPSA oleh bank baru (1-2 minggu). Gunakan broker untuk mempercepatkan proses.",
  },
  {
    question: "Apa dokumen diperlukan untuk refinance LPPSA?",
    answer: "Dokumen utama: slip gaji 3 bulan, penyata LPPSA terkini, surat pengesahan jawatan, salinan IC, geran rumah atau perjanjian jual beli, dan penyata KWSP. Sesetengah bank mungkin minta dokumen tambahan bergantung pada kes anda.",
  },
  {
    question: "Bolehkah refinance LPPSA jika hampir bersara?",
    answer: "Ya, malah ini antara sebab utama orang refinance LPPSA. Jika anda hampir bersara dan baki pinjaman masih tinggi, refinance ke bank membolehkan anda panjangkan tempoh pinjaman (sehingga umur 70 tahun) untuk kurangkan ansuran bulanan. Ini membantu pengurusan kewangan selepas bersara.",
  },
  {
    question: "Adakah refinance LPPSA ke bank selamat?",
    answer: "Ya, refinance LPPSA ke bank adalah proses biasa dan selamat. Bank-bank di Malaysia dikawal selia oleh Bank Negara Malaysia. Namun, pastikan anda faham terma pinjaman baru terutama mengenai kadar berubah, lock-in period, dan kos-kos yang terlibat sebelum menandatangani.",
  },
];

const comparisonData = [
  { feature: "Kadar Faedah", lppsa: "4.0% (tetap)", bank: "3.85-4.5% (berubah)" },
  { feature: "Tempoh Maksimum", lppsa: "30 tahun / bersara", bank: "35 tahun" },
  { feature: "Margin", lppsa: "100%", bank: "90%" },
  { feature: "Lock-in", lppsa: "Tiada", bank: "3-5 tahun" },
  { feature: "Kelayakan", lppsa: "Penjawat awam sahaja", bank: "Semua pekerja" },
  { feature: "Potongan Gaji", lppsa: "Ya (automatik)", bank: "Pilihan" },
  { feature: "Cash Out", lppsa: "Tidak boleh", bank: "Boleh" },
  { feature: "Proses", lppsa: "Lebih lama", bank: "Lebih cepat" },
];

const patutTukar = [
  "Kadar bank lebih rendah dari 4%",
  "Ingin cash out (keluarkan ekuiti rumah)",
  "Akan bersara dalam 5-10 tahun (panjangkan tempoh)",
  "Ingin gabungkan hutang lain (kad kredit, personal loan)",
];

const janganTukar = [
  "Kadar bank lebih tinggi dari LPPSA 4.0%",
  "Tidak mahu risiko kadar berubah",
  "Selesa dengan potongan gaji automatik",
  "Kurang dari 10 tahun lagi untuk habis bayar",
];

const prosesSteps = [
  { step: 1, title: "Semak baki pinjaman LPPSA", desc: "Dapatkan penyata baki terkini dari LPPSA atau semak melalui portal online LPPSA." },
  { step: 2, title: "Kira DSR anda", desc: "Pastikan DSR tidak melebihi 70% untuk kelayakan bank.", link: "/dsr-calculator", linkText: "Kira DSR Anda" },
  { step: 3, title: "Bandingkan kadar bank", desc: "Bandingkan tawaran dari pelbagai bank untuk dapatkan kadar terbaik.", link: "/en/best-refinance-banks", linkText: "Lihat Bank Terbaik" },
  { step: 4, title: "Mohon kelulusan bank baru", desc: "Hantar permohonan beserta dokumen lengkap ke bank pilihan anda." },
  { step: 5, title: "Bank bayar LPPSA (full settlement)", desc: "Bank baru akan menyelesaikan baki pinjaman LPPSA anda sepenuhnya." },
  { step: 6, title: "Mula bayar ansuran bank baru", desc: "Ansuran baru bermula selepas proses selesai. Kadar dan tempoh mengikut terma bank." },
];

const dokumen = [
  { item: "Slip gaji 3 bulan", icon: FileText },
  { item: "Penyata LPPSA terkini", icon: Landmark },
  { item: "Surat pengesahan jawatan", icon: BadgeCheck },
  { item: "Salinan IC", icon: Users },
  { item: "Geran rumah / Perjanjian jual beli", icon: FileText },
  { item: "Penyata KWSP", icon: Shield },
];

const bankOptions = [
  {
    name: "Maybank",
    rate: "3.88%",
    highlight: "Terima penjawat awam, proses cepat",
    href: "/maybank-refinance-home-loan",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    name: "Bank Rakyat",
    rate: "4.20%",
    highlight: "Popular dengan penjawat awam, pembiayaan Islamik",
    href: "/bank-rakyat-refinance-home-loan",
    color: "bg-blue-50 border-blue-200",
  },
  {
    name: "RHB",
    rate: "3.95%",
    highlight: "Proses cepat, cashback offer",
    href: "/rhb-refinance-home-loan",
    color: "bg-purple-50 border-purple-200",
  },
  {
    name: "Public Bank",
    rate: "3.85%",
    highlight: "Kadar terendah, proses ketat",
    href: "/public-bank-refinance-home-loan",
    color: "bg-green-50 border-green-200",
  },
];

export default function LPPSARefinancePage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
              <Landmark className="w-4 h-4" />
              <span>Panduan Penjawat Awam {currentYear}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              LPPSA Refinance Malaysia {currentYear} — Panduan Lengkap
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mb-4">
              Refinance Pinjaman LPPSA — Patut Tukar ke Bank?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Panduan lengkap untuk penjawat awam yang ingin refinance atau tukar pinjaman LPPSA ke bank
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                LPPSA 4.0% vs Bank 3.85%
              </span>
              <span className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                Jimat sehingga RM200/bulan
              </span>
              <span className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                Untuk Penjawat Awam
              </span>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Semak Kelayakan Percuma
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Apa Itu LPPSA */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apa Itu LPPSA?
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-lg font-semibold text-blue-900 mb-3">
                Lembaga Pembiayaan Perumahan Sektor Awam
              </p>
              <p className="text-gray-700 mb-4">
                LPPSA adalah badan kerajaan yang menyediakan pinjaman perumahan khusus untuk penjawat awam Malaysia.
                Ia menggantikan Bahagian Pinjaman Perumahan (BPP) sejak tahun 2016.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Kadar tetap <strong>4.0% setahun</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tempoh maksimum <strong>30 tahun</strong> atau sehingga bersara</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Margin pembiayaan <strong>100%</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Untuk <strong>penjawat awam sahaja</strong></span>
                </div>
              </div>
            </div>
          </section>

          {/* LPPSA vs Bank Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              LPPSA vs Bank — Perbandingan
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Ciri</th>
                    <th className="text-left p-3 font-semibold text-blue-800 border-b bg-blue-50">LPPSA</th>
                    <th className="text-left p-3 font-semibold text-green-800 border-b bg-green-50">Bank</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="p-3 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-3 text-gray-700 bg-blue-50/30">{row.lppsa}</td>
                      <td className="p-3 text-gray-700 bg-green-50/30">{row.bank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bila Patut Refinance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bila Patut Refinance LPPSA ke Bank?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PATUT tukar */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  PATUT tukar jika:
                </h3>
                <ul className="space-y-3">
                  {patutTukar.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* JANGAN tukar */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  JANGAN tukar jika:
                </h3>
                <ul className="space-y-3">
                  {janganTukar.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Mid-page CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 md:p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Tidak Pasti Patut Tukar?</h3>
              <p className="text-blue-100 mb-4">Kami boleh semak dan bandingkan untuk anda — percuma.</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Semak Kelayakan Percuma
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Proses Refinance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Proses Refinance LPPSA ke Bank
            </h2>
            <div className="space-y-4">
              {prosesSteps.map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                    {s.link && (
                      <Link href={s.link} className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1 mt-1">
                        {s.linkText} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dokumen Diperlukan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dokumen Diperlukan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dokumen.map((doc, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <doc.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{doc.item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/dokumen-refinance-rumah"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium mt-4"
            >
              Lihat senarai penuh dokumen <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Bank Terbaik */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Terbaik untuk Refinance LPPSA
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline font-medium">Bandingkan kadar semua 14 bank →</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bankOptions.map((bank) => (
                <Link
                  key={bank.name}
                  href={bank.href}
                  className={`block border rounded-xl p-5 hover:shadow-md transition-shadow ${bank.color}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{bank.name}</h3>
                    <span className="text-lg font-bold text-green-700">{bank.rate}</span>
                  </div>
                  <p className="text-sm text-gray-600">{bank.highlight}</p>
                  <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 mt-2">
                    Baca lanjut <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Kalkulator Penjimatan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kalkulator Penjimatan LPPSA ke Bank
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4 font-medium">Contoh kiraan penjimatan:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Baki LPPSA:</span>
                    <span className="font-semibold">RM300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kadar LPPSA:</span>
                    <span className="font-semibold">4.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kadar Bank:</span>
                    <span className="font-semibold text-green-700">3.85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Baki tempoh:</span>
                    <span className="font-semibold">20 tahun</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ansuran LPPSA:</span>
                    <span className="font-semibold">RM1,817/bulan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ansuran Bank:</span>
                    <span className="font-semibold text-green-700">RM1,782/bulan</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-900 font-bold">Jimat:</span>
                    <span className="font-bold text-green-700">RM35/bulan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-bold">Jumlah jimat:</span>
                    <span className="font-bold text-green-700">RM8,400</span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-yellow-800">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  <strong>Nota:</strong> Penjimatan sebenar bergantung pada kadar bank semasa, baki pinjaman, dan tempoh. Kadar bank boleh berubah. Kiraan ini sebagai anggaran sahaja.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Kira Penjimatan Anda
                </Link>
                <Link
                  href="/cash-out-calculator"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 border border-blue-300 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Kira Jumlah Cash Out
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Refinance Dalam LPPSA */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Refinance Dalam LPPSA (Tanpa Tukar ke Bank)
            </h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Jika anda tidak mahu tukar ke bank, LPPSA juga menawarkan opsyen refinance dalaman:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Boleh refinance dalam LPPSA untuk renovasi atau tambah pinjaman</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Kadar kekal 4.0% (tetap)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hubungi LPPSA terus untuk permohonan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tiada penukaran ke bank — kekal di bawah LPPSA</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Soalan Lazim (FAQ)
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
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
          </section>

          {/* Lead Form Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Penjawat Awam? Semak Kelayakan Anda
                </h2>
                <p className="text-gray-600">
                  Kami bandingkan LPPSA vs 15+ bank untuk anda — percuma
                </p>
              </div>
              <LeadForm
                variant="inline"
                source="lppsa-refinance"
                lang="ms"
                showAllFields={true}
              />
            </div>
          </section>

          {/* Related Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Halaman Berkaitan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/bank-rakyat-refinance-home-loan"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Building2 className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Bank Rakyat Refinance</h3>
                  <p className="text-sm text-gray-600">Pembiayaan Islamik untuk penjawat awam</p>
                </div>
              </Link>
              <Link
                href="/cara-refinance-rumah"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cara Refinance Rumah</h3>
                  <p className="text-sm text-gray-600">Panduan langkah demi langkah</p>
                </div>
              </Link>
              <Link
                href="/calculator"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Kalkulator Refinance</h3>
                  <p className="text-sm text-gray-600">Kira penjimatan bulanan anda</p>
                </div>
              </Link>
              <Link
                href="/en/best-refinance-banks"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <TrendingDown className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Best Refinance Banks</h3>
                  <p className="text-sm text-gray-600">Compare top banks in Malaysia</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sedia untuk Refinance LPPSA?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Dapatkan perbandingan percuma — LPPSA vs 15+ bank dalam 24 jam.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Semak Kelayakan Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <LeadForm
                variant="modal"
                source="lppsa-refinance"
                lang="ms"
                showAllFields={true}
              />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Semak kelayakan LPPSA"
        buttonText="Semak Percuma"
      />
    </>
  );
}
