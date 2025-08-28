"use client";

import { motion, type MotionProps } from "framer-motion";

type AnimatedSectionProps = MotionProps & {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function AnimatedSection({
  id,
  className,
  children,
  ...motionProps
}: AnimatedSectionProps) {
  return (
    <motion.section id={id} className={className} {...motionProps}>
      {children}
    </motion.section>
  );
}
