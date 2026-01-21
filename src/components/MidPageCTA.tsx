"use client";

interface MidPageCTAProps {
  onOpenForm: () => void;
}

export default function MidPageCTA({ onOpenForm }: MidPageCTAProps) {
  return (
    <div className="my-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white">
      <h3 className="text-2xl md:text-3xl font-bold mb-3">
        Dapatkan Kadar Terbaik Untuk Anda
      </h3>
      <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
        Pakar kami akan bantu anda compare 10+ bank dalam masa 24 jam
      </p>
      <button
        onClick={onOpenForm}
        className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
      >
        Dapatkan Sebut Harga Percuma
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
}
