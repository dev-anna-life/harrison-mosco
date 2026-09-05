"use client";

import React from "react";
import { motion } from "framer-motion";

const VARIANTS = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: keyof typeof VARIANTS;
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  type = "up",
  duration = 0.8,
}: RevealProps) {
  const variant = VARIANTS[type] || VARIANTS.up;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variant}
      transition={{
        duration: duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1], // Smooth premium spring cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
}
