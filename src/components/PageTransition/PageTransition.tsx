import { ReactNode } from "react";
import { motion } from "framer-motion";

export type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      className="h-100"
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: "0",
      }}
      exit={{
        y: "100vh",
        transition: {
          duration: 0.2,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
