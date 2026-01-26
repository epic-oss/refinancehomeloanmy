"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import DebtConsolidationLeadForm from "@/components/DebtConsolidationLeadForm";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import {
  ArrowRight,
  Check,
  X,
  CreditCard,
  Wallet,
  Car,
  ShoppingBag,
  Building2,
  TrendingDown,
  Calculator,
  FileText,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const { currentYear } = SITE_CONFIG;

const jenisHutang = [
  { icon: CreditCard, name: "Kad Kredit", rate: "15-18%", color: "text-red-500" },
  { icon: Wallet, name: "Pinjaman Peribadi", rate: "6-12%", color: "text-orange-500" },
  { icon: Car, name: "Pinjaman Kereta", rate: "3-5%", color: "text-yellow-600" },
  { icon: ShoppingBag, name: "BNPL (Shopee/Grab)", rate: "18-24%", color: "text-pink-500" },
  { icon: Building2, name: "Overdraf", rate: "7-9%", color: "text-purple-500" },
];

const pilihanPenyatuan = [
  {
    pilihan: "Refinance Rumah (Cash-Out)",
    kadar: "3.5-4.5%",
    jumlahMaks: "Sehingga 90% ekuiti",
    masa: "6-10 minggu",
    terbaikUntuk: "Pemilik rumah dengan ekuiti",
    highlight: true,
  },
  {
    pilihan: "Pinjaman Peribadi",
    kadar: "6-12%",
    jumlahMaks: "RM50k-150k",
    masa: "1-3 hari",
    terbaikUntuk: "Tiada rumah, perlukan cepat",
    highlight: false,
  },
  {
    pilihan: "AKPK",
    kadar: "0% (dibekukan)",
    jumlahMaks: "Semua hutang",
    masa: "2-4 minggu",
    terbaikUntuk: "Kesusahan kewangan teruk",
    highlight: false,
  },
];

const bankTerbaik = [
  { bank: "Maybank", kadar: "3.65%", href: "/maybank-refinance-home-loan" },
  { bank: "Public Bank", kadar: "3.68%", href: "/public-bank-refinance-home-loan" },
  { bank: "CIMB", kadar: "3.70%", href: "/cimb-refinance-home-loan" },
  { bank: "Hong Leong", kadar: "3.72%", href: "/hong-leong-refinance-home-loan" },
  { bank: "RHB", kadar: "3.75%", href: "/rhb-refinance-home-loan" },
  { bank: "AmBank", kadar: "3.78%", href: "/ambank-refinance-home-loan" },
];

const faqs = [
  {
    question: "Apakah penyatuan hutang sesuai untuk saya?",
    answer: "Penyatuan hutang sesuai jika anda mempunyai beberapa hutang dengan kadar faedah tinggi (seperti kad kredit 18%) dan ingin mengurangkan pembayaran bulanan. Jika anda pemilik rumah, anda boleh mendapat kadar serendah 3.5-4.5% melalui cash-out refinance. Ini boleh menjimatkan ribuan ringgit setahun.",
  },
  {
    question: "Bank mana terbaik untuk penyatuan hutang?",
    answer: "Untuk cash-out refinance (kadar terendah), Maybank, Public Bank, dan CIMB biasanya menawarkan kadar terbaik bermula dari 3.65%. Untuk pinjaman peribadi tanpa rumah, Hong Leong dan Maybank mempunyai kadar kompetitif. RHB dan AmBank lebih fleksibel untuk kelulusan.",
  },
  {
    question: "Bolehkah saya gabung hutang dengan rekod kredit buruk?",
    answer: "Ya, tetapi pilihan terhad. Jika anda pemilik rumah, bank lebih fokus pada nilai ekuiti daripada skor kredit untuk cash-out refinance. RHB dan AmBank dikenali lebih fleksibel. Jika kredit sangat buruk, AKPK adalah pilihan - mereka berunding dengan pemiutang bagi pihak anda.",
  },
  {
    question: "Berapa lama proses penyatuan hutang?",
    answer: "Bergantung pada kaedah: Pinjaman peribadi - 1-3 hari kelulusan. Cash-out refinance - 6-10 minggu (kerana melibatkan penilaian rumah dan dokumen undang-undang). AKPK - 2-4 minggu untuk memulakan program. Cash-out mengambil masa lebih lama tetapi menawarkan kadar lebih rendah.",
  },
  {
    question: "Apakah perbezaan antara refinance rumah dan pinjaman peribadi untuk penyatuan hutang?",
    answer: "Refinance rumah (cash-out) memerlukan rumah sebagai cagaran dan menawarkan kadar 3.5-4.5% dengan jumlah lebih tinggi. Pinjaman peribadi tidak memerlukan cagaran tetapi kadar lebih tinggi (6-12%) dan jumlah maksimum RM150k. Jika anda pemilik rumah, cash-out biasanya pilihan terbaik.",
  },
];

