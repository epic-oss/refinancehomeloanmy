"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import MidPageCTA from "@/components/MidPageCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ArrowRight, Check, X } from "lucide-react";

const faqs = [
  {
    question: "Bank mana yang terbaik untuk refinance rumah pada 2026?",
    answer: "Berdasarkan kadar faedah terendah pada 2026, Bank Islam menawarkan kadar serendah 3.80% (Islamik sahaja), diikuti Standard Chartered (3.90%) dan Al Rajhi (3.90%, Islamik). Untuk bank konvensional besar, Public Bank (4.22%), Maybank (4.35%) dan CIMB (4.35%) adalah pilihan popular. Bank terbaik bergantung kepada profil kewangan anda — pendapatan, DSR, jenis hartanah, dan sama ada anda mahu pembiayaan Islamik atau konvensional.",
  },
  {
    question: "Berapa kadar refinance terendah di Malaysia sekarang?",
    answer: "Kadar refinance terendah di Malaysia pada Februari 2026 ialah 3.80% p.a. daripada Bank Islam (pembiayaan Islamik sahaja). Untuk konvensional, Standard Chartered menawarkan 3.90%. Walau bagaimanapun, kadar sebenar yang anda terima bergantung kepada profil kredit, nisbah pinjaman-ke-nilai (LTV), dan pendapatan anda. Sesetengah bank memerlukan pendapatan minimum RM5,000/bulan untuk kadar terendah mereka.",
  },
  {
    question: "Bolehkah saya refinance jika DSR tinggi?",
    answer: "Ya, sesetengah bank lebih fleksibel untuk pemohon dengan DSR tinggi. Bank Rakyat menerima DSR sehingga 80% untuk kes tertentu, dan LPPSA (untuk penjawat awam) mempunyai syarat DSR yang lebih longgar. Hong Leong juga dikenali dengan kelonggaran DSR untuk pemohon bergaji. Jika DSR anda melebihi 70%, pertimbangkan untuk mengurangkan hutang lain dahulu atau gunakan kalkulator DSR kami untuk menyemak kelayakan anda.",
  },
  {
    question: "Apakah dokumen yang diperlukan untuk refinance rumah?",
    answer: "Dokumen asas: MyKad, slip gaji 3 bulan terkini, penyata bank 6 bulan, borang EA/penyata cukai, penyata pinjaman semasa, dan dokumen hartanah (S&P, geran). Bagi yang bekerja sendiri: pendaftaran SSM, penyata cukai 2 tahun (Borang B), penyata bank perniagaan 6 bulan. Pastikan semua dokumen lengkap untuk mempercepatkan proses.",
  },
  {
    question: "Berapa lama proses refinance rumah?",
    answer: "Proses refinance rumah biasanya mengambil masa 2-3 bulan dari permohonan hingga pengeluaran wang. Pecahan: penyerahan dokumen dan semakan kredit (1-2 minggu), penilaian hartanah (1-2 minggu), kelulusan pinjaman (2-4 minggu), proses guaman (3-5 minggu), dan pengeluaran wang (1-2 minggu). Bank besar seperti Maybank mungkin lebih perlahan semasa waktu puncak.",
  },
  {
    question: "Bolehkah saya cash out semasa refinance?",
    answer: "Ya, kebanyakan bank membenarkan cash out refinancing sehingga 80-90% LTV daripada nilai pasaran semasa hartanah anda. Contohnya: hartanah bernilai RM500,000 dengan baki RM300,000 — anda boleh refinance sehingga RM400,000 (80% LTV) dan cash out RM100,000. Wang tunai ini boleh digunakan untuk pengubahsuaian, penyatuan hutang, atau pelaburan. Gunakan kalkulator cash out kami untuk anggaran tepat.",
  },
  {
    question: "Apakah perbezaan antara refinance konvensional dan Islamik?",
    answer: "Pinjaman konvensional menggunakan struktur kadar faedah (Base Rate + spread), manakala pembiayaan Islamik menggunakan konsep Syariah seperti Tawarruq atau Musharakah Mutanaqisah. Kedua-duanya menawarkan kadar dan ciri yang serupa. Kelebihan utama Islamik: kadar siling tetap (ceiling rate) yang melindungi anda daripada kenaikan kadar yang melampau. Bank yang menawarkan kedua-dua: Maybank, CIMB, Public Bank, RHB, Hong Leong.",
  },
  {
    question: "Berapa kos untuk refinance rumah?",
    answer: "Kos refinance termasuk: yuran guaman (0.4-1% daripada jumlah pinjaman), yuran penilaian (RM200-RM1,500 bergantung nilai hartanah), duti setem (0.5% daripada jumlah pinjaman — mungkin dikecualikan untuk instrumen di bawah RM500,000), dan MRTA/MLTA (pilihan). Jumlah kos tipikal: RM5,000-RM15,000. Sesetengah bank menawarkan pakej 'zero cost' yang menampung sebahagian atau semua kos ini. Pastikan penjimatan bulanan melebihi kos ini dalam tempoh 2-3 tahun.",
  },
];

