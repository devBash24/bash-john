import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons from react-icons
import navItems from "../../lib/navItems";
import { onSectionChange } from "../../lib/section_change";

const navItemStyle =
  "font-bold text-white cursor-pointer py-4 text-center text-lg lg:text-xl hover:text-accent transition duration-300";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-3/4 h-full bg-background bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center md:hidden z-40"
      >
        <ul className="flex flex-col gap-6 text-center font-oswald w-full">
          {navItems.map((item, index) => (
            <motion.li
              whileHover={{ scale: 1.1, color: "#1E90FF", textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)" }} // Adds hover effect with scaling and accent color
              key={index}
              onClick={() => {
                onSectionChange(item.id);
                setIsOpen(false);
              }}
              className={navItemStyle}
            >
              {item.title}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default MobileMenu;