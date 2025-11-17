"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const headlines = [
  "Save $3,000+ on Your Next Car — Guaranteed",
  "Ex-Dealer Negotiates Your Best Price",
  "No Haggling. No Games. Just Results.",
  "Nebraska’s Only Independent Buyer Advocate"
];

export function HeroRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-32">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="text-6xl md:text-7xl font-black tracking-tight"
      >
        {headlines[index]}
      </motion.h1>
    </div>
  );
}
