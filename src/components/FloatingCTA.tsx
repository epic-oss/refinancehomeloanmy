"use client";

import { useState, useEffect } from "react";
import { Calculator, X } from "lucide-react";
import LeadForm from "./LeadForm";

interface FloatingCTAProps {
  hideOnPages?: string[];
}

export default function FloatingCTA({ hideOnPages = [] }: FloatingCTAProps) {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    // Check if we should hide on current page
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const shouldHideOnPage = hideOnPages.some(page => currentPath.includes(page));
      setShouldHide(shouldHideOnPage);
    }

    // Fade in animation after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [hideOnPages]);

  // Don't render if should be hidden
  if (shouldHide) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(true)}
        className={`
          fixed bottom-4 right-4 md:bottom-5 md:right-5
          w-16 h-16 md:w-14 md:h-14
          bg-green-500 hover:bg-green-600 active:scale-95
          rounded-full shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-200 ease-out
          hover:scale-105
          z-40
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          ${showForm ? "hidden" : ""}
        `}
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
        aria-label="Get Free Quote"
      >
        <Calculator className="w-7 h-7 md:w-6 md:h-6 text-white" />

        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
      </button>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <LeadForm variant="modal" source="floating-cta" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
