import { motion } from "framer-motion";

export const Logo = () => {
  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: i * 0.1,
      },
    }),
  };

  const logoHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-center gap-1 font-oswald text-4xl font-bold"
      variants={logoHoverVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-accent/20 blur-xl rounded-full"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      {/* Logo letters */}
      <motion.span
        custom={0}
        variants={letterVariants}
        initial="initial"
        animate="animate"
        className="text-white relative"
      >
        B
      </motion.span>
      <motion.span
        custom={1}
        variants={letterVariants}
        initial="initial"
        animate="animate"
        className="text-accent relative"
      >
        J
      </motion.span>

      {/* Optional subtitle */}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden md:block text-sm font-normal text-lightGray ml-3 tracking-wider"
      >
        PORTFOLIO
      </motion.span>
    </motion.div>
  );
};

export default Logo;
