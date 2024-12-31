import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineFileDownload, MdOutlineDownloadDone } from "react-icons/md";

const ProjectDownloadIcon = ({ link }: { link: string }) => {
  const [alreadyDownloaded, setAlreadyDownloaded] = useState(false);

  const handleClick = () => {
    setAlreadyDownloaded(true);
  };

  return (
    <motion.a
      href={link}
      onClick={handleClick}
      className="text-secondary-500 text-heading inline-block"
      initial={alreadyDownloaded ? {} : { scale: 1 }}
      animate={
        alreadyDownloaded
          ? { scale: 1 }
          : {
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }
      }
      transition={
        alreadyDownloaded
          ? { duration: 0 }
          : {
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
            }
      }
    >
      {alreadyDownloaded ? (
        <MdOutlineDownloadDone size={24} />
      ) : (
        <MdOutlineFileDownload size={24} />
      )}
    </motion.a>
  );
};

export default ProjectDownloadIcon;
