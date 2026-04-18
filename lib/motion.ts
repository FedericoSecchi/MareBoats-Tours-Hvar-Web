import type { Variants } from 'framer-motion';

export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const fadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSpring },
  },
};

export const fadeInUpContainer: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSpring },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeSpring,
      staggerChildren: 0.1,
    },
  },
};

export const staggerListOnly: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
