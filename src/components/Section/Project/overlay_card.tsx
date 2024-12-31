import { motion } from "framer-motion";
import { IProject } from "../../../lib/portfolio_projects";
import ProjectDownloadIcon from "./project_dowload_icon";
import WebsiteIcon from "./website_icon";
import { IoMdClose } from "react-icons/io";

const OverlayCard = ({
  project,
  toggleOverlayClose,
}: {
  project: IProject;
  toggleOverlayClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm"
      onClick={toggleOverlayClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl bg-surface rounded-xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={toggleOverlayClose}
          className="absolute top-4 right-4 p-2 text-lightGray hover:text-white rounded-full bg-muted hover:bg-accent transition-colors"
        >
          <IoMdClose size={20} />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-oswald text-white">{project.title}</h3>
            <div className="flex gap-3">
              {project.url && <WebsiteIcon link={project.url} />}
              {project.dwl && <ProjectDownloadIcon link={project.dwl} />}
            </div>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lightGray leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-muted text-lightGray"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.git && (
            <motion.a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center text-white bg-accent rounded-lg hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View on GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OverlayCard;