export default function PenyatuanHutangPage() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 mb-4">
            <TrendingDown className="w-5 h-5" />
            <span className="text-sm">Penyelesaian Hutang</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Penyatuan Hutang Malaysia {currentYear} - Cara Gabungkan Semua Hutang Anda
          </h1>
          <p className="text-lg text-green-100 mb-2">
            Terbeban dengan pelbagai hutang? Gabungkan semua hutang anda menjadi satu bayaran bulanan
            dengan kadar faedah serendah 3.5%.
          </p>
          <p className="text-sm text-green-200 mb-6">
            Dikemaskini: {SITE_CONFIG.lastUpdated}
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-all hover:scale-105"
            >
              Semak Kelayakan Saya
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/debt-consolidation-calculator"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-500 transition-all border border-green-400"
            >
              <Calculator className="w-5 h-5" />
              Kira Penjimatan
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">3.5%</p>
              <p className="text-xs text-green-200">Kadar Dari</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">RM7,000</p>
              <p className="text-xs text-green-200">Jimat/Tahun*</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">1</p>
              <p className="text-xs text-green-200">Bayaran Sahaja</p>
            </div>
          </div>
          <p className="text-xs text-green-300 mt-2 text-center">*Berdasarkan hutang RM50k pada 18% digabungkan ke 4%</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Apa itu Penyatuan Hutang */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apa itu Penyatuan Hutang?
            </h2>

            <p className="text-gray-700 mb-4">
              <strong>Penyatuan hutang</strong> bermaksud menggabungkan beberapa hutang menjadi satu pinjaman
              dengan kadar faedah yang lebih rendah. Daripada membayar 5 pemiutang berbeza dengan tarikh akhir
              dan kadar faedah yang berbeza, anda hanya perlu membuat satu bayaran setiap bulan.
            </p>

            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Matematik Mudah:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-100 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Sebelum Penyatuan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Kad Kredit 1: RM15,000 @ 18%</li>
                    <li>Kad Kredit 2: RM10,000 @ 18%</li>
                    <li>Pinjaman Peribadi: RM20,000 @ 8%</li>
                    <li>BNPL: RM5,000 @ 24%</li>
                    <li className="pt-2 border-t border-red-200 font-semibold">
                      Jumlah: RM50,000 | 5 bayaran | Purata ~14%
                    </li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Selepas Penyatuan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Cash-Out Refinance: RM50,000</li>
                    <li>Kadar Faedah: 4%</li>
                    <li>Semua hutang: DIJELASKAN</li>
                    <li>&nbsp;</li>
                    <li className="pt-2 border-t border-green-200 font-semibold">
                      Jumlah: RM50,000 | 1 bayaran | 4%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Jenis Hutang */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Jenis Hutang yang Boleh Digabungkan
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {jenisHutang.map((hutang) => (
                <div key={hutang.name} className="bg-gray-50 rounded-lg p-4 text-center">
                  <hutang.icon className={`w-8 h-8 mx-auto mb-2 ${hutang.color}`} />
                  <p className="font-medium text-gray-900 text-sm">{hutang.name}</p>
                  <p className={`text-sm font-bold ${hutang.color}`}>{hutang.rate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pilihan Penyatuan Hutang */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pilihan Penyatuan Hutang di Malaysia
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold">Pilihan</th>
                    <th className="text-left p-4 font-semibold">Kadar Faedah</th>
                    <th className="text-left p-4 font-semibold">Jumlah Maks</th>
                    <th className="text-left p-4 font-semibold">Masa</th>
                    <th className="text-left p-4 font-semibold">Terbaik Untuk</th>
                  </tr>
                </thead>
                <tbody>
                  {pilihanPenyatuan.map((pilihan) => (
                    <tr
                      key={pilihan.pilihan}
                      className={pilihan.highlight ? "bg-green-50 border-b" : "border-b"}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {pilihan.highlight && (
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">TERBAIK</span>
                          )}
                          <span className={pilihan.highlight ? "font-semibold text-green-700" : "font-medium"}>
                            {pilihan.pilihan}
                          </span>
                        </div>
                      </td>
                      <td className={`p-4 font-semibold ${pilihan.highlight ? "text-green-600" : ""}`}>
                        {pilihan.kadar}
                      </td>
                      <td className="p-4 text-sm">{pilihan.jumlahMaks}</td>
                      <td className="p-4 text-sm">{pilihan.masa}</td>
                      <td className="p-4 text-sm">{pilihan.terbaikUntuk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-center">
              <Link
                href="/debt-consolidation-options"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
              >
                Bandingkan semua 5 pilihan secara terperinci (English)
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Berapa Banyak Boleh Jimat */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Berapa Banyak Anda Boleh Jimat?
            </h2>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Contoh Penjimatan:</h3>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm mb-2">Hutang kad kredit RM50,000 pada kadar 18%:</p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-green-200">Faedah Setahun (18%)</p>
                    <p className="text-xl font-bold">RM9,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-green-200">Faedah Baru (4%)</p>
                    <p className="text-xl font-bold">RM2,000</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <p className="text-xs text-green-200">Penjimatan Setahun</p>
                    <p className="text-2xl font-bold">RM7,000</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-green-100">
                Dalam 10 tahun, anda boleh jimat <strong>RM70,000</strong> hanya dari pengurangan kadar faedah!
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/debt-consolidation-calculator"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Kira Penjimatan Anda
              </Link>
            </div>
          </section>

          {/* Mid-page CTA */}
          <div className="my-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Bersedia untuk Bebas Hutang?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Dapatkan perundingan percuma dan ketahui berapa banyak anda boleh jimat.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Dapatkan Sebut Harga Percuma
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bank Terbaik */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Terbaik untuk Penyatuan Hutang {currentYear}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bankTerbaik.map((bank, index) => (
                <Link
                  key={bank.bank}
                  href={bank.href}
                  className={`rounded-lg p-4 text-center transition-colors ${
                    index === 0
                      ? "bg-green-50 border-2 border-green-300 hover:border-green-400"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {index === 0 && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">
                      PILIHAN TERATAS
                    </span>
                  )}
                  <p className="font-semibold text-gray-900">{bank.bank}</p>
                  <p className="text-lg font-bold text-green-600">dari {bank.kadar}</p>
                  <p className="text-xs text-gray-500 mt-1">Lihat butiran →</p>
                </Link>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Kadar adalah untuk cash-out refinance. Kadar sebenar bergantung kepada profil kredit.
            </p>
          </section>

          {/* Dokumen Diperlukan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dokumen Diperlukan
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Dokumen Peribadi
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>IC (MyKad) - depan dan belakang</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Slip gaji 3 bulan terkini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Penyata bank 6 bulan terkini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Borang EA / Penyata cukai (BE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Penyata KWSP</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Dokumen Hartanah & Hutang
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Penyata pinjaman perumahan semasa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Geran hakmilik / Perjanjian S&P</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Penyata kad kredit (semua kad)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Penyata pinjaman peribadi (jika ada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Penyata hutang lain</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Soalan Lazim tentang Penyatuan Hutang
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
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

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Panduan Berkaitan
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/cara-cash-out-rumah"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <h3 className="font-semibold text-green-900">Cara Cash Out Rumah</h3>
                <p className="text-sm text-green-700">Panduan lengkap dapatkan tunai dari ekuiti</p>
              </Link>
              <Link
                href="/cara-refinance-rumah"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900">Cara Refinance Rumah</h3>
                <p className="text-sm text-blue-700">Panduan lengkap A-Z refinance rumah</p>
              </Link>
              <Link
                href="/debt-consolidation-malaysia"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-purple-900">Debt Consolidation Guide (English)</h3>
                <p className="text-sm text-purple-700">Panduan lengkap dalam Bahasa Inggeris</p>
              </Link>
              <Link
                href="/bank-terbaik-refinance-rumah"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="font-semibold text-orange-900">Bank Terbaik Refinance</h3>
                <p className="text-sm text-orange-700">Bandingkan kadar bank</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mula Perjalanan Bebas Hutang Anda
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Dapatkan perundingan percuma dan ketahui berapa banyak anda boleh jimat dengan penyatuan hutang.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Dapatkan Sebut Harga Percuma
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
              <DebtConsolidationLeadForm variant="modal" source="penyatuan-hutang" />
            </div>
          </div>
        </div>
      )}

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Penyatuan Hutang Malaysia ${currentYear} - Cara Gabungkan Semua Hutang Anda`,
            description: "Panduan lengkap penyatuan hutang di Malaysia. Ketahui cara gabungkan hutang kad kredit, pinjaman peribadi dengan kadar faedah rendah.",
            datePublished: "2026-01-22",
            dateModified: "2026-01-22",
            inLanguage: "ms-MY",
            author: {
              "@type": "Organization",
              name: "RefinanceHomeLoanMY",
            },
            publisher: {
              "@type": "Organization",
              name: "RefinanceHomeLoanMY",
              url: "https://refinancehomeloanmy.com",
            },
          }),
        }}
      />

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

      <StickyMobileCTA
        onCtaClick={() => setShowForm(true)}
        text="Gabungkan hutang anda"
        buttonText="Semak Kelayakan"
      />
    </>
  );
}
