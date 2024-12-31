import { motion } from "framer-motion";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { useState, useEffect } from "react";

// Header animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Container animation variants
const containerVariants = {
  initial: () => ({
    width: "100%",
    top: 0,
  }),
  animate: (isScrolled: boolean) => ({
    width: isScrolled ? "85%" : "100%",
    top: isScrolled ? "1rem" : "0",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const showHeader = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(showHeader);
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.nav
        variants={containerVariants}
        initial="initial"
        animate="animate"
        custom={isScrolled}
        className={`
          mx-auto transition-all duration-300 ease-in-out
          ${isScrolled ? 'lg:w-[85%] mt-4' : 'w-full'}
        `}
      >
        <div className={`
          flex items-center justify-between
          px-4 lg:px-8 py-4
          ${isScrolled ? 'bg-surface/80 backdrop-blur-md rounded-2xl shadow-lg' : 'bg-transparent'}
        `}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Logo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex items-center gap-6"
          >
            <Navbar />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:hidden p-2 text-white hover:bg-surface/50 rounded-lg"
            onClick={() => {/* Toggle mobile menu */}}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default DesktopHeader;
