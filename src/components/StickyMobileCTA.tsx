'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface StickyMobileCTAProps {
  onCtaClick: () => void;
  text?: string;
  buttonText?: string;
}

export function StickyMobileCTA({
  onCtaClick,
  text = "Jimat RM500+/bulan",
  buttonText = "Dapatkan Sebut Harga",
}: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling 400px, hide if dismissed
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center justify-between gap-3">
        <button
          onClick={() => setIsDismissed(true)}
          className="text-gray-400 hover:text-gray-600 p-1"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-sm font-medium text-gray-700 flex-1">{text}</span>

        <button
          onClick={onCtaClick}
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
