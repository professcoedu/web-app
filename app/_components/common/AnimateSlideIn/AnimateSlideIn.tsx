"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right";
  distance?: string;
  delay?: number;
  className?: string;
}

export default function AnimateSlideIn({
  children,
  direction = "right",
  distance = "120%",
  delay = 0,
  className,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });
  const startX = direction === "left" ? `-${distance}` : distance;

  return (
    <div ref={wrapperRef} className={className} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ x: startX }}
        animate={{ x: isInView ? "0%" : startX }}
        transition={{ type: "spring", duration: 1.4, bounce: 0.15, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
