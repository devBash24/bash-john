import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";
const WebsiteIcon = ({link}:{link:string}) => {
  return (
    <motion.a
    href={link}
    target="_blank"
    className="text-secondary-500 text-heading inline-block"
    whileHover={{ scale: 1.2 }}

  >
    <FaExternalLinkAlt size={20} className="inline-block"  />
  </motion.a>
);

}

export default WebsiteIcon