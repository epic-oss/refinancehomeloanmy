"use client";

import { useState, useEffect } from "react";

const cashOutTestimonials = [
  { name: "A****d", location: "KL", amount: "RM320,000" },
  { name: "S****a", location: "Penang", amount: "RM180,000" },
  { name: "R****n", location: "JB", amount: "RM250,000" },
  { name: "M****n", location: "Shah Alam", amount: "RM420,000" },
  { name: "L****g", location: "Subang", amount: "RM290,000" },
  { name: "T****a", location: "Puchong", amount: "RM350,000" },
  { name: "N****i", location: "Cheras", amount: "RM210,000" },
  { name: "K****n", location: "Klang", amount: "RM380,000" },
  { name: "W****a", location: "Ipoh", amount: "RM160,000" },
  { name: "H****n", location: "Melaka", amount: "RM270,000" },
];

export default function CashOutSocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cashOutTestimonials.length);
        setIsVisible(true);
      }, 500);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const current = cashOutTestimonials[currentIndex];

  return (
    <div
      className={`fixed bottom-24 right-4 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100 text-right">
        <p className="text-xs text-gray-600">
          <span className="font-medium text-gray-900">{current.name}</span> from {current.location}
        </p>
        <p className="text-xs">
          got <span className="text-green-600 font-semibold">{current.amount}</span> cash out
        </p>
      </div>
    </div>
  );
}
