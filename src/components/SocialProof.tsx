"use client";

import { useState, useEffect } from "react";

const testimonials = [
  { name: "A*****d", location: "Petaling Jaya", savings: 520 },
  { name: "S*****a", location: "Kuala Lumpur", savings: 680 },
  { name: "M*****n", location: "Shah Alam", savings: 450 },
  { name: "L*****g", location: "Penang", savings: 590 },
  { name: "T*****n", location: "Johor Bahru", savings: 720 },
  { name: "R*****i", location: "Subang Jaya", savings: 380 },
  { name: "N*****a", location: "Puchong", savings: 510 },
  { name: "K*****n", location: "Klang", savings: 640 },
  { name: "W*****g", location: "Ipoh", savings: 420 },
  { name: "H*****n", location: "Melaka", savings: 550 },
  { name: "J*****e", location: "Cyberjaya", savings: 730 },
  { name: "C*****a", location: "Ampang", savings: 480 },
  { name: "F*****k", location: "Cheras", savings: 610 },
  { name: "Y*****n", location: "Seremban", savings: 390 },
  { name: "Z*****a", location: "Putrajaya", savings: 560 },
  { name: "B*****r", location: "Kota Kinabalu", savings: 670 },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div
      className={`fixed bottom-20 right-4 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100 text-right">
        <p className="text-xs text-gray-600">
          <span className="font-medium text-gray-900">{current.name}</span> from {current.location}
        </p>
        <p className="text-xs">
          saves <span className="text-secondary-600 font-semibold">RM{current.savings}/mo</span>
        </p>
      </div>
    </div>
  );
}