export default function BankTerbaikRefinanceRumah() {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bank Terbaik Untuk Refinance Rumah Malaysia 2026",
            description: "Bandingkan kadar refinance rumah dari 10+ bank di Malaysia. Ketahui bank mana yang menawarkan kadar terendah untuk refinance 2026.",
            datePublished: "2025-11-15",
            dateModified: "2026-02-15",
            author: { "@type": "Organization", name: "RefinanceHomeLoanMY" },
            publisher: { "@type": "Organization", name: "RefinanceHomeLoanMY", url: "https://refinancehomeloanmy.com" },
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
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4">
            Panduan Refinance Malaysia 2026
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Bank Terbaik untuk Refinance Rumah di Malaysia 2026
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            Panduan lengkap untuk memilih bank terbaik bagi refinance pinjaman
            perumahan anda. Bandingkan 10 bank utama — kadar, lock-in, kos & kelayakan.
          </p>
          <p className="text-sm text-gray-400 mb-6">Dikemaskini: Februari 2026</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            Dapatkan Sebut Harga Percuma
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Quick Summary Box */}
      <section className="py-8 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Ringkasan Refinance Malaysia 2026</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-700">3.80%</p>
                <p className="text-xs text-gray-600">Kadar Terendah</p>
              </div>
              <div className="text-center p-3 bg-primary-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-700">10+</p>
                <p className="text-xs text-gray-600">Bank Dibandingkan</p>
              </div>
              <div className="text-center p-3 bg-primary-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-700">35 Thn</p>
                <p className="text-xs text-gray-600">Tempoh Maks</p>
              </div>
              <div className="text-center p-3 bg-primary-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-700">RM3k</p>
                <p className="text-xs text-gray-600">Gaji Minimum</p>
              </div>
              <div className="text-center p-3 bg-primary-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-700">90%</p>
                <p className="text-xs text-gray-600">LTV Maks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Memilih bank yang tepat untuk refinance rumah adalah keputusan
              kewangan yang penting. Dengan perbezaan kadar faedah yang kecil
              pun boleh menjimatkan puluhan ribu ringgit sepanjang tempoh
              pinjaman anda. Di Malaysia, terdapat lebih 10 bank utama yang
              menawarkan pakej refinancing dengan kadar dan terma yang berbeza.
            </p>
            <p className="text-lg text-gray-700">
              Dalam panduan komprehensif ini, kami bandingkan kadar refinance
              dari semua bank utama di Malaysia untuk membantu anda membuat
              keputusan yang tepat. Data kadar dikemaskini secara berkala untuk
              memastikan anda mendapat maklumat terkini.
            </p>
          </section>

          {/* Jadual Perbandingan Bank Refinance 2026 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Jadual Perbandingan Bank Terbaik Refinance Rumah 2026
            </h2>
            <p className="text-gray-700 mb-6">
              Berikut ialah senarai lengkap bank terbaik untuk refinance rumah di Malaysia pada 2026, disusun mengikut kadar faedah terendah. Pilih bank yang sesuai dengan keperluan dan profil kewangan anda.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left p-3 font-semibold">Bank</th>
                    <th className="text-center p-3 font-semibold">Kadar (%)</th>
                    <th className="text-center p-3 font-semibold">Jenis</th>
                    <th className="text-center p-3 font-semibold">Lock-in</th>
                    <th className="text-center p-3 font-semibold">Pendapatan Min</th>
                    <th className="text-left p-3 font-semibold">Terbaik Untuk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50 border-b font-medium">
                    <td className="p-3"><Link href="/bank-islam-refinance-home-loan" className="text-primary-600 hover:underline font-semibold">Bank Islam</Link></td>
                    <td className="p-3 text-center text-green-700 font-bold">3.80%</td>
                    <td className="p-3 text-center">Islamik</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Kadar terendah</td>
                  </tr>
                  <tr className="bg-green-50 border-b">
                    <td className="p-3"><Link href="/standard-chartered-refinance-home-loan" className="text-primary-600 hover:underline">Standard Chartered</Link></td>
                    <td className="p-3 text-center text-green-700 font-semibold">3.90%</td>
                    <td className="p-3 text-center">Konvensional</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM5,000</td>
                    <td className="p-3">Gaji tinggi, offset account</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">Al Rajhi</td>
                    <td className="p-3 text-center font-semibold">3.90%</td>
                    <td className="p-3 text-center">Islamik</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Islamik murah</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3"><Link href="/rhb-refinance-home-loan" className="text-primary-600 hover:underline">RHB</Link></td>
                    <td className="p-3 text-center font-semibold">4.10%</td>
                    <td className="p-3 text-center">Konvensional</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Proses cepat</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3"><Link href="/public-bank-refinance-home-loan" className="text-primary-600 hover:underline">Public Bank</Link></td>
                    <td className="p-3 text-center font-semibold">4.22%</td>
                    <td className="p-3 text-center">Konvensional</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Servis terbaik</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3"><Link href="/hsbc-refinance-home-loan" className="text-primary-600 hover:underline">HSBC</Link></td>
                    <td className="p-3 text-center font-semibold">4.30%</td>
                    <td className="p-3 text-center">Konvensional</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM5,000</td>
                    <td className="p-3">Expat / PR</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3"><Link href="/maybank-refinance-home-loan" className="text-primary-600 hover:underline">Maybank</Link></td>
                    <td className="p-3 text-center font-semibold">4.35%</td>
                    <td className="p-3 text-center">Kedua-dua</td>
                    <td className="p-3 text-center">3-5 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Bank terbesar Malaysia</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3"><Link href="/cimb-refinance-home-loan" className="text-primary-600 hover:underline">CIMB</Link></td>
                    <td className="p-3 text-center font-semibold">4.35%</td>
                    <td className="p-3 text-center">Kedua-dua</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Islamik & konvensional</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3"><Link href="/hong-leong-refinance-home-loan" className="text-primary-600 hover:underline">Hong Leong</Link></td>
                    <td className="p-3 text-center font-semibold">4.38%</td>
                    <td className="p-3 text-center">Kedua-dua</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Cashback promo</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3"><Link href="/uob-refinance-home-loan" className="text-primary-600 hover:underline">UOB</Link></td>
                    <td className="p-3 text-center font-semibold">4.61%</td>
                    <td className="p-3 text-center">Kedua-dua</td>
                    <td className="p-3 text-center">3 tahun</td>
                    <td className="p-3 text-center">RM3,000</td>
                    <td className="p-3">Fleksibel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              * Kadar setakat Februari 2026. Tertakluk kepada perubahan mengikut profil kredit.{" "}
              <Link href="/refinance-home-loan-rates-malaysia" className="text-primary-600 hover:underline">Lihat perbandingan kadar penuh (EN) →</Link>
            </p>
          </section>

          {/* Bank Terbaik Mengikut Keperluan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bank Terbaik Mengikut Keperluan Anda
            </h2>
            <p className="text-gray-700 mb-6">
              Tidak semua bank sesuai untuk semua orang. Berikut ialah cadangan bank terbaik berdasarkan situasi kewangan dan keperluan anda:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <h3 className="font-bold text-green-900 mb-2">Kadar Terendah</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Bank Islam — 3.80%</strong> (Islamik sahaja). Pilihan terbaik jika anda mahu kadar paling rendah di pasaran dan tiada masalah dengan pembiayaan Islamik.
                </p>
                <Link href="/bank-islam-refinance-home-loan" className="text-sm text-primary-600 hover:underline font-medium">Lihat Bank Islam →</Link>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-2">Terbaik untuk Cash Out</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Maybank, CIMB, dan Public Bank — semua menawarkan cash out sehingga 80-90% LTV. Sesuai untuk pengubahsuaian rumah atau penyatuan hutang.
                </p>
                <Link href="/cara-cash-out-rumah" className="text-sm text-primary-600 hover:underline font-medium">Panduan cash out rumah →</Link>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2">DSR Tinggi</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Bank Rakyat</strong> (DSR sehingga 80%) dan <strong>LPPSA</strong> (penjawat awam). Lebih fleksibel untuk pemohon yang mempunyai komitmen hutang tinggi.
                </p>
                <Link href="/can-i-refinance-with-high-dsr" className="text-sm text-primary-600 hover:underline font-medium">Panduan DSR tinggi →</Link>
              </div>

              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <h3 className="font-bold text-purple-900 mb-2">Penjawat Awam</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>LPPSA</strong> — kadar khas untuk kakitangan kerajaan dengan syarat DSR yang lebih longgar dan proses yang dipermudahkan.
                </p>
                <Link href="/lppsa-refinance-malaysia" className="text-sm text-primary-600 hover:underline font-medium">Panduan LPPSA →</Link>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                <h3 className="font-bold text-orange-900 mb-2">Gaji Rendah (RM3,000)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Kebanyakan bank menerima pendapatan minimum RM3,000/bulan: Maybank, CIMB, Public Bank, RHB, Hong Leong, Bank Islam. Standard Chartered dan HSBC memerlukan RM5,000+.
                </p>
              </div>

              <div className="bg-teal-50 rounded-xl p-5 border border-teal-200">
                <h3 className="font-bold text-teal-900 mb-2">Islamik Terbaik</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Bank Islam (3.80%)</strong> dan <strong>Al Rajhi (3.90%)</strong> — bank yang pakar dalam pembiayaan Islamik dengan kadar paling kompetitif.
                </p>
                <Link href="/bank-islam-refinance-home-loan" className="text-sm text-primary-600 hover:underline font-medium">Lihat Bank Islam →</Link>
              </div>
            </div>
          </section>

          {/* Contoh Kiraan Penjimatan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contoh Kiraan: Berapa Banyak Anda Boleh Jimat?
            </h2>
            <p className="text-gray-600 mb-6">
              Senario: Rumah RM400k, baki pinjaman RM250k, baki tempoh 25 tahun
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-red-800">Bank Semasa (4.80%)</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-600">Baki Pinjaman</span>
                    <span className="font-semibold">RM250,000</span>
                  </div>
                  <div className="flex justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-600">Kadar Faedah</span>
                    <span className="font-semibold text-red-600">4.80%</span>
                  </div>
                  <div className="flex justify-between bg-red-100 rounded-lg p-3">
                    <span className="text-red-700">Bayaran Bulanan</span>
                    <span className="font-bold text-red-700">RM1,461</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-green-800">Refinance (3.80% — Bank Islam)</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-600">Pinjaman Baru</span>
                    <span className="font-semibold">RM250,000</span>
                  </div>
                  <div className="flex justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-600">Kadar Faedah</span>
                    <span className="font-semibold text-green-600">3.80%</span>
                  </div>
                  <div className="flex justify-between bg-green-100 rounded-lg p-3">
                    <span className="text-green-700">Bayaran Bulanan</span>
                    <span className="font-bold text-green-700">RM1,283</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-xl p-6 text-center mb-6">
              <p className="text-sm text-green-800 mb-1">Anggaran Penjimatan Anda</p>
              <p className="text-3xl font-bold text-green-700 mb-2">RM178/bulan</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-green-700">Jimat Setahun</p>
                  <p className="text-xl font-bold text-green-600">RM2,136</p>
                </div>
                <div>
                  <p className="text-xs text-green-700">Jumlah Penjimatan (25 thn)</p>
                  <p className="text-xl font-bold text-green-600">RM53,400</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Kira Penjimatan Anda
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/dsr-calculator"
                className="inline-flex items-center gap-2 bg-white text-primary-700 border border-primary-300 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Kira DSR Anda
              </Link>
              <Link
                href="/cash-out-calculator"
                className="inline-flex items-center gap-2 bg-white text-primary-700 border border-primary-300 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Kira Cash Out
              </Link>
            </div>
          </section>

          {/* Faktor Pemilihan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Faktor Pemilihan Bank Terbaik Untuk Refinance
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1. Kadar Faedah
                </h3>
                <p className="text-gray-700">
                  Kadar faedah adalah faktor utama dalam memilih bank untuk
                  refinance. Perbezaan 0.5% dalam kadar faedah boleh
                  menjimatkan RM200-500 sebulan bergantung kepada jumlah
                  pinjaman anda. Bandingkan kadar efektif (effective rate)
                  bukan hanya kadar yang diiklankan.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. Tempoh Lock-in
                </h3>
                <p className="text-gray-700">
                  Kebanyakan bank mengenakan tempoh lock-in 3-5 tahun. Jika anda
                  refinance atau melangsaikan pinjaman sebelum tempoh ini tamat,
                  anda akan dikenakan penalti 2-3% dari baki pinjaman. Pilih
                  tempoh lock-in yang sesuai dengan perancangan kewangan anda.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. Kos Tambahan
                </h3>
                <p className="text-gray-700">
                  Selain kadar faedah, pertimbangkan kos guaman, penilaian, dan
                  duti setem. Sesetengah bank menawarkan pakej &quot;zero
                  cost&quot; yang menanggung sebahagian atau semua kos ini.
                  Pastikan anda mengira jumlah kos sebenar sebelum membuat
                  keputusan.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4. Perkhidmatan Pelanggan
                </h3>
                <p className="text-gray-700">
                  Kualiti perkhidmatan pelanggan penting terutama semasa proses
                  permohonan. Bank dengan sistem dalam talian yang baik dan
                  pegawai yang responsif boleh mempercepatkan proses refinance
                  anda. Baca ulasan pelanggan sebelum membuat pilihan.
                </p>
              </div>
            </div>
          </section>

          {/* Top 3 Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 3 Bank Untuk Refinance Rumah 2026
            </h2>

            <div className="space-y-6">
              {/* #1 Bank Islam */}
              <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      #1 Kadar Terendah
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      <Link href="/bank-islam-refinance-home-loan" className="hover:text-primary-600">Bank Islam Malaysia Berhad</Link>
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Kadar dari</p>
                    <p className="text-2xl font-bold text-green-600">3.80%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Kelebihan:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Kadar terendah di pasaran (3.80%)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Pembiayaan patuh Syariah penuh</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Kadar siling (ceiling rate) melindungi peminjam</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Tempoh sehingga 35 tahun</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Maklumat Penting:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Lock-in: 3 tahun</li>
                      <li>LTV maksimum: 90%</li>
                      <li>Pinjaman minimum: RM100,000</li>
                      <li>Terbaik untuk: Kadar terendah (Islamik)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #2 Standard Chartered */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      #2 Konvensional Terbaik
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      <Link href="/standard-chartered-refinance-home-loan" className="hover:text-primary-600">Standard Chartered Bank</Link>
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Kadar dari</p>
                    <p className="text-2xl font-bold text-primary-600">3.90%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Kelebihan:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Kadar konvensional terendah (3.90%)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Offset account mengurangkan faedah</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Perbankan premium &amp; perkhidmatan VIP</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Tempoh sehingga 35 tahun</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Maklumat Penting:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Lock-in: 3 tahun</li>
                      <li>LTV maksimum: 90%</li>
                      <li>Pendapatan minimum: RM5,000</li>
                      <li>Terbaik untuk: Gaji tinggi, offset account</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #3 Al Rajhi */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      #3 Islamik Terbaik
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      Al Rajhi Bank
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Kadar dari</p>
                    <p className="text-2xl font-bold text-primary-600">3.90%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Kelebihan:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Kadar Islamik kedua terendah (3.90%)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Pembiayaan Islamik tulen (full-fledged)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Proses permohonan pantas</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Tempoh sehingga 35 tahun</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Maklumat Penting:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Lock-in: 3 tahun</li>
                      <li>LTV maksimum: 90%</li>
                      <li>Pinjaman minimum: RM100,000</li>
                      <li>Terbaik untuk: Islamik murah</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mid Page CTA */}
          <MidPageCTA onOpenForm={() => setShowForm(true)} />

          {/* Kos Refinance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kos Refinance Rumah 2026
            </h2>
            <p className="text-gray-700 mb-4">
              Sebelum membuat keputusan, pastikan anda mengambil kira semua kos
              yang terlibat dalam proses refinancing:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Jenis Kos</th>
                    <th className="text-left p-3 font-semibold">Anggaran</th>
                    <th className="text-left p-3 font-semibold">Catatan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Yuran Guaman</td>
                    <td className="p-3">RM2,000 – RM5,000</td>
                    <td className="p-3 text-gray-600">0.4-1% daripada jumlah pinjaman</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Yuran Penilaian</td>
                    <td className="p-3">RM300 – RM1,500</td>
                    <td className="p-3 text-gray-600">Bergantung kepada nilai hartanah</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Duti Setem</td>
                    <td className="p-3">0.5%</td>
                    <td className="p-3 text-gray-600">Mungkin dikecualikan untuk pinjaman ≤RM500k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">MRTA / MLTA</td>
                    <td className="p-3">Pilihan</td>
                    <td className="p-3 text-gray-600">Insurans takaful pinjaman — disyorkan tetapi bukan wajib</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Penalti Penyelesaian Awal</td>
                    <td className="p-3">2-3%</td>
                    <td className="p-3 text-gray-600">Jika masih dalam tempoh lock-in</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-amber-800">
                <strong>Petua:</strong> Jumlah kos tipikal refinance ialah RM5,000–RM15,000. Pastikan penjimatan bulanan anda melebihi kos ini dalam tempoh 2-3 tahun untuk memastikan refinance berbaloi.
              </p>
            </div>
          </section>

          {/* Syarat Kelayakan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Syarat Kelayakan Refinance
            </h2>
            <p className="text-gray-700 mb-4">
              Untuk layak refinance rumah di Malaysia, anda perlu memenuhi
              syarat-syarat asas berikut:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Umur", value: "21 – 65 tahun (70 tahun di sesetengah bank)" },
                  { label: "Kewarganegaraan", value: "Warganegara Malaysia (PR di bank terpilih)" },
                  { label: "Pendapatan Minimum", value: "RM3,000/bulan (RM5,000 untuk SCB, HSBC)" },
                  { label: "DSR (Nisbah Hutang)", value: "Di bawah 70% (sehingga 80% di Bank Rakyat)" },
                  { label: "Jenis Hartanah", value: "Kediaman — landed & non-landed" },
                  { label: "LTV Maksimum", value: "Sehingga 90% (95% di UOB)" },
                  { label: "Pinjaman Minimum", value: "RM100,000 (bergantung bank)" },
                  { label: "CCRIS / CTOS", value: "Rekod kredit yang bersih diperlukan" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t text-center">
                <Link href="/dsr-calculator" className="text-primary-600 hover:underline font-medium inline-flex items-center gap-1">
                  Semak kelayakan anda dengan Kalkulator DSR <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Proses Refinance Langkah Demi Langkah
            </h2>
            <div className="bg-primary-50 rounded-lg p-3 text-center text-sm text-primary-800 font-medium mb-6">
              Jangka masa biasa: 2–3 bulan dari permohonan hingga pengeluaran wang
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Semak Kelayakan & Bandingkan Kadar",
                  desc: "Gunakan kalkulator kami untuk menyemak sama ada refinance berbaloi untuk anda. Bandingkan kadar dari pelbagai bank.",
                },
                {
                  step: 2,
                  title: "Pilih Bank & Hantar Permohonan",
                  desc: "Setelah memilih bank, hantar permohonan beserta dokumen yang diperlukan. Anda boleh memohon di beberapa bank serentak.",
                },
                {
                  step: 3,
                  title: "Penilaian Hartanah",
                  desc: "Bank akan menghantar penilai untuk menilai hartanah anda. Proses ini mengambil masa 1-2 minggu.",
                },
                {
                  step: 4,
                  title: "Kelulusan Pinjaman",
                  desc: "Bank akan menilai permohonan anda berdasarkan profil kewangan dan nilai hartanah. Kelulusan biasanya dalam 2-4 minggu.",
                },
                {
                  step: 5,
                  title: "Tandatangan Dokumen Guaman",
                  desc: "Setelah diluluskan, anda akan menandatangan perjanjian pinjaman dan dokumen berkaitan dengan peguam.",
                },
                {
                  step: 6,
                  title: "Pengeluaran Wang (Disbursement)",
                  desc: "Bank baru akan melangsaikan pinjaman bank lama dan baki (jika cash out) akan dikreditkan ke akaun anda.",
                },
                {
                  step: 7,
                  title: "Mula Bayaran Baru",
                  desc: "Anda akan mula membuat bayaran bulanan dengan kadar baru yang lebih rendah.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dokumen Diperlukan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dokumen Diperlukan Untuk Refinance
            </h2>
            <p className="text-gray-700 mb-4">
              Pastikan anda menyediakan semua dokumen berikut untuk mempercepatkan
              proses permohonan:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Pekerja Bergaji</h3>
                <ul className="space-y-2">
                  {[
                    "MyKad (salinan depan & belakang)",
                    "Slip gaji 3 bulan terkini",
                    "Penyata bank 6 bulan",
                    "Borang EA / Penyata Cukai Pendapatan",
                    "Penyata EPF terkini",
                    "Penyata pinjaman semasa",
                    "Dokumen hartanah (S&P, geran hakmilik)",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Bekerja Sendiri</h3>
                <ul className="space-y-2">
                  {[
                    "MyKad (salinan depan & belakang)",
                    "Pendaftaran SSM / Lesen Perniagaan",
                    "Penyata cukai 2 tahun (Borang B/BE)",
                    "Penyata bank perniagaan 6 bulan",
                    "Penyata bank peribadi 6 bulan",
                    "Penyata pinjaman semasa",
                    "Dokumen hartanah (S&P, geran hakmilik)",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
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

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Panduan Berkaitan
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/calculator"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Kalkulator Refinance
                </h3>
                <p className="text-sm text-primary-700">
                  Kira penjimatan anda dengan kalkulator percuma kami
                </p>
              </Link>
              <Link
                href="/kelebihan-keburukan-refinance-rumah"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Kelebihan & Keburukan Refinance
                </h3>
                <p className="text-sm text-primary-700">
                  Ketahui pro dan kontra sebelum membuat keputusan
                </p>
              </Link>
              <Link
                href="/contoh-kiraan-refinance-rumah"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Contoh Kiraan Refinance
                </h3>
                <p className="text-sm text-primary-700">
                  Lihat contoh pengiraan sebenar dengan pelbagai senario
                </p>
              </Link>
              <Link
                href="/dokumen-refinance-rumah"
                className="block p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <h3 className="font-semibold text-primary-900">
                  Senarai Dokumen Refinance
                </h3>
                <p className="text-sm text-primary-700">
                  Senarai lengkap dokumen yang diperlukan
                </p>
              </Link>
            </div>
          </section>

          {/* Compare Banks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bandingkan Bank Lain</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Bank Islam Refinance", href: "/bank-islam-refinance-home-loan", rate: "3.80%", note: "Kadar terendah" },
                { name: "Maybank Refinance", href: "/maybank-refinance-home-loan", rate: "4.35%", note: "Bank terbesar" },
                { name: "CIMB Refinance", href: "/cimb-refinance-home-loan", rate: "4.35%", note: "Islamik & konvensional" },
                { name: "RHB Refinance", href: "/rhb-refinance-home-loan", rate: "4.10%", note: "Proses cepat" },
                { name: "Public Bank Refinance", href: "/public-bank-refinance-home-loan", rate: "4.22%", note: "Servis terbaik" },
                { name: "Semua Kadar Bank", href: "/refinance-home-loan-rates-malaysia", rate: "14 bank", note: "Perbandingan penuh" },
              ].map((b, idx) => (
                <Link key={idx} href={b.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">{b.name}</h3>
                  <p className="text-sm text-gray-600">Dari {b.rate} • {b.note}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sedia Untuk Mula Menjimat?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dapatkan sebut harga percuma dari bank-bank terbaik di Malaysia hari
            ini.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-white text-primary-800 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors text-lg"
          >
            Dapatkan Sebut Harga Percuma <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Dapatkan Sebut Harga</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <LeadForm variant="modal" source="bank-terbaik-refinance" showAllFields={true} />
            </div>
          </div>
        </div>
      )}

      <StickyMobileCTA onCtaClick={() => setShowForm(true)} />
    </>
  );
}
