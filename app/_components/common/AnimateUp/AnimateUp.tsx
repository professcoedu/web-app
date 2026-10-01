"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  y?: number;
  amount?: number;
  delay?: number;
  style?: React.CSSProperties;
}

export default function AnimateUp({
  children,
  className,
  as = "div",
  y = 56,
  amount = 0.45,
  delay = 0,
  style,
}: Props) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay }}
    >
      {children}
    </MotionTag>
  );
}
