import type { Transition } from "framer-motion";

export const sectionAnimation = {
  initial: { opacity: 0, x: -100, filter: "blur(5px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 1, ease: "easeOut" } satisfies Transition,
  viewport: { once: true, amount: 0.2 },
  className: "w-full flex flex-col justify-center items-center min-h-[90vh] gap-20",
};
