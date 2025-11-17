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
    const timer = setInterval(() => setIndex((i) => (i + 1) % headlines.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.h1
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-black tracking-tight text-white text-center"
    >
      {headlines[index]}
    </motion.h1>
  );
}
