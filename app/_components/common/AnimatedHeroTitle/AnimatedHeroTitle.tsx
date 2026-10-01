"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "p" | "div";
  from?: "below" | "above";
  offset?: string;
  delay?: number;
  viewportTrigger?: boolean;
  style?: React.CSSProperties;
}

export default function AnimatedHeroTitle({
  children,
  className,
  as = "h1",
  from = "below",
  offset = "140%",
  delay = 0,
  viewportTrigger = false,
  style,
}: Props) {
  const MotionTag = motion[as];
  const startY = from === "above" ? `-${offset}` : offset;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.4 });

  const shouldAnimate = viewportTrigger ? isInView : true;

  return (
    <div ref={wrapperRef} style={{ overflow: "hidden" }}>
      <MotionTag
        className={className}
        style={style}
        initial={{ y: startY }}
        animate={{ y: shouldAnimate ? "0%" : startY }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
