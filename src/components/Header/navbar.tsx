import { motion } from "framer-motion"
import { onSectionChange } from "../../lib/section_change"
import navItems from "../../lib/navItems"

export const Navbar = () => {
  return (
    <motion.ul
     className="flex gap-4 items-center">
      {
        navItems.map((item, index) => 
        (
        <motion.li
         whileHover={{ scale: 1.1 }} 
         key={index}
         className="text-white font-bold text-2xl cursor-pointer" 
         whileTap={{ scale: 0.9 }}
         onClick={() => onSectionChange(item.id)} 
         >{item.title}
         </motion.li>))
      }
    </motion.ul>
  
  )
}
