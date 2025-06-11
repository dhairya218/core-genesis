import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Container for staggered children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Slide in from sides
export const slideIn: Variants = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Scale up animation
export const scaleUp: Record<string, Variants> = {
  hidden: { 
    scale: 0.8,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Page transition
export const pageTransition: Record<string, Variants> = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};